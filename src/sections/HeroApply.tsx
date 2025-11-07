// src/sections/HeroApply.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroApply() {
  return (
    <section
      id="hero-apply"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="
        relative w-full overflow-hidden text-white
        bg-no-repeat bg-cover bg-center
      "
    >
      {/* Contrast overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.58),rgba(0,0,0,.38))]" />

      {/* Container */}
      <div className="relative mx-auto w-full
    px-5 sm:px-8 lg:px-12 xl:px-16
    py-10 lg:py-16 mt-[100px]
    max-md:px-4 max-md:py-8 max-md:mt-[60px]">
        {/* ⬇️ Left | Right (fixed form width) like before */}
        <div
          className="
            grid items-start gap-8 lg:gap-10
      lg:grid-cols-[minmax(0,1.05fr)_minmax(0,520px)]
      xl:grid-cols-[minmax(0,1.05fr)_minmax(0,560px)]
      max-md:grid-cols-1 max-md:gap-8
          "
        >
          {/* LEFT COPY */}
          <LeftCopy />

          {/* RIGHT FORM (fixed side, aligned to right) */}
          <div className="justify-self-stretch lg:justify-self-end w-full max-w-[560px]">
            <FormCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Left block ----------------- */
function LeftCopy() {
  return (
    <div className="max-w-[820px]">
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease }}
        className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-white/90"
      >
        अब सिर्फ डिग्री नहीं, सरकारी नौकरी की तैयारी भी!
      </motion.p>

      <div className="mt-4 h-[3px] w-[78%] max-w-[560px] rounded-full bg-[#f4b23e]" />

      <motion.h1
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease, delay: 0.04 }}
        className="mt-6 leading-tight font-extrabold"
      >
        <span className="block text-[34px] sm:text-[38px] md:text-[44px]">
          डिग्री + <span className="whitespace-nowrap">SSC, BANKING, RAILWAY</span>
        </span>
        <span className="mt-2 block text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-white/90">
          की तैयारी एक साथ,
        </span>
      </motion.h1>

      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease, delay: 0.08 }}
        className="mt-6"
      >
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg bg-[#e4404f] px-6 py-3 text-[18px] font-extrabold tracking-wide text-white shadow-[0_8px_22px_rgba(0,0,0,.25)] hover:brightness-110 focus:outline-none"
        >
          बिना Extra Fees!
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease, delay: 0.12 }}
        className="mt-10"
      >
        <div className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold">
          2025 के लिए प्रवेश प्रारंभ
        </div>
        <div className="mt-2 text-[24px] sm:text-[26px] md:text-[28px] font-extrabold">
          <span className="text-[#f4b23e]">SKDU, Hanumangarh</span>
        </div>
        <div className="mt-4 h-[3px] w-[55%] max-w-[460px] rounded-full bg-[#f4b23e]" />
      </motion.div>
    </div>
  );
}

/* ----------------- Right tabbed card ----------------- */
function FormCard() {
  const [tab, setTab] = useState<"register" | "login">("register");

  return (
    <motion.div
      initial={{ x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease, delay: 0.04 }}
      className="relative w-full"
    >
      <div className="rounded-xl bg-white text-slate-800 shadow-[0_18px_60px_rgba(0,0,0,.35)]">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h3 className="text-[22px] sm:text-[24px] font-extrabold text-slate-800">
            Admissions Open 2025
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex">
          <TabButton active={tab === "register"} onClick={() => setTab("register")} label="Register Now" left />
          <TabButton active={tab === "login"} onClick={() => setTab("login")} label="Login Now" />
        </div>

        {/* Body */}
        <div className="px-6 py-6 min-h-[360px]">
          <AnimatePresence mode="wait">
            {tab === "register" ? <RegisterTab /> : <LoginTab />}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- Tabs ---- */
function RegisterTab() {
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.28, ease }}
      className="space-y-4"
    >
      <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#f6b63f]" placeholder="Your Full Name*" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex">
          <div className="flex items-center gap-2 rounded-l-md border border-slate-300 bg-slate-50 px-3 text-[14px]">
            <span role="img" aria-label="flag">🇮🇳</span>
            <span className="text-slate-700">+91</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" /></svg>
          </div>
          <input className="w-full rounded-r-md border border-l-0 border-slate-300 px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#f6b63f]" placeholder="Mobile Number*" />
        </div>
        <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#f6b63f]" placeholder="Email Address*" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select placeholder="Select State*" />
        <Select placeholder="Select District*" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select placeholder="Select Program*" />
        <Select placeholder="Select Course*" />
      </div>

      <Select placeholder="Select Session*" />

      <div className="flex items-center gap-3 pt-1">
        <input id="notify" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#0b3c86] focus:ring-[#0b3c86]" />
        <label htmlFor="notify" className="text-[13px] text-slate-700">
          I agree to receive notifications <span className="text-[#f6b63f]">*</span>
        </label>
      </div>

      <div className="pt-1">
        <button className="ml-auto block rounded-md bg-[#f3bf1a] px-6 py-3 text-[15px] font-extrabold text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,.18)] hover:brightness-105">
          Sign Up
        </button>
      </div>
    </motion.div>
  );
}

