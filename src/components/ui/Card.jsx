import React from "react";
import { cx } from "../../utils/cx";
import { C } from "../../theme";

export default function Card({ children, className = "", style = {} }) {
  return (
    <div
      className={cx("rounded-[14px] border p-4", className)}
      style={{ background: C.surface, borderColor: C.border, ...style }}
    >
      {children}
    </div>
  );
}
