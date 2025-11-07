// src/dashboard/components/RequestCallback.tsx
import React from "react";

function VerifiedCounsellorCard() {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <div className="rounded border border-slate-700/70 p-3 sm:p-4">
        {/* Header */}
        {/* <div className="flex items-center gap-2">
          <img
            src="/assets/skdu-badge.png"
            alt="SKDU Logo"
            className="h-5 w-auto object-contain"
          />
          <div className="text-[18px] font-semibold tracking-wide">SKDU</div>
        </div> */}

        <p className="mt-2 text-[13px] italic text-slate-700">
          Empowering Your Educational Journey with Authentic Guidance
        </p>

        {/* Inner Two Column */}
        <div className="mt-3 rounded border border-slate-700/60">
          <div className="grid grid-cols-1 divide-y divide-slate-700/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {/* Left */}
            <div className="p-3 sm:p-4">
              <div className="font-semibold">Naveen Sharma</div>
              <div className="mt-1 space-y-1 text-[13px] text-slate-800">
                <div>
                  <span className="text-slate-600">Counsellor ID:</span> N/A
                </div>
                <div>
                  <span className="text-slate-600">Counsellor Number:</span>{" "}
                  <a
                    href="tel:8708181099"
                    className="text-blue-700 underline"
                  >
                    8708181099
                  </a>
                </div>
                <div>
                  <span className="text-slate-600">Counsellor Email:</span>{" "}
                  <a
                    href="mailto:naveen.s@ctpl.io"
                    className="text-blue-700 underline"
                  >
                    naveen.s@ctpl.io
                  </a>
                </div>
                <div>
                  <span className="text-slate-600">Official Counsellor of</span>{" "}
                  SKDU
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-3 sm:p-4">
              <div className="font-semibold">Note for Applicants:</div>
              <div className="mt-1 space-y-2 text-[13px] text-slate-800">
                <p>
                  This individual is a verified counsellor authorized by SKDU to
                  provide official admission guidance.
                </p>
                <p>
                  Beware of imposters misrepresenting other institutions or
                  offering misleading information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[13px] italic text-slate-700">
          Authenticity Matters. Trust Only Verified Counsellors.
        </p>
      </div>
    </section>
  );
}

export default function RequestCallback() {
  return (
    <div className="space-y-4 pt-2">
      <VerifiedCounsellorCard />

      {/* Assistance / Callback Box */}
      <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold sm:text-xl">
              Need Assistance? We'll Call You Back!
            </div>
            <p className="text-[12px] text-slate-700">
              Select Request Call Back Date and Time (9AM–6PM)
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-studying-on-laptop-illustration-svg-download-png-8944721.png"
            alt="Assistance"
            className="mx-auto h-20 sm:h-24"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-end gap-3">
          <input
            type="date"
            className="w-full rounded border px-3 py-2 sm:w-auto"
          />
          <input
            type="time"
            className="w-full rounded border px-3 py-2 sm:w-auto"
          />
          <button className="w-full rounded-md border bg-white px-4 py-2 sm:w-auto hover:bg-slate-50">
            Submit
          </button>
          <button className="w-full rounded-md border bg-white px-4 py-2 sm:w-auto hover:bg-slate-50">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
