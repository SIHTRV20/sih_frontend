import { Compass, Film, Store, ShieldCheck } from "lucide-react";

export const C = {
  bg: "#14171C",
  surface: "#1B2028",
  surface2: "#232935",
  border: "#2E3542",
  text: "#F2EFE9",
  muted: "#8A93A3",
  amber: "#E8A23D",   // tourist
  teal: "#2FB8A6",    // influencer
  violet: "#8B7FD9",  // shopkeeper
  red: "#E5484D",     // admin
};

export const ROLE_META = {
  tourist: { label: "Tourist", icon: Compass, accent: C.amber },
  influencer: { label: "Influencer", icon: Film, accent: C.teal },
  shopkeeper: { label: "Shopkeeper", icon: Store, accent: C.violet },
  admin: { label: "Admin", icon: ShieldCheck, accent: C.red },
};
