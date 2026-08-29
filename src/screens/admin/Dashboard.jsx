import React from "react";
import { Users, Film, Store, Play, AlertTriangle } from "lucide-react";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";

const ACTIVITY = [
  ["New business verification submitted", "Ladakh Base Camp", "1h ago"],
  ["Video flagged by 3 users", "Street food crawl, Jaipur", "3h ago"],
  ["Influencer application approved", "@ananya.roams", "6h ago"],
  ["Complaint marked resolved", "Fake review suspected", "1d ago"],
];

export default function Dashboard() {
  return (
    <div>
      <SectionHeader eyebrow="Platform overview" title="Admin dashboard" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatCard label="Total users" value="18.4K" icon={Users} accent={C.red} delta="+5%" />
        <StatCard label="Influencers" value="1.2K" icon={Film} accent={C.red} />
        <StatCard label="Businesses" value="640" icon={Store} accent={C.red} />
        <StatCard label="Videos live" value="9.7K" icon={Play} accent={C.red} />
        <StatCard label="Open reports" value="12" icon={AlertTriangle} accent={C.red} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Recent activity</div>
        {ACTIVITY.map(([a, b, t], i) => (
          <div key={i} className="flex items-center justify-between border-t py-2.5 first:border-t-0" style={{ borderColor: C.border }}>
            <div>
              <div className="text-[13px]" style={{ color: C.text }}>{a}</div>
              <div className="text-[11.5px]" style={{ color: C.muted }}>{b}</div>
            </div>
            <span className="text-[11.5px]" style={{ color: C.muted }}>{t}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
