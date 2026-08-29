import React from "react";
import { C } from "../../theme";

export default function EmptyState({ icon: Icon, title, sub, accent = C.amber }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-[14px] border border-dashed py-14 text-center" style={{ borderColor: C.border }}>
      <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: accent + "1a" }}>
        <Icon size={20} style={{ color: accent }} />
      </div>
      <div className="text-[14px] font-medium" style={{ color: C.text }}>{title}</div>
      <div className="text-[12.5px]" style={{ color: C.muted }}>{sub}</div>
    </div>
  );
}
