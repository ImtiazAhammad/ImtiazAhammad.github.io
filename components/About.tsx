"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const textBefore = ["I", "turn", "messy,", "real-world", "problems", "into", "products", "people", "actually"];
const textAfter = ["—", "interfaces", "that", "feel", "obvious,", "systems", "that", "scale,", "and", "details", "that", "quietly", "do", "the", "work."];

export default function About() {
  return (
    <section id="about" className="bg-[#f9fdff] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Label */}
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase flex items-center gap-2 font-[family-name:var(--font-inter-display)] select-none">
              <span className="text-[9px]">◆</span> What I Do
            </span>
          </div>

          {/* Right Column: Paragraph + Stats */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {/* Interactive paragraph with sliding text reveal mask */}
            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] font-medium text-gray-900 leading-[1.25] tracking-tight font-[family-name:var(--font-inter-display)]">
              {textBefore.map((word, i) => (
                <span
                  key={`before-${i}`}
                  className="inline-block overflow-hidden align-bottom mr-[0.25em] py-1"
                >
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.4, 0.25, 1],
                      delay: i * 0.03,
                    }}
                    className="inline-block select-none hover:blur-[2.5px] hover:text-gray-400/80 transition-all duration-300"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}

              <span className="inline-block overflow-hidden align-bottom mx-2 py-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.4, 0.25, 1],
                    delay: textBefore.length * 0.03,
                  }}
                  className="font-[family-name:var(--font-caveat)] text-blue-500 font-semibold text-5xl sm:text-6xl md:text-7xl inline-block align-middle transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default select-none"
                >
                  understand
                </motion.span>
              </span>

              {textAfter.map((word, i) => (
                <span
                  key={`after-${i}`}
                  className="inline-block overflow-hidden align-bottom mr-[0.25em] py-1"
                >
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.4, 0.25, 1],
                      delay: (textBefore.length + 1 + i) * 0.03,
                    }}
                    className="inline-block select-none hover:blur-[2.5px] hover:text-gray-400/80 transition-all duration-300"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl border-t border-gray-100 pt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-1"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-inter-display)]">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-500 font-[family-name:var(--font-inter-display)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
