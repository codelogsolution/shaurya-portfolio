import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "../../types/portfolio";
import Reveal from "../ui/Reveal";

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Selected Work
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Projects that shaped
                <span className="text-cyan-400"> my experience.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                A selection of mobile applications and digital products
                developed across workplace management, e-commerce, events,
                and real-estate domains.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
              <BriefcaseBusiness size={16} />
              <span>5 Professional Projects</span>
            </div>
          </div>
        </Reveal>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => {

            return (
              <Reveal
                key={project.id}
                delay={index * 0.08}
                y={35}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70"
                >
                  {/* Top gradient line */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="grid lg:grid-cols-[120px_minmax(0,1fr)_280px]">
                    {/* Number */}
                    <div className="relative flex items-start border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
                      <div>
                        <span className="text-5xl font-bold tracking-tighter text-white/10 transition-colors duration-500 group-hover:text-cyan-400/20">
                          {project.number}
                        </span>

                        <div className="mt-6 hidden h-12 w-px bg-gradient-to-b from-cyan-400/60 to-transparent lg:block" />
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="relative p-6 md:p-8 lg:p-10">
                      {/* Decorative icon */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-8 top-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        <Sparkles
                          size={20}
                          className="text-cyan-400/50"
                        />
                      </div>

                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                          {project.category}
                        </span>

                        <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1 text-xs text-slate-500">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="max-w-2xl text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {project.highlights.map(
                          (highlight, highlightIndex) => (
                            <motion.div
                              key={highlight}
                              initial={{
                                opacity: 0,
                                x: 10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.2,
                              }}
                              transition={{
                                duration: 0.35,
                                delay:
                                  0.1 +
                                  highlightIndex * 0.05,
                              }}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                            >
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5"
                              >
                                <Check
                                  size={12}
                                  className="text-cyan-400"
                                />
                              </span>

                              <span>{highlight}</span>
                            </motion.div>
                          ),
                        )}
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project side panel */}
                    <div className="relative flex flex-col justify-between border-t border-white/10 bg-white/[0.02] p-6 md:p-8 lg:border-l lg:border-t-0">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                          Project
                        </p>

                        <div className="mt-4 h-px w-12 bg-cyan-400/40" />
                      </div>

                      <div className="mt-8 lg:mt-0">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/5 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                          <BriefcaseBusiness
                            size={20}
                            className="text-cyan-400"
                          />
                        </div>

                        <p className="text-sm leading-6 text-slate-500">
                          Professional experience project showcasing
                          real-world application development and
                          delivery.
                        </p>

                        {(project.githubUrl ||
                          project.liveUrl) && (
                          <div className="mt-6 flex flex-wrap gap-3">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                              >
                                GitHub
                                <ArrowUpRight size={15} />
                              </a>
                            )}

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                              >
                                Live Project
                                <ExternalLink size={15} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover sweep */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"
                  />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;