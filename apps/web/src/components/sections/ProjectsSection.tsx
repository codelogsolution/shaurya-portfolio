import { ArrowUpRight, ExternalLink, Plus } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "../../types/portfolio";
import SectionHeading from "../ui/SectionHeading";

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <div
    className="sticky mb-8 last:mb-0"
    style={{ top: `${104 + index * 14}px`, zIndex: index + 1 }}
  >
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 shadow-2xl shadow-black/60"
    >
      {/* Top strip */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 sm:px-9">
        <span className="text-outline font-display text-3xl font-bold leading-none sm:text-4xl">
          {project.number}
        </span>

        <div className="flex flex-wrap justify-end gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            {project.status}
          </span>
        </div>
      </div>

      <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        {/* Main */}
        <div>
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl leading-8 text-muted">
            {project.description}
          </p>

          <ul className="mt-7 space-y-3">
            {project.highlights.slice(0, 4).map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-7 text-paper/80"
              >
                <Plus size={15} className="mt-2 shrink-0 text-accent" />
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-paper/75"
              >
                {technology}
              </span>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-auto flex flex-wrap gap-3 pt-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-accent/60 hover:text-accent"
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
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink"
                >
                  Live Project
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
      />
    </motion.article>
  </div>
);

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="relative bg-ink px-6 pb-32 pt-24 sm:pt-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Selected Work"
          title={
            <>
              Projects that shaped{" "}
              <span className="font-serif text-accent italic">my craft</span>
            </>
          }
          description={`A selection of ${projects.length} professional mobile applications and digital products across workplace management, e-commerce, events, and real-estate domains.`}
        />

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;