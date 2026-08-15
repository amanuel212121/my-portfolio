"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experience.map((item, index) => (
            <div key={index} className="relative pl-16 mb-12 last:mb-0">
              <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10">
                <Briefcase className="h-6 w-6 text-purple-400" />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.07]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {item.title} @ {item.company}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg text-blue-300">
                  {item.company}
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" />
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}