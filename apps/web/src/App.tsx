import { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";

import { usePortfolio } from "./hooks/usePortfolio";

import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

import Preloader from "./components/ui/Preloader";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/layout/Navbar";

function App() {
  const { profile, skills, projects, experience } = usePortfolio();
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!introDone && <Preloader onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <CursorGlow />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main>
        <HeroSection profile={profile} start={introDone} />

        <AboutSection profile={profile} />

        <SkillsSection skills={skills} />

        <ExperienceSection experience={experience} />

        <ProjectsSection projects={projects} />

        <ContactSection profile={profile} />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;