"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Download,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "Home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          const item = navItems.find(
            (navItem) => navItem.href === `#${section.id}`,
          );

          if (item) current = item.name;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "px-3 pt-3 sm:px-5" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "rounded-2xl border border-white/10 bg-slate-950/75 shadow-2xl shadow-purple-950/20 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-purple-400/20 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 shadow-lg shadow-purple-500/10"
          >
            <Sparkles className="h-5 w-5 text-purple-300" />

            <span className="absolute inset-0 -z-10 bg-purple-500/20 blur-xl" />
          </motion.div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight text-white">
              Gibeamanuel
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Developer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-2xl border border-white/5 bg-white/[0.02] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative rounded-xl px-3 py-2 text-xs font-medium transition-colors duration-300 lg:px-3.5"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-purple-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* CV */}
          <a
            href="/cv.pdf"
            download
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-slate-200 backdrop-blur-xl transition hover:border-purple-400/20 hover:bg-purple-500/10 hover:text-white lg:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>

          {/* Theme */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-slate-300 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <Sun className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Moon className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-white backdrop-blur-xl md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-purple-950/30 backdrop-blur-2xl md:hidden"
          >
            <div className="grid gap-1 p-3">
              {navItems.map((item, index) => {
                const isActive = active === item.name;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.03,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-purple-500/10 text-purple-300"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              <a
                href="/cv.pdf"
                download
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}