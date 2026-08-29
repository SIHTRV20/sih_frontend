import React from "react";
import { Play, MapPin, Eye, Heart } from "lucide-react";
import { SectionHeader, Card, MediaBlock } from "../../components/ui";
import { C } from "../../theme";
import { VIDEOS } from "../../data/mockData";

export default function Home() {
  return (
    <div>
      <SectionHeader eyebrow="For you" title="Video feed" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {VIDEOS.filter((v) => v.status === "Published").map((v) => (
          <Card key={v.id} className="flex flex-col gap-3">
            <MediaBlock icon={Play} accent={C.amber} className="h-40 w-full" label={v.duration} />
            <div>
              <div className="text-[14px] font-medium" style={{ color: C.text }}>{v.title}</div>
              <div className="mt-1 flex items-center gap-1.5 text-[12px]" style={{ color: C.muted }}>
                <MapPin size={12} /> {v.place}
              </div>
            </div>
            <div className="flex items-center justify-between text-[12px]" style={{ color: C.muted }}>
              <span>{v.creator}</span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Eye size={12} />{v.views}</span>
                <span className="flex items-center gap-1"><Heart size={12} />{v.likes}</span>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
