import { ArrowUpRight, CalendarDays, ChevronDown } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useRef, useState } from "react";

import type { Experience } from "../../types/portfolio";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";

type ExperienceSectionProps = {
  experience: Experience[];
};

const companyWebsites: Record<string, string> = {
  chetu: "https://www.chetu.com/",
  webnyxa: "https://www.webnyxa.com/",
};

const ExperienceItem = ({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) => {
  const website = companyWebsites[item.id];
  const isCurrent = item.duration.toLowerCase().includes("present");
  const [expanded, setExpanded] = useState(index === 0);

  const visibleResponsibilities = expanded
    ? item.responsibilities
    : item.responsibilities.slice(0, 3);
  const hiddenCount = item.responsibilities.length - 3;

  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-9 h-4 w-4 rounded-full border-2 bg-ink ${
          isCurrent
            ? "border-accent shadow-[0_0_16px_rgba(200,245,66,0.5)]"
            : "border-hairline/25"
        }`}
      />

      <SpotlightCard>
        <article className="rounded-3xl border border-hairline/10 bg-ink-2 p-7 transition-colors duration-300 hover:border-hairline/20 sm:p-9">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-paper">
                {item.role}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{item.company}</p>
            </div>

            <div className="flex flex-col items-end gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline/10 px-3.5 py-1.5 text-xs text-paper/80">
                <CalendarDays size={13} className="text-accent-text" />
                {item.duration}
              </span>
              {isCurrent && (
                <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-text">
                  <span className="ping-soft relative flex h-1.5 w-1.5">
                    <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Current
                </span>
              )}
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="mt-7 space-y-3.5">
            {visibleResponsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-3 text-sm leading-7 text-muted"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>

          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((previous) => !previous)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text transition-colors hover:text-accent-text/80"
            >
              {expanded ? "Show less" : `+ ${hiddenCount} more`}
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2 border-t border-hairline/5 pt-6">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-hairline/10 px-3 py-1.5 text-xs text-paper/70 transition-colors duration-200 hover:border-accent/50 hover:text-accent-text"
              >
                {technology}
              </span>
            ))}
          </div>

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-accent-text"
            >
              Official company website
              <ArrowUpRight size={13} />
            </a>
          )}
        </article>
      </SpotlightCard>
    </motion.li>
  );
};

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.45"],
  });

  return (
    <section
      id="experience"
      className="relative bg-ink px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          eyebrow="Career"
          title={
            <>
              Building products{" "}
              <span className="font-serif text-accent-text italic">
                that people rely on
              </span>
            </>
          }
          description="Professional journey crafting cross-platform applications with React Native, modern web technologies, and cloud infrastructure."
        />

        <div ref={timelineRef} className="relative">
          {/* Static rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 w-px bg-hairline/10"
          />

          {/* Scroll-growing rail */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-gradient-to-b from-accent to-ai"
          />

          <ul className="space-y-10">
            {experience.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;