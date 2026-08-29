import React from "react";
import { Play, MapPin, Heart, Bookmark } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Btn } from "../../components/ui";
import { C } from "../../theme";
import { VIDEOS } from "../../data/mockData";

export default function VideoDetails() {
  const v = VIDEOS[0];
  return (
    <div>
      <SectionHeader eyebrow="Now playing" title={v.title} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MediaBlock icon={Play} accent={C.amber} className="h-72 w-full sm:h-96" label={v.duration} />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-[14px] font-medium" style={{ color: C.text }}>{v.creator}</div>
              <div className="flex items-center gap-1 text-[12px]" style={{ color: C.muted }}><MapPin size={12} />{v.place}</div>
            </div>
            <div className="flex gap-2">
              <Btn kind="outline" icon={Heart}>{v.likes}</Btn>
              <Btn kind="outline" icon={Bookmark}>Save</Btn>
            </div>
          </div>
          <Card className="mt-4">
            <div className="mb-2 text-[12.5px] font-semibold" style={{ color: C.text }}>Comments</div>
            {["Absolutely stunning, adding this to my list!", "What time is best for the light?", "Was this a drone shot?"].map((c, i) => (
              <div key={i} className="border-t py-2.5 text-[12.5px] first:border-t-0" style={{ borderColor: C.border, color: C.muted }}>
                <span className="font-medium" style={{ color: C.text }}>traveler_{i + 12} </span>{c}
              </div>
            ))}
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: C.muted }}>Related videos</div>
          {VIDEOS.slice(1, 4).map((rv) => (
            <Card key={rv.id} className="flex gap-3">
              <MediaBlock icon={Play} accent={C.amber} className="h-16 w-24 shrink-0" />
              <div className="min-w-0">
                <div className="truncate text-[12.5px] font-medium" style={{ color: C.text }}>{rv.title}</div>
                <div className="text-[11.5px]" style={{ color: C.muted }}>{rv.views} views</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
