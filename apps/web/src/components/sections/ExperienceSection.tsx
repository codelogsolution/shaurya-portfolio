import { BriefcaseBusiness } from "lucide-react";

import type { Experience } from "../../types/portfolio";

type ExperienceSectionProps = {
  experience: Experience[];
};

const ExperienceSection = ({
  experience,
}: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Professional experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={item.id}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-3">
                  <BriefcaseBusiness className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>

                  <p className="mt-1 text-cyan-400">{item.company}</p>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.duration} · {item.type}
                  </p>
                </div>
              </div>

              <h4 className="mb-3 font-semibold">Responsibilities</h4>

              <ul className="list-disc space-y-2 pl-5 text-slate-400">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;