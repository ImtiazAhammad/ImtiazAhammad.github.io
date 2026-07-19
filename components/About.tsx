"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const textBefore = "I turn messy, real-world problems into products people actually";
const textAfter = "— interfaces that feel obvious, systems that scale, and details that quietly do the work.";

export default function About() {
  const wordsBefore = textBefore.split(" ");
  const wordsAfter = textAfter.split(" ");

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
            {/* Interactive paragraph */}
            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] font-medium text-gray-900 leading-[1.25] tracking-tight font-[family-name:var(--font-inter-display)]">
              {wordsBefore.map((word, i) => (
                <span
                  key={`before-${i}`}
                  className="about-word inline-block mr-[0.25em] select-none hover:blur-[2.5px] hover:text-gray-400/80 transition-all duration-300"
                >
                  {word}
                </span>
              ))}

              <span className="font-[family-name:var(--font-caveat)] text-blue-500 font-semibold text-5xl sm:text-6xl md:text-7xl mx-2 inline-block align-middle transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-default select-none">
                understand
              </span>

              {wordsAfter.map((word, i) => (
                <span
                  key={`after-${i}`}
                  className="about-word inline-block mr-[0.25em] select-none hover:blur-[2.5px] hover:text-gray-400/80 transition-all duration-300"
                >
                  {word}
                </span>
              ))}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl border-t border-gray-100 pt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-baseline text-blue-500 font-bold font-[family-name:var(--font-inter-display)] tracking-tighter">
                    <span className="text-5xl md:text-6xl">{stat.value}</span>
                    <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-[family-name:var(--font-inter-display)]">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-medium font-[family-name:var(--font-inter-display)]">
                      {i === 0 && "computer vision & production ML systems"}
                      {i === 1 && "AI engineers & interns mentored to field validation"}
                      {i === 2 && "plate-read accuracy across varied lighting & edge conditions"}
                      {i === 3 && "reduction in manual reporting & operational overhead"}
                    </p>
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
