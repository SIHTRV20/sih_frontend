import React from "react";
import { Eye, Tag, Megaphone, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";
import { OFFERS } from "../../data/mockData";

const CHART_DATA = OFFERS.map((o) => ({ name: o.category, val: Math.floor(Math.random() * 80 + 40) }));

export default function Analytics() {
  return (
    <div>
      <SectionHeader eyebrow="Performance" title="Analytics" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Profile views" value="9.8K" icon={Eye} accent={C.violet} />
        <StatCard label="Offer redemptions" value="342" icon={Tag} accent={C.violet} delta="+11%" />
        <StatCard label="Campaign reach" value="480K" icon={Megaphone} accent={C.violet} />
        <StatCard label="Conversion rate" value="4.2%" icon={TrendingUp} accent={C.violet} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Redemptions by offer</div>
        <div className="h-56 w-full">
          <ResponsiveContainer>
            <BarChart data={CHART_DATA}>
              <CartesianGrid stroke={C.border} vertical={false} />
              <XAxis dataKey="name" stroke={C.muted} fontSize={11} tickLine={false} axisLine={{ stroke: C.border }} />
              <YAxis stroke={C.muted} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="val" fill={C.violet} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
