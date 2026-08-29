import React, { useState } from "react";
import { Plus, Tag } from "lucide-react";
import { SectionHeader, Card, Chip, Badge, EmptyState, Btn } from "../../components/ui";
import { C } from "../../theme";
import { OFFERS } from "../../data/mockData";

export default function Offers() {
  const [tab, setTab] = useState("Active");
  return (
    <div>
      <SectionHeader eyebrow="Promotions" title="Offers" action={<Btn accent={C.violet} icon={Plus}>Create offer</Btn>} />
      <div className="mb-4 flex gap-2">
        {["Active", "Expired"].map((t) => (
          <Chip key={t} active={tab === t} accent={C.violet} onClick={() => setTab(t)}>{t}</Chip>
        ))}
      </div>
      {tab === "Active" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {OFFERS.slice(0, 3).map((o) => (
            <Card key={o.id} className="flex items-center justify-between">
              <div>
                <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{o.title}</div>
                <div className="text-[11.5px]" style={{ color: C.muted }}>Expires {o.expiry}</div>
              </div>
              <Badge tone="violet">{o.discount}</Badge>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon={Tag} title="No expired offers" sub="Offers that end will move here automatically." accent={C.violet} />
      )}
    </div>
  );
}
