"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In real app, integrate with backend or email service.
    console.log("Submitted", formData);
    setStatus("Message sent! (placeholder)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">Contact</p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Let's build something great.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I am open to software engineering opportunities, internships, freelance projects, and collaboration.
          </p>

          <form className="mt-10 max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                aria-label="Name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-purple-400/50 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
            {status && <p className="mt-4 text-sm text-green-400">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
