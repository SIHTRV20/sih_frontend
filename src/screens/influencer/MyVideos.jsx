import React from "react";
import { Plus } from "lucide-react";
import { SectionHeader, Table, StatusBadge, Btn } from "../../components/ui";
import { C } from "../../theme";
import { VIDEOS } from "../../data/mockData";

export default function MyVideos() {
  return (
    <div>
      <SectionHeader eyebrow="Your library" title="My videos" action={<Btn accent={C.teal} icon={Plus}>New upload</Btn>} />
      <Table
        columns={["Video", "Place", "Views", "Likes", "Status"]}
        rows={VIDEOS.map((v) => [v.title, v.place, v.views, v.likes, <StatusBadge key={v.id} status={v.status} />])}
      />
    </div>
  );
}
