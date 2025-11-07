// src/sections/HowToApply.tsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, useReducedMotion, type Variants, LayoutGroup } from "framer-motion";
import college from "@/assets/college.png";

// ====== Campus strip images (update paths to your assets) ======
const PROGRAMS = [
  {
    key: "classrooms",
    title: "Classrooms",
    desc:
      "Best in class infrastructure, with state of the art structure of the university campus.",
    img: "/src/assets/campus/classrooms.jpg",
  },
  { key: "labs", title: "LABS", img: "/src/assets/campus/labs.jpg" },
  { key: "hostel", title: "HOSTEL FACILITY", img: "/src/assets/campus/hostel.jpg" },
  { key: "transport", title: "TRANSPORT FACILITY", img: "/src/assets/campus/transport.jpg" },
  { key: "library", title: "CENTRAL LIBRARY", img: "/src/assets/campus/library.jpg" },
  { key: "auditorium", title: "AUDITORIUM", img: "/src/assets/campus/auditorium.jpg" },
  { key: "horse", title: "HORSE RIDING ACADEMY", img: "/src/assets/campus/horse.jpg" },
  { key: "mess", title: "HOSTEL MESS", img: "/src/assets/campus/mess.jpg" },
  { key: "dairy", title: "DAIRY FARM", img: "/src/assets/campus/dairy.jpg" },
  { key: "biogas", title: "BIO GAS PLANT", img: "/src/assets/campus/biogas.jpg" },
];

// ====== Your existing data (unchanged) ======
const FACULTIES = [
  "Arts & Humanities",
  "Commerce & Management",
  "Science and Fire & Safety",
  "Agriculture Sciences",
  "Engineering & Technology",
  "Science",
  "Law",
  "Pharmacy",
  "Nursing",
  "Para-Medical Sciences",
  "Allied Health Sciences",
  "Education & Special Education",
  "Psychology",
  "Forensic Sciences & Cyber Forensic",
  "Library & Information Sciences",
  "Physical Education, Sports & Yoga",
];

type Section = { title: string; items: string[] };
const LEFT_SECTIONS: Section[] = [
  { title: "BJMC", items: [] },
  { title: "Integrated Courses", items: ["BJMC–MJMC"] },
  { title: "B.A.", items: ["General"] },
  {
    title: "BA (HONS.)",
    items: [
      "Hindi",
      "Public Administration",
      "Punjabi",
      "Economics",
      "English",
      "Geography",
      "History",
      "Mathematics",
      "Political Science",
      "Sanskrit",
      "Sociology",
    ],
  },
];

const RIGHT_SECTIONS: Section[] = [
  { title: "MJMC", items: [] },
  {
    title: "M.A.",
    items: [
      "Defence & Strategic Studies",
      "Drawing & Painting",
      "Economics",
      "Education",
      "English",
      "Geography",
      "Hindi",
      "History",
      "Home Science",
      "Mathematics",
      "Sociology",
      "Music",
      "Philosophy",
      "Political Science",
      "Yoga",
      "Psychology",
      "Public Administration",
      "Punjabi",
      "Sanskrit",
    ],
  },
];

// ====== Animations ======
const ease: any = [0.22, 1, 0.36, 1];
const head: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };
const card: Variants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const featuresStagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } } };
const featureItem: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } } };
const careerCardReveal: Variants = { hidden: { opacity: 0, y: 16, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease} } };

