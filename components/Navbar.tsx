"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { EASE_OUT, getEntranceDelay } from "@/lib/entrance";

const NAV_TRANSITION = {
  duration: 0.25,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/Imtiaz_Ahammad_Resume.pdf", isExternal: true },
  { label: "Contact", href: "#contact" },
];

const headerEntrance = {
  hidden: { y: -60, opacity: 0 },
  visible: () => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: getEntranceDelay() + 0.2,
      duration: 0.5,
      ease: EASE_OUT,
    },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Expand if at top of page, if mouse is hovering, if clicked, or on keyboard focus
  const isExpanded = !isScrolled || isHovered || isClicked || isFocused;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 select-none pointer-events-none"
      variants={headerEntrance}
      initial="hidden"
      animate="visible"
    >
      <nav
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
        onFocus={(e) => {
          if (e.target.matches(":focus-visible")) setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        onClick={(e) => {
          if (!isScrolled) return;
          const clickedLink = (e.target as HTMLElement).closest("a");
          setIsClicked((prev) => (clickedLink ? false : !prev));
        }}
        className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] pointer-events-auto max-w-[calc(100vw-1.5rem)] cursor-pointer"
      >
        {/* Left Side Pill: Profile + Name */}
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 pr-2.5 sm:pr-3 py-1 sm:py-1.5 bg-white/90 border border-blue-300 rounded-full shadow-sm hover:bg-white transition-colors duration-200 shrink-0"
        >
          <img
            src="/avatar.png"
            alt="Imtiaz Ahammad"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
          />
          <span className="text-[11px] sm:text-xs font-black tracking-wider text-gray-900 font-[family-name:var(--font-inter-display)] uppercase">
            IMTIAZ
          </span>
        </Link>

        {/* Links / Toggle container */}
        <div className="flex items-center overflow-hidden">
          {/* Links container */}
          <motion.div
            animate={{
              width: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={NAV_TRANSITION}
            className="flex items-center gap-0.5 overflow-x-auto no-scrollbar"
            style={{
              pointerEvents: isExpanded ? "auto" : "none",
            }}
          >
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  download="Imtiaz_Ahammad_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-full transition-colors duration-200 whitespace-nowrap font-[family-name:var(--font-inter-display)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-full transition-colors duration-200 whitespace-nowrap font-[family-name:var(--font-inter-display)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>

          {/* Collapsed dot indicator when scrolled and not hovered */}
          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div
                key="nav-dot"
                initial={{ width: 0, opacity: 0, scale: 0.9 }}
                animate={{ width: "auto", opacity: 1, scale: 1 }}
                exit={{ width: 0, opacity: 0, scale: 0.9 }}
                transition={NAV_TRANSITION}
                className="flex items-center justify-center overflow-hidden"
              >
                <span className="block ml-1 mr-2 w-2 h-2 shrink-0 rounded-full bg-blue-500 animate-pulse motion-reduce:animate-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
