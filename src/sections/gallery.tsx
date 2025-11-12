// src/sections/GalleryPro.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { src: string; alt?: string; w?: number; h?: number };

type GalleryProProps = {
  items?: Item[];
  title?: string;
  highlight?: string;
  sub?: string;
  id?: string;
};

const DEMO: Item[] = [
  { src: "https://skduniversity.org/assets/skdImages/reason-to-select/Reason2.jpg", alt: "Demo 01" },
  { src: "https://skduniversity.org/assets/skdImages/reason-to-select/Reason3.JPG", alt: "Demo 02" },
  { src: "https://skduniversity.org/assets/skdImages/reason-to-select/Reason4.JPG", alt: "Demo 03" },
  { src: "https://skduniversity.org/assets/skdImages/reason-to-select/Reason5.jpeg", alt: "Demo 04" },
  { src: "https://skduniversity.org/assets/skdImages/reason-to-select/Reason1.jpg", alt: "Demo 05" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s", alt: "Demo 06" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s", alt: "Demo 07" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s", alt: "Demo 08" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s", alt: "Demo 09" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s", alt: "Demo 10" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.25, margin: "-16% 0px -16% 0px" } as const;

const contVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVar = (i: number) => ({
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, rotate: i % 2 ? 0.4 : -0.4, transition: { duration: 0.55, ease } },
});

const aspect = (w?: number, h?: number) => (!w || !h ? "aspect-[16/10]" : `aspect-[${w}/${h}]`);

function Lightbox({
  open,
  items,
  index,
  onClose,
  onIndex,
}: {
  open: boolean;
  items: Item[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
  const prev = useCallback(() => onIndex(clamp(index - 1, 0, items.length - 1)), [index, items.length, onIndex]);
  const next = useCallback(() => onIndex(clamp(index + 1, 0, items.length - 1)), [index, items.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === backdropRef.current) onClose();
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
            <motion.figure
              key={index}
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.975, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.975, y: 6 }}
            >
              <img
                src={items[index].src}
                alt={items[index].alt || "Gallery image"}
                className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain shadow-[0_25px_80px_rgba(0,0,0,.5)]"
              />
              {items[index].alt && (
                <figcaption className="mt-3 text-center text-sm text-white/80">{items[index].alt}</figcaption>
              )}

              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-3">
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 text-slate-800 shadow-lg ring-1 ring-black/10 hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 text-slate-800 shadow-lg ring-1 ring-black/10 hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute -right-2 -top-2 h-9 w-9 rounded-full bg-white/90 text-slate-800 shadow-md ring-1 ring-black/10 hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </motion.figure>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Card({ item, index, onOpen }: { item: Item; index: number; onOpen: (i: number) => void }) {
  const [src, setSrc] = useState(item.src);

  return (
    <motion.button
      type="button"
      variants={cardVar(index)}
      whileHover={{
        y: -4,               // tighter lift
        scale: 1.015,
        rotate: 0,
        boxShadow: "0 14px 36px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.05)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      onClick={() => onOpen(index)}
      className="
        group relative w-full overflow-hidden rounded-2xl bg-white
        p-1.5 md:p-2                           /* tighter inner padding */
        ring-1 ring-black/5
        shadow-[0_8px_20px_rgba(0,0,0,.08)]    /* softer shadow for dense layout */
        focus:outline-none
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-8 rounded-[28px]
          opacity-0 blur-2xl transition-opacity duration-300
          group-hover:opacity-100
          bg-[radial-gradient(60%_55%_at_50%_50%,rgba(246,182,63,0.18)_0%,transparent_70%)]
        "
      />
      <div className={["relative", aspect(item.w, item.h)].join(" ")}>
        <img
          src={src}
          alt={item.alt || "Gallery image"}
          className="absolute inset-0 h-full w-full rounded-xl object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setSrc("https://via.placeholder.com/800x500?text=Image")}
        />
      </div>
    </motion.button>
  );
}

export default function GalleryPro({
  items = DEMO,
  title = "Events",
  highlight = "Celebrations",
  sub = "at SKDU",
  id = "gallery",
}: GalleryProProps) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = useCallback((i: number) => {
    setIdx(i);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  // tighter, responsive gaps
  const gridCls = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5";
  const span = (i: number) =>
    i % 9 === 0 ? "col-span-2 lg:col-span-3" : i % 5 === 0 ? "col-span-2 lg:col-span-2" : "col-span-1";

  return (
    <section id={id} className="relative overflow-x-clip bg-white py-12 sm:py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-120px,rgba(32,75,143,0.10)_0%,transparent_55%),radial-gradient(1000px_520px_at_50%_115%,rgba(246,182,63,0.16)_0%,transparent_65%)]"
      />

      <div className="container-x relative">
        <motion.div initial="hidden" whileInView="show" viewport={VIEWPORT} className="mb-7 sm:mb-9 md:mb-10 text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-tight">
            <span className="text-[#204b8f]">{title} </span>
            <span className="text-[#f6b63f]">&amp; {highlight}</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-slate-700">{sub}</p>
        </motion.div>

        <motion.div variants={contVar} initial="hidden" whileInView="show" viewport={VIEWPORT} className={gridCls}>
          {items.map((item, i) => (
            <div key={`${item.src}-${i}`} className={span(i)}>
              <Card item={item} index={i} onOpen={openAt} />
            </div>
          ))}
        </motion.div>
      </div>

      <Lightbox open={open} items={items} index={idx} onClose={close} onIndex={setIdx} />
    </section>
  );
}
