import React from "react";
import { Menu, Compass, Bell, User } from "lucide-react";
import { C, ROLE_META } from "../../theme";

export default function TopBar({ role, accent, onSelectRole, onToggleMobileNav }) {
  return (
    <div
      className="flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      style={{ borderColor: C.border, background: C.surface }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={onToggleMobileNav} aria-label="Toggle menu">
            <Menu size={18} style={{ color: C.text }} />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: accent + "22" }}>
            <Compass size={16} style={{ color: accent }} />
          </div>
          <span className="text-[16px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}>
            Waypoint
          </span>
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <Bell size={17} style={{ color: C.muted }} />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto">
        {Object.entries(ROLE_META).map(([key, meta]) => {
          const Icon = meta.icon;
          const activeR = role === key;
          return (
            <button
              key={key}
              onClick={() => onSelectRole(key)}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors"
              style={
                activeR
                  ? { background: meta.accent + "22", borderColor: meta.accent, color: meta.accent }
                  : { background: "transparent", borderColor: C.border, color: C.muted }
              }
            >
              <Icon size={13} /> {meta.label}
            </button>
          );
        })}
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <Bell size={17} style={{ color: C.muted }} />
        <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: C.surface2 }}>
          <User size={15} style={{ color: C.muted }} />
        </div>
      </div>
    </div>
  );
}
