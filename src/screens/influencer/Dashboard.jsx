import React from "react";
import { Eye, Users, DollarSign, Film } from "lucide-react";
import { SectionHeader, Card, StatCard, Table, StatusBadge } from "../../components/ui";
import { C } from "../../theme";
import { VIDEOS } from "../../data/mockData";

export default function Dashboard() {
  return (
    <div>
      <SectionHeader eyebrow="Welcome back" title="@rhea.travels" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Total views" value="1.4M" icon={Eye} accent={C.teal} delta="+12%" />
        <StatCard label="Followers" value="142K" icon={Users} accent={C.teal} delta="+3.1%" />
        <StatCard label="Earnings (Aug)" value="₹38,200" icon={DollarSign} accent={C.teal} delta="+8%" />
        <StatCard label="Videos live" value="24" icon={Film} accent={C.teal} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Recent video performance</div>
        <Table
          columns={["Video", "Views", "Likes", "Status"]}
          rows={VIDEOS.filter((v) => v.creator === "@rhea.travels").map((v) => [v.title, v.views, v.likes, <StatusBadge key={v.id} status={v.status} />])}
        />
      </Card>
    </div>
  );
}
