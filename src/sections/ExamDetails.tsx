// src/sections/ExamDetails.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import exambg from "@/assets/exam-bg.jpg";

type Pill = {
  top: number;   // % from top of image box (for md+ overlay)
  left: number;  // % from left of image box (for md+ overlay)
  width: number; // px width of pill
  label: string;
  value: string;
  sub?: string;
  icon: "monitor" | "marks" | "timer" | "total" | "lang";
};

const PILLS: Pill[] = [
  { top: 14, left: -15, width: 250, label: "MODE OF EXAMINATION", value: "ONLINE MODE", icon: "monitor" },
  { top: 40, left: -15, width: 410, label: "MARKING SCHEME", value: "+1 MARK FOR EACH CORRECT ANSWER", sub: "NO NEGATIVE MARKING FOR INCORRECT ANSWER", icon: "marks" },
  { top: 65, left: -8,  width: 320, label: "EXAM DURATION", value: "60 MINUTES", icon: "timer" },
  { top: 88, left: -8,  width: 205, label: "TOTAL MARKS", value: "100 MARKS", icon: "total" },
  { top: 88, left: 30,  width: 205, label: "EXAM LANGUAGE", value: "ENGLISH", icon: "lang" },
];

/* ========= Icons ========= */
function Icon({ name }: { name: Pill["icon"] }) {
  const cls = "h-3.5 w-3.5";
  switch (name) {
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "marks":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m5 12 4 4 10-10" />
        </svg>
      );
    case "timer":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v5l3 2M9 2h6" />
        </svg>
      );
    case "total":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
    case "lang":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 5h16M4 12h16M4 19h16" />
        </svg>
      );
  }
}

/* ========= Animation Variants ========= */
const ease = [0.22, 1, 0.36, 1] as const;

const leftBlock: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const imagePop: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: 0.05 },
  },
};

const overlayStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const overlayPill: Variants = {
  hidden: { opacity: 0, x: -16, y: 8 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

const mobileListStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const mobilePill: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

/* ===== Overlay pill (md+) ===== */
function DetailPill({ p }: { p: Pill }) {
  return (
    <motion.div
      variants={overlayPill}
      className="
        absolute -translate-y-1/2 rounded-full bg-white px-4 py-2
        backdrop-blur-[1px]
        hidden md:block
        [filter:drop-shadow(0_14px_28px_rgba(0,0,0,0.22))]
      "
      style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.width }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600 shadow-sm">
          <Icon name={p.icon} />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] sm:text-[12px] leading-none tracking-wide text-slate-500 uppercase">
            {p.label}
          </div>
          <div className="mt-1 text-[13px] sm:text-[14px] font-extrabold tracking-wide text-[#0b3c86]">
            {p.value}
          </div>
          {p.sub && (
            <div className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-500">
              {p.sub}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Stacked pill (mobile < md) ===== */
function MobilePill({ p }: { p: Pill }) {
  return (
    <motion.div
      variants={mobilePill}
      className="rounded-xl bg-white px-4 py-3 shadow-[0_8px_18px_rgba(0,0,0,.08)] ring-1 ring-black/5"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600 shadow-sm">
          <Icon name={p.icon} />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] leading-none tracking-wide text-slate-500 uppercase">
            {p.label}
          </div>
          <div className="mt-1 text-[14px] font-extrabold tracking-wide text-[#0b3c86]">
            {p.value}
          </div>
          {p.sub && (
            <div className="mt-0.5 text-[11px] font-semibold tracking-wide text-slate-500">
              {p.sub}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExamDetails() {
  const reduce = useReducedMotion();

  // Respect reduced-motion by flattening variants
  const vLeft = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : leftBlock), [reduce]);
  const vImg = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : imagePop), [reduce]);
  const vOverlayStagger = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : overlayStagger),
    [reduce]
  );
  const vOverlayPill = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : overlayPill), [reduce]);
  const vMobListStagger = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : mobileListStagger),
    [reduce]
  );
  const vMobPill = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : mobilePill), [reduce]);

  return (
    <section
      className="
        overflow-x-clip
        py-8 sm:py-10 md:py-14
        px-[max(16px,env(safe-area-inset-left))]
      "
    >
      <div
        className="
          container-x grid items-start gap-8 sm:gap-10
          md:grid-cols-[minmax(0,420px)_1fr]
        "
        style={{ alignItems: "center" }}
      >
        {/* LEFT HEADING */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vLeft}
          className="pt-1 sm:pt-2"
        >
          <h2
            className="
              font-extrabold leading-[1.02]
              text-[36px] min-[380px]:text-[40px]
              sm:text-[42px] md:text-[46px]
            "
          >
            <span className="block text-[#f8b93a] -mt-2 first:mt-0">EXAM</span>
            <span className="block text-[#f8b93a] -mt-2 first:mt-0">DETAILS</span>
          </h2>
          <div
            className="
              mt-4 sm:mt-5 font-extrabold leading-[1.03] text-slate-900
              text-[28px] sm:text-[32px] md:text-[36px]
            "
          >
            <div className="-mb-1 text-[22px] sm:text-[24px] font-extrabold text-slate-900/85">
              FOR
            </div>
            <div>SKDU NEST</div>
            <div>2025</div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + PILLS */}
        <div className="relative">
          {/* Image card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={vImg}
            className="relative rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,.18)]"
          >
            <img
              src={exambg}
              alt="Exam details"
              className="
                w-full rounded-[18px] object-cover
                h-[260px] xs:h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px]
              "
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Overlay pills (md+) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={vOverlayStagger}
            className="pointer-events-none absolute inset-0 overflow-visible"
          >
            {PILLS.map((pill, i) => (
              <motion.div
                key={i}
                variants={vOverlayPill}
                className="
                  absolute -translate-y-1/2 rounded-full bg-white px-4 py-2
                  backdrop-blur-[1px]
                  hidden md:block
                  [filter:drop-shadow(0_14px_28px_rgba(0,0,0,0.22))]
                "
                style={{ top: `${pill.top}%`, left: `${pill.left}%`, width: pill.width }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600 shadow-sm">
                    <Icon name={pill.icon} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-[12px] leading-none tracking-wide text-slate-500 uppercase">
                      {pill.label}
                    </div>
                    <div className="mt-1 text-[13px] sm:text-[14px] font-extrabold tracking-wide text-[#0b3c86]">
                      {pill.value}
                    </div>
                    {pill.sub && (
                      <div className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-500">
                        {pill.sub}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile stacked pills (< md) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={vMobListStagger}
        className="container-x mt-6 grid gap-3 md:hidden"
      >
        {PILLS.map((pill, i) => (
          <motion.div
            key={i}
            variants={vMobPill}
            className="rounded-xl bg-white px-4 py-3 shadow-[0_8px_18px_rgba(0,0,0,.08)] ring-1 ring-black/5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600 shadow-sm">
                <Icon name={pill.icon} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] leading-none tracking-wide text-slate-500 uppercase">
                  {pill.label}
                </div>
                <div className="mt-1 text-[14px] font-extrabold tracking-wide text-[#0b3c86]">
                  {pill.value}
                </div>
                {pill.sub && (
                  <div className="mt-0.5 text-[11px] font-semibold tracking-wide text-slate-500">
                    {pill.sub}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
