"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/Imtiaz_Ahammad_Resume.pdf", isExternal: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse after a short delay if the user is no longer hovering
  useEffect(() => {
    if (!isHovered && isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isHovered, isClicked]);

  const isExpanded = !isScrolled || isClicked;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 select-none pointer-events-none"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
    >
      <motion.nav
        layout
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={() => {
          if (isScrolled && !isClicked) {
            setIsClicked(true);
          }
        }}
        className={`flex items-center gap-1.5 p-1.5 bg-white/75 backdrop-blur-md border border-gray-200/50 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] pointer-events-auto transition-all duration-300 ${
          isScrolled && !isClicked ? "cursor-pointer" : ""
        }`}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      >
        {/* Left Side Pill: Profile + Name */}
        <Link
          href="/"
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-white/90 border border-gray-150 rounded-full shadow-sm hover:bg-white transition-colors duration-200"
        >
          <img
            src="/My_avatar.png"
            alt="Imtiaz Ahammad"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs font-black tracking-wider text-gray-900 font-[family-name:var(--font-inter-display)] uppercase">
            IMTIAZ
          </span>
        </Link>

        {/* Links / Toggle button (Always mounted to prevent React synthetic mouseleave on unmount) */}
        <div className="flex items-center overflow-hidden">
          {/* Links container */}
          <motion.div
            layout
            animate={{
              width: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center gap-0.5 overflow-hidden"
            style={{
              pointerEvents: isExpanded ? "auto" : "none",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-950 hover:bg-black/5 rounded-full transition-all duration-200 whitespace-nowrap font-[family-name:var(--font-inter-display)]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          {/* Dots Toggle Button */}
          <motion.button
            layout
            onClick={(e) => {
              e.stopPropagation();
              setIsClicked(true);
            }}
            animate={{
              width: isExpanded ? 0 : 32,
              opacity: isExpanded ? 0 : 1,
              marginLeft: isExpanded ? 0 : 4,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-black/5 hover:text-gray-950 transition-colors duration-150 overflow-hidden"
            style={{
              pointerEvents: isExpanded ? "none" : "auto",
            }}
          >
            <svg
              className="w-4.5 h-4.5 min-w-[18px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
}

