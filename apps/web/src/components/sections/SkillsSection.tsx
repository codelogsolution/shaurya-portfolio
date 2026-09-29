import {
  AppWindow,
  Cloud,
  Database,
  GitBranch,
  Rocket,
  Settings,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";

import type { Skills } from "../../types/portfolio";
import Reveal from "../ui/Reveal";

type SkillsSectionProps = {
  skills: Skills;
};

const skillGroups = [
  {
    key: "mobileDevelopment",
    title: "Mobile Development",
    description: "Cross-platform mobile application development",
    icon: Smartphone,
  },
  {
    key: "frontend",
    title: "Frontend / ReactJS",
    description: "Modern web interfaces and component architecture",
    icon: AppWindow,
  },
  {
    key: "backend",
    title: "Backend",
    description: "Basic backend and REST API knowledge",
    icon: Database,
  },
  {
    key: "firebaseAndData",
    title: "Firebase & Data",
    description: "Application data, authentication and real-time services",
    icon: Cloud,
  },
  {
    key: "cicd",
    title: "CI/CD",
    description: "Basic build automation and release pipeline knowledge",
    icon: GitBranch,
  },
  {
    key: "deployment",
    title: "Deployment",
    description: "Mobile application release and store management",
    icon: Rocket,
  },
  {
    key: "toolsAndPractices",
    title: "Tools & Practices",
    description: "Development workflow and engineering practices",
    icon: Settings,
  },
] as const;

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Technical Skills
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Technologies I work with
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              A collection of technologies and engineering practices I use
              across mobile, web, backend integration, deployment, and
              development workflows.
            </p>
          </div>
        </Reveal>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const groupSkills = skills[group.key];

            return (
              <Reveal
                key={group.key}
                delay={index * 0.08}
                y={30}
              >
                <motion.article
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="glass-panel glass-panel-hover glass-highlight glow-cyan h-full rounded-2xl p-6"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon
                      size={24}
                      className="text-cyan-400"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {groupSkills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.92,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            index * 0.08 + skillIndex * 0.025,
                        }}
                        className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;