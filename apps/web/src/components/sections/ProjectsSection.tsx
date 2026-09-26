import { ExternalLink, FolderCode } from "lucide-react";

import type { Project } from "../../types/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects and experiments
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <FolderCode className="mb-5 text-cyan-400" size={30} />

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {project.category}
                </span>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs text-slate-300"
                  >
                    #{technology}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400"
                onClick={() => {
                  console.log(`Selected project: ${project.title}`);
                }}
              >
                View project
                <ExternalLink size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;