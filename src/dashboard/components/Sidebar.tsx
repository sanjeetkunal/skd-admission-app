// src/dashboard/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./icons";

type SidebarProps = {
  isMobileOpen?: boolean;           // mobile drawer state
  onMobileClose?: () => void;       // close on click/tap
};

const items = [
  { label: "Home",               to: "/dashboard",               icon: Icon.Home,  exact: true },
  { label: "My Applications",    to: "/dashboard/applications",  icon: Icon.File },
  { label: "My Documents",       to: "/dashboard/documents",     icon: Icon.Upload },
  { label: "My Payments",        to: "/dashboard/payments",      icon: Icon.Card },
  { label: "Exam Details",       to: "/dashboard/exam-details",  icon: Icon.Exam },
  { label: "My Query",           to: "/dashboard/query",         icon: Icon.Query },
  { label: "Request a Callback", to: "/dashboard/request-callback", icon: Icon.Phone },
  { label: "My Profile",         to: "/dashboard/profile",       icon: Icon.File },
];

export default function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  return (
    <aside
      className={[
        // Mobile drawer container
        "fixed left-0 top-0 z-40 h-screen w-[85%] max-w-[320px] bg-[#101418] text-white shadow-2xl",
        "transition-transform duration-300 ease-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full",
        // Desktop: static panel
        "md:static md:z-30 md:h-auto md:w-[320px] md:translate-x-0 md:shadow-xl",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Sidebar navigation"
    >
      {/* top block */}
      <div className="relative px-5 pt-16 pb-4 text-center">
        {/* avatar */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#101418] bg-slate-700 shadow-md">
            <img
              src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* name + session */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-white/30" />
          <div className="text-left">
            <div className="text-[18px] font-semibold leading-tight">Kunal</div>
            <div className="text-[12px] text-slate-300">Session 2025-26</div>
          </div>
          <span className="h-px w-14 bg-white/30" />
        </div>
      </div>

      {/* menu */}
      <nav className="px-5 pb-6">
        <ul className="space-y-3">
          {items.map((m) => (
            <li key={m.to}>
              <NavLink
                to={m.to}
                end={m.exact}
                onClick={onMobileClose}   // 🔔 mobile: auto close on select
                className={({ isActive }) =>
                  [
                    "group flex h-11 w-full items-center justify-between rounded-[4px] px-3",
                    "border border-[#103580] bg-[#0d2d6a]",
                    isActive
                      ? "bg-white text-[#0d2d6a] shadow-sm"
                      : "text-white hover:brightness-110",
                  ].join(" ")
                }
              >
                <span className="flex items-center gap-2">
                  <span className="grid place-items-center h-6 w-6 rounded bg-white/10">
                    {m.icon("w-4 h-4")}
                  </span>
                  <span className="text-[14px] font-medium">{m.label}</span>
                </span>
                <span className="w-3 text-right opacity-60">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
