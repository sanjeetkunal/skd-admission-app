import React from "react";

export default function Counsellor() {
  return (
    <div className="space-y-4 pt-2">
      {/* Top summary card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <img
            src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png" /* put your image */
            alt="Counsellor"
            className="h-20 w-20 rounded-full ring-2 ring-slate-100 object-cover"
          />
        <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-slate-900">Naveen Sharma</h2>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
                ✓ Verified Counsellor
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Official Counsellor of SKDU · MCA/UG/PG admissions guidance
            </p>

            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
              <a href="tel:8708181099" className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">
                📞 Call: 8708181099
              </a>
              <a href="https://wa.me/918708181099" target="_blank" className="flex items-center justify-center rounded-lg bg-[#25D366] px-3 py-2 text-white hover:brightness-110">
                 WhatsApp
              </a>
              <a href="mailto:naveen.s@ctpl.io" className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">
                ✉️ Email
              </a>
            </div>
          </div>

          {/* small trust tile on desktop */}
          <div className="hidden shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-xs text-slate-600 sm:block">
            <div className="text-slate-900 font-semibold">4+ yrs</div>
            Experience
            <div className="mt-2 text-slate-900 font-semibold">1k+</div>
            Students helped
          </div>
        </div>
      </div>

      {/* Verified panel (two column) */}
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
        <div className="rounded border border-slate-700/70 p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <img src="/assets/skdu-badge.png" className="h-5 w-auto" />
            <div className="text-[18px] font-semibold">SKDU</div>
          </div>
          <p className="mt-2 text-[13px] italic text-slate-700">
            Empowering Your Educational Journey with Authentic Guidance
          </p>

          <div className="mt-3 rounded border border-slate-700/60">
            <div className="grid grid-cols-1 divide-y divide-slate-700/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-3 sm:p-4">
                <div className="font-semibold">Naveen Sharma</div>
                <div className="mt-1 space-y-1 text-[13px] text-slate-800">
                  <div><span className="text-slate-600">Counsellor ID:</span> N/A</div>
                  <div><span className="text-slate-600">Number:</span> <a className="text-blue-700 underline" href="tel:8708181099">8708181099</a></div>
                  <div><span className="text-slate-600">Email:</span> <a className="text-blue-700 underline" href="mailto:naveen.s@ctpl.io">naveen.s@ctpl.io</a></div>
                  <div>Official Counsellor of SKDU</div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="font-semibold">Note for Applicants:</div>
                <div className="mt-1 space-y-2 text-[13px] text-slate-800">
                  <p>This individual is a verified counsellor authorized by SKDU to provide official admission guidance.</p>
                  <p>Beware of imposters misrepresenting other institutions or offering misleading information.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[13px] italic text-slate-700">
            Authenticity Matters. Trust Only Verified Counsellors.
          </p>
        </div>
      </div>

      {/* Availability + quick form */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-base font-semibold">Availability</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            <li>Mon–Sat: <b>09:00 AM – 06:00 PM</b></li>
            <li>Lunch: 01:30 PM – 02:00 PM</li>
            <li>Sunday: Off</li>
          </ul>
          <div className="mt-3 text-xs text-slate-500">Response time: usually within 1–2 hours during working time.</div>
        </div>

        <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
          <div className="text-base font-semibold">Request a Callback</div>
          <p className="text-[12px] text-slate-700">Choose a date & time (9AM–6PM)</p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <input type="date" className="w-full rounded border px-3 py-2 sm:w-auto" />
            <input type="time" className="w-full rounded border px-3 py-2 sm:w-auto" />
            <button className="rounded-md border bg-white px-4 py-2 hover:bg-slate-50">Submit</button>
            <button className="rounded-md border bg-white px-4 py-2 hover:bg-slate-50">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
