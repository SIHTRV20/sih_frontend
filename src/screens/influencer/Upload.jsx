import React from "react";
import { Upload as UploadIcon } from "lucide-react";
import { SectionHeader, Card, MediaBlock, Field, Btn } from "../../components/ui";
import { C } from "../../theme";

export default function Upload() {
  return (
    <div>
      <SectionHeader eyebrow="Share a moment" title="Upload video" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <MediaBlock icon={UploadIcon} accent={C.teal} className="h-56 lg:col-span-1" label="Drop file here" />
        <Card className="flex flex-col gap-4 lg:col-span-2">
          <Field label="Title" placeholder="e.g. Sunrise over Amber Fort" />
          <Field label="Description" placeholder="Tell people what makes this spot special" textarea />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Tag a place" placeholder="Search places" />
            <Field label="Category" placeholder="Heritage, Beach, Trek..." />
          </div>
          <div className="flex justify-end">
            <Btn accent={C.teal} icon={UploadIcon}>Publish video</Btn>
          </div>
        </Card>
      </div>
    </div>
  );
}
