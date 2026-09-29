import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

import type { Experience } from "../../types/portfolio";
import Reveal from "../ui/Reveal";

type ExperienceSectionProps = {
  experience: Experience[];
};

const companyInfo = {
  chetu: {
    name: "Chetu India Pvt. Ltd.",
    website: "https://www.chetu.com/",
    initials: "C",
  },

  webnyxa: {
    name: "Webnyxa Technologies",
    website: "https://www.webnyxa.com/",
    initials: "W",
  },
} as const;

const ExperienceSection = ({
  experience,
}: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Career Journey
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Professional Experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              My professional journey building cross-platform applications
              with React Native and modern web technologies.
            </p>
          </div>
        </Reveal>

        {/* Experience list */}
        <div className="space-y-10">
          {experience.map((item, index) => {
            const company =
              companyInfo[item.id as keyof typeof companyInfo];

            if (!company) {
              return null;
            }

            return (
              <div
                key={item.id}
                className="relative grid items-stretch gap-6 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]"
              >
                {/* Company identity */}
                <Reveal
                  delay={index * 0.1}
                  y={25}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="glass-panel glass-panel-hover glass-highlight group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl p-7"
                  >
                    {/* Decorative glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20"
                    />

                    <div className="relative">
                      {/* Company mark */}
                      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl font-bold text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                        {company.initials}
                      </div>

                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Company
                      </p>

                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {company.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.role}
                      </p>

                      <div className="mt-6 space-y-3 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <CalendarDays
                            size={15}
                            className="text-cyan-400/70"
                          />

                          {item.duration}
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin
                            size={15}
                            className="text-cyan-400/70"
                          />

                          India
                        </div>
                      </div>
                    </div>

                    {/* Website */}
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      Visit Company
                      <ExternalLink size={15} />
                    </a>
                  </motion.div>
                </Reveal>

                {/* Experience details */}
                <Reveal
                  delay={index * 0.1 + 0.12}
                  y={25}
                  className="h-full"
                >
                  <motion.article
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="glass-panel glass-panel-hover glass-highlight h-full rounded-2xl p-7 md:p-8"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                          <BriefcaseBusiness
                            size={21}
                            className="text-cyan-400"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.role}
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Current role */}
                      {index === 0 && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                          </span>

                          Current Role
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-white/10" />

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {item.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <motion.div
                            key={responsibility}
                            initial={{
                              opacity: 0,
                              x: 12,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.15,
                            }}
                            transition={{
                              duration: 0.4,
                              delay:
                                0.15 +
                                responsibilityIndex * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />

                            <p>{responsibility}</p>
                          </motion.div>
                        ),
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Technologies & Practices
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map(
                          (technology, technologyIndex) => (
                            <motion.span
                              key={technology}
                              initial={{
                                opacity: 0,
                                scale: 0.9,
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
                                  0.25 +
                                  technologyIndex * 0.025,
                              }}
                              className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
                            >
                              {technology}
                            </motion.span>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Official website */}
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
                    >
                      Official company website
                      <ArrowUpRight size={13} />
                    </a>
                  </motion.article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;