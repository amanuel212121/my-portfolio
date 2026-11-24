"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  Sparkles,
  ArrowUpRight,
  FolderCode,
  Eye,
  X,
  Monitor,
  CheckCircle2,
  Layers,
  Globe
} from "lucide-react";

import { projects, Project } from "@/data/projects";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const matchesSearch =
        searchText.length === 0 ||
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/10 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            My Work
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Click &ldquo;View Project&rdquo; on any project to explore its frontend design, features, and source code.
          </p>
        </motion.div>

        {/* Search + Project Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="relative w-full sm:max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-slate-600 focus:border-purple-400/40 focus:bg-white/[0.06]"
              aria-label="Search projects"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <FolderCode className="h-4 w-4 text-purple-400" />
            <span>
              Showing{" "}
              <span className="font-semibold text-white">
                {filteredProjects.length}
              </span>{" "}
              projects
            </span>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-2.5"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-2xl border px-5 py-2.5 text-xs font-semibold transition duration-300 ${
                  active
                    ? "border-purple-400/40 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white shadow-lg shadow-purple-950/30"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const hasGithub = project.github && project.github !== "#";

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-950/20"
                >
                  {/* Top Bar with mock frame */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative flex h-52 cursor-pointer items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 group/mockup"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.previewAccent} opacity-15 transition-opacity duration-300 group-hover/mockup:opacity-30`}
                    />

                    {/* Simulated browser mini-frame */}
                    <div className="relative w-[85%] rounded-xl border border-white/15 bg-slate-950/90 p-3 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover/mockup:scale-105">
                      <div className="mb-2.5 flex items-center gap-1.5 border-b border-white/10 pb-2">
                        <span className="h-2 w-2 rounded-full bg-red-500/80" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                        <div className="ml-2 flex-1 rounded bg-white/10 px-2 py-0.5 text-[10px] text-slate-400 truncate">
                          frontend://{project.title.toLowerCase().replace(/\s+/g, "-")}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="h-3 w-3/4 rounded bg-white/20" />
                        <div className="h-2 w-1/2 rounded bg-white/10" />
                        <div className="flex gap-1 pt-1">
                          <div className="h-6 flex-1 rounded bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10" />
                          <div className="h-6 flex-1 rounded bg-white/5 border border-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* Category pill */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3.5 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                      {project.category}
                    </span>

                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                      <Eye className="h-3 w-3 text-purple-400" /> Click to View
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-200">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-400 transition group-hover:border-purple-400/10 group-hover:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:scale-[1.02] hover:shadow-purple-900/30"
                      >
                        <Eye className="h-4 w-4" />
                        View Project
                      </button>

                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                          title="View on GitHub"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* No Results */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
              <Search className="h-6 w-6 text-purple-300" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another project name, technology, or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Frontend Preview Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl flex flex-col"
            >
              {/* Browser header bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-5 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/90" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/90" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  <div className="ml-3 hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    <Globe className="h-3 w-3 text-purple-400" />
                    <span>https://frontend-preview.dev/{selectedProject.title.toLowerCase().replace(/\s+/g, "-")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Simulated Interactive Frontend Preview Showcase */}
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-inner relative overflow-hidden">
                  <div
                    className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${selectedProject.previewAccent} opacity-20 blur-3xl`}
                  />

                  {/* Mock Interface Banner */}
                  <div className="relative">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                          <Monitor className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {selectedProject.title}
                          </h4>
                          <span className="text-xs text-purple-300 font-medium">
                            Frontend Architecture & UI View
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                        {selectedProject.category}
                      </span>
                    </div>

                    {/* Interactive UI Mockup Card */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/80 p-5 space-y-4">
                      {/* Sub-nav mock */}
                      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-semibold text-white">System Active & Operational</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Dashboard View</span>
                      </div>

                      {/* Mock UI Stat Boxes */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                          <p className="text-[11px] text-slate-400">Status</p>
                          <p className="text-sm font-semibold text-emerald-400 mt-1">Ready for Production</p>
                        </div>
                        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                          <p className="text-[11px] text-slate-400">Design System</p>
                          <p className="text-sm font-semibold text-purple-300 mt-1">Responsive UI/UX</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                          <p className="text-[11px] text-slate-400">UI Stack</p>
                          <p className="text-sm font-semibold text-blue-300 mt-1">React / Tailwind</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frontend Features Highlights */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Key Frontend Features & Components
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedProject.frontendFeatures.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About Project
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-slate-950/80 px-6 py-4">
                <span className="text-xs text-slate-500">
                  Built by Gibeamanuel Hibstu
                </span>
                <div className="flex items-center gap-3">
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Full Live Project
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
