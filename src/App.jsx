import React, { useState } from "react";
import { C, ROLE_META } from "./theme";
import { NAV } from "./nav";
import { SCREENS } from "./screens";
import Login from "./screens/Login";
import TopBar from "./components/layout/TopBar";
import Sidebar from "./components/layout/Sidebar";
import MobileDrawer from "./components/layout/MobileDrawer";
import MobileChipNav from "./components/layout/MobileChipNav";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("tourist");
  const [screen, setScreen] = useState(NAV.tourist[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function handleLogin(nextRole) {
    setRole(nextRole);
    setScreen(NAV[nextRole][0].id);
    setMobileNavOpen(false);
    setIsAuthenticated(true);
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const nav = NAV[role];
  const accent = ROLE_META[role].accent;
  const Screen = (SCREENS[role] && SCREENS[role][screen]) || SCREENS[role][nav[0].id];

  function selectRole(r) {
    setRole(r);
    setScreen(NAV[r][0].id);
    setMobileNavOpen(false);
  }

  return (
    <div className="flex min-h-[720px] w-full flex-col" style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }}>
      <TopBar
        role={role}
        accent={accent}
        onSelectRole={selectRole}
        onToggleMobileNav={() => setMobileNavOpen((o) => !o)}
      />

      <div className="flex flex-1">
        <Sidebar nav={nav} screen={screen} accent={accent} onSelectScreen={setScreen} />

        <MobileDrawer
          open={mobileNavOpen}
          nav={nav}
          screen={screen}
          accent={accent}
          onSelectScreen={setScreen}
          onClose={() => setMobileNavOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <MobileChipNav nav={nav} screen={screen} accent={accent} onSelectScreen={setScreen} />
          <main className="flex-1 px-4 py-6 sm:px-6">
            <Screen />
          </main>
        </div>
      </div>
    </div>
  );
}
