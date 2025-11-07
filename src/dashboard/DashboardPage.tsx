// src/sections/dashboard/DashboardPage.tsx
import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-4 pt-2">
      {/* Welcome / Progress */}
      <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="text-2xl font-semibold text-slate-900">It's Good to have you back <span className="font-bold">Kunal</span></div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/60">
              <div className="h-2 w-[0%] rounded-full bg-[#0e3b86]" />
            </div>
            <div className="mt-3">
              <button className="rounded-full bg-black px-4 py-1.5 text-white">Resume</button>
            </div>
            <p className="mt-2 text-[12px] text-slate-700 max-w-3xl">
              Step by step, track your path to where you'll be. Admission made simple, fast and true.
            </p>
          </div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-studying-on-laptop-illustration-svg-download-png-8944721.png" className="h-24 w-auto object-contain" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,.06)]">
          <div className="font-semibold">Verification Pending</div>
          <p className="text-sm text-slate-600">Verification pending, don't delay. Complete it now, and pave your way!</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,.06)]">
          <div className="font-semibold">Course Enrolled</div>
          <p className="text-sm text-slate-600">Industry-focused, expert-led. Your success begins where you're ahead.</p>
        </div>
      </div>
    </div>
  );
}
