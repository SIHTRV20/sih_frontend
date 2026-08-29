import React from "react";
import { Search, MapPin } from "lucide-react";
import { SectionHeader, Card, MediaBlock } from "../../components/ui";
import { C } from "../../theme";

const CITIES = ["Jaipur", "Goa", "Udaipur", "Manali", "Dharamshala", "Hampi", "Kerala", "Ladakh"];

export default function Location() {
  return (
    <div>
      <SectionHeader eyebrow="Plan a trip" title="Where are you headed?" />
      <div className="mb-5 flex items-center gap-2 rounded-full border px-3.5 py-2" style={{ borderColor: C.border, background: C.surface }}>
        <Search size={15} style={{ color: C.muted }} />
        <input placeholder="Search a city or region" className="w-full bg-transparent text-[13px] outline-none" style={{ color: C.text }} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {CITIES.map((c) => (
          <Card key={c} className="flex flex-col gap-3">
            <MediaBlock icon={MapPin} accent={C.amber} className="h-24 w-full" />
            <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{c}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
