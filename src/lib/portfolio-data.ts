// Portfolio data - customize with your information
export const portfolioData = {
  name: "Deepika Sathianarayanan",
  title: "Full Stack Developer",
  email: "deepika.sathia26@gmail.com",
  location: "Nürnberg, Germany",
  bio: `Having 7 years of experience building user-friendly, scalable, and responsive web applications that are both visually refined and functionally robust. Strong collaborator with UI/UX designers and QA teams to bridge design and implementation, resulting in high-quality software with reduced defects. Possesses a solid foundation in algorithms and logical problem-solving.`,
  
  experience: [
    {
      id: 1,
      company: "GfK SE",
      role: "Software Engineer",
      duration: "Jan 2023 - Apr 2026",
      description: ["Architected, built, and maintained clean, efficient, and reusable frontend components using modern React and TypeScript to drive user-facing features.",
        "Collaborated closely with designers, backend engineers, and Product Management to refine requirements and translate ambiguous concept ideas into high-quality, user-friendly SaaS application features.",
        "Integrated the enterprise-wide design system (EDS) to ensure highly consistent, accessible, and high-performance UI components across distributed team projects.",
        "Took full ownership of features from concept to production, utilizing a proactive problem-solving approach to research and implement solutions for complex technical challenges.",
        "Exercised meticulous attention to detail during code reviews, actively identifying and resolving bugs while enhancing overall user interface responsiveness and application maintainability."
      ],
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Carl Zeiss AG",
      role: "Frontend Engineer",
      duration: "Nov 2021 - Dec 2023",
      description: ["Served as a key engineering team member within a customer journey squad, building customer-centric web applications and driving feature developments forward.",
        "Developed scalable microservice architecture user interfaces using modern React, ensuring seamless communication with Node.js backend layers via REST API principles.",
        "Assumed complete ownership of code quality by designing, executing, and maintaining automated UI and integration tests to ensure long-term stability and product performance.",
        "Acted as a technical leader in group-level and cross-team project discussions to align on robust solution designs, deliver significant business features, and mentor junior engineers."
      ],
      skills: ["Next.js", "Python", "MongoDB", "AWS"]
    },
    {
      id: 3,
      company: "Softwaere AG",
      role: "Working Student (Software Developer)",
      duration: "Jan 2020 - Sep 2021",
      description: ["Developed responsive, user-friendly interfaces using HTML5, JavaScript, Sass, and Bootstrap, ensuring high visual accuracy and performance.",
        "Designed and implemented HTTP-based RESTful APIs, working closely with engineering teams to align data definitions and system schemas.",
        "Conducted component-level debugging and optimized existing code structures to support a growing ecosystem designed for long-term resilience."
      ],
      skills: ["React", "CSS", "JavaScript", "Figma"]
    },
    {
      id: 4,
      company: "Robert Bosch India Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Mar 2018 - Aug 2019",
      description: ["Designed and developed modular frontend user interfaces utilizing Angular, TypeScript, HTML, and CSS to power enterprise applications.",
        "Implemented backend microservices using Spring Boot and REST APIs to migrate critical ecosystem data safely between enterprise requirement management platforms.",
        "Maintained end-to-end delivery ownership of real-time device inventory tracking features, coordinating with cross-functional product stakeholders to build practical, scalable tools.",
        "Wrote unit and system test cases to guarantee functional accuracy, security, and stability prior to production rollouts."
      ],
      skills: ["Angular", "Spring Boot", "Java", "MySQL"]
    },
    {
      id: 5,
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "Sep 2015 - Mar 2018",
      description: ["Developed and enhanced enterprise application features using Java, Spring, and database technologies.",
        "Performed deep-dive impact analysis, debugging, and continuous code optimization to ensure system speed and functional reliability.",
        "Acted as a single point of contact (SPOC) to coordinate cross-functional communication and support team onboarding, driving key deliverables forward under tight schedules."
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

// Generate a skills-based RadarConfig here to avoid circular imports.
import type { RadarConfig } from '../types/radar'

const quadrantOrder = ['database', 'backend', 'frontend', 'tools']

function makeSkillEntries(): RadarConfig['entries'] {
  const entries: any[] = []

  // Simple per-skill ring map. Edit these values (0/1/2).
  const skillToRing: Record<string, number> = {
    React: 2,
    'TypeScript': 2,
    'Javascript': 2,
    'Next.js': 2,
    'D3.js': 2,
    'Java': 2,
    'Spring Boot': 2,
    'Node.js': 1,
    Docker: 1,
    'Vibe coding': 1,
    AWS: 1,
    Git: 0,
    Figma: 0,
    'PostgreSQL': 0,
    Python: 0
  }

  // Fallback ring if a skill is not present in the map
  const fallbackRing = 1

  // Normalize the skill-to-ring map for case-insensitive lookup
  const skillToRingNorm: Record<string, number> = Object.fromEntries(
    Object.entries(skillToRing).map(([k, v]) => [k.toLowerCase().trim(), v]),
  )

  quadrantOrder.forEach((key, quadrantIndex) => {
    const items = (portfolioData as any).skills?.[key] as string[] | undefined
    if (!items) return
    items.forEach((label) => {
      const lookup = (label ?? '').toString().toLowerCase().trim()
      const ring = skillToRingNorm[lookup] ?? fallbackRing
      entries.push({
        label,
        quadrant: quadrantIndex as 0 | 1 | 2 | 3,
        ring,
        moved: 0,
        active: true,
      })
    })
  })

  // Include any other skill categories (placed into quadrant 3)
  const otherKeys = Object.keys((portfolioData as any).skills || {}).filter(
    (k) => !quadrantOrder.includes(k),
  )
  otherKeys.forEach((k) => {
    const items = (portfolioData as any).skills?.[k] as string[] | undefined
    if (!items) return
    items.forEach((label) => {
      const lookup = (label ?? '').toString().toLowerCase().trim()
      const ring = skillToRingNorm[lookup] ?? fallbackRing
      entries.push({ label, quadrant: 3, ring, moved: 0, active: true })
    })
  })

  return entries
}

export const skillsRadarConfig: RadarConfig = {
  title: `${portfolioData.name ?? 'My'} Tech Radar`,
  date: new Date().toLocaleString('en-GB', { month: 'long', year: 'numeric' }),
  repo_url: '#',
  width: 1200,
  height: 900,
  scale: 0.72,
  print_ring_descriptions_table: false,
  colors: {
    background: 'transparent',
    grid: '#2a2f3a',
    inactive: '#3a3f4a',
  },
  font_family: "'Source Sans 3', system-ui, sans-serif",
  quadrants: [
    { name: 'Databases & Platforms' },
    { name: 'Backend & Services' },
    { name: 'Languages & Frameworks' },
    { name: 'Tools & Concepts' },
  ],
  rings: [
    { name: 'NEWBIE', color: '#5ba300' },
    { name: 'PROFESSIONAL', color: '#009eb0' },
    { name: 'EXPERT', color: '#c7ba00' },
  ],
  entries: makeSkillEntries(),
}
