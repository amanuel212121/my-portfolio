"use client";

import { motion } from "framer-motion";
import { Brain, Code2, GraduationCap, Sparkles } from "lucide-react";

const stats = [
  {
    value: "4th",
    label: "Year Student",
    icon: GraduationCap,
  },
  {
    value: "2028",
    label: "Expected Graduation",
    icon: Code2,
  },
  {
    value: "Full-Stack",
    label: "Developer",
    icon: Sparkles,
  },
  {
    value: "AI",
    label: "Interest",
    icon: Brain,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Software Engineering Student & Full-Stack Developer
              </h3>

              <div className="space-y-5 leading-8 text-slate-300">
                <p>
                  I am a passionate Software Engineering student and aspiring
                  Full-Stack Developer interested in building modern, scalable,
                  secure, and user-friendly web applications.
                </p>

                <p>
                  I enjoy solving real-world problems through clean
                  architecture, efficient code, and innovative technologies.
                  I continuously improve my frontend and backend development
                  skills while exploring AI-powered software solutions.
                </p>

                <p>
                  My goal is to become a professional Full-Stack Software
                  Engineer and contribute to impactful digital products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl transition"
                >
                  <Icon className="mb-5 h-7 w-7 text-purple-400 transition group-hover:scale-110" />

                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
