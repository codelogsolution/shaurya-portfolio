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
  };
};

export type Skills = {
  frontend: string[];
  stateManagement: string[];
  backend: string[];
  testingAndDevOps: string[];
  aiAndEmergingTech: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
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