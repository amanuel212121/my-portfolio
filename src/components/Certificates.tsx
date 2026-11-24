"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, Sparkles, Eye, X, ExternalLink } from "lucide-react";
import { certificates, Certificate } from "@/data/certificates";
import Image from "next/image";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
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
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.06]"
            >
              <div>
                {/* Certificate image preview thumbnail */}
                <div
                  onClick={() => setSelectedCert(certificate)}
                  className="relative mb-5 h-56 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/40 group/img"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover/img:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-purple-600/90 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      <Eye className="h-4 w-4" /> Full View
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                        Certificate
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-purple-300">
                      {certificate.issuer}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      {certificate.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {certificate.year}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(certificate)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:brightness-110"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open Original
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative max-h-[75vh] overflow-y-auto p-4 flex justify-center bg-slate-950">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={750}
                  unoptimized
                  className="rounded-xl object-contain shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
