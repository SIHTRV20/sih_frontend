import React from "react";
import { Eye, Tag, Megaphone, Star, Store, PieChart } from "lucide-react";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";

const QUICK_LINKS = [["Add offer", Tag], ["Invite influencer", Megaphone], ["Edit profile", Store], ["View analytics", PieChart]];

export default function Dashboard() {
  return (
    <div>
      <SectionHeader eyebrow="Welcome back" title="Chokhi Dhani, Jaipur" />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Profile views" value="9.8K" icon={Eye} accent={C.violet} delta="+6%" />
        <StatCard label="Offers redeemed" value="342" icon={Tag} accent={C.violet} delta="+11%" />
        <StatCard label="Active campaigns" value="3" icon={Megaphone} accent={C.violet} />
        <StatCard label="Avg. rating" value="4.6" icon={Star} accent={C.violet} />
      </div>
      <Card>
        <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>Quick links</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUICK_LINKS.map(([l, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2 rounded-[10px] border py-4" style={{ borderColor: C.border }}>
              <Icon size={17} style={{ color: C.violet }} />
              <span className="text-[12px]" style={{ color: C.text }}>{l}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
