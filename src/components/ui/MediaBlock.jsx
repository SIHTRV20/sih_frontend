import React from "react";
import { cx } from "../../utils/cx";
import { C } from "../../theme";

export default function MediaBlock({ icon: Icon, accent = C.amber, className = "", label }) {
  return (
    <div
      className={cx("relative flex items-center justify-center overflow-hidden rounded-[10px] border", className)}
      style={{ background: `linear-gradient(160deg, ${accent}22, ${C.surface2})`, borderColor: C.border }}
    >
      <Icon size={30} style={{ color: accent, opacity: 0.55 }} />
      {label && (
        <span
          className="absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-medium"
          style={{ background: C.bg + "cc", color: C.text, border: `1px solid ${C.border}` }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
