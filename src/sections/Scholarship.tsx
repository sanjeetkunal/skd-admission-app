// src/sections/Scholarship.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import scholargirl from "@/assets/scholarGirl.png";

type Slab = { score: string; waiver: string };
const SLABS: Slab[] = [
  { score: "95%", waiver: "50% TUITION FEE" },
  { score: "90%", waiver: "40% TUITION FEE" },
  { score: "85%", waiver: "30% TUITION FEE" },
  { score: "80%", waiver: "20% TUITION FEE" },
];

/* ===== Animations ===== */
const ease = [0.22, 1, 0.36, 1] as const;

const headReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const watermarkReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease, delay: 0.1 } },
};

const slabsStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const slabCard: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
};

const rightCardReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease, delay: 0.05 } },
};

const eligibilityReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Scholarship() {
  const reduce = useReducedMotion();

  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headReveal), [reduce]);
  const vWatermark = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : watermarkReveal), [reduce]);
  const vSlabs = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : slabsStagger), [reduce]);
  const vSlab = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : slabCard), [reduce]);
  const vRight = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : rightCardReveal), [reduce]);
  const vElig = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : eligibilityReveal), [reduce]);

  return (
    <section
      className="
        relative overflow-hidden bg-white
        py-8 sm:py-10 md:py-14
        px-[max(16px,env(safe-area-inset-left))]
      "
    >
      {/* WATERMARK (animated) */}
      <motion.div
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={vWatermark}
        className="
          pointer-events-none absolute inset-x-0 top-10 z-0 hidden select-none justify-center
          sm:flex
        "
      >
        <div
          className="
            font-extrabold uppercase tracking-[.05em] text-slate-200/70 leading-none
            text-[clamp(44px,8.5vw,120px)]
          "
        >
          SCHOLARSHIP
        </div>
      </motion.div>

      <div className="container-x relative z-[1]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHead}
          className="text-center"
        >
          <div className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] text-slate-500">
            Scholarship Benefits With
          </div>
          <div
            className="
              mt-1 font-extrabold tracking-tight
              text-[24px] sm:text-[28px] md:text-[34px]
            "
          >
            <span className="text-[#0b3c86]">SKDU NEST</span>{" "}
            <span className="text-[#0b3c86]">2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <div
          className="
            mt-10 sm:mt-14
            grid items-start gap-8 sm:gap-10
            md:grid-cols-2
          "
        >
          {/* LEFT: slabs (stagger) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={vSlabs}
          >
            {/* headers aligned */}
            <div
              className="
                grid items-end gap-4 sm:gap-6 pb-1
                grid-cols-[140px_1fr]
                sm:grid-cols-[160px_1fr]
                md:grid-cols-[180px_1fr]
              "
            >
              <div className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide text-slate-700">
                SCORES
              </div>
              <div className="text-right text-[15px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide text-slate-700">
                SCHOLARSHIP
              </div>
            </div>

            <div className="mt-3 space-y-3 sm:space-y-4">
              {SLABS.map((s, i) => (
                <motion.div
                  key={i}
                  variants={vSlab}
                  className="
                    rounded-lg border border-slate-200 bg-white
                    shadow-[0_4px_10px_rgba(0,0,0,.06)]
                  "
                >
                  <div
                    className="
                      grid items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4
                      grid-cols-[140px_1fr]
                      sm:grid-cols-[160px_1fr]
                      md:grid-cols-[180px_1fr]
                    "
                  >
                    {/* score (left) */}
                    <div>
                      <div className="text-[#0b3c86] font-extrabold text-[17px] sm:text-[18px] md:text-[20px]">
                        {s.score}
                      </div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">
                        or above
                      </div>
                    </div>

                    {/* waiver (right aligned) */}
                    <div className="text-right">
                      <div className="text-[#e43d2f] font-extrabold tracking-wide text-[15px] sm:text-[16px] md:text-[18px]">
                        {s.waiver}
                      </div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">
                        waiver
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Tailwind background + PNG inside; reveal on scroll */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={vRight}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 p-4 shadow-[0_14px_40px_rgba(0,0,0,.18)]">
              <div className="relative rounded-xl bg-white/30 p-3 backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full rounded-lg bg-gradient-radial from-slate-200 via-slate-300 to-slate-200">
                  {/* Girl image anchored to box bottom; tweak offset if you want slight overlap */}
                  <img
                    src={scholargirl}
                    alt="Scholarship Student"
                    className="
                      pointer-events-none select-none object-contain -top-[102px]
                      absolute inset-x-0 bottom-0 mx-auto
                      h-[330px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[500px]
                    "
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* decorative dots / rings */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full border-4 border-white/50" />
            </div>
          </motion.div>
        </div>

        {/* Eligibility */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vElig}
          className="mt-8 sm:mt-10"
        >
          <div className="text-[#0b3c86] font-extrabold text-[18px] sm:text-[20px] md:text-[22px]">
            Eligibility Criteria for <span className="text-[#f6b63f]">SKDU NEST 2025</span>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] sm:text-[14px] leading-7 text-slate-600">
            <li>
              Students must have passed or be appearing for their Class 12 examinations from a
              recognized board.
            </li>
            <li>
              Students who do not meet the standard scholarship criteria but excel in SKDU NEST will
              be considered for alternative scholarship opportunities.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
