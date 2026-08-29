import React from "react";
import { Landmark, Bookmark, X } from "lucide-react";
import { SectionHeader, Card, MediaBlock, EmptyState } from "../../components/ui";
import { C } from "../../theme";
import { SAVED } from "../../data/mockData";

export default function Saved() {
  return (
    <div>
      <SectionHeader eyebrow="Your list" title="Saved places" />
      {SAVED.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SAVED.map((p) => (
            <Card key={p.id} className="flex flex-col gap-3">
              <MediaBlock icon={Landmark} accent={C.amber} className="h-32 w-full" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{p.name}</div>
                  <div className="text-[11.5px]" style={{ color: C.muted }}>{p.city}</div>
                </div>
                <button aria-label="Remove"><X size={15} style={{ color: C.muted }} /></button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon={Bookmark} title="Nothing saved yet" sub="Places you save will show up here." accent={C.amber} />
      )}
    </div>
  );
}
