"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  Rocket,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    value: "Dual Major",
    label: "Software & Management",
    icon: GraduationCap,
  },
  {
    value: "7+",
    label: "Featured Projects",
    icon: Code2,
  },
  {
    value: "18+",
    label: "Technologies Mastered",
    icon: Sparkles,
  },
  {
    value: "Full-Stack & AI",
    label: "Areas of Focus",
    icon: Brain,
  },
];

const highlights = [
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Turning real-world challenges into practical and reliable software solutions.",
  },
  {
    icon: Layers3,
    title: "Clean Architecture",
    description:
      "Writing maintainable, scalable, and well-structured applications.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Constantly learning modern technologies and improving development skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/10 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            About Me
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I combine engineering fundamentals, creativity, and modern
            technologies to build useful digital experiences.
          </p>
        </motion.div>

        {/* Main About Card */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-purple-500/[0.03] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10"
          >
            {/* Decorative gradient */}
            <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                  <Code2 className="h-6 w-6 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                    My Journey
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    Software Engineering &amp; Management Scholar
                  </h3>
                </div>
              </div>

              {/* Origin & Study Badges */}
              <div className="mb-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Birthplace: <strong className="text-white">Bahir Dar, Ethiopia</strong>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Studying in: <strong className="text-white">Woldia City, North Wello</strong>
                </span>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Originally born in <span className="font-semibold text-white">Bahir Dar, Ethiopia</span> and currently pursuing my higher education in <span className="font-semibold text-white">Woldia City, North Wello</span>, I am a passionate{" "}
                  <span className="font-semibold text-white">
                    Software Engineering &amp; Management Student
                  </span>{" "}
                  and aspiring Full-Stack Developer focused on building
                  modern, scalable, secure, and user-friendly web applications.
                </p>

                <p>
                  I enjoy solving real-world problems through{" "}
                  <span className="font-semibold text-purple-300">
                    clean architecture
                  </span>
                  , efficient code, and thoughtful user experiences. I
                  continuously improve my frontend and backend development
                  skills while exploring AI-powered software solutions.
                </p>

                <p>
                  My long-term goal is to become a professional{" "}
                  <span className="font-semibold text-white">
                    Full-Stack Software Engineer
                  </span>{" "}
                  and contribute to impactful digital products that make a
                  meaningful difference.
                </p>
              </div>

              {/* Mini Highlights */}
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/5 bg-black/10 p-4 transition hover:border-purple-400/20 hover:bg-purple-500/[0.04]"
                    >
                      <Icon className="mb-3 h-5 w-5 text-purple-400" />

                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-xl backdrop-blur-xl"
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition duration-500 group-hover:bg-purple-500/20" />

                  <div className="relative">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300 transition duration-300 group-hover:scale-110 group-hover:text-purple-200" />
                    </div>

                    <div className="text-2xl font-black text-white sm:text-3xl">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="col-span-2 rounded-[1.75rem] border border-purple-400/10 bg-gradient-to-r from-blue-500/[0.06] via-purple-500/[0.08] to-fuchsia-500/[0.06] p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                  <CheckCircle2 className="h-5 w-5 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                    My Philosophy
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Problem-solvers by nature, developers by choice.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
