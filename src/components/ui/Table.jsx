import React from "react";
import { C } from "../../theme";

export default function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-[14px] border" style={{ borderColor: C.border }}>
      <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
        <thead>
          <tr style={{ background: C.surface2 }}>
            {columns.map((c) => (
              <th key={c} className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide" style={{ color: C.muted }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t" style={{ borderColor: C.border, background: C.surface }}>
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-middle" style={{ color: C.text }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
