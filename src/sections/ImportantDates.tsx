// src/sections/ImportantDates.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/** ---- CONFIG ---- */
type DateCard = {
  weekday: string;
  day: string;
  month: string;
  label: string;
  gradient: string;
};

const items: DateCard[] = [
  { weekday: "Sunday",  day: "15", month: "June", label: "Last Date for Registration", gradient: "from-[#7C1DB8] via-[#6B1FD6] to-[#4B1BA8]" },
  { weekday: "Monday",  day: "16", month: "June", label: "Exam Date",                  gradient: "from-[#2F74B8] via-[#1D5F9C] to-[#0D3A5F]" },
  { weekday: "Tuesday", day: "17", month: "June", label: "Result Date",                gradient: "from-[#7C1DB8] via-[#3A1F6F] to-[#0A1C33]" },
];

/** ---- CALENDAR SVG (X/✓ inside cells) ---- */
const calendarSvg = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='288' height='288' viewBox='0 0 288 288'>
  <defs>
    <pattern id='grid' width='48' height='48' patternUnits='userSpaceOnUse'>
      <rect width='48' height='48' fill='white'/>
      <path d='M48 0V48 M0 48H48' stroke='#e8edf4' stroke-width='1'/>
      <circle cx='0' cy='0' r='2' fill='#e2e7f0'/>
    </pattern>
  </defs>
  <rect width='100%' height='100%' fill='url(#grid)' />
  <g stroke='#c9d2de' stroke-width='3' stroke-linecap='round'>
    <g transform='translate(120,72)'><line x1='-10' y1='-10' x2='10' y2='10'/><line x1='10' y1='-10' x2='-10' y2='10'/></g>
    <g transform='translate(264,168)'><line x1='-10' y1='-10' x2='10' y2='10'/><line x1='10' y1='-10' x2='-10' y2='10'/></g>
    <g transform='translate(216,216)'><line x1='-10' y1='-10' x2='10' y2='10'/><line x1='10' y1='-10' x2='-10' y2='10'/></g>
  </g>
  <g>
    <g transform='translate(168,120)'><rect x='-12' y='-12' width='24' height='24' rx='6' fill='#2f6cf2'/><path d='M-6 2 l5 5 l9 -11' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'/></g>
    <g transform='translate(120,216)'><rect x='-12' y='-12' width='24' height='24' rx='6' fill='#2f6cf2'/><path d='M-6 2 l5 5 l9 -11' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'/></g>
    <g transform='translate(264,72)'><rect x='-12' y='-12' width='24' height='24' rx='6' fill='#2f6cf2'/><path d='M-6 2 l5 5 l9 -11' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'/></g>
  </g>
</svg>
`);

/* ====== Animation Variants ====== */
const ease = [0.22, 1, 0.36, 1] as const;

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const underlineReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease, delay: 0.05 },
  },
};

const bgReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

const cardsStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const cardItem = (dy = 16): Variants => ({
  hidden: { opacity: 0, y: dy },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
});

export default function ImportantDates() {
  const reduce = useReducedMotion();

  // Respect reduced-motion: flatten variants
  const safeSectionReveal = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : sectionReveal),
    [reduce]
  );
  const safeUnderline = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : underlineReveal),
    [reduce]
  );
  const safeBg = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : bgReveal),
    [reduce]
  );
  const safeCardsStagger = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : cardsStagger),
    [reduce]
  );
  const safeCardItem = useMemo(() => (reduce ? () => ({ hidden: {}, show: {} }) : cardItem), [reduce]);

  return (
    <section
      id="dates"
      className="
        relative overflow-hidden bg-white
        py-10 sm:py-12 md:py-16
        px-[max(16px,env(safe-area-inset-left))]
      "
    >
      {/* calendar BG on right (subtle on mobile, richer from md+) */}
      <motion.div
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={safeBg}
        className="
          bg-tiles
          pointer-events-none absolute inset-y-0 right-0
          w-[42%]
          opacity-30
          sm:w-[50%] sm:opacity-50
          md:w-[58%] md:opacity-80
          lg:w-[60%] lg:opacity-90
        "
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${calendarSvg}")`,
          backgroundSize: "240px 240px",
          backgroundRepeat: "repeat",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,0.02), rgba(0,0,0,0.6) 35%, rgba(0,0,0,1))",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,0.02), rgba(0,0,0,0.6) 35%, rgba(0,0,0,1))",
        }}
      />
      {/* bump bg tile size on larger screens */}
      <style>{`
        @media (min-width: 768px) { #dates .bg-tiles { background-size: 288px 288px !important; } }
        @media (min-width: 1280px) { #dates .bg-tiles { background-size: 336px 336px !important; } }
      `}</style>

      <div className="container-x relative">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={safeSectionReveal}
          className="max-w-[860px]"
        >
          <h3
            className="
              font-extrabold tracking-tight text-[#0b3c86]
              leading-[1.05]
              text-[26px] min-[380px]:text-[30px]
              sm:text-[32px] md:text-[34px] lg:text-[36px]
            "
          >
            IMPORTANT DATES
          </h3>
          <div
            className="
              mt-1 sm:mt-2 font-extrabold tracking-wide text-[#7d8aa0]
              text-[16px] min-[380px]:text-[18px]
              sm:text-[20px] md:text-[22px]
            "
          >
            FOR SKDU NEST 2025
          </div>
          <motion.div
            variants={safeUnderline}
            className="origin-left mt-4 h-px w-full max-w-[760px] bg-black/70"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={safeCardsStagger}
          className="
            mt-6 sm:mt-8 grid gap-4 sm:gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {items.map((d, i) => (
            <DateTile key={i} {...d} variants={safeCardItem(16)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---- Animated Tile ---- */
function DateTile({
  weekday,
  day,
  month,
  label,
  gradient,
  variants,
}: DateCard & { variants: Variants }) {
  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease }}
      className="
        relative overflow-hidden rounded-2xl
        shadow-[0_10px_24px_rgba(0,0,0,.12)]
        ring-1 ring-black/5
        bg-white
      "
    >
      <div className={`bg-gradient-to-br ${gradient} p-3 sm:p-4 md:p-5`}>
        <div
          className="
            grid items-stretch gap-3
            grid-cols-[84px_1fr]
            sm:grid-cols-[92px_1fr]
            md:grid-cols-[96px_1fr]
          "
        >
          {/* left rail */}
          <div className="relative rounded-xl text-white">
            <div className="text-[10px] sm:text-[11px] opacity-80">
              {weekday}
            </div>
            <div
              className="
                mt-0.5 font-bold leading-none
                text-[32px] min-[380px]:text-[36px]
                sm:text-[40px]
              "
            >
              {day}
            </div>
            <div className="text-[18px] sm:text-[20px] md:text-[22px] -mt-0.5">
              {month}
            </div>
            <div className="absolute top-0 right-0 h-full w-px bg-white/40" />
          </div>

          {/* right content */}
          <div className="flex min-h-[96px] flex-col gap-2 sm:gap-3">
            <div className="h-8 sm:h-9 rounded-md bg-white/16 backdrop-blur-[1px]" />
            <div
              className="
                rounded-md bg-white px-3 py-2
                text-[13px] sm:text-[14px] md:text-[15px]
                font-semibold text-[#0b2340] shadow-sm
              "
            >
              {label}
            </div>
            <div className="h-8 sm:h-9 rounded-md bg-white/14 backdrop-blur-[1px]" />
            <div className="h-8 sm:h-9 rounded-md bg-white/12 backdrop-blur-[1px]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
