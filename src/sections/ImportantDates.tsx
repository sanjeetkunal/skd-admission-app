// src/sections/ImportantDates.tsx
import React from "react";
import { motion } from "framer-motion";
import studentUrl from "@/assets/banner_girl1.png";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ImportantDates() {
  return (
    <section id="exam-prep-hero" className="relative overflow-hidden">
      {/* ===== YOUR GRADIENT COVERS FULL SECTION ===== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          // same string you sent:
          background:
            "radial-gradient(1200px 600px at 50% -100px, #3a0a0a 0%, #190707 55%, #120405 100%)",
        }}
      />

      {/* (NO white overlay here) */}

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-6 lg:gap-10">
          {/* ================= LEFT ================= */}
          <div className="relative z-[2] text-white">
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease }}
              className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold"
            >
              अब ग्रेजुएशन के साथ
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.05 }}
              className="mt-1"
            >
              <div className="font-extrabold leading-[1.03] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] text-[#F6A63C]">
                COMPETITIVE EXAM
              </div>
              <div className="font-extrabold leading-[1.05] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-white">
                <span className="italic">PREPARATION</span> भी
              </div>
            </motion.div>

            {/* SIMPLE, CLEAN RIBBON */}
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              className="
                mt-6 sm:mt-8 lg:mt-9 text-center
                rounded-2xl border border-white/10 bg-[#0B4B8F]
                shadow-[0_14px_34px_rgba(0,0,0,.28)]
                px-5 sm:px-7 md:px-9 py-4 sm:py-5 md:py-6
              "
            >
              <div className="font-extrabold uppercase tracking-[1px] text-[#FFC043]
                              text-[20px] min-[380px]:text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px]">
                SSC , BANKING, RAILWAY
              </div>
              <div className="mt-1 text-white/95 font-semibold
                              text-[15px] min-[380px]:text-[16px] sm:text-[17px] md:text-[18px]">
                जैसी सरकारी नौकरी का सपना होगा अब और आसान
              </div>
              <div className="mx-auto mt-3 h-[3px] w-[120px] rounded-full bg-[#F6A63C]/90" />
            </motion.div>

            {/* SKDU line */}
            {/* ================= SKDU line ================= */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.12 }}
              className="mt-14 sm:mt-18 md:mt-20 flex items-center gap-4 text-white"
            >
              {/* Pen Icon */}
              <svg
                width="54"
                height="54"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M10 32l10 6 18-18-6-6L14 32l-4 8 8-4"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="leading-tight">
                <div className="text-[34px] sm:text-[38px] md:text-[42px] font-extrabold tracking-tight text-white">
                  SKDU
                </div>
                <div className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                  जहाँ <span className="text-[#FF6B6B] font-extrabold">EDUCATION</span> और{" "}
                  <span className="text-[#7FB3FF] font-extrabold">PREPARATION</span> साथ चलती है!
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease, delay: 0.04 }}
            className="relative order-[-1] lg:order-none z-[3]"
          >
            <div className="relative ml-auto w-full max-w-[620px] lg:max-w-[600px]">
              <img
                src={studentUrl}
                alt="Student"
                className="relative z-[1] w-full h-auto rounded-[28px] object-contain mt-[30px] top-[40px]"
                style={{ transform: "translateZ(0)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
