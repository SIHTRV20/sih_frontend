import React from "react";
import { Check, X } from "lucide-react";
import { SectionHeader, Card, StatusBadge, Btn } from "../../components/ui";
import { C } from "../../theme";
import { CAMPAIGN_INVITES } from "../../data/mockData";

export default function Collabs() {
  return (
    <div>
      <SectionHeader eyebrow="Brand deals" title="Collaborations" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CAMPAIGN_INVITES.map((c) => (
          <Card key={c.id} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-medium" style={{ color: C.text }}>{c.offer}</span>
              <StatusBadge status={c.status} />
            </div>
            <div className="text-[12px]" style={{ color: C.muted }}>Requested via {c.influencer.replace("@", "")}'s business partner</div>
            {c.status === "Pending" && (
              <div className="flex gap-2">
                <Btn accent={C.teal} icon={Check}>Accept</Btn>
                <Btn kind="outline" icon={X}>Decline</Btn>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
