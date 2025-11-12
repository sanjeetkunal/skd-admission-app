// src/sections/dashboard/Applications.tsx
import React from "react";

export default function Applications() {
  return (
    <div className="space-y-4 pt-2">
      <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold">Apply for More Course</div>
            <p className="text-[12px] text-slate-700">Expand your horizons, open new doors.</p>
          </div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-studying-on-laptop-illustration-svg-download-png-8944721.png" className="h-20" />
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <div className="font-semibold flex items-center gap-2">
            <span className="inline-block rounded bg-slate-100 px-2 py-1">Course Applied</span>
          </div>
          <div>Session 2025-26</div>
        </div>
        <div className="mt-3 text-slate-700">PG - MCA</div>
        <div className="mt-2 h-2 rounded bg-slate-200" />
        <div className="mt-4 flex gap-2">
          <button className="rounded-md border px-3 py-1.5">Resume</button>
          <button className="rounded-md border px-3 py-1.5">Make Payment</button>
        </div>
      </div>
    </div>
  );
}
