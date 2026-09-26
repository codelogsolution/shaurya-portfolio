import type {
  Experience,
  Profile,
  Project,
  Skills,
} from "../types/portfolio";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

const fetchApi = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}`,
    );
  }

  const result: ApiResponse<T> = await response.json();

  if (!result.success) {
    throw new Error(result.message || "API request failed");
  }

  return result.data;
};

export const getProfile = (): Promise<Profile> => {
  return fetchApi<Profile>("/profile");
};

export const getSkills = (): Promise<Skills> => {
  return fetchApi<Skills>("/skills");
};

export const getProjects = (): Promise<Project[]> => {
  return fetchApi<Project[]>("/projects");
};

export const getExperience = (): Promise<Experience[]> => {
  return fetchApi<Experience[]>("/experience");
};