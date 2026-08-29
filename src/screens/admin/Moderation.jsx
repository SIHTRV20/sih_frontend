import React from "react";
import { Play, Check, Flag } from "lucide-react";
import { SectionHeader, Card, MediaBlock, StatusBadge, Btn } from "../../components/ui";
import { C } from "../../theme";
import { VIDEOS } from "../../data/mockData";

export default function Moderation() {
  return (
    <div>
      <SectionHeader eyebrow="Queue" title="Video moderation" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {VIDEOS.filter((v) => v.status !== "Published").map((v) => (
          <Card key={v.id} className="flex flex-col gap-3">
            <MediaBlock icon={Play} accent={C.red} className="h-32 w-full" label={v.duration} />
            <div>
              <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{v.title}</div>
              <div className="text-[12px]" style={{ color: C.muted }}>{v.creator} · {v.place}</div>
            </div>
            <StatusBadge status={v.status} />
            <div className="flex gap-2">
              <Btn accent={C.red} icon={Check}>Approve</Btn>
              <Btn kind="outline" icon={Flag}>Remove</Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
