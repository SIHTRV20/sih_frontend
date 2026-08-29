import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Compass, Film, Lock, Mail, ShieldCheck, Store } from "lucide-react";
import { Badge, Btn, Card, Field } from "../components/ui";
import { C, ROLE_META } from "../theme";

const ROLE_OPTIONS = [
  { key: "tourist", label: "Tourist", icon: Compass, description: "Explore local gems" },
  { key: "influencer", label: "Influencer", icon: Film, description: "Share experiences" },
  { key: "shopkeeper", label: "Shopkeeper", icon: Store, description: "Promote offers" },
  { key: "admin", label: "Admin", icon: ShieldCheck, description: "Moderate platform" },
];

export default function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("tourist");
  const [email, setEmail] = useState("traveler@waypoint.com");
  const [password, setPassword] = useState("password123");

  const accent = ROLE_META[selectedRole].accent;

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(selectedRole);
  }

  return (
    <div className="min-h-screen w-full" style={{ background: "radial-gradient(circle at top, rgba(232,162,61,0.18), transparent 30%), #14171C", color: C.text }}>
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center p-4 sm:p-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border shadow-[0_25px_80px_rgba(0,0,0,0.45)]" style={{ background: "rgba(27,32,40,0.92)", borderColor: C.border }}>
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="relative overflow-hidden border-b border-[#2E3542] p-8 sm:p-10 lg:border-b-0 lg:border-r" style={{ background: "linear-gradient(135deg, rgba(17,20,25,0.96), rgba(31,36,45,0.92))" }}>
              <div className="absolute -left-16 top-12 h-40 w-40 rounded-full blur-3xl" style={{ background: `${accent}44` }} />
              <div className="absolute -right-10 bottom-8 h-52 w-52 rounded-full blur-3xl" style={{ background: `${accent}33` }} />

              <div className="relative z-10">
                <Badge tone={selectedRole === "tourist" ? "amber" : selectedRole === "influencer" ? "teal" : selectedRole === "shopkeeper" ? "violet" : "red"}>
                  Waypoint
                </Badge>

                <h1 className="mt-8 max-w-xs text-4xl font-semibold leading-tight sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Discover more, together.
                </h1>

                <p className="mt-4 max-w-md text-sm leading-6" style={{ color: C.muted }}>
                  Connect local creators, businesses, and travelers in one experience built for discovery, trust, and community-led experiences.
                </p>

                <div className="mt-8 space-y-3">
                  {ROLE_OPTIONS.map(({ key, label, icon: Icon, description }) => {
                    const isActive = key === selectedRole;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedRole(key)}
                        className="flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all hover:-translate-y-0.5"
                        style={{
                          background: isActive ? `${ROLE_META[key].accent}18` : C.surface,
                          borderColor: isActive ? ROLE_META[key].accent : C.border,
                          boxShadow: isActive ? `0 0 0 1px ${ROLE_META[key].accent}40` : "none",
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `${ROLE_META[key].accent}22`, color: ROLE_META[key].accent }}>
                            <Icon size={16} />
                          </span>
                          <span>
                            <span className="block text-sm font-medium" style={{ color: C.text }}>{label}</span>
                            <span className="block text-[11px]" style={{ color: C.muted }}>{description}</span>
                          </span>
                        </span>
                        {isActive && <CheckCircle2 size={16} style={{ color: ROLE_META[key].accent }} />}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-[11px]" style={{ color: C.muted }}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ borderColor: C.border }}><CheckCircle2 size={12} style={{ color: accent }} /> Verified creators</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ borderColor: C.border }}><CheckCircle2 size={12} style={{ color: accent }} /> Trusted businesses</span>
                </div>
              </div>
            </section>

            <section className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>Welcome back</div>
                  <h2 className="mt-2 text-2xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Sign in</h2>
                </div>
                <Card className="rounded-xl px-2.5 py-1.5 text-[11px]" style={{ background: `${accent}18`, borderColor: `${accent}66`, color: accent }}>
                  {ROLE_META[selectedRole].label}
                </Card>
              </div>

              <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                <Field
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={Mail}
                />

                <Field
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={Lock}
                />

                <div className="flex items-center justify-between gap-3 pt-1 text-[12px]" style={{ color: C.muted }}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-3.5 w-3.5 rounded border" style={{ accentColor: accent }} defaultChecked />
                    Remember me
                  </label>
                  <button type="button" className="font-medium transition-opacity hover:opacity-85" style={{ color: accent }}>
                    Forgot password?
                  </button>
                </div>

                <Btn type="submit" accent={accent} className="mt-3 w-full justify-center rounded-xl px-4 py-3 text-sm">
                  Continue to dashboard
                  <ArrowRight size={16} />
                </Btn>
              </form>

              <div className="mt-6 rounded-2xl border p-3 text-[12px]" style={{ background: C.surface, borderColor: C.border, color: C.muted }}>
                Demo access: use any email and password to enter the selected role dashboard.
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
