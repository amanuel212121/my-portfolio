"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="relative pl-16">
            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10">
              <GraduationCap className="h-6 w-6 text-purple-400" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.07]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                  {education.year}
                </span>

                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  Expected {education.expectedGraduation}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {education.department}
              </h3>

              <p className="mt-2 text-lg text-blue-300">
                {education.university}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                {education.location}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}