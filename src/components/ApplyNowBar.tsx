// src/components/ApplyNowBar.tsx
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { scrollToApply } from "@/utils/scrollToApply";

type Props = {
  target?: string;       // e.g. "#apply"
  offset?: number;       // sticky header offset
  showAfter?: number;    // px scrolled before "Apply" shows
  label?: string;        // Apply button text
  phone: string;         // tel number, e.g. "+919876543210"
  callLabel?: string;    // Call button text
};

export default function ApplyNowBar({
  target = "#apply",
  offset = 80,
  showAfter = 120,
  label = "Apply Now",
  phone,
  callLabel = "Call",
}: Props) {
  const [applyVisible, setApplyVisible] = useState(false);

  const onScroll = useCallback(() => {
    const scrolledEnough = window.scrollY > showAfter;

    let targetInView = false;
    const el = document.querySelector(target) as HTMLElement | null;
    if (el) {
      const r = el.getBoundingClientRect();
      targetInView = r.top >= 0 && r.top <= window.innerHeight * 0.4;
    }

    setApplyVisible(scrolledEnough && !targetInView);
  }, [showAfter, target]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToApply(offset, target);
  };

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${phone}`;
  };

  return (
    <div
      className="fixed right-4 z-50 flex flex-col items-end gap-3"
      style={{ bottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}
    >
      {/* Call: always visible */}
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleCallClick}
        aria-label={callLabel}
        className="inline-flex items-center gap-2 rounded-full bg-[#0bb07b] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[18px] w-[18px] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.1 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>{callLabel}</span>
      </motion.button>

      {/* Apply: only after scroll */}
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: applyVisible ? 0 : 40, opacity: applyVisible ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleApplyClick}
        aria-label={label}
        aria-hidden={!applyVisible}
        className={[
          "inline-flex items-center justify-center rounded-full bg-[#ff5a2a] px-5 py-3",
          "text-[14px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] focus:outline-none",
          applyVisible ? "" : "pointer-events-none",
        ].join(" ")}
      >
        {label}
      </motion.button>
    </div>
  );
}
