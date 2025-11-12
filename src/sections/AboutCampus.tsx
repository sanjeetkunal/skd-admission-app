// src/sections/AboutCampus.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import collegebg from "@/assets/clg_img.png";

/* ===== Animations ===== */
const ease = [0.22, 1, 0.36, 1] as const;

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const lineReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease, delay: 0.05 } },
};

const imagePop: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 14 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease, delay: 0.05 } },
};

const bandReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function AboutCampus() {
  const reduce = useReducedMotion();

  // Flatten variants when reduced motion is enabled
  const vHeading = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headingReveal), [reduce]);
  const vLine = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : lineReveal), [reduce]);
  const vImg = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : imagePop), [reduce]);
  const vBand = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : bandReveal), [reduce]);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-x">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={vHeading}
          className="text-center"
        >
          <div className="text-[14px] text-slate-600">Welcome to</div>
          <h2 className="mt-1 text-[28px] md:text-[30px] font-extrabold tracking-wide">
            <span className="text-[#0b3c86]">SHRI KHUSHAL DAS UNIVERSITY</span>
            <span className="text-slate-700"> - </span>
            <span className="text-[#f6b63f]">SKDU</span>
          </h2>
        </motion.div>

        <motion.div
          variants={vLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mt-3 h-px w-full max-w-[980px] bg-slate-300 origin-center"
        />


        {/* Navy band (RELATIVE) */}
        <motion.div
          variants={vBand}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="
            relative mx-auto mt-0
            px-5 py-6 md:px-6 md:py-6
            text-center text-[12px] leading-6 text-slate-700
          ">
          <p>
            Welcome to Shri Khushal Das University (SKDU) – a beacon of knowledge and excellence
            located in the heart of Hanumangarh, Rajasthan. Established in 2018 by the Shri Guru
            Govind Singh Charitable Trust, SKDU stands tall as an institution approved by the Government
            of Rajasthan and recognized by the University Grants Commission (UGC), New Delhi.
          </p>
          <p className="mt-4">
            At SKDU, education goes beyond textbooks and classrooms. Rooted in the principles of
            intellectual pursuit, academic integrity, and service to society, we are committed to
            shaping not just professionals but thoughtful leaders ready to inspire and drive positive
            change. Our campus is a dynamic hub where tradition and innovation meet. While we honor our
            rich heritage, we embrace modern teaching methodologies and promote cutting-edge research
            to prepare our students for the challenges of a rapidly evolving world. Here, every idea
            matters, and every dream is nurtured.
          </p>
        </motion.div>

        {/* spacer so next section doesn't collide */}
        <div className="h-16 md:h-20" />
      </div>
    </section>
  );
}
