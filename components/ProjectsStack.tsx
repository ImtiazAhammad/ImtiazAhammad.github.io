"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "@/lib/projects";
import { EASE_OUT } from "@/lib/entrance";
import TextReveal from "./TextReveal";

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const target = total > 1 ? 0.7 + (index / (total - 1)) * 0.2 : 0.9;
  const scale = useTransform(progress, [0, 1], [1, target]);
  const y = useTransform(progress, [0, 1], [0, -100]);

  return (
    <div
      className="sticky w-full h-screen flex items-center justify-center"
      style={{ zIndex: index + 10, top: `${index * 32}px` }}
    >
      <motion.div
        style={{ scale, y }}
        className="w-full h-full rounded-[24px] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.18)] border-t border-white/20 flex items-center justify-center group will-change-transform motion-reduce:transform-none!"
      >
          {/* Sheet Sky Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-[1]">
            <img
              src="/background.avif"
              alt=""
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-[#0281e0]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-slate-900/15" />
          </div>

          {/* Grid content inside the sheet */}
          <div className="relative z-[2] w-full h-full grid grid-cols-1 md:grid-cols-[46fr_54fr] gap-8 md:gap-12 items-center p-6 sm:p-10 md:p-14">
            {/* Left Column: Glass Card Container */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 md:p-10 rounded-[32px] shadow-2xl text-white relative overflow-hidden"
            >
              {/* Radial glow background on glass card */}
              <div
                className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none rounded-[32px]"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${project.accent} 0%, transparent 60%)`,
                }}
              />

              {/* Glass card content */}
              <div className="relative z-[2]">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  {/* Round badge */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white text-xs font-bold font-[family-name:var(--font-geist-mono)]">
                    {project.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase text-white/70 tracking-widest font-[family-name:var(--font-geist-mono)]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4 font-[family-name:var(--font-inter-display)] tracking-tight">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold rounded-full border border-white/15 bg-white/10 text-white font-[family-name:var(--font-inter-display)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium font-[family-name:var(--font-inter-display)]">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-gray-100 transition-colors shadow-md font-[family-name:var(--font-inter-display)]"
                >
                  {project.link.includes("github.com") ? "View Code" : "View Project"}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Device Image */}
            <div className="relative z-[2] flex justify-center items-center w-full h-full overflow-visible pointer-events-none [@media(max-height:620px)]:hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0, y: 72 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="w-auto h-auto max-h-[40vh] md:max-h-[62vh] object-contain transition-[scale] duration-700 group-hover:scale-[1.03]"
                style={{
                  filter: "drop-shadow(0 20px 45px rgba(0, 0, 0, 0.28))",
                }}
              />
            </div>
          </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: stackProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end start"],
  });

  return (
    <section id="projects" ref={sectionRef} className="relative w-full bg-[#f9fdff] pt-12">
      {/* Intro header */}
      <div className="py-24 md:py-32 flex flex-col items-center justify-center relative z-[2] px-6 text-center">
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase flex items-center gap-2 mb-4 font-[family-name:var(--font-inter-display)]"
          >
            <span className="text-[9px]">◆</span> Selected Work
          </motion.span>
          <h2
            aria-label="check out some of my work"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-inter-display)] leading-tight tracking-tight"
          >
            <TextReveal text="check out" className="mr-3" />{" "}
            <TextReveal
              text="some of my work"
              by="word"
              delay={0.15}
              className="font-[family-name:var(--font-caveat)] text-blue-600 font-semibold lowercase"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE_OUT }}
            className="mt-5 text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed font-[family-name:var(--font-inter-display)]"
          >
            A few products I&apos;ve helped shape, and the engineering thinking behind them.
          </motion.p>
        </div>
      </div>

      {/* Vertical Stacking Cards */}
      <div ref={stackRef} className="relative z-[5] w-full flex flex-col pb-[20vh]">
        {projects.map((project, i) => (
          <StackCard
            key={project.number}
            project={project}
            index={i}
            total={projects.length}
            progress={stackProgress}
          />
        ))}
      </div>
    </section>
  );
}
