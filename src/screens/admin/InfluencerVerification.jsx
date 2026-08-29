import React from "react";
import { Instagram, Check, X } from "lucide-react";
import { SectionHeader, Card, Btn } from "../../components/ui";
import { C } from "../../theme";
import { INFLUENCER_APPS } from "../../data/mockData";

export default function InfluencerVerification() {
  return (
    <div>
      <SectionHeader eyebrow="Applications" title="Influencer verification" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {INFLUENCER_APPS.map((a) => (
          <Card key={a.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: C.red + "22" }}>
                <Instagram size={16} style={{ color: C.red }} />
              </div>
              <div>
                <div className="text-[13.5px] font-medium" style={{ color: C.text }}>{a.name}</div>
                <div className="text-[12px]" style={{ color: C.muted }}>{a.handle} · {a.followers} · {a.platform}</div>
              </div>
            </div>
            <div className="text-[11.5px]" style={{ color: C.muted }}>Submitted {a.submitted}</div>
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
