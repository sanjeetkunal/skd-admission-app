import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "./icons";

/**
 * BottomDock
 * - Fixed bottom bar with Alerts, Messages, Help
 * - Right side rounded "Home" pill button
 * - Uses `useLocation` to highlight Home when on /dashboard
 */
export default function BottomDock() {
  const { pathname } = useLocation();
  const isHome = pathname.startsWith("/dashboard");

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-30
        bg-white/90 backdrop-blur
        shadow-[0_-6px_24px_rgba(0,0,0,0.08)]
      "
      role="navigation"
      aria-label="Bottom dock"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-2">
        {/* Center actions */}
        <div className="flex flex-1 items-center justify-center gap-6 text-slate-700">
          <button
            className="inline-flex flex-col items-center text-xs hover:opacity-80"
            aria-label="Alerts"
            type="button"
          >
            {Icon.Bell()}
            <span className="mt-0.5">Alerts</span>
          </button>
          <button
            className="inline-flex flex-col items-center text-xs hover:opacity-80"
            aria-label="Messages"
            type="button"
          >
            {Icon.Chat()}
            <span className="mt-0.5">Messages</span>
          </button>
          <button
            className="inline-flex flex-col items-center text-xs hover:opacity-80"
            aria-label="Help"
            type="button"
          >
            {Icon.Help()}
            <span className="mt-0.5">Help</span>
          </button>
        </div>

        {/* Home pill */}
        <NavLink
          to="/dashboard"
          className={`
            inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm
            transition
            ${isHome ? "bg-[#651b1b] text-white" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}
          `}
          aria-current={isHome ? "page" : undefined}
        >
          {Icon.Home("w-5 h-5")}
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
}
