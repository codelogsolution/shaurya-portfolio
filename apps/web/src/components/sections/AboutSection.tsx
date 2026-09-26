import { BriefcaseBusiness, Code2, GraduationCap } from "lucide-react";

import type { Profile } from "../../types/portfolio";

type AboutSectionProps = {
  profile: Profile;
};

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Building digital experiences with purpose
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-slate-400">
              {profile.summary}
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My professional journey began with React Native development.
              Based on client requirements, I also worked on React.js web
              applications and expanded my frontend experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Code2 className="mb-3 text-cyan-400" />
              <h3 className="font-semibold">Mobile & Web</h3>
              <p className="mt-2 text-sm text-slate-400">
                React Native and React.js development.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <BriefcaseBusiness className="mb-3 text-cyan-400" />
              <h3 className="font-semibold">Professional Experience</h3>
              <p className="mt-2 text-sm text-slate-400">
                {profile.experience} of development experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <GraduationCap className="mb-3 text-cyan-400" />
              <h3 className="font-semibold">Continuous Learning</h3>
              <p className="mt-2 text-sm text-slate-400">
                Exploring AI engineering, RAG, and AI agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;