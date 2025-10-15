// src/sections/HowToApply.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { scrollToApply } from "@/utils/scrollToApply";
import college from "@/assets/college.png";

function PillButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#apply"
      onClick={(e) => {
        e.preventDefault();
       // scrollToApply(80);
      }}
      className="inline-block rounded-full bg-white px-6 py-2 text-[14px] font-semibold text-[#ff5a2a]
                 [filter:drop-shadow(0_10px_22px_rgba(0,0,0,0.28))]"
    >
      {children}
    </a>
  );
}

function StepIcon({ name }: { name: "cursor" | "form" | "calendar" }) {
  const cls = "h-6 w-6 text-slate-300";
  switch (name) {
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l7 16 2-7 7-2-16-7z" />
        </svg>
      );
    case "form":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
  }
}

function BulletIcon({ name }: { name: "tie" | "map" | "lab" | "spark" }) {
  const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                 bg-[#fff4ec] text-[#ff6b2e] ring-1 ring-[#ff6b2e]/25"
    >
      {children}
    </span>
  );

  switch (name) {
    case "tie":
      return (
        <Wrap>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 12 9 8l3-4 3 4-3 4Zm0 0 3 8H9l3-8Z" />
          </svg>
        </Wrap>
      );
    case "map":
      return (
        <Wrap>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3V3" />
          </svg>
        </Wrap>
      );
    case "lab":
      return (
        <Wrap>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2h12M9 2v7L3 22h18l-6-13V2" />
          </svg>
        </Wrap>
      );
    case "spark":
      return (
        <Wrap>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v5M12 17v5M2 12h5M17 12h5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M19.1 4.9l-3.5 3.5M8.4 15.6l-3.5 3.5" />
          </svg>
        </Wrap>
      );
  }
}

/* ========= Animations ========= */
const ease = [0.22, 1, 0.36, 1] as const;

const headReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const dividerReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease, delay: 0.05 } },
};

const stepsStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const stepCard: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease, delay: 0.05 } },
};

const careerCardReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const featuresStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const featureItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export default function HowToApply() {
  const reduce = useReducedMotion();

  // Flatten variants if reduced motion
  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headReveal), [reduce]);
  const vDivider = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : dividerReveal), [reduce]);
  const vSteps = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : stepsStagger), [reduce]);
  const vStep = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : stepCard), [reduce]);
  const vCTA = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : ctaReveal), [reduce]);
  const vCareer = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : careerCardReveal), [reduce]);
  const vFeatures = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : featuresStagger), [reduce]);
  const vFeature = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : featureItem), [reduce]);

  return (
    <section className="bg-[#071d33] py-12 md:py-16">
      <div className="container-x">
        {/* Heading + thin divider */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHead}
          className="text-center text-white"
        >
          <div className="text-[26px] font-semibold tracking-wide">HOW TO APPLY</div>
          <div className="mt-1 text-[12px] uppercase tracking-[0.3em] text-slate-300">
            For SKDU NEST 2025
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vDivider}
          className="mx-auto mt-4 h-px w-full max-w-[760px] bg-white/10 origin-center"
        />

        {/* Top 3-step panel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vSteps}
          className="mx-auto mt-8 max-w-[980px] rounded-xl bg-white/5 p-4"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <motion.div
              variants={vStep}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease }}
              className="rounded-lg bg-white/5 px-6 py-5"
            >
              <StepIcon name="cursor" />
              <div className="mt-3 font-semibold text-white">Registration</div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[12px] text-slate-300">
                <li>Visit the SKDU NEST Registration Portal</li>
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={vStep}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease }}
              className="rounded-lg bg-white/5 px-6 py-5"
            >
              <StepIcon name="form" />
              <div className="mt-3 font-semibold text-white">Application Form</div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[12px] text-slate-300">
                <li>Fill out the application form and upload the required documents.</li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={vStep}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease }}
              className="rounded-lg bg-white/5 px-6 py-5"
            >
              <StepIcon name="calendar" />
              <div className="mt-3 font-semibold text-white">Book A Slot</div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[12px] text-slate-300">
                <li>Pay the registration fee and confirm your test slot.</li>
              </ul>
            </motion.div>
          </div>

          {/* <motion.div
            variants={vCTA}
            className="mt-5 flex justify-center"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <PillButton>Apply Now</PillButton>
            </motion.div>
          </motion.div> */}
        </motion.div>

        {/* Career & Placement card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vCareer}
          className="mx-auto mt-8 max-w-[980px] rounded-2xl"
        >
          <div className="rounded-2xl bg-white shadow-[0_6px_24px_rgba(0,0,0,.08)]">
            {/* body with bigger image + features */}
            <div className="grid items-start gap-6 rounded-2xl md:grid-cols-[360px_1fr]">
              {/* LEFT: bigger image */}
              <div className="relative flex items-end justify-center rounded-l-2xl bg-[#e7e6e4] md:rounded-r-none h-full">
                <img
                  src={college}
                  alt="Career support"
                  aria-hidden="true"
                  className="
                    hidden md:block mx-auto absolute bottom-0
                    h-[360px] w-auto object-contain md:h-[400px]
                  "
                  loading="lazy"
                  decoding="async"
                />
                {/* Add a fallback spacer to maintain height on MD+ even if image is loading */}
                <div className="invisible h-[280px] w-px md:visible" />
              </div>

              {/* RIGHT: heading + features */}
              <div className="px-6 py-6">
                <h3 className="mb-4 text-[22px] font-semibold leading-tight">
                  <span className="text-[#0b3c86]">Career &amp; Placement Support at </span>
                  <span className="text-[#f6b63f]">SKDU</span>
                </h3>

                <motion.div
                  variants={vFeatures}
                  className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
                >
                  {[
                    {
                      icon: "tie" as const,
                      title: "Robust Placement Assistance",
                      body:
                        "Our dedicated placement cell works with top companies to help you secure the best opportunities.",
                    },
                    {
                      icon: "map" as const,
                      title: "Real-World Learning",
                      body:
                        "Regular industry visits, field trips, and excursions to bridge the gap between classroom and career.",
                    },
                    {
                      icon: "lab" as const,
                      title: "Guaranteed Industry Exposure",
                      body:
                        "Training and internships from semester one to establish your career.",
                    },
                    {
                      icon: "spark" as const,
                      title: "Skill Enhancement Programs",
                      body:
                        "Personalized career guidance and soft-skill workshops to ensure you stand out in the job market.",
                    },
                  ].map((f, i) => (
                    <motion.div key={i} variants={vFeature}>
                      <div className="flex items-center gap-2">
                        <BulletIcon name={f.icon} />
                        <div className="font-semibold text-slate-800">{f.title}</div>
                      </div>
                      <p className="mt-1 text-[12px] leading-5 text-slate-600">{f.body}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vCTA}
          className="mt-4 flex justify-center rounded-b-2xl pb-6"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <PillButton>Apply Now</PillButton>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
