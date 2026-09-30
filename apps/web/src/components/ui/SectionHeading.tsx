import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div
      className={`mb-14 sm:mb-20 ${centered ? "text-center" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="font-display text-sm font-medium text-accent-text">
          {index}
        </span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="font-display text-xs font-medium uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.7,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mt-5 max-w-2xl leading-8 text-muted ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;