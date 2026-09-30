import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import type { Profile } from "../../types/portfolio";
import Counter from "../ui/Counter";
import Magnetic from "../ui/Magnetic";
import ScrambleText from "../ui/ScrambleText";

type HeroSectionProps = {
  profile: Profile;
  start: boolean;
};

const ROLES = ["React Native Developer", "React.js Engineer", "AI Explorer"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HeroSection = ({ profile, start }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 pb-24 pt-36 text-paper lg:px-8"
    >
      {/* Ambient background: aurora + blueprint grid */}
      <div
        aria-hidden="true"
        className="aurora aurora--a left-[-180px] top-[-120px] h-[480px] w-[480px] bg-accent/10"
      />
      <div
        aria-hidden="true"
        className="aurora aurora--b bottom-[-160px] right-[-140px] h-[520px] w-[520px] bg-ai/10"
      />
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      {/* Vertical side label */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="font-display text-[11px] uppercase tracking-[0.5em] text-muted/60">
          Portfolio — ©2026
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Availability pill */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-paper/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name — kinetic editorial type */}
        <motion.h1
          variants={item}
          className="font-display text-[clamp(3.4rem,11vw,9rem)] font-semibold uppercase leading-[0.92] tracking-tight"
        >
          <span className="block">{profile.name.split(" ")[0]}</span>
          <span className="text-outline block">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Role — scramble rotation */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xl sm:text-2xl"
        >
          <span className="text-muted">Senior</span>
          <ScrambleText
            words={ROLES}
            className="font-display font-medium text-accent"
          />
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} className="text-accent" />
            {profile.location}
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl leading-8 text-muted"
        >
          {profile.summary}
        </motion.p>

        {/* CTAs — magnetic */}
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-accent-ink"
            >
              View Projects
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in Touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Magnetic>
        </motion.div>
        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-7 sm:max-w-xl"
        >
          {[
            { value: 5.8, suffix: "+", label: "Years Experience" },
            { value: 10, suffix: "+", label: "Apps Shipped" },
            { value: 6, suffix: "+", label: "Store Releases" },
          ].map((stat) => (
            <div key={stat.label}>
              <Counter
                to={stat.value}
                suffix={stat.suffix}
                className="font-display text-3xl font-semibold text-paper sm:text-4xl"
              />
              <p className="mt-1.5 text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: start ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;