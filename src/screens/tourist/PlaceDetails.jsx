import React from "react";
import { Landmark, Star, Bookmark } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Btn, Badge } from "../../components/ui";
import { C } from "../../theme";
import { PLACES, OFFERS } from "../../data/mockData";

export default function PlaceDetails() {
  const p = PLACES[2];
  return (
    <div>
      <SectionHeader eyebrow={p.city} title={p.name} action={<Btn icon={Bookmark}>Save place</Btn>} />
      <MediaBlock icon={Landmark} accent={C.amber} className="h-56 w-full sm:h-72" />
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-4 text-[13px]" style={{ color: C.muted }}>
            <span className="flex items-center gap-1 font-medium" style={{ color: C.amber }}><Star size={13} fill={C.amber} />{p.rating}</span>
            <span>·</span>
            <Badge tone="amber">{p.category}</Badge>
          </div>
          <p className="text-[13.5px] leading-relaxed" style={{ color: C.text }}>
            A calm evening spot known for its ghats and boat rides, framed by the city palace and the surrounding hills.
            Best visited around sunset when the lake catches the light.
          </p>
          <div className="mt-5 text-[12px] font-semibold uppercase tracking-wide" style={{ color: C.muted }}>Reviews</div>
          {["Peaceful in the early morning, go before 8am.", "Boat rides are worth the wait in line."].map((r, i) => (
            <div key={i} className="border-t py-2.5 text-[12.5px]" style={{ borderColor: C.border, color: C.muted }}>{r}</div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: C.muted }}>Nearby offers</div>
          {OFFERS.slice(0, 2).map((o) => (
            <Card key={o.id}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[12.5px] font-medium" style={{ color: C.text }}>{o.title}</span>
                <Badge tone="amber">{o.discount}</Badge>
              </div>
              <div className="text-[11.5px]" style={{ color: C.muted }}>{o.business}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
