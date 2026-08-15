"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur"
          >
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            Software Engineering Student | Full-Stack Developer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Gibeamanuel
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex items-center gap-2 text-slate-400"
          >
            <MapPin className="h-5 w-5 text-purple-400" />
            <span>{profile.location}</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105"
                aria-label="View Projects"
                prefetch={false}
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

            <Link
               href="#contact"
               className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
               aria-label="Contact Me"
               prefetch={false}
             >
               Contact Me
             </Link>

            <a
               href={profile.github}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
               aria-label="GitHub Profile"
             >
               GitHub
             </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-16 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
