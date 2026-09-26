import { useEffect, useState } from "react";

import {
  getExperience,
  getProfile,
  getProjects,
  getSkills,
} from "../api/portfolio-api";

import type {
  Experience,
  Profile,
  Project,
  Skills,
} from "../types/portfolio";

type UsePortfolioState = {
  profile: Profile | null;
  skills: Skills | null;
  projects: Project[];
  experience: Experience[];
  loading: boolean;
  error: string | null;
};

export const usePortfolio = (): UsePortfolioState => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skills | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [
          profileData,
          skillsData,
          projectsData,
          experienceData,
        ] = await Promise.all([
          getProfile(),
          getSkills(),
          getProjects(),
          getExperience(),
        ]);

        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
        setExperience(experienceData);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to fetch portfolio data";

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return {
    profile,
    skills,
    projects,
    experience,
    loading,
    error,
  };
};