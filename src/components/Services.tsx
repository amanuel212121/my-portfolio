"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Server,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, responsive, and accessible interfaces built with React, Next.js, TypeScript, and Tailwind CSS.",
    icon: Globe,
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Secure and scalable backend systems, REST APIs, authentication, and business logic using PHP and Laravel.",
    icon: Server,
    technologies: ["PHP", "Laravel", "REST API"],
  },
  {
    number: "03",
    title: "Full-Stack Applications",
    description:
      "Complete web applications that connect polished frontend experiences with reliable backend services.",
    icon: Code2,
    technologies: ["React", "Laravel", "MySQL"],
  },
  {
    number: "04",
    title: "Database Solutions",
    description:
      "Structured, reliable, and scalable data solutions designed around application requirements and performance.",
    icon: Database,
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    number: "05",
    title: "UI/UX Implementation",
    description:
      "Transforming ideas and designs into intuitive, responsive, and visually polished digital experiences.",
    icon: LayoutDashboard,
    technologies: ["UI Design", "Responsive", "Accessibility"],
  },
  {
    number: "06",
    title: "AI & Problem Solving",
    description:
      "Exploring intelligent software solutions and applying engineering principles to solve meaningful problems.",
    icon: Brain,
    technologies: ["AI", "Automation", "Innovation"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <motion.div
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/10 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            What I Do
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building digital{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              solutions.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I combine software engineering, modern technologies, and
            thoughtful design to create reliable digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 shadow-xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 hover:border-purple-400/25 hover:shadow-2xl hover:shadow-purple-950/20"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative mb-7 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-slate-600">
                    {service.number}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300" />
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-fuchsia-500/10">
                  <Icon className="h-7 w-7 text-purple-300 transition duration-300 group-hover:scale-110 group-hover:text-purple-200" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="relative mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/5 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-500 transition group-hover:border-purple-400/10 group-hover:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
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
            From{" "}
            <span className="font-semibold text-white">
              idea to implementation
            </span>
            , I focus on creating software that is useful, maintainable, and
            built for real-world needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}