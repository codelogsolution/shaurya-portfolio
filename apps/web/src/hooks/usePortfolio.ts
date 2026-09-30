import { useEffect, useState } from "react";

import {
  getExperience,
  getProfile,
  getProjects,
  getSkills,
} from "../api/portfolio-api";

import {
  fallbackExperience,
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
} from "../data/fallback";

import type {
  Experience,
  Profile,
  Project,
  Skills,
} from "../types/portfolio";

type UsePortfolioState = {
  profile: Profile;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  loading: boolean;
  error: string | null;
};

/**
 * Renders instantly with bundled fallback data, then silently
 * refreshes from the API in the background. If the API is offline
 * the fallback data is kept — the site NEVER blocks or breaks.
 */
export const usePortfolio = (): UsePortfolioState => {
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [skills, setSkills] = useState<Skills>(fallbackSkills);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [experience, setExperience] =
    useState<Experience[]>(fallbackExperience);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const refreshFromApi = async () => {
      try {
        setLoading(true);
        setError(null);

        const [profileData, skillsData, projectsData, experienceData] =
          await Promise.all([
            getProfile(),
            getSkills(),
            getProjects(),
            getExperience(),
          ]);

        if (cancelled) return;

        if (profileData) setProfile(profileData);
        if (skillsData) setSkills(skillsData);
        if (projectsData?.length) setProjects(projectsData);
        if (experienceData?.length) setExperience(experienceData);
      } catch {
        // API offline — bundled fallback data is already rendered.
        if (!cancelled) {
          setError(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    refreshFromApi();

    return () => {
      cancelled = true;
    };
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