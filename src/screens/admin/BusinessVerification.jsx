import React from "react";
import { Store, Check, X } from "lucide-react";
import { SectionHeader, Card, Btn } from "../../components/ui";
import { C } from "../../theme";
import { BUSINESS_APPS } from "../../data/mockData";

export default function BusinessVerification() {
  return (
    <div>
      <SectionHeader eyebrow="Applications" title="Business verification" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {BUSINESS_APPS.map((b) => (
          <Card key={b.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: C.red + "22" }}>
                <Store size={16} style={{ color: C.red }} />
              </div>
              <div>
                <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{b.name}</div>
                <div className="text-[12px]" style={{ color: C.muted }}>{b.category} · {b.city}</div>
              </div>
            </div>
            <div className="text-[11.5px]" style={{ color: C.muted }}>Submitted {b.submitted}</div>
            <div className="flex gap-2">
              <Btn accent={C.red} icon={Check}>Approve</Btn>
              <Btn kind="outline" icon={X}>Reject</Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
