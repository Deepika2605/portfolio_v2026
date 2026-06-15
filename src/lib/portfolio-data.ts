// Portfolio data - customize with your information
export const portfolioData = {
  name: "Deepika Sathianarayanan",
  title: "Full Stack Developer",
  email: "deepika.sathia26@gmail.com",
  location: "Nürnberg, Germany",
  bio: `Having 7 years of experience building user-friendly, scalable, and 
  responsive web applications that are both visually refined and functionally robust. 
  Strong collaborator with UI/UX designers and QA teams to bridge design and implementation, 
  resulting in high-quality software with reduced defects. 
  Possesses a solid foundation in algorithms and logical problem-solving.`,
  
  experience: [
    {
      id: 1,
      company: "GfK SE",
      role: "Software Engineer",
      duration: "Jan 2023 - Present",
      description: ["Full-stack development of the SpexOnline application using React, TypeScript, and Reactive Spring Boot.",
    "Designed and implemented scalable, data-driven REST APIs supporting high-volume application workflows.",
    "Integrated the enterprise-wide design system (EDS) to ensure consistent, accessible, and reusable UI components.",
    "Successfully delivered multi-language support by implementing React-i18next, improving product usability for international users.",
    "Collaborated with designers, backend engineers, and product stakeholders across distributed teams.",
    "Actively identified and resolved bugs, production issues, and support requests with strong attention to detail."],
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Carl Zeiss AG",
      role: "Frontend Engineer",
      duration: "Nov 2021 - Dec 2023",
      description: ["Worked as part of a customer journey team, closely collaborating with UI/UX designers and product owners to build customer-centric web applications.",
    "Developed microservice-based user interfaces using React, with Node.js based backend integration.",
    "Designed and maintained automated UI tests to ensure reliability and performance.",
    "Contributed to group-level technical and business discussions in a distributed enterprise environment."
      ],
      skills: ["Next.js", "Python", "MongoDB", "AWS"]
    },
    {
      id: 3,
      company: "Softwaere AG",
      role: "Working Student (Software Developer)",
      duration: "Jan 2020 - Sep 2021",
      description: ["Developed responsive user interfaces using HTML5, AngularJS/Angular 6, Sass, and Bootstrap.",
    "Implemented Java plugins for Apama (complex event processing engine) using event processing language (EPL).",
    "Designed and implemented HTTP-based RESTful APIs."
      ],
      skills: ["React", "CSS", "JavaScript", "Figma"]
    },
    {
        id: 4,
        company: "Robert Bosch India Pvt. Ltd.",
        role: "Software Engineer",
        duration: "Mar 2018 - Aug 2019",
        description: ["Designed and developed user interfaces using Angular 6, HTML, CSS, and Bootstrap.",
    "Implemented microservice using Spring Boot and REST APIs to migrate data between enterprise",
    "Developed WebSocket-based communication for real-time device inventory tracking and firmware update",
    "support."
        ],
        skills: ["Angular", "Spring Boot", "Java", "MySQL"]
    },
    {
      id: 5,
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "Sep 2015 - Mar 2018",
      description: ["Developed and enhanced enterprise application features using Java and Spring.",
"Impact analysis, debugging, and code optimisation to ensure functional accuracy and system stability.",
"Took on SPOC responsibilities as a fresher, managing cross-functional communication with trainers and HR and supporting team onboarding and coordination."
      ],
      skills: ["Java", "Spring", "Git", "JIRA"]
    }
  ],
  
  skills: {
    frontend: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass", "Bootstrap", "Google Material UI"],
    backend: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs"],
    database: ["PostgreSQL", "MongoDB", "MySQL"],
    concepts: ["Microservices", "Event-Driven Architecture", "Real-Time Communication", "UI/UX Collaboration", "Automated Testing"],
    tools: ["Git", "Docker", "AWS", "Vercel", "VS Code", "CI/CD Pipelines", "DevOps"]
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      url: "https://github.com",
      highlights: ["Implemented payment processing", "Built admin dashboard", "Optimized for mobile"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      tech: ["React", "Firebase", "Tailwind CSS"],
      url: "https://github.com",
      highlights: ["Real-time sync", "User authentication", "Dark mode support"]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business metrics",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      url: "https://github.com",
      highlights: ["Interactive charts", "Real-time updates", "Export functionality"]
    }
  ],
  
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science",
      field: "Computer Science",
      year: "2019"
    }
  ],
  
  social: {
    website: "www.deepikasathianarayanan.com",
    github: "https://github.com/Deepika2605",
    linkedin: "www.linkedin.com/in/deepikasathianarayanan",
  }
};

// // System prompt for the AI chatbot
// export const SYSTEM_PROMPT = `You are an AI assistant representing a portfolio. You have detailed knowledge about the portfolio owner's experience, skills, projects, and background. 

// When answering questions:
// 1. Be professional and helpful
// 2. Reference specific projects and experience from the portfolio data
// 3. If asked about something not in the portfolio, politely indicate it's outside your knowledge
// 4. Keep responses concise and relevant
// 5. Offer to provide more details if the user wants to know more

// Always maintain a friendly, professional tone suitable for potential employers or clients.`;

// Keep existing tech radar export for backward compatibility with components
export { techRadarConfig } from '../data/techRadar'
