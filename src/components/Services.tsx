"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and accessible user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description:
      "Secure and scalable backend applications and APIs using PHP, Laravel, and modern development practices.",
    icon: Server,
  },
  {
    title: "Full-Stack Applications",
    description:
      "Complete web applications connecting modern frontend interfaces with reliable backend systems and databases.",
    icon: Code2,
  },
  {
    title: "Database Solutions",
    description:
      "Designing and managing structured and scalable data solutions using MySQL, PostgreSQL, and MongoDB.",
    icon: Database,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning designs and ideas into clean, intuitive, responsive, and user-friendly web experiences.",
    icon: LayoutDashboard,
  },
  {
    title: "AI & Problem Solving",
    description:
      "Exploring AI-powered solutions and applying software engineering principles to solve real-world problems.",
    icon: Brain,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Services
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            What I{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            I focus on building modern digital solutions with clean code,
            thoughtful architecture, and great user experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-purple-400">
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
