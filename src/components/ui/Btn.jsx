import React from "react";
import { cx } from "../../utils/cx";
import { C } from "../../theme";

export default function Btn({ children, kind = "primary", accent = C.amber, className = "", icon: Icon, ...props }) {
  const styles = {
    primary: { background: accent, color: "#14171C", border: `1px solid ${accent}` },
    outline: { background: "transparent", color: C.text, border: `1px solid ${C.border}` },
    ghost: { background: "transparent", color: C.muted, border: "1px solid transparent" },
  };
  return (
    <button
      className={cx("inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-opacity hover:opacity-85", className)}
      style={styles[kind]}
      {...props}
    >
      {Icon && <Icon size={13} />}
      {children}
    </button>
  );
}
