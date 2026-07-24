"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.15,
      duration: 0.85,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const photoReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1.1,
      duration: 1.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#f9fdff] text-gray-900"
    >
      {/* Layer 1: Sky Background */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ y: bgY }}
      >
        <img
          src="/background.avif"
          alt=""
          className="w-full h-full object-cover object-center scale-105 opacity-90"
        />
      </motion.div>

      {/* Layer 2: Moving Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[1]">
        <img
          src="/cloud1.png"
          alt=""
          className="absolute top-[8%] left-[-15%] w-[80%] max-w-[900px] object-contain opacity-55 animate-cloud-slow-1"
        />
        <img
          src="/cloud2.png"
          alt=""
          className="absolute bottom-[60%] right-[-10%] w-[70%] max-w-[800px] object-contain opacity-60 animate-cloud-slow-2"
        />

        <img
          src="/cloud1.png"
          alt=""
          className="absolute top-[5%] right-[25%] w-[50%] max-w-[800px] object-contain opacity-70 animate-cloud-slow-3"
        />
      </div>

      {/* Layer 3: Atmospheric Glows */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen z-[2]"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 200, 150, 0.18) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(150, 180, 255, 0.12) 0%, transparent 45%)
          `,
        }}
      />

      {/* Fade overlay at the bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f9fdff] via-[#f9fdff]/70 to-transparent z-[3] pointer-events-none" />

      {/* Layer 4: Content Layout */}
      <div className="relative z-[4] h-full grid grid-cols-1 md:grid-cols-[46fr_54fr]">
        {/* Left Side Content */}
        <motion.div
          className="flex flex-col justify-center px-8 sm:px-12 md:pl-16 lg:pl-24 xl:pl-32 pr-4 pt-12"
          style={{ y: textY }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight text-white/90 font-[family-name:var(--font-inter-display)]">
              👋 Hey, I&apos;m Imtiaz
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h1 className="leading-[0.8] tracking-tighter">
              <span className="block text-[clamp(4.2rem,11vw,9.2rem)] font-extrabold text-white font-[family-name:var(--font-zalando)] uppercase">
                AI
              </span>
              <span className="block text-[clamp(3.8rem,10vw,8rem)] text-white font-[family-name:var(--font-caveat)] lowercase -mt-4 sm:-mt-6 ml-[25%] sm:ml-[30%] md:ml-[35%] lg:ml-[10%]">
                engineer
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-base md:text-lg text-white/80 max-w-sm leading-relaxed font-medium font-[family-name:var(--font-inter-display)]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Building intelligent systems that see, think, and act. AI Engineer
            specializing in computer vision and production ML.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-semibold font-[family-name:var(--font-inter-display)] shadow-md hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Work
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.a>

            <motion.a
              href="/Imtiaz_Ahammad_Resume.pdf"
              download="Imtiaz_Ahammad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20 font-[family-name:var(--font-inter-display)] hover:bg-white/30 transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download CV
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Content (Avatar Cutout) */}
        <div className="relative flex items-end justify-center md:justify-end h-[36vh] sm:h-[45vh] md:h-full overflow-hidden select-none pointer-events-none md:pointer-events-auto -mt-6 sm:-mt-8 md:mt-0 z-[4]">
          <motion.div
            className="relative w-full h-full flex items-end justify-center md:justify-end"
            variants={photoReveal}
            initial="hidden"
            animate="visible"
            style={{ y: fgY }}
          >
            <img
              src="/imtiaz_image.png"
              alt="Imtiaz Ahammad"
              className="block w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto max-h-[36vh] sm:max-h-[45vh] md:max-h-[85vh] object-contain object-bottom select-none z-[2] mr-0 pr-0"
              draggable={false}
              style={{
                filter: "drop-shadow(-10px 15px 30px rgba(0, 0, 0, 0.12))",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Layer 5: Bottom Status Bar */}
      <div className="absolute bottom-6 left-8 right-8 z-[10] hidden md:flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-[0.2em] font-[family-name:var(--font-inter-display)] select-none">
        <div>BASED IN DHAKA, BD</div>
        <div>CREATE &gt; CONSUME</div>
      </div>
    </section>
  );
}

