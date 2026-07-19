"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  progress: MotionValue<number>;
}

export default function ProjectCard({
  project,
  isActive,
  progress,
}: ProjectCardProps) {
  const cardOpacity = useTransform(progress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  const cardY = useTransform(progress, [0, 0.2, 0.7, 1], [80, 0, 0, -40]);
  const cardScale = useTransform(progress, [0, 0.2], [0.92, 1]);

  const yearOpacity = useTransform(progress, [0.05, 0.2], [0, 1]);
  const yearY = useTransform(progress, [0.05, 0.2], [24, 0]);

  const titleOpacity = useTransform(progress, [0.08, 0.25], [0, 1]);
  const titleY = useTransform(progress, [0.08, 0.25], [40, 0]);

  const tagsOpacity = useTransform(progress, [0.12, 0.28], [0, 1]);
  const tagsY = useTransform(progress, [0.12, 0.28], [20, 0]);

  const descOpacity = useTransform(progress, [0.15, 0.3], [0, 1]);
  const descY = useTransform(progress, [0.15, 0.3], [24, 0]);

  const btnOpacity = useTransform(progress, [0.18, 0.32], [0, 1]);
  const btnY = useTransform(progress, [0.18, 0.32], [20, 0]);

  const imgOpacity = useTransform(progress, [0.1, 0.28], [0, 1]);
  const imgScale = useTransform(progress, [0.1, 0.28], [0.88, 1]);

  return (
    <motion.div
      className="relative z-10 flex items-center justify-center w-full h-full px-6 md:px-12 lg:px-20"
      style={{ opacity: cardOpacity }}
    >
      <motion.div
        className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20"
        style={{ y: cardY, scale: cardScale }}
      >
        {/* Left: Glass Card */}
        <div className="flex-1 w-full">
          <div
            className="rounded-[32px] p-8 lg:p-12"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <motion.span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-5 font-[family-name:var(--font-inter-display)]"
              style={{ color: project.accent, opacity: yearOpacity, y: yearY }}
            >
              {project.year}
            </motion.span>

            <motion.h3
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.08] tracking-tight font-[family-name:var(--font-inter-display)]"
              style={{ opacity: titleOpacity, y: titleY }}
            >
              {project.title}
            </motion.h3>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              style={{ opacity: tagsOpacity, y: tagsY }}
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/8 text-white/75 font-[family-name:var(--font-inter-display)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isActive
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{
                    delay: 0.3 + i * 0.06,
                    duration: 0.45,
                    ease: [0.25, 0.4, 0.25, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-white/55 leading-relaxed text-[0.95rem] lg:text-base font-[family-name:var(--font-inter-display)]"
              style={{ opacity: descOpacity, y: descY }}
            >
              {project.description}
            </motion.p>

            <motion.div className="mt-8" style={{ opacity: btnOpacity, y: btnY }}>
              <button className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-semibold font-[family-name:var(--font-inter-display)] transition-all duration-300 hover:pl-8 hover:shadow-lg hover:shadow-white/10">
                View Case Study
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right: Mockup Image */}
        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-none"
          style={{ opacity: imgOpacity, scale: imgScale }}
        >
          <motion.div
            className="relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)",
            }}
            animate={
              isActive
                ? { y: [0, -6, 0] }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
