import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import type { Profile } from "../../types/portfolio";
import Magnetic from "../ui/Magnetic";
import SectionHeading from "../ui/SectionHeading";

type ContactSectionProps = {
  profile: Profile;
};

const socials = [
  { key: "linkedin", label: "LinkedIn", mark: "in" },
  { key: "github", label: "GitHub", mark: "GH" },
  { key: "leetcode", label: "LeetCode", mark: "LC" },
] as const;

const ContactSection = ({ profile }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="aurora aurora--a left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 bg-accent/[0.07]"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let's build something{" "}
              <span className="font-serif text-accent-text italic">
                extraordinary
              </span>
            </>
          }
          description="Open to senior React Native roles, AI-curious product teams, and select freelance collaborations. The inbox is always open."
        />

        {/* Email row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${profile.contact.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-accent-ink sm:text-lg"
            >
              <Mail size={20} aria-hidden="true" />
              {profile.contact.email}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Magnetic>

          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 rounded-full border border-hairline/15 px-5 py-4 text-sm text-paper transition-colors hover:border-accent/60 hover:text-accent-text"
          >
            {copied ? (
              <Check size={16} className="text-accent-text" />
            ) : (
              <Copy size={16} />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {socials.map((social) => {
            const href = profile.contact[social.key];

            if (!href) {
              return null;
            }

            return (
              <a
                key={social.key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-hairline/10 px-6 py-3 transition-all duration-300 hover:border-accent/60 hover:bg-accent/5"
              >
                <span className="font-display text-xs font-semibold text-accent-text">
                  {social.mark}
                </span>
                <span className="text-sm text-paper/85">{social.label}</span>
                <ArrowUpRight
                  size={15}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;