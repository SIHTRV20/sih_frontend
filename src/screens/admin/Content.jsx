import React from "react";
import { Plus } from "lucide-react";
import { SectionHeader, Card, Badge, Btn } from "../../components/ui";
import { C } from "../../theme";

const GROUPS = [
  { title: "Categories", items: ["Heritage", "Beach", "Trek", "Backwater", "Adventure"] },
  { title: "Featured banners", items: ["Monsoon in Kerala", "Winter in Ladakh", "Diwali in Jaipur"] },
  { title: "Tags", items: ["#sunset", "#roadtrip", "#foodie", "#offbeat"] },
];

export default function Content() {
  return (
    <div>
      <SectionHeader eyebrow="Editorial" title="Content management" action={<Btn accent={C.red} icon={Plus}>Add</Btn>} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {GROUPS.map((g) => (
          <Card key={g.title}>
            <div className="mb-3 text-[12.5px] font-semibold" style={{ color: C.text }}>{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => <Badge key={it} tone="red">{it}</Badge>)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
