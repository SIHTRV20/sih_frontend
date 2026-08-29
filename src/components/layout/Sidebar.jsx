import React from "react";
import { C } from "../../theme";

export default function Sidebar({ nav, screen, accent, onSelectScreen }) {
  return (
    <div className="relative hidden w-60 shrink-0 border-r py-5 md:block" style={{ borderColor: C.border, background: C.surface }}>
      <div
        className="absolute left-[27px] top-6 bottom-6 w-px"
        style={{ backgroundImage: `linear-gradient(${C.border} 60%, transparent 0%)`, backgroundSize: "1px 6px", backgroundRepeat: "repeat-y" }}
      />
      <nav className="flex flex-col gap-0.5 px-3">
        {nav.map((item) => {
          const Icon = item.icon;
          const activeN = screen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectScreen(item.id)}
              className="relative z-10 flex items-center gap-3 rounded-[10px] px-2.5 py-2.5 text-left text-[13px] font-medium transition-colors"
              style={{ background: activeN ? accent + "18" : "transparent", color: activeN ? accent : C.muted }}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                style={{ background: activeN ? accent : C.surface2, border: `1px solid ${activeN ? accent : C.border}` }}
              >
                <Icon size={12} style={{ color: activeN ? C.bg : C.muted }} />
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
