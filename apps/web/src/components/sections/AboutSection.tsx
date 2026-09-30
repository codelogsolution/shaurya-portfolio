import { motion } from "motion/react";
import { Brain, Compass, LayoutGrid, MapPin, Rocket } from "lucide-react";

import type { Profile } from "../../types/portfolio";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";

type AboutSectionProps = {
  profile: Profile;
};

const card =
  "rounded-3xl border border-white/10 bg-ink-2 p-7 sm:p-9 h-full transition-colors duration-300 hover:border-white/20";

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="relative bg-ink px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineer by trade,{" "}
              <span className="font-serif text-accent italic">craftsman</span>{" "}
              by choice
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-6">
          {/* Narrative card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <SpotlightCard className="h-full">
              <div className={card}>
                <LayoutGrid
                  size={22}
                  className="mb-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl font-semibold leading-snug text-paper sm:text-3xl">
                  I build mobile experiences that feel{" "}
                  <span className="text-accent">native, fast</span> and
                  reliable.
                </h3>
                <p className="mt-5 max-w-xl leading-8 text-muted">
                  Over the last {profile.experience}, I have
                  shipped consumer apps to the Play Store and App Store,
                  hardened them with offline-first architecture, and helped
                  teams move faster with clean, reusable systems.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {profile.skills.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-paper/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* AI exploration card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full">
              <div className={`${card} flex flex-col`}>
                <Brain size={22} className="mb-6 text-ai" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-paper">
                  Currently exploring
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  Bringing AI into production apps — retrieval, agents and
                  on-device intelligence.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["RAG", "LangChain", "AI Agents", "Python"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ai/30 bg-ai/10 px-3 py-1 text-xs font-medium text-ai"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
          {/* Stat card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full">
              <div className={`${card} flex flex-col justify-between`}>
                <Rocket size={22} className="text-accent" aria-hidden="true" />
                <div className="mt-10">
                  <p className="font-display text-5xl font-semibold text-paper sm:text-6xl">
                    10<span className="text-accent">+</span>
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    apps shipped across Play Store &amp; App Store
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Mindset card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full">
              <div className={`${card} flex flex-col`}>
                <Compass
                  size={22}
                  className="mb-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-semibold text-paper">
                  How I work
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  Design-first, performance-obsessed. Pixel-level polish,
                  measurable load times, and code reviews that teach.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full">
              <div className={`${card} flex flex-col justify-between`}>
                <MapPin size={22} className="text-accent" aria-hidden="true" />
                <div className="mt-10">
                  <p className="font-display text-2xl font-semibold text-paper">
                    {profile.location}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Open to remote roles &amp; select on-site collaborations.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;