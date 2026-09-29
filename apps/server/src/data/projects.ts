export const projects = [
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
      "Pen Testing",
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
      "High-volume transaction handling",
      "2,000+ daily transactions",
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
      "Interactive product experience",
      "Payment gateway integration",
      "50% increase in user engagement",
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
      "Deep linking",
      "Firebase push notifications",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Chatbot",
      "Deep Linking",
      "Push Notifications",
      "Firebase",
    ],
    status: "Professional Project",
  },
] as const;