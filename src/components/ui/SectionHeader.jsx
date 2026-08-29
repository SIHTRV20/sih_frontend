import React from "react";
import { C } from "../../theme";

export default function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div>
        {eyebrow && (
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.muted }}>
            {eyebrow}
          </div>
        )}
        <h1 className="text-[20px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}>
          {title}
        </h1>
      </div>
      {action}
    </div>
  );
}
