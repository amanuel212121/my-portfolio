"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = profile.email;
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let&apos;s build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I am open to software engineering opportunities, internships,
            freelance projects, management positions, business collaborations, and professional networking.
          </p>

          {/* Contact Direct Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Email Me</p>
                <p className="truncate text-xs font-semibold text-white">{profile.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Call Directly</p>
                <p className="truncate text-xs font-semibold text-white">{profile.phone}</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Send className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Telegram</p>
                <p className="truncate text-xs font-semibold text-white">@Amanuel_Software</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
                <p className="truncate text-xs font-semibold text-white">Woldia, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="mx-auto mt-10 max-w-2xl space-y-5 text-left"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span>Thank you! Your default email client has been opened with your message.</span>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Abebe Kebede"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Project Inquiry / Business Opportunity"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-600/20 transition hover:-translate-y-1 hover:shadow-purple-500/40"
              >
                <Send className="h-4 w-4" />
                Send Message Directly
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
