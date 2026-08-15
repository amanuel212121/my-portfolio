"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Search,
  Sparkles,
  ArrowUpRight,
  FolderCode,
} from "lucide-react";

import { projects } from "@/data/projects";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

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
            A collection of applications and academic projects built while
            developing my software engineering skills.
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
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap gap-2"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "border-purple-400/30 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 text-white shadow-lg shadow-purple-950/20"
                    : "border-white/10 bg-white/[0.03] text-slate-500 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
              const hasGithub =
                Boolean(project.github) && project.github !== "#";

              const hasDemo =
                Boolean(project.demo) && project.demo !== "#";

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.015] shadow-xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 hover:border-purple-400/25 hover:shadow-2xl hover:shadow-purple-950/20"
                >
                  {/* Visual Header */}
                  <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-fuchsia-500/[0.04]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_55%)]" />

                    {/* Animated Circle */}
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-36 w-36 rounded-full border border-purple-400/10"
                    />

                    {/* Second Circle */}
                    <div className="absolute h-24 w-24 rounded-full border border-blue-400/10" />

                    {/* Project Icon */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.07] shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
                      <Sparkles className="h-9 w-9 text-purple-300 transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    </div>

                    {/* Project Label */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-300 backdrop-blur-md">
                      Project
                    </span>

                    {/* Category */}
                    <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight className="absolute bottom-5 right-5 h-5 w-5 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300" />
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
                      {/* GitHub */}
                      {hasGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <span className="text-sm">↗</span>
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-600">
                          GitHub Soon
                        </span>
                      )}

                      {/* Demo */}
                      {hasDemo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:scale-[1.02] hover:shadow-purple-900/30"
                        >
                          Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-600">
                          Demo Soon
                        </span>
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
    </section>
  );
}