"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Server,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Interfaces & Experiences",
    icon: Code2,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    title: "Backend",
    subtitle: "Logic & APIs",
    icon: Server,
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Database",
    subtitle: "Data & Storage",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Programming & Tools",
    subtitle: "Development Workflow",
    icon: GitBranch,
    skills: [
      { name: "Java", level: 68 },
      { name: "C++", level: 65 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/10 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            Technical Skills
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologies{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              I Use.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A growing technical toolkit focused on building modern,
            maintainable, and scalable software applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-purple-400/25 hover:shadow-2xl hover:shadow-purple-950/20"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Card Header */}
                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-fuchsia-500/10">
                      <Icon className="h-6 w-6 text-purple-300 transition duration-300 group-hover:scale-110" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {group.skills.length} Skills
                  </span>
                </div>

                {/* Skills */}
                <div className="relative space-y-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="mb-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-purple-400/70" />

                          <span className="text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-xs font-semibold text-purple-300">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: groupIndex * 0.08 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500"
                        >
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 2,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-y-0 w-1/3 bg-white/20 blur-sm"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            <span className="font-semibold text-white">
              Always learning.
            </span>{" "}
            My skills continue to evolve as I work on new projects, explore
            modern technologies, and solve increasingly complex problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}