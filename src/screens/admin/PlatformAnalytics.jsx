import React from "react";
import { Users, Film, Tag, MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";
import { GROWTH } from "../../data/mockData";

export default function PlatformAnalytics() {
  return (
    <div>
      <SectionHeader eyebrow="Growth" title="Platform analytics" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="MAU" value="18.4K" icon={Users} accent={C.red} delta="+14%" />
        <StatCard label="Videos uploaded" value="1,050" icon={Film} accent={C.red} delta="+18%" />
        <StatCard label="Offer redemptions" value="6.1K" icon={Tag} accent={C.red} delta="+9%" />
        <StatCard label="Top city" value="Jaipur" icon={MapPin} accent={C.red} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Users vs. videos, last 6 months</div>
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <LineChart data={GROWTH}>
              <CartesianGrid stroke={C.border} vertical={false} />
              <XAxis dataKey="m" stroke={C.muted} fontSize={11} tickLine={false} axisLine={{ stroke: C.border }} />
              <YAxis stroke={C.muted} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="users" stroke={C.red} strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="videos" stroke={C.amber} strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
