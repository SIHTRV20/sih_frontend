# Waypoint — tourism platform frontend

A React + Tailwind prototype covering all four roles of the platform: Tourist,
Influencer, Shopkeeper, and Admin. Mock data only, no backend wired up.

## Structure

```
src/
  theme.js              color tokens + role metadata
  nav.js                per-role navigation config
  data/mockData.js       all mock content (places, videos, offers, users...)
  utils/cx.js             tiny classnames helper
  components/ui/         shared primitives (Card, Badge, Table, StatCard, ...)
  components/layout/     TopBar, Sidebar, MobileDrawer, MobileChipNav
  screens/tourist/       8 tourist-facing screens
  screens/influencer/    5 influencer screens
  screens/shopkeeper/    6 shopkeeper screens
  screens/admin/         8 admin screens
  screens/index.js       maps role -> screen id -> component
  App.jsx                shell: role switcher, sidebar, routes to a screen
```

## Run it

```
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build
in `dist/`.
