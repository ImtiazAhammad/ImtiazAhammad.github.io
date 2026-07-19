"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-[#f9fdff] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Main Grid: Left Column (Polaroid & Stats/Skills) & Right Column (Bio text) */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Polaroid photo + Info */}
          <div className="flex flex-col items-center lg:items-stretch gap-10">
            {/* Polaroid Frame */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.95 }}
              whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[320px] mx-auto bg-white p-4 pb-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/50 rounded-sm select-none"
            >
              {/* Silver Paperclip decoration top-left */}
              <div className="absolute -top-6 -left-3 rotate-[-12deg] z-10 pointer-events-none">
                <svg width="32" height="64" viewBox="0 0 28 56" fill="none" className="opacity-90">
                  <path d="M14 0C6.268 0 0 6.268 0 14v28c0 7.732 6.268 14 14 14s14-6.268 14-14V14c0-7.732-6.268-14-14-14zm0 4c5.523 0 10 4.477 10 10v28c0 5.523-4.477 10-10 10S4 47.523 4 42V14c0-5.523 4.477-10 10-10z" fill="#b0b0b0"/>
                  <path d="M14 10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4s4-1.79 4-4V14c0-2.21-1.79-4-4-4z" fill="#d8d8d8"/>
                </svg>
              </div>

              {/* Photo Area */}
              <div className="aspect-[4/5] w-full bg-gray-50 overflow-hidden relative rounded-sm border border-gray-100">
                <img
                  src="/imtiaz2.jpeg"
                  alt="Imtiaz Ahammad"
                  className="w-full h-full object-cover object-center scale-[1.02]"
                />
              </div>

              {/* Polaroid Handwritten Label */}
              <div className="absolute bottom-3.5 left-0 right-0 text-center font-[family-name:var(--font-caveat)] text-blue-500 text-3xl font-semibold leading-none">
                imtiaz
              </div>
            </motion.div>

            {/* Currently @ Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full max-w-[320px] mx-auto bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80"
            >
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3 font-[family-name:var(--font-inter-display)] select-none">
                Currently @
              </span>
              <div className="flex items-center gap-4">
                <img
                  src="/regnum.png"
                  alt="Regnum Resource Ltd"
                  className="w-12 h-12 rounded-xl object-contain border border-gray-100 p-1"
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-900 font-[family-name:var(--font-inter-display)]">
                    Regnum Resource Ltd
                  </h4>
                  <p className="text-xs text-gray-500 font-medium font-[family-name:var(--font-inter-display)] mt-0.5">
                    AI Engineer (Team Lead)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-[320px] mx-auto flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["Computer Vision", "LLMs", "Edge AI", "RAG Systems", "MLOps", "Deep Learning"].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-white text-gray-600 rounded-full text-xs font-semibold border border-gray-100 shadow-sm font-[family-name:var(--font-inter-display)] select-none"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Bio text */}
          <div className="flex flex-col gap-8 pt-4">
            {/* Label & Title */}
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase flex items-center gap-2 mb-4 font-[family-name:var(--font-inter-display)] select-none">
                <span className="text-[9px]">◆</span> About Me
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight font-[family-name:var(--font-inter-display)]">
                a little{" "}
                <span className="font-[family-name:var(--font-caveat)] text-blue-500 font-semibold lowercase">
                  about myself
                </span>
              </h2>
            </div>

            {/* Biography paragraphs */}
            <div className="flex flex-col gap-6 text-gray-500 font-medium leading-[1.7] text-base md:text-lg font-[family-name:var(--font-inter-display)] max-w-3xl">
              <p>
                My journey into AI and machine learning began with a deep fascination for computer vision and edge intelligence. Over the years, I&apos;ve designed, optimized, and deployed production-grade deep learning models on resource-constrained edge hardware. During my time in research, I specialized in Explainable AI (XAI) and interpretability, which instilled in me a rigorous approach to validating and understanding black-box neural networks.
              </p>
              <p>
                Today, I lead a team of AI engineers building high-throughput computer vision systems for national transit and toll infrastructure. Simultaneously, I architect production LLM agents, local AIOps pipelines, and secure, department-aware multi-agent RAG meshes using modern architectures like Model Context Protocol (MCP) and hybrid vector engines. I thrive on bridging the gap between perception and reasoning to build complete, intelligent solutions.
              </p>
            </div>

            {/* Signature Accent */}
            <div className="mt-4 select-none">
              <span className="font-[family-name:var(--font-caveat)] text-blue-500 font-semibold text-5xl md:text-6xl transform hover:scale-105 transition-transform duration-300 inline-block">
                Imtiaz.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
