import React from "react";
import { User, Bookmark, Heart, Tag, Settings, Bell, LogOut, ChevronRight } from "lucide-react";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";

const MENU = [["Account settings", Settings], ["Notifications", Bell], ["Log out", LogOut]];

export default function Profile() {
  return (
    <div>
      <SectionHeader eyebrow="Account" title="Profile" />
      <Card className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: C.amber + "22" }}>
          <User size={22} style={{ color: C.amber }} />
        </div>
        <div>
          <div className="text-[15px] font-medium" style={{ color: C.text }}>Aditi Sharma</div>
          <div className="text-[12.5px]" style={{ color: C.muted }}>aditi@mail.com · Jaipur, IN</div>
        </div>
      </Card>
      <div className="mb-5 grid grid-cols-3 gap-3">
        <StatCard label="Saved places" value="4" icon={Bookmark} accent={C.amber} />
        <StatCard label="Videos liked" value="27" icon={Heart} accent={C.amber} />
        <StatCard label="Offers used" value="6" icon={Tag} accent={C.amber} />
      </div>
      <Card className="divide-y" style={{ borderColor: C.border }}>
        {MENU.map(([label, Icon], i) => (
          <div key={i} className="flex items-center justify-between py-3 first:pt-0 last:pb-0" style={{ borderColor: C.border }}>
            <span className="flex items-center gap-2 text-[13px]" style={{ color: C.text }}><Icon size={15} style={{ color: C.muted }} />{label}</span>
            <ChevronRight size={15} style={{ color: C.muted }} />
          </div>
        ))}
      </Card>
    </div>
  );
}
