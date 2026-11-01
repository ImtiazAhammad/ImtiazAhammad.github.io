"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Imtiaz brought real technical depth to our computer vision projects. His ability to ship production systems on edge devices is rare.",
    name: "ANTT Robotics Team",
    role: "Engineering Colleagues",
    avatar: "/antt.png",
    label: "robotics",
  },
  {
    quote:
      "He led our AI team with clarity and purpose. Under his guidance, we went from prototype to national-scale deployment in months.",
    name: "Regnum Resource Ltd",
    role: "Management",
    avatar: "/regnum.png",
    label: "regnum",
  },
  {
    quote:
      "Imtiaz has a unique ability to bridge the gap between research and production. His contributions to our XAI research were invaluable.",
    name: "World University of Bangladesh",
    role: "Faculty Supervisors",
    avatar: "/kaziHRobin.png",
    label: "faculty",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: reduceMotion ? 0 : 40 },
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
        // Calculate scroll trigger distance
        const totalScroll = track.scrollWidth - window.innerWidth + 150;

        gsap.fromTo(
          track,
          { x: 100 },
          {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 15%",
              end: "bottom 15%",
              scrub: reduceMotion ? true : 1,
              pin: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#f9fdff] py-32 overflow-hidden">
      {/* Section Header */}
      <div ref={headerRef} className="px-8 md:px-16 lg:px-24 mb-20 relative z-[10]">
        <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase flex items-center gap-2 mb-4 font-[family-name:var(--font-inter-display)] select-none">
          <span className="text-[9px]">◆</span> Kind Words
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight font-[family-name:var(--font-inter-display)]">
          what people say{" "}
          <span className="font-[family-name:var(--font-caveat)] text-blue-500 font-semibold lowercase">
            about me
          </span>
        </h2>
      </div>

      {/* Horizontal Scroll Testimonials Track */}
      <div ref={trackRef} className="flex gap-12 px-8 md:px-16 lg:px-24 will-change-transform h-[360px] items-center">
        {testimonials.map((t, i) => {
          const rotationAngle = i % 2 === 0 ? 0.8 : -0.8;

          return (
            <div
              key={i}
              className="testimonial-card relative flex-shrink-0 w-[500px] sm:w-[560px] md:w-[620px]"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              {/* Paper Card Sheet */}
              <div className="relative bg-white rounded-3xl p-8 shadow-[0_12px_36px_rgba(0,0,0,0.04)] border border-gray-100 min-h-[260px] flex flex-row gap-8 items-start select-none">

                {/* Left side: Polaroid picture clipped onto card */}
                <div className="relative flex-shrink-0 rotate-[-4deg] w-[110px] bg-white p-2 pb-6 shadow-md border border-gray-100/50 rounded-sm">
                  {/* Silver Paperclip Overlay */}
                  <div className="absolute -top-3.5 -left-1.5 rotate-[-12deg] z-[5] pointer-events-none">
                    <svg width="20" height="40" viewBox="0 0 28 56" fill="none" className="opacity-95">
                      <path d="M14 0C6.268 0 0 6.268 0 14v28c0 7.732 6.268 14 14 14s14-6.268 14-14V14c0-7.732-6.268-14-14-14zm0 4c5.523 0 10 4.477 10 10v28c0 5.523-4.477 10-10 10S4 47.523 4 42V14c0-5.523 4.477-10 10-10z" fill="#989898" />
                      <path d="M14 10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4s4-1.79 4-4V14c0-2.21-1.79-4-4-4z" fill="#c8c8c8" />
                    </svg>
                  </div>

                  {/* Polaroid Image */}
                  <div className="w-full aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center p-1 overflow-hidden rounded-sm">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Polaroid text label */}
                  <div className="absolute bottom-1 left-0 right-0 text-center font-[family-name:var(--font-caveat)] text-blue-500 text-lg font-semibold leading-none truncate px-1">
                    {t.label}
                  </div>
                </div>

                {/* Right side: handwritten Quote & Author Info */}
                <div className="flex-1 flex flex-col justify-between min-h-[200px]">
                  {/* Quote Script */}
                  <p className="font-[family-name:var(--font-caveat)] text-2xl md:text-3xl text-gray-700 leading-relaxed font-semibold">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Recommender Info */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-sm text-gray-900 font-[family-name:var(--font-inter-display)] leading-none">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1.5 font-bold font-[family-name:var(--font-inter-display)] leading-none uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
