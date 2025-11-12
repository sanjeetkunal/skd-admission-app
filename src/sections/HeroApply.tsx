import { useMemo } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import ApplyForm from "@/forms/ApplyForm";
import studentUrl from "@/assets/banner_girl.png";

/* ===== Animations ===== */
const easeCurve = [0.22, 1, 0.36, 1] as const;

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fadeUp = (dy = 16, d = 0): Variants => ({
  hidden: { opacity: 0, y: dy },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCurve, delay: d } },
});
const fadeRight = (dx = 24, d = 0): Variants => ({
  hidden: { opacity: 0, x: dx },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeCurve, delay: d } },
});
const popIn = (s = 0.96, d = 0): Variants => ({
  hidden: { opacity: 0, scale: s },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeCurve, delay: d } },
});

export default function HeroApply() {
  const reduce = useReducedMotion();

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
      {/* Rings */}
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

      {/* Container */}
      <div
        className="
          relative
          mx-auto w-full max-w-[120rem]
          px-[max(16px,env(safe-area-inset-left))]
          pb-10 md:pb-0
          pt-14 md:pt-20
          sm:px-[max(24px,env(safe-area-inset-left))]
          lg:px-[max(48px,env(safe-area-inset-left))]
          xl:px-[max(64px,env(safe-area-inset-left))]
        "
      >
        {/* Layout:
            - mobile: 1 col (Text → Form)
            - md:     2 cols top row (Text + Image), next row Form full-width
            - lg+:    3 cols; image absolute bottom-pinned; form right column
        */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2 lg:grid-cols-3
            md:gap-x-8 md:gap-y-0
            lg:gap-y-8
            items-start
            mt-[clamp(24px,6vw,80px)]
            md:pb-0 lg:pb-16
          "
        >
          {/* Left Section */}
          <motion.div
            variants={staggerParent}
            className="relative z-[1] text-white w-full col-span-1 order-1"
          >
            <motion.h1
              variants={fadeUp(14, 0)}
              className="
                mt-6 md:mt-0            /* mobile-only top gap for the heading */
                mb-2
                font-extrabold tracking-tight leading-[1.05]
                text-[clamp(28px,6.2vw,64px)]
              "
            >
              SKDU NEST <span className="text-amber-400">2025</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(12, 0.05)}
              className="text-white/80 text-[clamp(12px,1.7vw,18px)]"
            >
              Shri Khushal Das University National Entrance Scholarship Test
            </motion.p>

            <motion.div
              variants={fadeUp(16, 0.1)}
              className="mt-[clamp(12px,2.2vw,20px)] space-y-[clamp(6px,1.4vw,10px)] leading-snug text-[clamp(14px,2.1vw,20px)]"
            >
              <p className="text-white/80">A Test to Transform Your Future</p>
              <p>
                Earn the <span className="font-bold text-amber-400">Scholarship</span> You{" "}
                <span className="font-extrabold">Deserve!</span>
              </p>
            </motion.div>

            <motion.div variants={fadeUp(18, 0.16)} className="mt-[clamp(16px,3vw,28px)]">
              <p className="italic text-white/90 text-[clamp(16px,2.2vw,22px)]">Earn</p>
              <div className="mt-1 flex flex-wrap items-end gap-x-2 leading-tight">
                <span className="italic font-extrabold tracking-wide text-[clamp(28px,6vw,40px)]">
                  SCHOLARSHIPS
                </span>
                <span className="mb-2 text-[clamp(10px,1.5vw,12px)] italic">UPTO</span>
              </div>

              <div className="mt-1 flex flex-wrap items-end gap-[clamp(6px,1.2vw,12px)]">
                <span className="leading-none font-extrabold text-amber-400 text-[clamp(40px,8vw,72px)]">
                  50%
                </span>
                <span className="mb-[6px] text-[clamp(16px,2.5vw,22px)] font-semibold italic">VIA</span>
                <span className="mb-[4px] text-[clamp(20px,3.2vw,30px)] font-extrabold italic text-amber-400">
                  SKDU
                </span>
                <span className="mb-[4px] text-[clamp(20px,3.2vw,30px)] font-extrabold italic">
                  NEST
                </span>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp(20, 0.22)}
              whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(0,0,0,.28)" }}
              whileTap={{ scale: 0.98 }}
              href="#apply"
              className="mt-[clamp(14px,3vw,24px)] inline-block rounded-2xl bg-white px-[clamp(12px,2.4vw,20px)] py-[clamp(10px,2vw,14px)] shadow-[0_10px_26px_rgba(0,0,0,.25)]"
            >
              <span className="font-extrabold tracking-wide text-[#0b2340] text-[clamp(14px,2.2vw,22px)]">
                ADMISSIONS OPEN <span className="text-amber-400">2025</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Center image — visible only on tablet (hidden on mobile) */}
          <motion.div
            className="
              relative hidden md:flex lg:hidden
              col-span-1 order-2
              h-full
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-full h-full flex items-end justify-center">
              <img
                src={studentUrl}
                alt="Student"
                className="pointer-events-none select-none block w-auto max-h-[520px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Desktop image pinned bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block pointer-events-none col-span-1 order-2"
          >
            <img
              src={studentUrl}
              alt="Student"
              className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-0 w-auto max-w-[720px] h-auto z-[1]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* FORM — md: full width with top gap; lg+: right column */}
          <motion.div
            variants={fadeRight(28, 0.18)}
            className="
              relative z-[2]
              order-3
              col-span-1 md:col-span-2 lg:col-span-1
              md:mt-8 lg:mt-0       /* tablet gap between button & form */
              md:mb-8 lg:mb-0
              w-full
              justify-self-stretch md:justify-self-stretch lg:justify-self-end
            "
          >
            <motion.div
              variants={popIn(0.98, 0.28)}
              id="apply"
              className="rounded-2xl bg-white/95 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,.18)] w-full p-[clamp(14px,2.4vw,22px)]"
            >
              <div className="mb-[clamp(10px,2vw,16px)] text-center font-bold text-[#0b2340] text-[clamp(16px,2.2vw,20px)]">
                Apply Now
              </div>
              <ApplyForm />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile spacing */}
        <div className="block md:hidden h-6" />
      </div>
    </motion.section>
  );
}
