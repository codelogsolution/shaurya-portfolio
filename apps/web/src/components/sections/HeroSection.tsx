import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import type { Profile } from "../../types/portfolio";

type HeroSectionProps = {
  profile: Profile;
};

const HeroSection = ({ profile }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 py-32 text-white lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Available for professional opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hello, I am
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              {profile.experience} Experience
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={17} className="text-cyan-400" />
              {profile.location}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-cyan-300"
            >
              View Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">
                  Developer Profile
                </span>

                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              </div>

              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-4xl font-bold text-slate-950">
                SY
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                React Native
                <br />
                <span className="text-cyan-400">Developer</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Building mobile applications, web experiences, and
                AI-powered solutions.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Let's connect
                  <ArrowDown size={16} className="-rotate-90" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;