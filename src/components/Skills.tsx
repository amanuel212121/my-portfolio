"use client";

import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 70 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 }
    ]
  },
  {
    title: "Programming & Tools",
    icon: GitBranch,
    skills: [
      { name: "Java", level: 68 },
      { name: "C++", level: 65 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Technologies <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">I Use</span>
          </h2>
          <p className="mt-5 text-slate-400">
            Technologies and tools I use to design, develop, and maintain modern applications.
          </p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-sm text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
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
