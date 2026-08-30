import React from "react";
import { Search } from "lucide-react";
import { SectionHeader, Card } from "../../components/ui";
import { C } from "../../theme";

const CITIES = [
  { name: "Jaipur", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7c3a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Goa", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { name: "Udaipur", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" },
  { name: "Manali", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
  { name: "Dharamshala", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" },
  { name: "Hampi", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
  { name: "Ladakh", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" }
];

export default function Location() {
  return (
    <div>
      <SectionHeader eyebrow="Plan a trip" title="Where are you headed?" />
      <div className="mb-5 flex items-center gap-2 rounded-full border px-3.5 py-2" style={{ borderColor: C.border, background: C.surface }}>
        <Search size={15} style={{ color: C.muted }} />
        <input placeholder="Search a city or region" className="w-full bg-transparent text-[13px] outline-none" style={{ color: C.text }} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {CITIES.map((city) => (
          <Card key={city.name} className="flex flex-col gap-3 overflow-hidden p-0">
            <img
              src={city.image}
              alt={city.name}
              className="h-24 w-full object-cover"
            />
            <div className="px-3 pb-3 text-[13.5px] font-medium" style={{ color: C.text }}>{city.name}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
