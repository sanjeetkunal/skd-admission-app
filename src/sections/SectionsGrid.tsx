// src/sections/SectionsGrid.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { scrollToApply } from "@/utils/scrollToApply";

type Item = { title: string; count: number; icon: "search" | "bulb" | "hands" };

const ITEMS: Item[] = [
  { title: "QUANTITATIVE ANALYSIS", count: 40, icon: "search" },
  { title: "LOGICAL REASONING", count: 30, icon: "bulb" },
  { title: "GENERAL KNOWLEDGE", count: 30, icon: "hands" },
];

function Icon({ name }: { name: Item["icon"] }) {
  const size = 32; // px
  const cn = "h-8 w-8 sm:h-9 sm:w-9 object-contain";
  switch (name) {
    case "search":
      return (
        <img
          className={cn}
          src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
          width={size}
          height={size}
          alt="Quantitative Analysis icon"
          loading="lazy"
          decoding="async"
        />
      );
    case "bulb":
      return (
        <img
          className={cn}
          src="https://cdn-icons-png.flaticon.com/128/427/427735.png"
          width={size}
          height={size}
          alt="Logical Reasoning icon"
          loading="lazy"
          decoding="async"
        />
      );
    case "hands":
      return (
        <img
          className={cn}
          src="https://cdn-icons-png.flaticon.com/128/609/609058.png"
          width={size}
          height={size}
          alt="General Knowledge icon"
          loading="lazy"
          decoding="async"
        />
      );
  }
}

/* ===== Animations ===== */
const ease = [0.22, 1, 0.36, 1] as const;

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const barReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.45, ease, delay: 0.05 } },
};

const gridStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const tileItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease, delay: 0.05 } },
};

export default function SectionsGrid() {
  const reduce = useReducedMotion();

  // Respect reduced motion: flatten variants when needed
  const vHeading = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headingReveal), [reduce]);
  const vBar = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : barReveal), [reduce]);
  const vGrid = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : gridStagger), [reduce]);
  const vTile = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : tileItem), [reduce]);
  const vCta = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : ctaReveal), [reduce]);

  return (
    <section className="bg-[#eaf2f9] py-10 md:py-14">
      <div className="container-x text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHeading}
        >
          <div className="text-[18px] tracking-wide text-slate-700">SECTIONS</div>
        </motion.div>

        <motion.div
          variants={vBar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mt-2 h-[2px] w-full max-w-[720px] bg-rose-200/70 origin-center"
        />

        {/* 3 columns */}
        <motion.div
          variants={vGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {ITEMS.map((it, i) => (
            <motion.div
              key={i}
              variants={vTile}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease }}
              className="flex flex-col items-center justify-start"
            >
              <Icon name={it.icon} />
              <div className="mt-3 text-[14px] font-extrabold tracking-wide text-[#0b3c86]">
                {it.title}
              </div>
              <div className="mt-1 text-[12px] tracking-wide text-slate-500">
                {it.count} QUESTIONS
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Apply Now pill */}
        <motion.div
          variants={vCta}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="#apply"
            onClick={(e) => {
              e.preventDefault();
              scrollToApply(80);
            }}
            whileHover={{ y: -2, boxShadow: "0 12px 26px rgba(0,0,0,0.28)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#ff5a2a]
                       [filter:drop-shadow(0_10px_22px_rgba(0,0,0,0.28))]"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
