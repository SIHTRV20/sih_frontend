import React from "react";
import { Plus } from "lucide-react";
import { SectionHeader, Table, StatusBadge, Btn } from "../../components/ui";
import { C } from "../../theme";
import { PRODUCTS } from "../../data/mockData";

export default function Products() {
  return (
    <div>
      <SectionHeader eyebrow="Catalog" title="Products / services" action={<Btn accent={C.violet} icon={Plus}>Add item</Btn>} />
      <Table
        columns={["Item", "Category", "Price", "Availability"]}
        rows={PRODUCTS.map((p) => [p.name, p.category, p.price, <StatusBadge key={p.id} status={p.stock} />])}
      />
    </div>
  );
}
