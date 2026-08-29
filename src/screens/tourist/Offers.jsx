import React from "react";
import { Tag, Clock } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Badge } from "../../components/ui";
import { C } from "../../theme";
import { OFFERS } from "../../data/mockData";

export default function Offers() {
  return (
    <div>
      <SectionHeader eyebrow="Deals nearby" title="Offers" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {OFFERS.map((o) => (
          <Card key={o.id} className="flex items-center gap-4">
            <MediaBlock icon={Tag} accent={C.amber} className="h-16 w-16 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[13.5px] font-medium" style={{ color: C.text }}>{o.title}</span>
                <Badge tone="amber">{o.discount}</Badge>
              </div>
              <div className="mt-1 text-[12px]" style={{ color: C.muted }}>{o.business}</div>
              <div className="mt-1 flex items-center gap-1 text-[11px]" style={{ color: C.muted }}><Clock size={11} />Expires {o.expiry}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
