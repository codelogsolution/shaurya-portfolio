import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers,
} from "lucide-react";

import type { Skills } from "../../types/portfolio";

type SkillsSectionProps = {
  skills: Skills;
};

const skillGroups = [
  {
    key: "frontend",
    title: "Frontend",
    icon: Code2,
  },
  {
    key: "stateManagement",
    title: "State Management",
    icon: Layers,
  },
  {
    key: "backend",
    title: "Backend",
    icon: Database,
  },
  {
    key: "testingAndDevOps",
    title: "Testing & DevOps",
    icon: GitBranch,
  },
  {
    key: "aiAndEmergingTech",
    title: "AI & Emerging Technologies",
    icon: BrainCircuit,
  },
] as const;

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const groupSkills = skills[group.key];

            return (
              <article
                key={group.key}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <Icon className="mb-5 text-cyan-400" size={28} />

                <h3 className="mb-5 text-xl font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {groupSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;