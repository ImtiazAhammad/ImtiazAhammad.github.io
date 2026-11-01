"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/entrance";

const parent = (stagger: number, delay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const child = {
  hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    // Clear the filter once settled so the text renders fully sharp.
    transitionEnd: { filter: "none" },
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export default function TextReveal({
  text,
  by = "char",
  delay = 0,
  className,
}: {
  text: string;
  by?: "char" | "word";
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={parent(by === "char" ? 0.02 : 0.06, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, w) => (
        <Fragment key={w}>
          <span className="inline-block whitespace-nowrap">
            {by === "word" ? (
              <motion.span variants={child} className="inline-block">
                {word}
              </motion.span>
            ) : (
              Array.from(word).map((char, c) => (
                <motion.span key={c} variants={child} className="inline-block">
                  {char}
                </motion.span>
              ))
            )}
          </span>
          {w < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.span>
  );
}
