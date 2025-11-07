import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import student from "@/assets/g-bg.png";
import collegebg from "@/assets/clg_imgs.png";
type Facility = {
  title: string;
  body: string;
  icon: "auditorium" | "labs" | "class" | "hostel" | "dairy" | "transport" | "library" | "riding" | "mess" | "biogas";
  side: "left" | "right";
  accent?: boolean;
};

const FACILITIES: Facility[] = [
  {
    title: "Modern Auditorium",
    body:
      "A spacious, well-equipped auditorium hosts events, seminars, and cultural activities, promoting creativity and collaborative learning.",
    icon: "auditorium",
    side: "left",
  },
  {
    title: "Advanced Labs",
    body:
      "State-of-the-art laboratories provide hands-on experience and practical learning across disciplines, encouraging research and innovation.",
    icon: "labs",
    side: "right",
  },
  {
    title: "Smart Classrooms",
    body:
      "Our classrooms are equipped with modern teaching aids and technology to create an interactive and engaging learning environment for students.",
    icon: "class",
    side: "left",
    accent: true,
  },
  {
    title: "Comfortable Hostel Facilities",
    body:
      "Safe, secure, and well-maintained hostel accommodations ensure that students feel at home, fostering a sense of community on campus.",
    icon: "hostel",
    side: "right",
  },
  {
    title: "Dairy Farm",
    body:
      "Our on-campus dairy farm provides fresh milk and dairy products, ensuring healthy living while offering students practical learning opportunities.",
    icon: "dairy",
    side: "left",
    accent: true,
  },
  {
    title: "Transport Facility",
    body:
      "A fleet of buses connects the campus to nearby towns and cities, providing safe and reliable transportation for students and staff.",
    icon: "transport",
    side: "right",
  },
  {
    title: "Central Library",
    body:
      "Our expansive library offers a vast collection of books, journals, and digital resources to support academic excellence and research initiatives.",
    icon: "library",
    side: "left",
  },
  {
    title: "Horse Riding Academy",
    body:
      "A unique facility that promotes discipline and physical well-being while allowing students to experience the thrill of horse riding.",
    icon: "riding",
    side: "right",
  },
  {
    title: "Hostel Mess",
    body:
      "The hostel mess serves nutritious, hygienic, and delicious meals, catering to the diverse dietary preferences of students.",
    icon: "mess",
    side: "left",
    accent: true,
  },
  {
    title: "Bio Gas Plant",
    body:
      "A sustainable initiative that supports energy efficiency, contributing to the campus’s commitment to eco-friendly practices and responsibility.",
    icon: "biogas",
    side: "right",
  },
];


function I({ name }: { name: Facility["icon"] }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "auditorium":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 18v-5l9-4 9 4v5" />
          <path d="M7 21v-3M12 21v-3M17 21v-3" />
        </svg>
      );
    case "labs":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v6L3 21h18l-6-12V3" />
        </svg>
      );
    case "class":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10M12 16v4" />
        </svg>
      );
    case "hostel":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 20V9l9-6 9 6v11H3Z" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "dairy":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3h8l-2 4v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7L8 3z" />
        </svg>
      );
    case "transport":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="11" rx="2" />
          <path d="M7 17v2M17 17v2M3 13h18" />
        </svg>
      );
    case "library":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19V5a2 2 0 0 1 2-2h3v18H6a2 2 0 0 1-2-2zM15 21V3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3z" />
        </svg>
      );
    case "riding":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 18l4-6 4 2 4-6 4 6" />
          <circle cx="8" cy="19" r="2" />
          <circle cx="20" cy="19" r="2" />
        </svg>
      );
    case "mess":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3v9a4 4 0 0 0 4 4h0V3M12 3v13a4 4 0 0 0 4 4h0" />
        </svg>
      );
    case "biogas":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2s-4 4-4 7a4 4 0 1 0 8 0c0-3-4-7-4-7z" />
          <path d="M6 22h12" />
        </svg>
      );
  }
}


const ease: any = [0.22, 1, 0.36, 1];
const head: Variants = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };
const pill: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } };
const imgPop: Variants = { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } } };

function FacilityPill({ f }: { f: Facility }) {
  return (
    <motion.div
      variants={pill}
      className={[
        "rounded-[999px] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,.10)] ring-1 ring-black/5",
        f.accent ? "outline outline-2 outline-[#ef7d3b]" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          <I name={f.icon} />
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-extrabold tracking-wide text-[#0b3c86]">{f.title}</div>
          <p className="mt-1 text-[12px] leading-5 text-slate-600">{f.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExamDetails() {
  const reduce = useReducedMotion();
  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : head), [reduce]);
  const vPill = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : pill), [reduce]);
  const vImg = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : imgPop), [reduce]);

  const leftItems = FACILITIES.filter((f) => f.side === "left");
  const rightItems = FACILITIES.filter((f) => f.side === "right");

  return (
 

    <section
      className="
        relative overflow-x-clip
        py-12 md:py-16
        bg-[#fff5f2]
      "
    >

       <div className="container-x relative -top-[50px] md:-top-[220px] -mb-[130px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={vImg}
          className="relative mx-auto w-full max-w-[980px] "
        >
          <div className="relative z-[2] mx-auto overflow-hidden">
            <img
              src={collegebg}
              alt="Campus building"
              className="block w-full object-cover aspect-[16/6]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>



      <div className="container-x relative ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHead}
          className="text-center"
        >
          <h2 className="text-[30px] md:text-[38px] font-semibold leading-tight">
            <span className="text-[#204b8f]">More Than </span>
            <span className="text-[#f6b63f]">Just a Campus</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-700">
            A World-Class Infrastructure for Your Success
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_minmax(260px,380px)_1fr] md:items-center">
          <div className="grid gap-6">
            {leftItems.map((f, i) => (
              <FacilityPill key={i} f={f} />
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={vImg}
            className="relative md:self-stretch"
          >
            <div className="relative h-full flex items-end justify-center">
              <div className="absolute -inset-8 rounded-full bg-[#f6b63f]/10 blur-2xl" aria-hidden />
              <img
                src={student}
                alt="Student at campus"
                className="relative z-[1] mx-auto w-auto h-[320px] md:h-full max-h-none object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <div className="grid gap-6">
            {rightItems.map((f, i) => (
              <FacilityPill key={i} f={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
