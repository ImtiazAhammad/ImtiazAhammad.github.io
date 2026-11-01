"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) videoRef.current?.pause();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: reduceMotion ? 0 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="relative overflow-hidden pt-28 pb-10 px-8 md:px-16 lg:px-24 w-full"
      style={{
        background: "linear-gradient(180deg, #f9fdff 0%, #74baf8 54%, #1b8ae5 75%)",
      }}
    >
      {/* Subtle atmospheric glows */}
      <div
        className="footer-glow-warm"
        style={{ top: "15%", left: "8%" }}
      />
      <div
        className="footer-glow-cool"
        style={{ top: "25%", right: "8%" }}
      />

      {/* Massive watermark watermark text */}
      <div className="absolute bottom-[-15px] left-0 right-0 flex justify-center pointer-events-none z-0 overflow-hidden select-none">
        <div className="text-[17vw] font-black text-white/5 font-[family-name:var(--font-zalando)] leading-none tracking-tighter uppercase">
          Imtiaz
        </div>
      </div>

      <div className="footer-content max-w-6xl mx-auto relative z-10">
        
        {/* Main Grid: Left (Headline & CTA) & Right (Video Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center mb-20">
          
          {/* Left: Headline & Accent */}
          <div>
            <div className="mb-4">
              <span className="font-[family-name:var(--font-caveat)] text-2xl text-gray-600 block select-none">
                have an idea?
              </span>
            </div>

            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[4.2rem] font-bold text-gray-900 leading-[1.05] tracking-tight font-[family-name:var(--font-inter-display)]">
              lets{" "}
              <span className="font-[family-name:var(--font-caveat)] text-blue-600 font-semibold lowercase">
                design
              </span>{" "}
              build create
              <br />
              incredible work together.
            </h2>
          </div>

          {/* Right: Floating tilted video mockup */}
          <div className="flex justify-center md:justify-end select-none">
            <div className="animate-footer-float w-[240px] sm:w-[260px] h-[310px] sm:h-[340px] bg-[#121315] rounded-[32px] overflow-hidden shadow-2xl border-[5px] border-white relative z-10">
              <video
                ref={videoRef}
                src="/footer_anim.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Email CTA + Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/20">
          
          {/* Email button */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 font-bold hover:bg-white transition-all duration-300 shadow-md font-[family-name:var(--font-inter-display)] text-sm"
          >
            <Mail className="w-4 h-4 text-blue-500" />
            {siteConfig.email}
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-bold text-white/50 tracking-wider font-[family-name:var(--font-inter-display)] uppercase">
          <p>Designed & built by Imtiaz Ahammad</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
