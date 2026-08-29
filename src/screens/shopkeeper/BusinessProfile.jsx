import React from "react";
import { Store } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Field, Btn } from "../../components/ui";
import { C } from "../../theme";

export default function BusinessProfile() {
  return (
    <div>
      <SectionHeader eyebrow="Storefront" title="Business profile" action={<Btn accent={C.violet}>Save changes</Btn>} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <MediaBlock icon={Store} accent={C.violet} className="h-48 lg:col-span-1" label="Cover photo" />
        <Card className="flex flex-col gap-4 lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Business name" placeholder="Chokhi Dhani" />
            <Field label="Category" placeholder="Restaurant & culture village" />
          </div>
          <Field label="Address" placeholder="12 Km Tonk Road, Jaipur" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Open hours" placeholder="5:00 PM – 11:00 PM" />
            <Field label="Contact number" placeholder="+91 98xxxxxxx" />
          </div>
          <Field label="Description" placeholder="A cultural village showcasing Rajasthani heritage..." textarea />
        </Card>
      </div>
    </div>
  );
}
