"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // Expand if at top of page, if mouse is hovering, or if clicked
  const isExpanded = !isScrolled || isHovered || isClicked;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 select-none pointer-events-none"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.0, duration: 0.9, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
    >
      <motion.nav
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (isScrolled) {
            setIsClicked((prev) => !prev);
          }
        }}
        className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] pointer-events-auto max-w-[calc(100vw-1.5rem)] transition-all duration-300 cursor-pointer"
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 10,
        }}
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
            layout
            animate={{
              width: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.95, ease: "easeInOut" }}
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
                  className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-full transition-all duration-200 whitespace-nowrap font-[family-name:var(--font-inter-display)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-full transition-all duration-200 whitespace-nowrap font-[family-name:var(--font-inter-display)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>

          {/* Collapsed dot indicator when scrolled and not hovered */}
          {!isExpanded && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center justify-center pr-2 pl-1"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.div>
          )}
        </div>
      </motion.nav>
    </motion.header>
  );
}
