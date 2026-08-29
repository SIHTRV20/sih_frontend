import React from "react";
import { TrendingUp } from "lucide-react";
import Card from "./Card";
import { C } from "../../theme";

export default function StatCard({ label, value, icon: Icon, accent, delta }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: accent + "22" }}>
          <Icon size={16} style={{ color: accent }} />
        </div>
        {delta && (
          <span className="flex items-center gap-1 text-[11px] font-medium" style={{ color: "#3FBE6A" }}>
            <TrendingUp size={12} /> {delta}
          </span>
        )}
      </div>
      <div>
        <div className="text-[22px] font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace", color: C.text }}>
          {value}
        </div>
        <div className="text-[12px]" style={{ color: C.muted }}>{label}</div>
      </div>
    </Card>
  );
}
