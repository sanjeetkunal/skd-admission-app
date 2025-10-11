// src/sections/FAQ.tsx
import React, { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is SKDU NEST?",
    a: "SKDU NEST is the Shri Khushal Das University National Entrance Scholarship Test, designed to identify and support deserving students through scholarships and admission opportunities at Rajasthan's #1 UGC Approved University, recognized by the University Grants Commission (UGC).",
  },
  {
    q: "Who can apply for SKDU NEST?",
    a: "Students from any state in India who have completed or are appearing for their Class 12 exams can apply.",
  },
  {
    q: "What are the benefits of taking SKDU NEST?",
    a: "SKDU NEST provides access to scholarships, merit-based admissions, and opportunities to join a prestigious UGC-recognized university in Rajasthan.",
  },
  {
    q: "Is SKDU NEST mandatory for admission?",
    a: "No, but it is mandatory for students applying for scholarships.",
  },
  {
    q: "How is SKDU NEST conducted?",
    a: "SKDU NEST is conducted online with a total duration of 60 minutes.",
  },
  {
    q: "What is the marking scheme?",
    a: "Each question carries 1 mark, and there is no negative marking.",
  },
  {
    q: "How do I prepare for SKDU NEST?",
    a: "After registering, you will receive sample papers and mock tests to help you prepare.",
  },
  {
    q: "When will SKDU NEST results be announced?",
    a: "Results will be announced within two weeks of the test date, and qualifying students will be notified via email.",
  },
  {
    q: "What documents are required during registration?",
    a: "You will need a recent photograph, ID proof, and Class 12 mark sheet (if available).",
  },
];

function PlusSquare({ open = false }: { open?: boolean }) {
  // छोटा orange square with + (open होने पर –)
  return (
    <span
      className="relative inline-block h-3.5 w-3.5 shrink-0 rounded-[2px] border border-[#ff7d3a]"
      aria-hidden
    >
      <span className="absolute left-1/2 top-1/2 h-[1px] w-2 -translate-x-1/2 -translate-y-1/2 bg-[#ff7d3a]" />
      {!open && (
        <span className="absolute left-1/2 top-1/2 h-2 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-[#ff7d3a]" />
      )}
    </span>
  );
}

/* ===== Animations ===== */
const ease = [0.22, 1, 0.36, 1] as const;

const headReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const barReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease, delay: 0.04 } },
};

const subReveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease, delay: 0.02 } },
};

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export default function FAQ() {
  // पहला खुला, बाकी बंद—exact screenshot जैसा
  const [openIndex, setOpenIndex] = useState(0);
  const reduce = useReducedMotion();

  // Flatten variants if reduced-motion is on
  const vHead = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : headReveal), [reduce]);
  const vBar = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : barReveal), [reduce]);
  const vSub = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : subReveal), [reduce]);
  const vList = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : listStagger), [reduce]);
  const vItem = useMemo<Variants>(() => (reduce ? { hidden: {}, show: {} } : itemReveal), [reduce]);

  return (
    <section className="py-10 md:py-14">
      <div className="container-x">
        <div className="mx-auto max-w-[960px] rounded-md bg-[#f5f2f1] p-6 md:p-10">
          {/* Title */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={vHead}
          >
            <h2 className="text-[34px] font-extrabold leading-none text-slate-900">FAQ</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={vBar}
            className="mt-2 h-[4px] w-[58px] rounded bg-[#ff7d3a] origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={vSub}
            className="mt-3 text-[14px] font-semibold text-slate-600"
          >
            Got Questions? We’ve Got Answers!
          </motion.div>

          {/* List */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={vList}
            className="mt-6"
          >
            {FAQS.map((item, i) => {
              const isOpen = i === openIndex;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;

              return (
                <motion.div
                  key={i}
                  variants={vItem}
                  className="border-b border-slate-200/60 last:border-none"
                >
                  {/* Row */}
                  <button
                    id={btnId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-[14px] font-semibold text-slate-800">
                      {item.q}
                    </span>
                    <PlusSquare open={isOpen} />
                  </button>

                  {/* Answer (animated height/opacity) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        key="content"
                        initial={reduce ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={reduce ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden pr-6"
                      >
                        <p className="pb-5 text-[14px] leading-7 text-slate-600">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
