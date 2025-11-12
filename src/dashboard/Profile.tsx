import React from "react";

/* tiny inline icons */
const PhoneIco = (cls = "w-4 h-4") => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.36-1.26a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIco = (cls = "w-4 h-4") => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
  </svg>
);
const CheckIco = (cls = "w-4 h-4") => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const XmarkIco = (cls = "w-4 h-4") => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);

export default function Profile() {
  const phoneVerified = false;
  const emailVerified = false;

  return (
    <div className="space-y-4 pt-2">
      <div className="grid gap-4 md:grid-cols-[280px,1fr]">
        {/* Left: identity card */}
        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-slate-100">
            <img src="/assets/avatar-male.png" className="h-full w-full object-cover" alt="Avatar"/>
          </div>

          <div className="mt-3 text-center">
            <div className="text-lg font-semibold text-slate-900">Kunal</div>
            <div className="mt-1 text-xs text-slate-500">Session 2025–26</div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              Change Password
            </button>
            <button className="rounded-lg bg-[#0e3b86] px-3 py-2 text-sm text-white hover:brightness-110">
              Update Profile
            </button>
          </div>

          <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
            Make sure your phone & email are verified to receive important updates.
          </div>
        </aside>

        {/* Right: details */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3">
            <h2 className="text-base font-semibold text-slate-900">My Profile</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              Last updated · just now
            </span>
          </div>

          {/* fields */}
          <div className="divide-y divide-slate-100">
            {/* row helper: label / value / action */}
            <Row label="Full Name">
              <span className="font-medium text-slate-900">Kunal</span>
            </Row>

            <Row label="Mobile Number">
              <div className="flex items-center gap-2">
                {PhoneIco()}
                <span className={phoneVerified ? "text-slate-900" : "text-rose-600 font-medium"}>
                  {phoneVerified ? "9818701404" : "✖ 9818701404"}
                </span>
                <Chip ok={phoneVerified} />
              </div>
              <RowAction text={phoneVerified ? "Change" : "Verify"} />
            </Row>

            <Row label="Email Address">
              <div className="flex items-center gap-2">
                {MailIco()}
                <span className={emailVerified ? "text-slate-900" : "text-rose-600 font-medium"}>
                  {emailVerified ? "sanjeetkunal@gmail.com" : "✖ sanjeetkunal@gmail.com"}
                </span>
                <Chip ok={emailVerified} />
              </div>
              <RowAction text={emailVerified ? "Change" : "Verify"} />
            </Row>

            <Row label="Course Applied">
              <span className="font-medium text-slate-900">MCA</span>
            </Row>

            <Row label="Country">
              <span className="text-slate-900">India</span>
            </Row>

            <Row label="State">
              <span className="text-slate-900">Uttar Pradesh</span>
            </Row>

            <Row label="District">
              <span className="text-slate-900">Varanasi</span>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
}

/* -------- small helpers (clean, reusable) -------- */

function Row({
  label,
  children,
  right,
}: {
  label: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-2 px-5 py-3 text-sm sm:grid-cols-[200px,1fr,auto]">
      <div className="text-slate-500">{label}</div>
      <div className="min-w-0">{children}</div>
      {right ?? <div className="hidden sm:block" />}
    </div>
  );
}

function RowAction({ text }: { text: string }) {
  return (
    <div className="justify-self-start sm:justify-self-end">
      <button className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs hover:bg-slate-50">
        {text}
      </button>
    </div>
  );
}

function Chip({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
      {CheckIco("w-3.5 h-3.5")} Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-700">
      {XmarkIco("w-3.5 h-3.5")} Unverified
    </span>
  );
}
