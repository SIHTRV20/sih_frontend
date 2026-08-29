import React from "react";
import { Plus } from "lucide-react";
import { SectionHeader, Table, StatusBadge, Btn } from "../../components/ui";
import { C } from "../../theme";
import { CAMPAIGN_INVITES } from "../../data/mockData";

export default function Campaigns() {
  return (
    <div>
      <SectionHeader eyebrow="Grow via creators" title="Influencer campaigns" action={<Btn accent={C.violet} icon={Plus}>Invite influencer</Btn>} />
      <Table
        columns={["Influencer", "Followers", "Offer", "Status"]}
        rows={CAMPAIGN_INVITES.map((c) => [c.influencer, c.followers, c.offer, <StatusBadge key={c.id} status={c.status} />])}
      />
    </div>
  );
}
