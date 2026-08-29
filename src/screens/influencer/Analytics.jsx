import React from "react";
import { Eye, ThumbsUp, Users, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";
import { VIEWS_TREND } from "../../data/mockData";

export default function Analytics() {
  return (
    <div>
      <SectionHeader eyebrow="Last 7 days" title="Analytics" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Views" value="38.1K" icon={Eye} accent={C.teal} delta="+9%" />
        <StatCard label="Likes" value="4.2K" icon={ThumbsUp} accent={C.teal} delta="+4%" />
        <StatCard label="New followers" value="612" icon={Users} accent={C.teal} delta="+2%" />
        <StatCard label="Watch time" value="820 hrs" icon={Clock} accent={C.teal} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Views this week</div>
        <div className="h-56 w-full">
          <ResponsiveContainer>
            <LineChart data={VIEWS_TREND}>
              <CartesianGrid stroke={C.border} vertical={false} />
              <XAxis dataKey="d" stroke={C.muted} fontSize={11} tickLine={false} axisLine={{ stroke: C.border }} />
              <YAxis stroke={C.muted} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="v" stroke={C.teal} strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
