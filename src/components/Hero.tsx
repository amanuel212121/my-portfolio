"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

import Link from "next/link";
import { profile } from "@/data/profile";

const roles = [
  "Software Engineering & Management Student",
  "Full-Stack Web Developer",
  "Management Graduate | Aspiring Entrepreneur",
  "Problem Solver & System Architect",
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
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      {/* Background */}
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

        {/* LEFT SIDE */}
        <div>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-lg backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            Available for Opportunities &amp; Projects
          </motion.div>

          {/* Heading */}
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

          {/* Dynamic Cycling Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 flex min-h-[46px] items-center text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            <span className="mr-2 text-purple-400">&gt;</span>

            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>

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

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            {/* Projects */}
            <Link
              href="#projects"
              prefetch={false}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-purple-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              View Projects
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Download CV */}
            <a
              href="/my-portfolio/Gibeamanuel_Hibstu_CV_Updated.pdf"
              download="Gibeamanuel_Hibstu_CV.pdf"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Download CV
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>
          </motion.div>

          {/* Direct Contact & Social Buttons (Telegram, Instagram, Email, Call) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            {/* Telegram */}
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-2.5 text-xs font-semibold text-sky-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/20 hover:text-white"
            >
              <Send className="h-4 w-4 text-sky-400" />
              Telegram
            </a>

            {/* Instagram */}
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-pink-400/20 bg-pink-500/10 px-4 py-2.5 text-xs font-semibold text-pink-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-pink-400/40 hover:bg-pink-500/20 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4 text-pink-400" />
              Instagram
            </a>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-purple-400/20 bg-purple-500/10 px-4 py-2.5 text-xs font-semibold text-purple-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/20 hover:text-white"
            >
              <Mail className="h-4 w-4 text-purple-400" />
              Email
            </a>

            {/* Call */}
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:text-white"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              Call Me
            </a>
          </motion.div>

          {/* Scroll */}
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

        {/* RIGHT SIDE - PROFILE IMAGE (Fixed upright photo with rotating ambient border) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl"
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

          {/* Outer Frame with Rotating Decorative Ring */}
          <div className="relative mx-auto flex aspect-square w-[280px] items-center justify-center sm:w-[340px]">
            {/* Spinning decorative ring (ONLY the ring rotates, photo stays upright!) */}
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-purple-400/30"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glowing accent halo */}
            <div className="absolute inset-2 rounded-full border border-white/10 bg-white/[0.03] shadow-2xl shadow-purple-950/40 backdrop-blur-xl" />

            {/* Profile Image - STABLE & UPRIGHT */}
            <div className="relative h-[88%] w-[88%] overflow-hidden rounded-full border-2 border-purple-400/40 bg-slate-900 shadow-inner">
              <Image
                src="/my-portfolio/profile.jpg"
                alt="Gibeamanuel Hibstu"
                fill
                priority
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover object-top"
              />

              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-purple-950/20 via-transparent to-blue-500/5" />
            </div>
          </div>

          {/* Floating Badge / Quote */}
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 shadow-xl backdrop-blur-xl text-center"
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
            <p className="whitespace-nowrap text-xs text-purple-300">
              developers by choice
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
