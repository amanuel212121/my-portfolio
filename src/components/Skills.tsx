"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Server,
  Sparkles,
} from "lucide-react";

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "HTML":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-500/20 text-[10px] font-black text-orange-400">
          H5
        </span>
      );
    case "CSS":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-[10px] font-black text-blue-400">
          CSS
        </span>
      );
    case "JavaScript":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-yellow-400/20 text-[10px] font-black text-yellow-300">
          JS
        </span>
      );
    case "TypeScript":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-600/20 text-[10px] font-black text-blue-400">
          TS
        </span>
      );
    case "React":
      return (
        <svg className="h-5 w-5 text-cyan-400 shrink-0" viewBox="-11.5 -10.232 23 20.463" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-[11px] font-black text-white">
          N
        </span>
      );
    case "Tailwind CSS":
      return (
        <svg className="h-5 w-5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case "Bootstrap":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-purple-600/30 text-[11px] font-black text-purple-300">
          B
        </span>
      );
    case "Laravel":
      return (
        <svg className="h-5 w-5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.2 6.5l-9.1-5.2c-.4-.2-.9-.2-1.3 0L1.7 6.5c-.4.2-.7.7-.7 1.2v10.5c0 .5.3 1 .7 1.2l9.1 5.2c.2.1.4.2.7.2.2 0 .5-.1.7-.2l9.1-5.2c.4-.2.7-.7.7-1.2V7.7c-.1-.5-.4-.9-.8-1.2zM11.5 3.3l7.3 4.2-3.1 1.8-7.3-4.2 3.1-1.8zM3 8.7l7.5 4.3v7.7L3 16.4V8.7zm9.5 12V13l3.2-1.8v3.4l3.8-2.2V9.4l1.5-.9v7.9l-8.5 4.3z"/>
        </svg>
      );
    case "PHP":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-500/20 text-[9px] font-black text-indigo-300">
          PHP
        </span>
      );
    case "Python":
      return (
        <svg className="h-5 w-5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 1.1c-2.4 0-4.4.4-4.8.9-.6.7-.6 1.7-.6 3.1h5.4v.8H4.6C3 5.9 1.7 7.2 1.7 9.8c0 2.2 1.1 3.5 3.2 3.6h1.7v-2.3c0-1.7 1.5-3.2 3.2-3.2h5.3c1.4 0 2.5-1.1 2.5-2.5V3.1c0-1.2-2.1-2-5.7-2zm-1.8 1.4c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9zm2 19.4c2.4 0 4.4-.4 4.8-.9.6-.7.6-1.7.6-3.1h-5.4v-.8h7.3c1.6 0 2.9-1.3 2.9-3.9 0-2.2-1.1-3.5-3.2-3.6H17v2.3c0 1.7-1.5 3.2-3.2 3.2H8.5c-1.4 0-2.5 1.1-2.5 2.5v2.3c0 1.2 2.1 2 5.7 2zm1.8-1.4c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z"/>
        </svg>
      );
    case "MySQL":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-[9px] font-black text-sky-300">
          SQL
        </span>
      );
    case "PostgreSQL":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-700/20 text-[9px] font-black text-blue-300">
          PG
        </span>
      );
    case "MongoDB":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/20 text-[9px] font-black text-emerald-400">
          MDB
        </span>
      );
    case "Java":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-500/20 text-[9px] font-black text-red-400">
          JAVA
        </span>
      );
    case "C++":
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-[10px] font-black text-blue-300">
          C++
        </span>
      );
    case "Git":
      return (
        <svg className="h-5 w-5 text-orange-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.9 10.9L13.1 2.1c-.6-.6-1.5-.6-2.1 0L8.7 4.4l3.1 3.1c.4-.1.8 0 1.2.3.6.6.6 1.5 0 2.1-.3.3-.8.5-1.2.4L9.1 13v4.6c.3.1.5.3.7.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.5-.4.8-.5V12.7c-.3-.1-.5-.3-.7-.5-.4-.4-.5-1-.3-1.5L4.4 8.6 2.1 10.9c-.6.6-.6 1.5 0 2.1l8.8 8.8c.6.6 1.5.6 2.1 0l8.8-8.8c.7-.6.7-1.5.1-2.1z"/>
        </svg>
      );
    case "GitHub":
      return (
        <svg className="h-5 w-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    default:
      return <Code2 className="h-5 w-5 text-purple-400 shrink-0" />;
  }
}

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
            Tools, languages, and frameworks I use to build robust, modern, and
            scalable web applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-950/20"
              >
                {/* Glow inside card */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-600/20" />

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
                        <div className="flex items-center gap-2.5">
                          <TechIcon name={skill.name} />

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
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
