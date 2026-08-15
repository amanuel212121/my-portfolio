"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Sparkles } from "lucide-react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Certificates
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-purple-400/30"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Award className="h-7 w-7 text-purple-400" />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-400" />

                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                      Certificate
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {certificate.issuer}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {certificate.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}