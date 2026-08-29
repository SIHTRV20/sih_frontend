import React from "react";
import { C } from "../../theme";

export default function Field({ label, placeholder, textarea, icon: Icon, ...props }) {
  const Tag = textarea ? "textarea" : "input";

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium" style={{ color: C.muted }}>{label}</span>
      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center" style={{ color: C.muted }}>
            <Icon size={14} />
          </span>
        )}
        <Tag
          placeholder={placeholder}
          rows={textarea ? 3 : undefined}
          className="w-full rounded-[10px] border px-3 py-2.5 text-[13px] outline-none"
          style={{
            background: C.surface2,
            borderColor: C.border,
            color: C.text,
            paddingLeft: Icon ? "2.6rem" : "0.75rem",
          }}
          {...props}
        />
      </div>
    </label>
  );
}
