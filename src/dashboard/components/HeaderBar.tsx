import React, { useState, useRef, useEffect } from "react";
import logoLight from "@/assets/logo-light.png";


type HeaderBarProps = {
  logoSrc: string;
  userName: string;
  title?: string;          // defaults to "SHRI KHUSHAL DAS UNIVERSITY"
  sticky?: boolean;        // if true, pins header to top
  onProfile?: () => void;
  onLogout?: () => void;
};

const Icon = {
  chevronDown: (cls = "w-4 h-4") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

export default function HeaderBar({
  logoSrc,
  userName,
  title = "SHRI KHUSHAL DAS UNIVERSITY",
  sticky = false,
  onProfile,
  onLogout,
}: HeaderBarProps) {
  const [open, setOpen] = useState(false);
  const popref = useRef<HTMLDivElement | null>(null);

  // close on outside click / esc
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (popref.current && !popref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header
      className={[
        "z-40 w-full bg-[#0e3b86] text-white",
        sticky ? "sticky top-0" : "relative",
      ].join(" ")}
      role="banner"
    >
      {/* subtle bottom divider like the mock */}
      <div className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          {/* Left: logo + wordmark */}
          <div className="flex items-center gap-3 min-w-0">
            <img src={logoLight} alt="SKDU logo" className="h-14 w-auto shrink-0" />
          </div>

          {/* Right: user dropdown */}
          <div className="relative" ref={popref}>
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="hidden sm:inline">{userName}</span>
              {/* small avatar dot */}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[11px]">
                {userName?.[0]?.toUpperCase() || "U"}
              </span>
              {Icon.chevronDown("w-4 h-4 opacity-90")}
            </button>

            {/* Menu */}
            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-white/20 bg-white/95 text-slate-900 shadow-xl ring-1 ring-black/5 backdrop-blur"
              >
                <div className="px-3 py-2 text-xs font-semibold text-slate-500">
                  Signed in as <span className="text-slate-700">{userName}</span>
                </div>
                <button
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onProfile?.();
                  }}
                  className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-100"
                >
                  My Profile
                </button>
                <div className="my-1 h-px bg-slate-200" />
                <button
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onLogout?.();
                  }}
                  className="block w-full px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
