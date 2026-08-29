import React from "react";
import { MoreHorizontal } from "lucide-react";
import { SectionHeader, Table, Badge, StatusBadge } from "../../components/ui";
import { C } from "../../theme";
import { COMPLAINTS } from "../../data/mockData";

export default function Reports() {
  return (
    <div>
      <SectionHeader eyebrow="Support" title="Reports / complaints" />
      <Table
        columns={["Subject", "From", "Severity", "Status", ""]}
        rows={COMPLAINTS.map((c) => [
          c.subject, c.from,
          <Badge key={`sv-${c.id}`} tone={c.severity === "High" ? "red" : c.severity === "Medium" ? "amber" : "neutral"}>{c.severity}</Badge>,
          <StatusBadge key={`st-${c.id}`} status={c.status} />,
          <MoreHorizontal key={`m-${c.id}`} size={15} style={{ color: C.muted }} />,
        ])}
      />
    </div>
  );
}
