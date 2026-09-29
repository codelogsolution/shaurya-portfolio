
import "./App.css";

import { usePortfolio } from "./hooks/usePortfolio";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  const {
    profile,
    skills,
    projects,
    experience,
    loading,
    error,
  } = usePortfolio();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-cyan-400">Loading portfolio...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Something went wrong
          </h1>

          <p className="mt-3 text-slate-400">{error}</p>
        </div>
      </main>
    );
  }

  if (!profile || !skills) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Portfolio data is not available.</p>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection profile={profile} />

        <AboutSection profile={profile} />

        <SkillsSection skills={skills} />

        <ExperienceSection experience={experience} />

        <ProjectsSection projects={projects} />

        <ContactSection profile={profile} />
      </main>

      <Footer />
    </>
  );
}

export default App;