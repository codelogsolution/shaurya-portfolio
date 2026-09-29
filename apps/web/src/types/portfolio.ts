export type Profile = {
  name: string;
  role: string;
  experience: string;
  location: string;
  summary: string;

  career: {
    startingRole: string;
    firstCompany: string;
    webExperience: string;
  };

  skills: string[];

  contact: {
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
  };
};

export type Skills = {
  mobileDevelopment: string[];
  frontend: string[];
  backend: string[];
  firebaseAndData: string[];
  cicd: string[];
  deployment: string[];
  toolsAndPractices: string[];
};

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  technologies: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
};