import React from "react";
import { MoreHorizontal } from "lucide-react";
import { SectionHeader, Table, Badge, StatusBadge } from "../../components/ui";
import { C } from "../../theme";
import { USERS } from "../../data/mockData";

export default function Users() {
  return (
    <div>
      <SectionHeader eyebrow="Directory" title="User management" />
      <Table
        columns={["Name", "Email", "Role", "Status", "Joined", ""]}
        rows={USERS.map((u) => [
          u.name, u.email, <Badge key={`r-${u.id}`}>{u.role}</Badge>, <StatusBadge key={`s-${u.id}`} status={u.status} />, u.joined,
          <MoreHorizontal key={`m-${u.id}`} size={15} style={{ color: C.muted }} />,
        ])}
      />
    </div>
  );
}
