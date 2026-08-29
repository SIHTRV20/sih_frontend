import React from "react";
import { C } from "../../theme";

export default function Chip({ children, active, onClick, accent = C.amber }) {
  return (
    <button
      onClick={onClick}
      className="whitespace-nowrap rounded-full border px-3 py-1 text-[12px] font-medium transition-colors"
      style={
        active
          ? { background: accent + "22", borderColor: accent, color: accent }
          : { background: "transparent", borderColor: C.border, color: C.muted }
      }
    >
      {children}
    </button>
  );
}