export default function HowToApply() {
  const reduce = useReducedMotion();
  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : head), [reduce]);
  const vCard = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : card), [reduce]);
  const vCareer = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : careerCardReveal), [reduce]);
  const vFeatures = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : featuresStagger), [reduce]);
  const vFeature = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : featureItem), [reduce]);

  return (
    <section
      className="
        relative py-12 md:py-16
        bg-[radial-gradient(1200px_600px_at_50%_-100px,#3a0a0a_0%,#190707_55%,#120405_100%)]
        text-white
      "
    >
      <div className="container-x">

        {/* ✅ NEW: Explore Our Campus strip (added ABOVE your “Explore Our Programs”) */}
        <ExploreProgramsStrip />

        {/* ===== Explore Our Programs (your existing section) ===== */}
        <section className="relative rounded-2xl p-0 md:p-0 text-white">
          <div className="pt-12 md:pt-14">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={vHead}
              className="mx-auto max-w-5xl text-center"
            >
              <h2 className="text-[30px] md:text-[36px] font-semibold tracking-wide">Explore Our Programs</h2>
              <div className="mx-auto mt-2 h-[2px] w-[88%] max-w-4xl bg-white/20" />
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-200/80">Shaping Your Future</p>
            </motion.div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[380px_1fr]">
              {/* Left: Faculties list */}
              <div className="px-2 md:px-0">
                {FACULTIES.map((name, idx) => (
                  <div key={idx} className="mb-2.5 leading-none">
                    <span className="text-slate-300">Faculty Of </span>
                    <span className={`font-semibold ${idx === 0 ? "text-[26px] text-[#ff6b2e]" : "text-white"}`}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right: White card with orange rules */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={vCard}
                className="rounded-xl bg-white text-slate-900 shadow-[0_8px_26px_rgba(0,0,0,.22)]"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  {/* LEFT COLUMN */}
                  <div className="p-6 md:p-7">
                    {LEFT_SECTIONS.map((sec, i) => (
                      <div key={i} className="pb-5">
                        <h4 className="pb-2 text-[13px] font-extrabold tracking-wide text-[#0b2742] uppercase">
                          {sec.title}
                        </h4>
                        <div className="mb-3 h-[2px] w-full origin-left bg-[#ff6b2e]/80" />
                        {sec.items.length > 0 && (
                          <ul className="space-y-1.5 text-[13px] text-slate-700">
                            {sec.items.map((it, k) => (
                              <li key={k} className="leading-5">{it}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="border-t md:border-l md:border-t-0 border-slate-200 p-6 md:p-7">
                    {RIGHT_SECTIONS.map((sec, i) => (
                      <div key={i} className="pb-5">
                        <h4 className="pb-2 text-[13px] font-extrabold tracking-wide text-[#0b2742] uppercase">
                          {sec.title}
                        </h4>
                        <div className="mb-3 h-[2px] w-full origin-left bg-[#ff6b2e]/80" />
                        {sec.items.length > 0 && (
                          <ul className="grid gap-1.5 text-[13px] text-slate-700">
                            {sec.items.map((it, k) => (
                              <li key={k} className="leading-5">{it}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== Career & Placement card (unchanged) ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vCareer}
          className="mx-auto mt-10  rounded-2xl"
        >
          <div className="rounded-2xl bg-white shadow-[0_6px_24px_rgba(0,0,0,.08)]">
            <div className="grid items-start gap-6 rounded-2xl md:grid-cols-[360px_1fr]">
              {/* LEFT: bigger image */}
              <div className="relative flex items-end justify-center rounded-l-2xl bg-[#e7e6e4] md:rounded-r-none h-full">
                <img
                  src={college}
                  alt="Career support"
                  aria-hidden="true"
                  className="hidden md:block mx-auto absolute bottom-0 h-[360px] w-auto object-contain md:h-[400px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="invisible h-[280px] w-px md:visible" />
              </div>

              {/* RIGHT: heading + features */}
              <div className="px-6 py-6">
                <h3 className="mb-4 text-[22px] font-semibold leading-tight">
                  <span className="text-[#0b3c86]">Career &amp; Placement Support at </span>
                  <span className="text-[#f6b63f]">SKDU</span>
                </h3>

                <motion.div variants={vFeatures} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Robust Placement Assistance",
                      body:
                        "Our dedicated placement cell works with top companies to help you secure the best opportunities.",
                    },
                    {
                      title: "Real-World Learning",
                      body:
                        "Regular industry visits, field trips, and excursions to bridge the gap between classroom and career.",
                    },
                    {
                      title: "Guaranteed Industry Exposure",
                      body:
                        "Training and internships from semester one to establish your career.",
                    },
                    {
                      title: "Skill Enhancement Programs",
                      body:
                        "Personalized career guidance and soft-skill workshops to ensure you stand out in the job market.",
                    },
                  ].map((f, i) => (
                    <motion.div key={i} variants={featureItem}>
                      <div className="font-semibold text-slate-800">{f.title}</div>
                      <p className="mt-1 text-[12px] leading-5 text-slate-600">{f.body}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= Explore Programs :: Strip Component ================= */
function ExploreProgramsStrip() {
  const AUTO_MS = 3000; // autoplay interval (ms)

  // 0 = big left card (static), 1..N = narrow panels; autoplay on 1..N
  const [active, setActive] = useState<number>(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((idx) => {
        const start = 1;
        const end = PROGRAMS.length - 1;
        return idx >= end ? start : idx + 1;
      });
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-[30px] md:text-[36px] font-semibold tracking-wide">
            Explore Our Campus
          </h2>
          <div className="mx-auto mt-2 h-[2px] w-[88%] max-w-4xl bg-white/20" />
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-200/80">
            Experience The Infrastructure
          </p>
        </motion.div>

        {/* Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease } }}
          viewport={{ once: true, amount: 0.25 }}
          className="
            mt-8 md:mt-10
            flex gap-3 md:gap-4
            overflow-x-auto
            pb-4 md:pb-6
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <LayoutGroup id="campus-panels">
            {/* Left big feature card (static) */}
            {PROGRAMS.slice(0, 1).map((p) => (
              <article
                key={p.key}
                className="
                  relative shrink-0
                  w-[85%] sm:w-[520px] md:w-[640px]
                  h-[260px] sm:h-[320px] md:h-[360px]
                  rounded-[18px] sm:rounded-[22px]
                  overflow-hidden snap-center
                  shadow-[0_10px_40px_rgba(0,0,0,.35)]
                  bg-slate-800/30 ring-1 ring-white/10
                "
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.1))]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <h3 className="text-white/95 text-[18px] sm:text-[20px] md:text-[22px] font-semibold">{p.title}</h3>
                  {p.desc && (
                    <p className="mt-2 text-[12px] sm:text-[13px] md:text-[14px] text-white/85 max-w-[80ch]">
                      {p.desc}
                    </p>
                  )}
                </div>
              </article>
            ))}

            {/* Narrow panels — exactly one active at a time (others collapse) */}
            {PROGRAMS.slice(1).map((p, i) => {
              const idx = i + 1;
              const isActive = idx === active;

              return (
                <motion.button
                  layout
                  key={p.key}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => { pause(); setActive(idx); }}
                  onBlur={resume}
                  onClick={() => setActive(idx)}
                  className="
                    group relative shrink-0
                    h-[260px] sm:h-[320px] md:h-[360px]
                    rounded-[18px] sm:rounded-[22px]
                    overflow-hidden snap-center
                    ring-1 ring-white/10
                    transition-colors duration-300 ease-out
                    hover:ring-white/25
                    focus:outline-none focus:ring-2 focus:ring-[#f6b63f]
                  "
                  transition={{ layout: { type: "spring", stiffness: 260, damping: 26 } }}
                  style={{
                    width: isActive ? "clamp(240px,32vw,360px)" : "clamp(64px,7vw,86px)",
                  }}
                  aria-expanded={isActive}
                  aria-pressed={isActive}
                >
                  <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.25))]" />

                  {/* Label switches orientation based on active */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={[
                        "text-white font-extrabold uppercase tracking-wider drop-shadow transition-all duration-300",
                        isActive
                          ? "text-[14px] sm:text-[16px] md:text-[18px] [writing-mode:horizontal-tb] rotate-0 px-4 py-2 bg-black/35 rounded-md"
                          : "text-[11px] sm:text-[12px] md:text-[13px] [writing-mode:vertical-rl] rotate-180",
                      ].join(" ")}
                    >
                      {p.title}
                    </span>
                  </div>

                  {/* depth */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
                </motion.button>
              );
            })}
          </LayoutGroup>
        </motion.div>
      </div>
    </section>
  );
}
