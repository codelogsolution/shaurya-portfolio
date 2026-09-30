import type {
  Experience,
  Profile,
  Project,
  Skills,
} from "../types/portfolio";

/**
 * Bundled fallback data — guarantees the portfolio always renders,
 * even if the API server is offline or the site is deployed as a
 * static build. Data mirrors apps/server/src/data/*.
 */

export const fallbackProfile: Profile = {
  name: "Shaurya Yadav",
  role: "Senior React Native Developer",
  experience: "5.8+ years",
  location: "India",
  summary:
    "Delivering production-grade cross-platform mobile applications for Android and iOS — from architecture and feature development to App Store and Google Play releases. Hands-on ReactJS web experience and a growing focus on AI engineering.",
  career: {
    startingRole: "React Native Developer",
    firstCompany: "Webnyxa",
    webExperience:
      "Worked on React.js website projects based on client requirements.",
  },
  skills: [
    "React Native",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "REST APIs",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Jest",
    "GitHub",
    "Docker",
    "RAG",
    "LangChain",
    "AI Agents",
  ],
  contact: {
    email: "shaurya.aktu@gmail.com",
    linkedin: "https://www.linkedin.com/in/shaurya-yadav15",
    github: "https://github.com/codelogsolution",
    leetcode: "https://leetcode.com/u/codelogsolution_leet/",
  },
};

export const fallbackSkills: Skills = {
  mobileDevelopment: [
    "React Native",
    "TypeScript",
    "Redux Toolkit",
    "Redux-Saga",
    "React Hooks",
    "Native Modules",
    "Push Notifications",
    "Deep Linking",
    "Offline Storage",
    "Socket.IO",
    "Biometric Authentication",
  ],
  frontend: [
    "ReactJS",
    "TypeScript",
    "React Hooks",
    "Tailwind CSS",
    "Component Architecture",
    "Responsive Design",
  ],
  backend: ["Node.js", "REST APIs", "MongoDB"],
  firebaseAndData: [
    "Firestore",
    "Authentication",
    "Realtime Database",
    "Cloud Messaging",
  ],
  cicd: ["GitHub Actions", "Fastlane", "Build Pipelines"],
  deployment: [
    "Google Play Store",
    "Apple App Store",
    "Release Management",
    "Store Listing",
  ],
  toolsAndPractices: [
    "Git",
    "GitHub",
    "Pull Requests",
    "Agile / Scrum",
    "Code Reviews",
    "Google Analytics",
  ],
};

export const fallbackProjects: Project[] = [
  {
    id: "smart-workplace",
    number: "01",
    title: "Smart Workplace App",
    description:
      "A workplace management mobile application designed to simplify desk booking, occupancy tracking, and real-time environment monitoring across modern workspaces.",
    category: "Workplace Management",
    highlights: [
      "Desk booking and workspace management",
      "Real-time occupancy and environment monitoring",
      "Firebase synchronization with REST API integration",
      "Cross-platform mobile experience",
    ],
    technologies: [
      "React Native",
      "Redux Toolkit",
      "Redux-Saga",
      "Firebase",
      "REST APIs",
      "TypeScript",
    ],
    status: "Professional Project",
  },
  {
    id: "client-events",
    number: "02",
    title: "Client Events Organization App",
    description:
      "A permission-based event management application with controlled onboarding, admin approval workflows, deep linking, and push notification support.",
    category: "Event Management",
    highlights: [
      "Permission-based user access",
      "Admin-approved onboarding",
      "Email verification workflow",
      "Deep linking and push notifications",
      "Security and penetration testing",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Deep Linking",
      "Push Notifications",
    ],
    status: "Professional Project",
  },
  {
    id: "gym-ecommerce",
    number: "03",
    title: "Online Gym Products E-Commerce App",
    description:
      "A multi-role e-commerce mobile application for selling gym products, supporting Super Admin, Admin, and Customer workflows with secure payment processing.",
    category: "E-Commerce",
    highlights: [
      "Super Admin, Admin, and Customer roles",
      "Secure payment gateway integration",
      "2,000+ daily transactions handled",
      "Improved customer retention by 10%",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Payment Gateway",
      "REST APIs",
      "Firebase",
    ],
    status: "Professional Project",
  },
  {
    id: "vertical-b2c-ecommerce",
    number: "04",
    title: "Vertical B2C E-Commerce App",
    description:
      "A B2C e-commerce mobile application focused on improving the shopping experience through redesigned user flows, interactive features, and optimized UX.",
    category: "B2C E-Commerce",
    highlights: [
      "B2C customer shopping experience",
      "UX/UI flow improvements",
      "Payment gateway integration",
      "50% increase in user engagement",
    ],
    technologies: ["React Native", "Redux", "Payment Gateway", "REST APIs"],
    status: "Professional Project",
  },
  {
    id: "real-estate-platform",
    number: "05",
    title: "Real-Estate Platform App",
    description:
      "A multi-role real-estate platform supporting lender, admin, and borrower workflows with integrated chatbot functionality and mobile engagement features.",
    category: "Real Estate",
    highlights: [
      "Lender, Admin, and Borrower workflows",
      "Multi-role application architecture",
      "Integrated chatbot support",
      "Firebase push notifications",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Chatbot",
      "Deep Linking",
      "Firebase",
    ],
    status: "Professional Project",
  },
];

export const fallbackExperience: Experience[] = [
  {
    id: "chetu",
    company: "Chetu India Pvt. Ltd.",
    role: "React Native Developer",
    duration: "Dec 2022 — Present",
    type: "Professional Experience",
    responsibilities: [
      "Architected and delivered a workplace management mobile application for Android and iOS — desk booking, occupancy tracking, and real-time environment monitoring.",
      "Designed scalable architecture with centralized state management using Redux Toolkit and Redux-Saga across feature modules.",
      "Integrated RESTful APIs and Firebase real-time data for live occupancy tracking and booking sync.",
      "Implemented offline-first storage, secure video playback, and CI/CD-aligned build pipelines.",
      "Applied penetration testing practices and secure storage with React Native Keychain.",
      "Delivered 6+ end-to-end releases from architecture through App Store and Google Play deployment.",
      "Mentored junior developers through code reviews, pair debugging, and best-practice guidance.",
      "Collaborated directly with US-based stakeholders to translate business requirements into technical specs.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Redux-Saga",
      "Firebase",
      "Socket.IO",
      "Keychain",
      "Push Notifications",
      "Deep Linking",
      "Pen Testing",
      "CI/CD",
    ],
  },
  {
    id: "webnyxa",
    company: "Webnyxa Technologies",
    role: "React Native Developer / ReactJS Developer",
    duration: "Sep 2020 — Nov 2022",
    type: "Professional Experience",
    responsibilities: [
      "Built multiple React Native apps from scratch — WebView, push notifications, Google Sign-In, payment gateways, and text-to-speech.",
      "Engineered a high-performance e-commerce app supporting 2,000+ daily transactions with secure payments.",
      "Redesigned UX/UI flows for a B2C e-commerce app, increasing user engagement by 50%.",
      "Developed a permission-based event management app with admin-approved onboarding and deep linking.",
      "Built a multi-role real-estate platform with lender, admin, and borrower workflows plus chatbot support.",
      "Delivered 4+ client-facing React Native and ReactJS applications across diverse domains.",
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "JavaScript",
      "Redux",
      "Firebase",
      "Payment Gateways",
      "Push Notifications",
      "Tailwind CSS",
    ],
  },
];