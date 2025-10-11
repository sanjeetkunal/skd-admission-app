// src/sections/Recognitions.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/** Prefer imports so bundler includes assets reliably */
import r1 from "@/assets/rec/1.png";
import r2 from "@/assets/rec/2.png";
import r3 from "@/assets/rec/3.png";
import r4 from "@/assets/rec/4.png";
import r5 from "@/assets/rec/5.png";
import r6 from "@/assets/rec/6.png";
import r7 from "@/assets/rec/7.png";
import r8 from "@/assets/rec/8.png";
import r9 from "@/assets/rec/9.png";
import r10 from "@/assets/rec/10.png";
import r11 from "@/assets/rec/11.png";
import r12 from "@/assets/rec/12.png";
import r13 from "@/assets/rec/13.png";
import r14 from "@/assets/rec/14.png";

const LOGOS: string[] = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14];

const AUTOPLAY_MS = 4500;
const NAV_COUNT = 3;

/** Build slides of exact size perView, fill last by wrapping from start */
function buildSlides<T>(arr: T[], perView: number): T[][] {
  if (perView <= 0) return [];
  const totalSlides = Math.ceil(arr.length / perView);
  const out: T[][] = [];
  for (let s = 0; s < totalSlides; s++) {
    const start = s * perView;
    let g = arr.slice(start, start + perView);
    if (g.length < perView) g = g.concat(arr.slice(0, perView - g.length));
    out.push(g);
  }
  return out;
}

/* ================= Animations ================= */
const ease = [0.22, 1, 0.36, 1] as const;

const headReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const dividerReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show:  { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease, delay: 0.05 } },
};

// Fade-in only (avoid transform so it doesn't clash with your translateX on the track)
const viewportReveal: Variants = {
  hidden: { opacity: 0 },
  show:  { opacity: 1, transition: { duration: 0.55, ease, delay: 0.05 } },
};

// Each group (slide) staggers its logos once when it first enters view
const groupStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const logoItem: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.35, ease } },
};

export default function Recognitions() {
  const [isSmall, setIsSmall] = useState(false);
  const perView = isSmall ? 2 : 4;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [slideW, setSlideW] = useState(0);
  const [idx, setIdx] = useState(1); // extended index
  const [anim, setAnim] = useState(true);
  const jumpingRef = useRef(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const reduce = useReducedMotion();

  // keep slideW correct with ResizeObserver
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSlideW(el.clientWidth);
    });
    ro.observe(el);
    setSlideW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // detect small screens + update on resize
  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // real slides and extended slides
  const realSlides = useMemo(() => buildSlides(LOGOS, perView), [perView]);
  const total = realSlides.length;

  const slides = useMemo(() => {
    if (!total) return [];
    const first = realSlides[0];
    const last = realSlides[total - 1];
    return [last, ...realSlides, first];
  }, [realSlides, total]);

  // reflow helper
  const forceReflow = () => void trackRef.current?.offsetHeight;

  // safe hard jump without flicker
  const jumpTo = (targetIdx: number) => {
    jumpingRef.current = true;
    setAnim(false);
    setIdx(targetIdx);
    requestAnimationFrame(() => {
      forceReflow();
      requestAnimationFrame(() => {
        setAnim(true);
        setTimeout(() => (jumpingRef.current = false), 0);
      });
    });
  };

  // reset coherently on layout change
  useEffect(() => {
    jumpTo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, slideW, total]);

  // transitionend for clone boundaries
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onEnd = () => {
      if (idx === slides.length - 1) jumpTo(1);
      else if (idx === 0) jumpTo(slides.length - 2);
      scheduleNext();
    };
    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, slides.length]);

  // visibility-based pause
  useEffect(() => {
    const onVis = () => {
      pausedRef.current = document.hidden;
      if (!pausedRef.current) scheduleNext(true); // resume quickly
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // hover pause (optional)
  const onMouseEnter = () => {
    pausedRef.current = true;
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  const onMouseLeave = () => {
    pausedRef.current = false;
    scheduleNext(true);
  };

  // robust autoplay: schedule each tick with setTimeout
  const scheduleNext = (immediate = false) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (pausedRef.current || total <= 1) return;
    const delay = immediate ? 300 : AUTOPLAY_MS;
    timerRef.current = window.setTimeout(() => {
      if (!jumpingRef.current) setIdx((i) => i + 1);
    }, delay);
  };

  // start autoplay and restart on idx change
  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, total]);

  // nav helpers
  const realIndex = total ? ((idx - 1 + total) % total) : 0;
  const segStarts = useMemo(() => {
    if (!total) return [0, 0, 0];
    const a: number[] = [];
    for (let k = 0; k < NAV_COUNT; k++) a.push(Math.floor((k * total) / NAV_COUNT));
    return a;
  }, [total]);
  const activeNav =
    total === 0 ? 0 : Math.min(NAV_COUNT - 1, Math.floor((realIndex * NAV_COUNT) / total));

  const translate = `translateX(-${idx * slideW}px)`;

  // Reduced-motion safe variants (flatten if needed)
  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headReveal), [reduce]);
  const vDivider = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : dividerReveal), [reduce]);
  const vViewport = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : viewportReveal), [reduce]);
  const vGroup = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : groupStagger), [reduce]);
  const vLogo = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : logoItem), [reduce]);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-x">
        {/* Heading */}
        <motion.h3
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHead}
          className="text-center text-[30px] font-semibold leading-tight tracking-wide text-[#0b3c86]"
        >
          Recognized for <span className="text-[#f6b63f]">Quality</span>, Approved for Your{" "}
          <span className="text-[#f6b63f]">Dreams</span>
        </motion.h3>

        {/* divider */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vDivider}
          className="mx-auto mt-4 h-px w-full max-w-[1080px] bg-slate-400/60 origin-center"
        />

        {/* Slider */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vViewport}
          className="relative mx-auto mt-6 max-w-[980px]"
        >
          <div
            ref={viewportRef}
            className="overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              ref={trackRef}
              data-track
              className="flex will-change-transform"
              style={{
                transform: translate,
                transition: anim ? "transform 600ms ease-out" : "none",
                width: `${slides.length * slideW}px`,
              }}
            >
              {slides.map((group, gi) => (
                <div key={gi} style={{ width: `${slideW}px` }} className="flex-shrink-0">
                  {/* Each slide staggers its logos the first time it actually enters the viewport */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    variants={vGroup}
                    className="grid grid-cols-2 gap-6 px-4 sm:px-0 sm:grid-cols-4"
                  >
                    {group.map((src, i) => (
                      <motion.div
                        key={`${src}-${i}`}
                        variants={vLogo}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2, ease }}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={src}
                          alt="recognition"
                          draggable={false}
                          className="h-20 w-auto object-contain sm:h-24"
                          loading="eager"  // small icons: eager prevents paint delay
                          decoding="sync"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom nav: exactly 3 bars */}
        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: NAV_COUNT }).map((_, k) => {
            const isActive = k === activeNav;
            const cls = isActive
              ? "bg-[#ff6b2e]"
              : k === 0
              ? "bg-slate-300"
              : k === 1
              ? "bg-slate-400"
              : "bg-slate-500";
            return (
              <button
                key={k}
                aria-label={`Go to section ${k + 1}`}
                className={`h-[3px] w-8 transition-[background-color,opacity] ${cls}`}
                onClick={() => {
                  if (!total) return;
                  const targetReal = segStarts[k] ?? 0;
                  jumpTo(targetReal + 1);  // extended index
                  scheduleNext(true);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
