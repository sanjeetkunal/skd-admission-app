// src/sections/HeroApply.tsx
import { useEffect, useMemo } from "react";
import {
  motion,
  useReducedMotion,
  useAnimationControls,
  type Variants,
} from "framer-motion";
import ApplyForm from "@/forms/ApplyForm";
import studentUrl from "@/assets/banner_girl.png";

/* ===== Animation Variants ===== */
const easeCurve = [0.22, 1, 0.36, 1] as const;

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = (dy = 16, d = 0): Variants => ({
  hidden: { opacity: 0, y: dy },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeCurve, delay: d },
  },
});

const fadeRight = (dx = 24, d = 0): Variants => ({
  hidden: { opacity: 0, x: dx },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeCurve, delay: d },
  },
});

const popIn = (s = 0.96, d = 0): Variants => ({
  hidden: { opacity: 0, scale: s },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeCurve, delay: d },
  },
});

export default function HeroApply() {
  const reduce = useReducedMotion();
  const imgCtrl = useAnimationControls();

  // Hero illustration: reveal first, then float (no duplicate transition keys)
  useEffect(() => {
    imgCtrl
      .start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeCurve, delay: 0.25 },
      })
      .then(() => {
        if (!reduce) {
          imgCtrl.start({
            y: [0, -8, 0],
            transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
          });
        }
      });
  }, [imgCtrl, reduce]);

  // Optional: subtle pop for rings only if not reduced motion
  const ringsVariant = useMemo<Variants>(
    () => (reduce ? { hidden: {}, show: {} } : popIn(0.9, 0.06)),
    [reduce]
  );

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 520px at 85% -20%, rgba(20,90,200,.28), transparent 60%), radial-gradient(900px 420px at 30% -20%, rgba(20,60,160,.22), transparent 60%), #0b2340",
      }}
    >
      {/* Decorative rings */}
      <motion.div
        variants={ringsVariant}
        className="pointer-events-none absolute -top-40 right-[-120px] h-[420px] w-[420px] rounded-full border-[36px] border-[#0e325a]/50 max-md:opacity-40 md:h-[520px] md:w-[520px] md:border-[44px]"
        aria-hidden
      />
      <motion.div
        variants={ringsVariant}
        className="pointer-events-none absolute bottom-[-160px] left-[-60px] h-[420px] w-[680px] rounded-[340px] border-[36px] border-[#173a6a]/50 max-md:opacity-40 md:h-[520px] md:w-[800px] md:border-[44px]"
        aria-hidden
      />

      {/* Outer container with safe-area paddings */}
      <div className="mx-auto w-full max-w-[120rem] px-[max(16px,env(safe-area-inset-left))] pb-10 pt-20 sm:px-[max(24px,env(safe-area-inset-left))] md:pb-16 md:pt-24 lg:px-[max(48px,env(safe-area-inset-left))] xl:px-[max(64px,env(safe-area-inset-left))]">
        <div
          className="
            grid items-start gap-8
            md:grid-cols-2 md:gap-10
            lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12
            xl:grid-cols-[minmax(0,1fr)_560px] mt-[100px]
          "
        >
          {/* Left: Copy */}
          <motion.div variants={staggerParent} className="relative z-[1] text-white">
            <motion.h1
              variants={fadeUp(14, 0)}
              className="
                mb-2 font-extrabold tracking-tight text-white
                leading-[1.05]
                text-[34px] min-[380px]:text-[36px]
                sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[64px]
              "
            >
              SKDU NEST <span className="text-amber-400">2025</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(12, 0.05)}
              className="text-white/80 text-[13px] min-[380px]:text-[14px] sm:text-[15px]"
            >
              Shri Khushal Das University National Entrance Scholarship Test
            </motion.p>

            <motion.div
              variants={fadeUp(16, 0.1)}
              className="mt-6 space-y-2 text-[16px] sm:text-[18px] md:text-[20px] leading-snug"
            >
              <p className="text-white/80">A Test to Transform Your Future</p>
              <p>
                Earn the <span className="font-bold text-amber-400">Scholarship</span> You{" "}
                <span className="font-extrabold">Deserve!</span>
              </p>
            </motion.div>

            {/* Scholarship block */}
            <motion.div variants={fadeUp(18, 0.16)} className="mt-6 sm:mt-8">
              <p className="italic text-white/90 text-[18px] sm:text-[22px]">Earn</p>
              <div className="mt-1 flex flex-wrap items-end gap-x-2 leading-tight">
                <span className="italic font-extrabold tracking-wide text-[30px] min-[380px]:text-[34px] sm:text-[40px] md:text-[48px] xl:text-[40px]">
                  SCHOLARSHIPS
                </span>
                <span className="mb-2 text-[10px] sm:text-xs italic">UPTO</span>
              </div>

              <div className="mt-1 flex flex-wrap items-end gap-2 sm:gap-3">
                <span className="leading-none font-extrabold text-amber-400 text-[48px] min-[380px]:text-[56px] sm:text-[64px] md:text-[72px]">
                  50%
                </span>
                <span className="mb-[6px] text-[18px] sm:text-[22px] font-semibold italic">VIA</span>
                <span className="mb-[4px] text-[24px] sm:text-[30px] font-extrabold italic text-amber-400">
                  SKDU
                </span>
                <span className="mb-[4px] text-[24px] sm:text-[30px] font-extrabold italic">NEST</span>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp(20, 0.22)}
              whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(0,0,0,.28)" }}
              whileTap={{ scale: 0.98 }}
              href="#apply"
              className="mt-7 inline-block rounded-2xl bg-white px-4 py-2.5 shadow-[0_10px_26px_rgba(0,0,0,.25)] sm:px-5 sm:py-3"
            >
              <span className="font-extrabold tracking-wide text-[#0b2340] text-[16px] sm:text-[20px] md:text-[22px]">
                ADMISSIONS OPEN <span className="text-amber-400">2025</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Right: Apply Form */}
          <motion.div id="apply" className="relative z-[2]" variants={fadeRight(28, 0.18)}>
            <motion.div
              variants={popIn(0.98, 0.28)}
              className="
                rounded-2xl bg-white/95 backdrop-blur
                p-4 shadow-[0_10px_30px_rgba(0,0,0,.18)]
                sm:p-5 md:p-6
                max-w-[680px] md:max-w-none
              "
            >
              <div className="mb-4 text-center text-[18px] sm:text-[20px] font-bold text-[#0b2340]">
                Apply Now
              </div>
              <ApplyForm />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero illustration (controls manage reveal → float) */}
      <motion.img
        src={studentUrl}
        alt="Student"
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={imgCtrl}
        className="
          pointer-events-none select-none
          absolute z-[1]
          hidden md:block
          md:bottom-[-12px] md:left-[54%] md:w-[420px] md:-translate-x-[18%]
          lg:bottom-[-18px] lg:left-[52%] lg:w-[520px] lg:-translate-x-[16%]
          xl:bottom-[-24px] xl:left-[30%] xl:w-[660px] xl:-translate-x-[12%]
          max-[900px]:[@media(orientation:landscape)]:hidden
        "
        loading="lazy"
        decoding="async"
      />
    </motion.section>
  );
}
