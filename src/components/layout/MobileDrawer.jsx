import React from "react";
import { C } from "../../theme";

export default function MobileDrawer({ open, nav, screen, accent, onSelectScreen, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-20 flex md:hidden">
      <div className="w-64 border-r py-5" style={{ borderColor: C.border, background: C.surface }}>
        <nav className="flex flex-col gap-0.5 px-3">
          {nav.map((item) => {
            const Icon = item.icon;
            const activeN = screen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { onSelectScreen(item.id); onClose(); }}
                className="flex items-center gap-3 rounded-[10px] px-2.5 py-2.5 text-left text-[13px] font-medium"
                style={{ background: activeN ? accent + "18" : "transparent", color: activeN ? accent : C.muted }}
              >
                <Icon size={14} /> {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="flex-1" style={{ background: "#00000088" }} onClick={onClose} />
    </div>
  );
}
