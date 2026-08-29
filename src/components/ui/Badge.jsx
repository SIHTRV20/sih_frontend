import React from "react";
import { C } from "../../theme";

export default function Badge({ children, tone = "neutral" }) {
  const tones = {
    neutral: { bg: C.surface2, fg: C.muted },
    amber: { bg: "#E8A23D22", fg: C.amber },
    teal: { bg: "#2FB8A622", fg: C.teal },
    violet: { bg: "#8B7FD922", fg: C.violet },
    red: { bg: "#E5484D22", fg: C.red },
    green: { bg: "#3FBE6A22", fg: "#3FBE6A" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide"
      style={{ background: t.bg, color: t.fg }}
    >
      {children}
    </span>
  );
}