function LoginTab() {
  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.28, ease }}
      className="space-y-5"
    >
      <p className="text-[14px] text-slate-700">
        Proceed with your Email or Mobile number without Country code
        <br /> <span className="text-slate-500">eg. 74xxxxxxxx</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center">
        <div className="mx-auto sm:mx-0">
          <LoginIllustration />
        </div>

        <div className="space-y-4">
          <input className="w-full rounded-md border border-slate-300 px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#f6b63f]" placeholder="Your Email Id or Mobile number*" />
          <button className="w-full rounded-md bg-[#f3bf1a] px-6 py-3 text-[15px] font-extrabold text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,.18)] hover:brightness-105">
            Proceed
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* Tab button */
function TabButton({
  active,
  onClick,
  label,
  left = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  left?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={[
        "w-1/2 px-6 py-3 text-center text-[15px] font-semibold transition-colors",
        active
          ? "bg-white text-slate-800 border-t-2 border-[#f6b63f]"
          : "bg-slate-200/60 text-slate-700",
        left ? "rounded-tl-xl" : "rounded-tr-xl",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

/* Select helper */
function Select({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className="w-full appearance-none rounded-md border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-800 outline-none focus:ring-2 focus:ring-[#f6b63f]"
      >
        <option value="" disabled>{placeholder}</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
        fill="none" stroke="currentColor" strokeWidth={2}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

/* Small inline SVG */
function LoginIllustration() {
  return (
    <svg viewBox="0 0 180 160" className="h-[110px] w-auto">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD36E" />
          <stop offset="1" stopColor="#FFA63B" />
        </linearGradient>
      </defs>
      <rect x="8" y="96" rx="10" ry="10" width="70" height="22" fill="#0B4B8F" />
      <rect x="8" y="124" rx="10" ry="10" width="90" height="22" fill="#0B4B8F" />
      <rect x="60" y="98" width="14" height="18" rx="3" fill="#E53E3E" />
      <rect x="70" y="126" width="14" height="18" rx="3" fill="#E53E3E" />
      <circle cx="40" cy="60" r="28" fill="url(#lg)" />
      <rect x="20" y="52" width="40" height="36" rx="10" fill="#fff" stroke="#111" strokeWidth="2" />
      <circle cx="38" cy="44" r="24" fill="#F8C39A" stroke="#111" strokeWidth="2" />
      <path d="M26 46q12 8 24 0" stroke="#333" strokeWidth="2" fill="none" />
      <circle cx="32" cy="42" r="2.6" fill="#111" />
      <circle cx="44" cy="42" r="2.6" fill="#111" />
      <rect x="88" y="50" width="30" height="36" rx="6" fill="#fff" stroke="#111" strokeWidth="2" />
      <rect x="112" y="54" width="40" height="28" rx="10" fill="#fff" stroke="#111" strokeWidth="2" />
      <circle cx="118" cy="68" r="3" fill="#111" />
      <circle cx="130" cy="68" r="3" fill="#111" />
      <circle cx="142" cy="68" r="3" fill="#111" />
    </svg>
  );
}
