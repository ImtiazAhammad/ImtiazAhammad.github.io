"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-150",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-150",
  },
  gray: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-150",
  },
};

const companyLogos: Record<string, string> = {
  "Regnum Resource Ltd": "/regnum.png",
  "ANTT Robotics": "/antt.png",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      const track = trackRef.current;
      if (track) {
        // Calculate dynamic scroll distance based on track width
        const totalScroll = track.scrollWidth - window.innerWidth + 200;

        gsap.fromTo(
          track,
          { x: 150 },
          {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 10%",
              end: "bottom 20%",
              scrub: 1,
              pin: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#f9fdff] py-32 overflow-hidden text-gray-900"
    >
      {/* Header */}
      <div ref={headerRef} className="px-8 md:px-16 lg:px-24 mb-16 relative z-[10]">
        <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase flex items-center gap-2 mb-4 font-[family-name:var(--font-inter-display)] select-none">
          <span className="text-[9px]">◆</span> Experience
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-xl font-[family-name:var(--font-inter-display)] leading-tight tracking-tight">
          the journey{" "}
          <span className="font-[family-name:var(--font-caveat)] text-blue-600 font-semibold lowercase">
            so far
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-lg font-medium font-[family-name:var(--font-inter-display)]">
          From AI research to leading production computer vision systems — four roles across two years, and counting.
        </p>
      </div>

      {/* Horizontal timeline container */}
      <div className="relative h-[780px] flex items-center select-none">
        
        {/* Central horizontal timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-slate-200 -translate-y-1/2 z-0" />

        {/* Fade mask on edges */}
        <div
          className="w-full h-full overflow-visible"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0px, #000 120px, #000 calc(100% - 120px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0px, #000 120px, #000 calc(100% - 120px), transparent 100%)",
          }}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-[40px] px-8 md:px-16 lg:px-24 will-change-transform h-full"
            style={{ width: "max-content" }}
          >
            {timeline.map((entry, index) => {
              const isEven = index % 2 === 0;
              const rotationAngle = isEven ? 1.2 : -1.2;

              return (
                <div
                  key={index}
                  className="exp-card relative w-[420px] h-full flex items-center justify-center flex-shrink-0"
                >
                  {/* Central Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-blue-500 border-4 border-[#f9fdff] z-20 shadow-md" />

                  {/* Vertical Connector Line */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-10"
                    style={{
                      height: "55px",
                      top: isEven ? "calc(50% - 55px)" : "50%",
                    }}
                  />

                  {/* Experience Card */}
                  <div
                    className="absolute w-[380px] md:w-[410px] bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_12px_36px_rgba(0,0,0,0.035)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.055)] hover:scale-[1.01]"
                    style={{
                      bottom: isEven ? "calc(50% + 55px)" : "auto",
                      top: isEven ? "auto" : "calc(50% + 55px)",
                      transform: `rotate(${rotationAngle}deg)`,
                    }}
                  >
                    {/* Header info */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Logo container with dashed border */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-dashed border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                        {companyLogos[entry.company] ? (
                          <img
                            src={companyLogos[entry.company]}
                            alt={entry.company}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <span className="text-lg font-bold text-gray-400 font-[family-name:var(--font-inter-display)]">
                            {entry.company.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 font-[family-name:var(--font-inter-display)] truncate leading-snug">
                          {entry.role}
                        </h3>
                        <p className="text-xs text-gray-500 font-semibold font-[family-name:var(--font-inter-display)] truncate mt-0.5">
                          {entry.company}
                        </p>
                      </div>

                      {/* Date Badge */}
                      <div
                        className={`px-3 py-1 rounded-full border text-[10px] font-bold font-[family-name:var(--font-geist-mono)] tracking-wider ${
                          tagColors[entry.tagColor].bg
                        } ${tagColors[entry.tagColor].border} ${tagColors[entry.tagColor].text}`}
                      >
                        {entry.period}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 mb-4 text-gray-400">
                      <svg
                        className="w-3.5 h-3.5"
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
                      <span className="text-xs font-semibold font-[family-name:var(--font-inter-display)]">
                        {entry.location}
                      </span>
                    </div>

                    {/* Description highlights */}
                    <ul className="space-y-2">
                      {entry.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed font-medium font-[family-name:var(--font-inter-display)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

