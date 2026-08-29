import React, { useState } from "react";
import { Landmark, MapPin, Star } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Chip } from "../../components/ui";
import { C } from "../../theme";
import { PLACES } from "../../data/mockData";

const CATS = ["All", "Heritage", "Beach", "Lake", "Trek", "Adventure", "Backwater"];

export default function Explore() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? PLACES : PLACES.filter((p) => p.category === cat);
  return (
    <div>
      <SectionHeader eyebrow="Discover" title="Explore places" />
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {CATS.map((c) => (
          <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.id} className="flex flex-col gap-3">
            <MediaBlock icon={Landmark} accent={C.amber} className="h-36 w-full" label={p.tag} />
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[14px] font-medium" style={{ color: C.text }}>{p.name}</div>
                <div className="flex items-center gap-1 text-[12px]" style={{ color: C.muted }}><MapPin size={11} />{p.city}</div>
              </div>
              <span className="flex items-center gap-1 text-[12px] font-medium" style={{ color: C.amber }}>
                <Star size={12} fill={C.amber} /> {p.rating}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
