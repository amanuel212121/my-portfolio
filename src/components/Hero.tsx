"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

const roles = [
  "Software Engineering Student",
  "Full-Stack Developer",
  "Problem Solver",
  "Web Application Developer",
];

const particles = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "18%", top: "72%", delay: 1.2 },
  { left: "34%", top: "22%", delay: 2.1 },
  { left: "52%", top: "78%", delay: 0.7 },
  { left: "68%", top: "18%", delay: 1.8 },
  { left: "82%", top: "65%", delay: 2.6 },
  { left: "92%", top: "30%", delay: 0.4 },
  { left: "44%", top: "45%", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

        <motion.div
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[150px]"
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-purple-300/60 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.25, 1, 0.25],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3.5,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div>
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-lg shadow-purple-950/10 backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            Available for opportunities
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Gibeamanuel
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 min-h-[42px] text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            <span className="mr-2 text-purple-400">&gt;</span>

            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {roles[0]}
            </motion.span>

            <span className="ml-1 animate-pulse text-purple-400">_</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 flex items-center gap-2 text-sm text-slate-400"
          >
            <MapPin className="h-4 w-4 text-purple-400" />
            <span>{profile.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              prefetch={false}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-purple-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              View Projects
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="/cv.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Download CV
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="text-lg">⌘</span>
              GitHub
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-14 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Outer Glow */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Decorative Ring */}
          <motion.div
            className="relative mx-auto flex aspect-square w-[280px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-purple-950/40 backdrop-blur-xl sm:w-[340px]"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-purple-400/20" />

            {/* Profile Placeholder */}
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-purple-400/30 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
              <div className="text-center">
                <div className="text-6xl font-black text-white/20 sm:text-7xl">
                  GH
                </div>

                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-purple-300/50">
                  Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Quote Card */}
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3 shadow-xl backdrop-blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="whitespace-nowrap text-sm font-semibold text-white">
              Problem-solvers by nature
            </p>

            <p className="text-center text-xs text-purple-300">
              developers by choice
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}