"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Session storage check to skip loader on subsequent loads
    const hasShown = sessionStorage.getItem("portfolio-loader-shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 0);
      sessionStorage.setItem("portfolio-loader-shown", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Staggered timing phases
    const t1 = setTimeout(() => setPhase(1), 100);  // Trigger letters reveal
    const t2 = setTimeout(() => setPhase(2), 1700); // Trigger exit fade
    const t3 = setTimeout(() => setVisible(false), 2300); // Remove from DOM

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [visible]);

  if (!visible) return null;

  const word1 = "IMTIAZ".split("");
  const word2 = "AHAMMAD".split("");

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f9fdff] select-none pointer-events-auto"
        >
          <div className="flex items-center justify-center font-[family-name:var(--font-zalando)] font-black">
            {/* Word 1: IMTIAZ */}
            <div className="flex overflow-hidden">
              {word1.map((char, index) => (
                <motion.span
                  key={`w1-${index}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: phase >= 1 ? 0 : "100%",
                    opacity: phase >= 1 ? 1 : 0
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
                    delay: index * 0.05,
                  }}
                  className="inline-block text-gray-900 text-[clamp(2.0rem,5.2vw,4.8rem)] uppercase tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bouncing Dots Wrapper */}
            <div className="flex items-end pb-[0.2em] px-2 md:px-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={`dot-${i}`}
                  initial={{ y: 0 }}
                  animate={{
                    y: phase >= 1 ? [-5, 5, -5] : 0
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.1,
                    ease: "easeInOut",
                    delay: i * 0.15 + 0.3,
                  }}
                  className="inline-block text-[#0281e0] text-[clamp(2.0rem,5.2vw,4.8rem)] leading-none font-bold"
                >
                  .
                </motion.span>
              ))}
            </div>

            {/* Word 2: AHAMMAD */}
            <div className="flex overflow-hidden">
              {word2.map((char, index) => (
                <motion.span
                  key={`w2-${index}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: phase >= 1 ? 0 : "100%",
                    opacity: phase >= 1 ? 1 : 0
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
                    delay: (word1.length + 3) * 0.05 + index * 0.05,
                  }}
                  className="inline-block text-gray-900 text-[clamp(2.0rem,5.2vw,4.8rem)] uppercase tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

