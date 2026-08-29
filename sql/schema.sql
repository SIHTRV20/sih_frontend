-- =====================================================================
-- Waypoint - SQL schema for authentication (login) & role-based profiles
-- Target: MySQL 8+ / MariaDB 10.5+
-- (Notes for PostgreSQL are included as comments where syntax differs)
-- =====================================================================
--
-- Context: the current frontend (src/screens/Login.jsx) is a DEMO-ONLY
-- login screen. It collects `email`, `password`, and a `role` selected
-- from: tourist | influencer | shopkeeper | admin, then just sets
-- isAuthenticated = true in React state (src/App.jsx). There is no
-- backend yet. This schema is what a real backend (Node/Express, etc.)
-- would use to store and validate that login info.
--
-- IMPORTANT: never store plaintext passwords. Always hash with
-- bcrypt/argon2 server-side and store only the resulting hash.
-- =====================================================================

CREATE DATABASE IF NOT EXISTS waypoint
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE waypoint;

-- ---------------------------------------------------------------------
-- 1. roles - matches ROLE_META keys in src/theme.js
-- ---------------------------------------------------------------------
CREATE TABLE roles (
  id   TINYINT UNSIGNED NOT NULL PRIMARY KEY,
  name VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO roles (id, name) VALUES
  (1, 'tourist'),
  (2, 'influencer'),
  (3, 'shopkeeper'),
  (4, 'admin');

-- ---------------------------------------------------------------------
-- 2. users - the core login table
-- ---------------------------------------------------------------------
CREATE TABLE users (
  id                     BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name              VARCHAR(150)        NOT NULL,
  email                  VARCHAR(190)        NOT NULL,
  password_hash          VARCHAR(255)        NOT NULL,   -- bcrypt/argon2 hash, never plaintext
  role_id                TINYINT UNSIGNED    NOT NULL,
  avatar_url             VARCHAR(255)        NULL,
  is_active              BOOLEAN             NOT NULL DEFAULT TRUE,
  is_verified            BOOLEAN             NOT NULL DEFAULT FALSE,
  email_verified_at      DATETIME            NULL,
  last_login_at          DATETIME            NULL,
  last_login_ip          VARCHAR(45)         NULL,
  failed_login_attempts  SMALLINT UNSIGNED   NOT NULL DEFAULT 0,
  locked_until           DATETIME            NULL,
  created_at             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
                                              ON UPDATE CURRENT_TIMESTAMP,

  UNIQUE KEY uq_users_email (email),
  CONSTRAINT fk_users_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE INDEX idx_users_role_id ON users (role_id);

-- ---------------------------------------------------------------------
-- 3. user_sessions - one row per active login session
--    (backs "Remember me" + lets you revoke sessions / support logout)
-- ---------------------------------------------------------------------
CREATE TABLE user_sessions (
  id                 CHAR(36)      NOT NULL PRIMARY KEY,          -- UUID
  user_id            BIGINT UNSIGNED NOT NULL,
  refresh_token_hash VARCHAR(255)  NOT NULL,   -- hash of the refresh/JWT token, not the raw token
  remember_me        BOOLEAN       NOT NULL DEFAULT FALSE,
  user_agent         VARCHAR(255)  NULL,
  ip_address         VARCHAR(45)   NULL,
  expires_at         DATETIME      NOT NULL,
  revoked_at         DATETIME      NULL,
  created_at         TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_sessions_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_sessions_user_id ON user_sessions (user_id);
CREATE INDEX idx_sessions_expires_at ON user_sessions (expires_at);

-- ---------------------------------------------------------------------
-- 4. password_reset_tokens - backs the "Forgot password?" link in Login.jsx
-- ---------------------------------------------------------------------
CREATE TABLE password_reset_tokens (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id    BIGINT UNSIGNED NOT NULL,
  token_hash VARCHAR(255)    NOT NULL,
  expires_at DATETIME        NOT NULL,
  used_at    DATETIME        NULL,
  created_at TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_reset_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_reset_user_id ON password_reset_tokens (user_id);

-- ---------------------------------------------------------------------
-- 5. login_audit_log - optional but recommended for security monitoring
-- ---------------------------------------------------------------------
CREATE TABLE login_audit_log (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id     BIGINT UNSIGNED NULL,          -- NULL when email did not match any user
  email_tried VARCHAR(190)    NOT NULL,
  success     BOOLEAN         NOT NULL,
  ip_address  VARCHAR(45)     NULL,
  user_agent  VARCHAR(255)    NULL,
  created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_audit_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_audit_email ON login_audit_log (email_tried);
CREATE INDEX idx_audit_created_at ON login_audit_log (created_at);

-- ---------------------------------------------------------------------
-- 6. Role-specific profile tables (1:1 with users, keyed by user_id)
--    Split out so the `users` table stays focused on auth only.
-- ---------------------------------------------------------------------
CREATE TABLE tourist_profiles (
  user_id      BIGINT UNSIGNED NOT NULL PRIMARY KEY,
  home_city    VARCHAR(120) NULL,
  bio          VARCHAR(500) NULL,
  preferences  JSON         NULL,   -- e.g. interests, saved categories

  CONSTRAINT fk_tourist_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE influencer_profiles (
  user_id         BIGINT UNSIGNED NOT NULL PRIMARY KEY,
  handle          VARCHAR(60)  NOT NULL UNIQUE,
  niche           VARCHAR(120) NULL,
  follower_count  INT UNSIGNED NOT NULL DEFAULT 0,
  social_links    JSON         NULL,

  CONSTRAINT fk_influencer_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE shopkeeper_profiles (
  user_id             BIGINT UNSIGNED NOT NULL PRIMARY KEY,
  shop_name           VARCHAR(150) NOT NULL,
  shop_address        VARCHAR(255) NULL,
  business_license_no VARCHAR(100) NULL,
  is_approved         BOOLEAN      NOT NULL DEFAULT FALSE,

  CONSTRAINT fk_shopkeeper_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE admin_profiles (
  user_id     BIGINT UNSIGNED NOT NULL PRIMARY KEY,
  permissions JSON NULL,   -- e.g. ["manage_users","moderate_content"]

  CONSTRAINT fk_admin_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);

-- =====================================================================
-- Example seed data matching the current Login.jsx demo defaults
-- (email: traveler@waypoint.com / password: password123)
-- Replace the password_hash with a real bcrypt hash generated server-side,
-- e.g. via Node: `await bcrypt.hash('password123', 10)`
-- =====================================================================
INSERT INTO users (full_name, email, password_hash, role_id, is_active, is_verified)
VALUES ('Demo Traveler', 'traveler@waypoint.com', '$2b$10$REPLACE_WITH_REAL_BCRYPT_HASH', 1, TRUE, TRUE);

INSERT INTO tourist_profiles (user_id, home_city)
VALUES (LAST_INSERT_ID(), 'San Francisco');

-- =====================================================================
-- Example login query the backend would run (pseudocode):
--
--   const user = await db.query(
--     'SELECT id, full_name, email, password_hash, role_id, is_active, ' +
--     '       failed_login_attempts, locked_until ' +
--     'FROM users WHERE email = ?', [email]
--   );
--   if (!user || !user.is_active) throw new Error('Invalid credentials');
--   const ok = await bcrypt.compare(password, user.password_hash);
--   if (!ok) { increment failed_login_attempts; throw new Error('Invalid credentials'); }
--   // success: reset failed_login_attempts, update last_login_at/last_login_ip,
--   // create a row in user_sessions, issue a JWT/session cookie, return role
--   // (role_id -> roles.name) so the frontend can call onLogin(role) as today.
-- =====================================================================
