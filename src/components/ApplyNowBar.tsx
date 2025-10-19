// src/components/ApplyNowBar.tsx
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { scrollToApply } from "@/utils/scrollToApply";

type Props = {
  target?: string;
  offset?: number;
  showAfter?: number;
  label?: string;
  phone: string;
  callLabel?: string;
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
  <>
    {/* APPLY: vertical right-edge tab at center */}
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end pr-2">
      <motion.button
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: applyVisible ? 0 : 60, opacity: applyVisible ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleApplyClick}
        aria-label={label}
        aria-hidden={!applyVisible}
        className={[
          "relative select-none",
          "rounded-l-2xl rounded-r-none",
          "bg-[#ff5a2a] text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)]",
          "h-40 px-0 py-2",
          "focus:outline-none",
          applyVisible ? "" : "pointer-events-none",
        ].join(" ")}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[-6px] top-0 h-full w-[2px] bg-gray-300"
        />
        <span className="flex items-center justify-center gap-2 px-2 font-semibold tracking-widest text-[12px] uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 rotate-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>{label}</span>
        </span>
      </motion.button>
    </div>

    {/* CALL: fixed bottom-right (safe-area aware) */}
    <div
      className="fixed right-4 z-50"
      style={{ bottom: "max(env(safe-area-inset-bottom,0px),16px)" }}
    >
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleCallClick}
        aria-label={callLabel}
        className="inline-flex items-center justify-center rounded-full bg-[#0bb07b] p-3 text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] focus:outline-none"
        title={callLabel}
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
      </motion.button>
    </div>
  </>
);


}
