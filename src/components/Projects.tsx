"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Search,
  Sparkles,
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
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            A collection of applications and academic projects built while
            developing my software engineering skills.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-4 pl-12 pr-4 text-white outline-none backdrop-blur-xl transition placeholder:text-slate-500 focus:border-purple-400/50"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-purple-400/40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const hasGithub =
                project.github && project.github !== "#";

              const hasDemo =
                project.demo && project.demo !== "#";

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.07]"
                >
                  {/* Project visual */}
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)]" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl backdrop-blur-xl">
                      <Sparkles className="h-9 w-9 text-purple-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </div>

                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                      PROJECT
                    </span>

                    <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex gap-3">
                      {hasGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-600">
                          GitHub Soon
                        </span>
                      )}

                      {hasDemo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                        >
                          Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-600">
                          Demo Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-slate-400">
              Try another project name, technology, or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
