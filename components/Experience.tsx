"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const tagStyles: Record<
  string,
  { pillBg: string; pillBorder: string; pillText: string; dotBg: string; stemBg: string }
> = {
  green: {
    pillBg: "bg-emerald-50",
    pillBorder: "border-emerald-200",
    pillText: "text-emerald-700",
    dotBg: "bg-emerald-500",
    stemBg: "bg-emerald-400",
  },
  blue: {
    pillBg: "bg-sky-50",
    pillBorder: "border-sky-200",
    pillText: "text-sky-700",
    dotBg: "bg-slate-400",
    stemBg: "bg-slate-300",
  },
  gray: {
    pillBg: "bg-slate-100",
    pillBorder: "border-slate-200",
    pillText: "text-slate-600",
    dotBg: "bg-slate-400",
    stemBg: "bg-slate-300",
  },
};

const companyLogos: Record<string, string> = {
  "Regnum Resource Ltd": "/regnum.png",
  "ANTT Robotics": "/antt.png",
};

function formatHighlight(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: reduceMotion ? 0 : 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      const track = trackRef.current;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (track && sectionRef.current && cards.length > 0) {
        const vw = window.innerWidth;
        const cardWidth = cards[0].offsetWidth || 400;
        const gap = 60; // gap between cards
        const step = cardWidth + gap;

        // Card 0 starts DEAD-CENTER in viewport:
        const startX = (vw - cardWidth) / 2;
        // Last card ends DEAD-CENTER in viewport:
        const endX = startX - (cards.length - 1) * step;

        const updateCoverflow = () => {
          const currentTrackX = gsap.getProperty(track, "x") as number;
          const centerViewport = vw / 2;

          cards.forEach((card, i) => {
            // Center of card relative to viewport
            const cardCenterX = currentTrackX + i * step + cardWidth / 2;
            // Distance from viewport center (-1 to +1 scale relative to half viewport)
            const distFromCenter = (cardCenterX - centerViewport) / (vw * 0.4);
            const absDist = Math.abs(distFromCenter);

            // 3D Coverflow calculations:
            // Center: rotateY 0deg, scale 1.0, opacity 1.0
            // Left (dist < 0): rotates positive (faces center)
            // Right (dist > 0): rotates negative (faces center)
            const rotateY = reduceMotion ? 0 : Math.min(32, Math.max(-32, -distFromCenter * 35));
            const scale = reduceMotion ? 1 : Math.max(0.84, 1.0 - absDist * 0.16);
            const opacity = Math.max(0.35, 1.0 - absDist * 0.55);
            const zIndex = Math.round(30 - absDist * 20);

            const innerCard = card.querySelector(".experience-card-inner") as HTMLElement;
            if (innerCard) {
              gsap.set(innerCard, {
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                transformPerspective: 1000,
                transformOrigin: "center center",
              });
            }
            gsap.set(card, { zIndex: zIndex });
          });
        };

        // Set initial position & Coverflow state
        gsap.set(track, { x: startX });
        updateCoverflow();

        // GSAP ScrollTrigger timeline pin and horizontal scrub
        gsap.to(track, {
          x: endX,
          ease: "none",
          onUpdate: updateCoverflow,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: reduceMotion ? true : 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#f9fdff] h-screen min-h-[750px] max-h-[960px] flex flex-col justify-between py-6 md:py-8 overflow-hidden text-gray-900 select-none"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="px-6 md:px-16 lg:px-24 pt-3 pb-1 relative z-[10] text-center max-w-3xl mx-auto shrink-0"
      >
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-2 font-[family-name:var(--font-inter-display)] select-none">
          <span className="text-[9px]">◆</span> EXPERIENCE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 font-[family-name:var(--font-inter-display)] leading-none tracking-tight">
          <span className="inline-block overflow-hidden align-bottom py-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block"
            >
              the journey so far
            </motion.span>
          </span>
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-medium font-[family-name:var(--font-inter-display)]">
          From AI research to leading production computer vision systems — four roles across two years, and counting.
        </p>
      </div>

      {/* Main Horizontal Timeline Container with 3D perspective */}
      <div
        className="relative flex-1 w-full flex items-center overflow-hidden z-[5]"
        style={{ perspective: "1200px" }}
      >
        {/* Central horizontal timeline line placed near bottom (70% from top) */}
        <div className="absolute left-0 right-0 top-[70%] h-[1.5px] bg-slate-200 -translate-y-1/2 z-0" />

        {/* Right & Left Vignette Overlays for soft depth */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f9fdff] via-[#f9fdff]/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f9fdff] via-[#f9fdff]/80 to-transparent z-30 pointer-events-none" />

        {/* Track Container */}
        <div
          ref={trackRef}
          className="flex items-center gap-[60px] will-change-transform h-full"
          style={{ width: "max-content", transformStyle: "preserve-3d" }}
        >
          {timeline.map((entry, index) => {
            const isPillTop = index % 2 === 0;
            const style = tagStyles[entry.tagColor] || tagStyles.blue;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="relative w-[340px] sm:w-[390px] md:w-[410px] h-full flex items-center justify-center shrink-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Central Node Dot on timeline line */}
                <div
                  className={`absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ${style.dotBg} border-2 border-white shadow-xs z-20`}
                />

                {/* ALL CARDS ARE PLACED ABOVE THE HORIZONTAL LINE */}
                <div className="absolute bottom-[calc(30%+12px)] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full max-w-[410px]">
                  {/* If Date Pill is TOP (Index 0, 2), render Date Pill ABOVE Card */}
                  {isPillTop && (
                    <div className="mb-2 flex flex-col items-center">
                      <div
                        className={`px-3.5 py-1 rounded-full border text-[11px] font-semibold font-[family-name:var(--font-inter-display)] shadow-2xs whitespace-nowrap ${style.pillBg} ${style.pillBorder} ${style.pillText}`}
                      >
                        {entry.period}
                      </div>
                      <div className={`w-[1.5px] h-4 ${style.stemBg} mt-1`} />
                    </div>
                  )}

                  {/* Card Container (3D Coverflow Animated Element) */}
                  <div
                    className="experience-card-inner w-full bg-white rounded-2xl border border-gray-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)] transition-shadow duration-300 overflow-hidden"
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform, opacity",
                    }}
                  >
                    {/* Two-Part Card Header */}
                    <div className="bg-[#f8fafc] p-3.5 sm:p-4 border-b border-gray-150 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        {/* Logo stamp */}
                        <div className="w-10 h-10 rounded-xl bg-white border border-dashed border-gray-300 flex items-center justify-center shrink-0 p-1.5 shadow-2xs">
                          {companyLogos[entry.company] ? (
                            <img
                              src={companyLogos[entry.company]}
                              alt={entry.company}
                              className="w-6.5 h-6.5 object-contain"
                            />
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.75}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                              />
                            </svg>
                          )}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 font-[family-name:var(--font-inter-display)] leading-snug truncate">
                            {entry.role}
                          </h3>
                          <p className="text-xs font-medium text-gray-500 font-[family-name:var(--font-inter-display)] truncate mt-0.5">
                            {entry.company}
                          </p>
                        </div>
                      </div>

                      {/* Location Badge */}
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-400 shrink-0 pt-0.5 font-[family-name:var(--font-inter-display)]">
                        <svg
                          className="w-3.5 h-3.5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{entry.location}</span>
                      </div>
                    </div>

                    {/* Two-Part Card Body */}
                    <div className="bg-white p-3.5 sm:p-4">
                      <ul className="space-y-2">
                        {entry.highlights.map((highlight, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed font-normal font-[family-name:var(--font-inter-display)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                            <span>{formatHighlight(highlight)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Vertical Stem Line from Card down to Timeline Node */}
                  <div className="w-[1.5px] h-5 bg-slate-200 mt-1" />
                </div>

                {/* If Date Pill is BOTTOM (Index 1, 3), render Date Pill BELOW Horizontal Line */}
                {!isPillTop && (
                  <div className="absolute top-[calc(70%+12px)] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <div className={`w-[1.5px] h-4 ${style.stemBg} mb-1`} />
                    <div
                      className={`px-3.5 py-1 rounded-full border text-[11px] font-semibold font-[family-name:var(--font-inter-display)] shadow-2xs whitespace-nowrap ${style.pillBg} ${style.pillBorder} ${style.pillText}`}
                    >
                      {entry.period}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
