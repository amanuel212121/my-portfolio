"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  FileText,
  Clock,
  Compass,
  DollarSign,
  Lightbulb,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Send,
  Phone,
  Mail,
} from "lucide-react";
import { profile } from "@/data/profile";

const managementSkills = [
  { name: "Leadership and Teamwork", icon: Users, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { name: "Communication Skills", icon: MessageSquare, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  { name: "Problem-Solving", icon: Lightbulb, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { name: "Decision-Making", icon: Compass, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Business Management", icon: Briefcase, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { name: "Human Resource Management", icon: Users, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
  { name: "Financial Management", icon: DollarSign, color: "text-green-400 bg-green-500/10 border-green-500/20" },
  { name: "Strategic Planning", icon: Target, color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { name: "Time Management", icon: Clock, color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  { name: "Microsoft Office", icon: FileText, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  { name: "Report Writing", icon: FileText, color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
  { name: "Project Management", icon: TrendingUp, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
];

export default function Management() {
  return (
    <section id="management" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            <Briefcase className="h-3.5 w-3.5" />
            Business &amp; Administration
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Management{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Graduate.
            </span>
          </h2>

          <p className="mt-4 text-lg font-semibold text-purple-300">
            Management Graduate | Business Professional | Aspiring Entrepreneur
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Passionate about business administration, strategic leadership, organizational development,
            and creating meaningful solutions to organizational challenges.
          </p>
        </motion.div>

        {/* Dual Cards: About Management & Career Objective */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* About Management */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl transition hover:border-blue-400/30"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <Award className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">About Me in Management</h3>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Encodo College • Faculty of Business and Management • Expected Jul 2027
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                I am a dedicated and motivated Management graduate with a strong academic background in
                <span className="font-semibold text-white"> business management, organizational behavior, human resource management, marketing, financial management, and strategic management</span>.
              </p>
              <p>
                I possess a strong passion for leadership, teamwork, effective communication, sound decision-making, and proactive business development.
              </p>
              <p>
                I firmly believe in continuous learning, professional growth, and crafting impactful solutions to organizational and operational challenges.
              </p>
              <p className="rounded-xl border border-blue-400/20 bg-blue-500/5 p-4 text-blue-200">
                &ldquo;My goal is to build a successful career in management and contribute positively to the growth, efficiency, and long-term success of organizations.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Career Objective & Connection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl transition hover:border-purple-400/30"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                  <Target className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Career Objective</h3>
                  <p className="text-xs uppercase tracking-wider text-purple-300">Professional Goal</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-sm leading-relaxed text-slate-300">
                To obtain a challenging professional opportunity where I can apply my Management knowledge,
                strengthen my practical experience, demonstrate my leadership and communication abilities,
                and contribute to organizational growth while developing my professional career.
              </div>

              {/* Core Strengths Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Business Administration",
                  "Strategic Leadership",
                  "Organizational Behavior",
                  "Cross-Functional Teamwork",
                  "Operations & Planning"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Open to Management Positions, Collaborations &amp; Opportunities
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-400/20 bg-sky-500/10 px-5 py-2.5 text-xs font-semibold text-sky-300 transition hover:bg-sky-500/20"
                >
                  <Send className="h-4 w-4" /> Telegram
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <Phone className="h-4 w-4" /> Call Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Management Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Management Skills</span>
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Key competencies developed in business administration, organizational leadership, and operations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {managementSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${skill.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 transition group-hover:text-white">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
