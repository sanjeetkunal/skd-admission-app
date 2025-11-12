import React, { useState } from "react";

export default function Payments() {
  const [tab, setTab] = useState<"due" | "history">("due");

  return (
    <div className="space-y-4 pt-2">
      {/* ===== Header / Tabs ===== */}
      <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold sm:text-xl">Payments</h2>
            <p className="mt-0.5 max-w-2xl text-xs text-slate-700 sm:text-[13px]">
              Pay with ease, secure your place, complete your admission.
            </p>
          </div>
          {/* hide illustration on small screens */}
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-studying-on-laptop-illustration-svg-download-png-8944721.png"
            alt="Student paying online"
            className="hidden h-20 shrink-0 sm:block"
          />
        </div>

        {/* Tabs */}
        <div className="mt-3 grid grid-cols-2 gap-2 sm:inline-flex sm:gap-2">
          <button
            onClick={() => setTab("due")}
            className={[
              "w-full rounded-md px-4 py-2 text-sm transition",
              tab === "due" ? "bg-[#0e3b86] text-white" : "bg-white text-slate-900 hover:bg-slate-100",
            ].join(" ")}
          >
            Payment Due
          </button>
          <button
            onClick={() => setTab("history")}
            className={[
              "w-full rounded-md px-4 py-2 text-sm transition",
              tab === "history" ? "bg-[#0e3b86] text-white" : "bg-white text-slate-900 hover:bg-slate-100",
            ].join(" ")}
          >
            Payment History
          </button>
        </div>
      </div>

      {/* ===== Content ===== */}
      {tab === "history" ? (
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold">Payment History</h3>
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="rounded border px-2 py-1">0 Payments</span>
              <span className="rounded border px-2 py-1">0 Success</span>
              <span className="rounded border px-2 py-1">0 Failed</span>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-gradient-to-b from-white to-slate-50 p-6 text-center text-slate-500 shadow-inner">
            No payment has been made
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-white p-4 shadow">
          <h3 className="text-base font-semibold">Payment Dues to be Paid</h3>

          {/* Desktop/tablet table (md+) */}
          <div className="mt-3 hidden overflow-hidden rounded-lg border md:block">
            <div className="grid grid-cols-3 bg-slate-50 px-4 py-2 text-sm font-medium">
              <div>Payment Type</div>
              <div className="text-right">Balance Amt (₹)</div>
              <div className="text-right">Pay Amount (₹)</div>
            </div>

            {/* row */}
            <div className="grid grid-cols-3 items-center gap-2 px-4 py-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                Registration Fee
              </label>
              <div className="text-right">1,000.00</div>
              <div className="text-right">
                <input
                  placeholder="Enter amount"
                  className="w-40 rounded border px-2 py-1 text-right"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>

          {/* Mobile card list (< md) */}
          <div className="mt-3 space-y-3 md:hidden">
            <div className="rounded-lg border p-3">
              <div className="flex items-start justify-between gap-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <input type="checkbox" className="h-4 w-4" />
                  Registration Fee
                </label>
                <div className="text-right">
                  <div className="text-[11px] uppercase text-slate-500">Balance</div>
                  <div className="text-sm font-semibold">₹1,000.00</div>
                </div>
              </div>
              <div className="mt-3">
                <label className="mb-1 block text-[12px] text-slate-600">Pay Amount (₹)</label>
                <input
                  placeholder="Enter amount"
                  className="w-full rounded border px-3 py-2 text-right text-sm"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-4 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button className="rounded-md border px-4 py-2 text-sm hover:bg-slate-50 sm:w-auto">
              Pay Now
            </button>
            <div className="text-right text-sm sm:text-base">
              <span className="text-slate-600">Total Amount</span>{" "}
              <span className="font-semibold">₹0.00</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
