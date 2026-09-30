import { motion } from "motion/react";
import {
  AppWindow,
  Cloud,
  Database,
  GitBranch,
  Rocket,
  Settings,
  Smartphone,
} from "lucide-react";

import type { Skills } from "../../types/portfolio";
import Marquee from "../ui/Marquee";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";

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
    description: "REST APIs and server-side integration",
    icon: Database,
  },
  {
    key: "firebaseAndData",
    title: "Firebase & Data",
    description: "Auth, realtime data and cloud messaging",
    icon: Cloud,
  },
  {
    key: "cicd",
    title: "CI/CD",
    description: "Build automation and release pipelines",
    icon: GitBranch,
  },
  {
    key: "deployment",
    title: "Deployment",
    description: "Store release and listing management",
    icon: Rocket,
  },
  {
    key: "toolsAndPractices",
    title: "Tools & Practices",
    description: "Workflow and engineering practices",
    icon: Settings,
  },
] as const;

const TickerChip = ({
  label,
  solid = false,
}: {
  label: string;
  solid?: boolean;
}) => (
  <span
    className={`mx-3 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border px-5 py-2.5 font-display text-sm font-medium ${
      solid
        ? "border-accent bg-accent text-accent-ink"
        : "border-hairline/15 text-paper/80"
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        solid ? "bg-accent-ink" : "bg-accent"
      }`}
    />
    {label}
  </span>
);

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const tickerTop = [
    ...skills.mobileDevelopment,
    ...skills.frontend,
    ...skills.backend,
  ];

  const tickerBottom = [
    ...skills.firebaseAndData,
    ...skills.cicd,
    ...skills.deployment,
    ...skills.toolsAndPractices,
  ];

  return (
    <section id="skills" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title={
            <>
              Tools that ship{" "}
              <span className="font-serif text-accent-text italic">products</span>
            </>
          }
          description="A collection of technologies and engineering practices used across mobile, web, backend integration, deployment, and development workflows."
        />
      </div>

      {/* Infinite ticker band */}
      <div className="border-y border-hairline/10 bg-ink-2/60 py-8">
        <Marquee duration={38} gap="0rem">
          {tickerTop.map((label, i) => (
            <TickerChip key={`${label}-${i}`} label={label} solid={i % 4 === 1} />
          ))}
        </Marquee>

        <div className="mt-4" />

        <Marquee duration={46} reverse gap="0rem">
          {tickerBottom.map((label, i) => (
            <TickerChip key={`${label}-${i}`} label={label} solid={i % 5 === 2} />
          ))}
        </Marquee>
      </div>

      {/* Skill groups */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          const groupSkills = skills[group.key];

          return (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-hairline/10 bg-ink-2 p-7 transition-colors duration-300 hover:border-hairline/20">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-hairline/10 bg-hairline/5">
                    <Icon
                      size={20}
                      className="text-accent-text"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-paper">
                    {group.title}
                  </h3>

                  <p className="mt-1.5 text-sm text-muted">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-hairline/5 pt-5">
                    {groupSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-hairline/10 px-3 py-1.5 text-xs text-paper/75 transition-colors duration-200 hover:border-accent/50 hover:text-accent-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;