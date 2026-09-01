import type {
  Achievement,
  Activity,
  ContactLink,
  JourneyItem,
  NavLink,
  Project,
  SkillGroup,
} from "@/types";

export const SITE = {
  name: "William Saunders",
  initials: "WS",
  title: "Year 12 Student & Aspiring Software Engineer",
  headline: "Year 12 Student & Aspiring Software Engineer",
  intro:
    "I build, deploy and maintain full-stack applications, integrate APIs and AI features, contribute to open-source software and compete in technical competitions.",
  availability: "Open to software engineering opportunities",
  github: "https://github.com/Minerafter9",
  githubHandle: "github.com/Minerafter9",
  email: "will.saunders.business@gmail.com",
  phone: "0493 037 614",
  phoneHref: "tel:+61493037614",
  location: "Canberra, ACT",
  website: "https://personal-website-three-omega-71.vercel.app/",
  resume: "/william-saunders-resume.pdf",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO_TAGS = [
  "TypeScript",
  "React",
  "Python",
  "C#",
  "Git & GitHub",
  "REST APIs",
  "AI Integration",
  "Full-Stack Development",
] as const;

export const HERO_HIGHLIGHTS = [
  {
    value: "PR #243",
    label: "Merged into WiseTech Global’s public WTG.Analyzers repository",
  },
  {
    value: "2nd",
    label: "National PECAN+ cybersecurity competition, team lead in 2026",
  },
  {
    value: "Deployed",
    label: "EazyMeal: full-stack AI meal planning used by a small group of real users",
  },
] as const;

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "eazymeal",
    title: "EazyMeal",
    category: "Full-stack product",
    description:
      "A deployed full-stack AI meal-planning app. It generates personalised meals from ingredients and preferences, with authentication, saved user data and a small group of real users.",
    techStack: [
      "TypeScript",
      "React",
      "Google Gemini",
      "Authentication",
      "Relational database",
    ],
    labels: ["LIVE", "DEPLOYED", "FULL STACK"],
    featured: true,
    accent: "cyan",
  },
  {
    id: "wtg-analyzers",
    title: "WTG.Analyzers contribution",
    category: "Open-source · C# / Roslyn",
    description:
      "A merged fix in WiseTech Global’s public WTG.Analyzers repository. I worked on an existing WTG3012 issue around an unsafe code fix, added tests, and revised the change after engineering review. PR #243 was merged.",
    techStack: ["C#", "Roslyn", "Analyzers", "Regression tests"],
    labels: ["OPEN SOURCE CONTRIBUTION"],
    featured: true,
    contribution: true,
    githubUrl: "https://github.com/WiseTechGlobal/WTG.Analyzers",
    prUrl: "https://github.com/WiseTechGlobal/WTG.Analyzers/pull/243",
    accent: "violet",
  },
  {
    id: "interhouse-sports",
    title: "Interhouse Sports System",
    category: "School operations",
    description:
      "A web app, co-led with two other students, that records scores and displays results for a school interhouse sports competition. It went through stakeholder review and was deployed, including on a Raspberry Pi.",
    techStack: ["GitHub", "Collaborative development", "Deployment", "Raspberry Pi"],
    labels: ["TEAM PROJECT", "DEPLOYED"],
    featured: true,
    accent: "blue",
  },
  {
    id: "cargoquote",
    title: "CargoQuote",
    category: "Practical web app",
    description:
      "A web application that produces cargo and shipping quotes from shipment information.",
    techStack: ["Web development"],
    labels: [],
    accent: "amber",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    id: "weather-app",
    title: "Weather application",
    category: "API integration",
    description:
      "A weather application that uses the OpenWeather API to fetch and display conditions.",
    techStack: ["OpenWeather API", "REST APIs"],
    labels: [],
    accent: "blue",
  },
  {
    id: "personal-portfolio",
    title: "Personal website",
    category: "Frontend",
    description:
      "This site: a content-driven Next.js portfolio for projects, achievements and contact details.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    labels: [],
    githubUrl: "https://github.com/Minerafter9/Personal-Website",
    liveUrl: "https://personal-website-three-omega-71.vercel.app/",
    accent: "cyan",
  },
];

export const JOURNEY: JourneyItem[] = [
  {
    title: "Personal projects",
    period: "Starting point",
    description:
      "Built independent applications to learn full-stack development, APIs and product thinking.",
  },
  {
    title: "Collaborative school software",
    period: "Team project",
    description:
      "Co-led the Interhouse Sports System with two other students, including stakeholder review and deployment.",
  },
  {
    title: "Deployed full-stack work",
    period: "Current",
    description:
      "Shipped EazyMeal with authentication, payments, database-backed user data and AI integration for a small group of real users.",
  },
  {
    title: "Technical competitions",
    period: "2024–2026",
    description:
      "Competed in cybersecurity, linguistics and mathematics contests, including leading the PECAN+ team in 2026.",
  },
  {
    title: "Open-source contribution",
    period: "2026",
    description:
      "Contributed a reviewed C# / Roslyn fix to WiseTech Global’s public WTG.Analyzers repository. PR #243 was merged.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Second place nationally",
    organisation: "PECAN+ Cybersecurity Competition",
    detail:
      "Competed from 2024 to 2026. Led the team in 2026, when we placed second nationally.",
    priority: true,
  },
  {
    title: "Perfect score and High Distinction",
    organisation: "WiseTech Global Challenges",
    detail:
      "Achieved a perfect score in one WiseTech Global Challenge and a High Distinction in another.",
    priority: true,
  },
  {
    title: "3rd in the ACT, selected for nationals",
    organisation: "Australian Computational and Linguistics Olympiad (OzCLO)",
    detail:
      "Placed 3rd at ACT/state level in 2024 and was selected to represent the ACT at the national round.",
    priority: true,
  },
  {
    title: "Sixth place, team lead",
    organisation: "ANU Maths Day",
    detail:
      "Led my school team to sixth place in 2026. The competition involves selected students from ACT and NSW schools.",
    priority: true,
  },
  {
    title: "Top 1% award",
    organisation: "Australian Maths Trust",
    detail:
      "Received an award for placing in the top 1% in a mathematics competition.",
    priority: true,
  },
  {
    title: "ANU Maths Extension Program",
    organisation: "Australian National University",
    detail:
      "Selected for an extra-curricular advanced mathematics class taught by ANU professors. Attended from 2024 to 2026.",
    priority: true,
  },
  {
    title: "Championship team",
    organisation: "ACT Christian Schools Debating Championship",
    detail: "Selected to represent my school. The team won the competition.",
    priority: true,
  },
];

export const LEADERSHIP: Activity[] = [
  {
    title: "House Captain",
    detail: "Currently serve as a House Captain at my school.",
  },
  {
    title: "Careers School Newsletter",
    detail:
      "Co-founded the newsletter after noticing students had limited awareness of career pathways. Led a team of 3. It now has over 40 regular readers.",
  },
  {
    title: "Peer Leader",
    detail: "Previously supported and mentored younger students as a peer leader.",
  },
  {
    title: "Duke of Edinburgh",
    detail: "Completed the Silver Award in early 2026 and am working towards Gold.",
  },
  {
    title: "Zooniverse volunteer",
    detail:
      "Contributed to citizen-science research projects through Zooniverse.",
  },
  {
    title: "Sport",
    detail:
      "Competed at state level in swimming, athletics and cross country, including 4th in swimming. Played soccer for many years, including National Premier Leagues in 2025.",
  },
];

export const LEARNING: Activity[] = [
  {
    title: "Harvard CS50",
    detail:
      "Completed Harvard’s CS50 course to strengthen computer science fundamentals beyond school.",
  },
  {
    title: "ANU Logic Summer School",
    detail:
      "Attended ANU’s Logic Summer School and was introduced to university-level topics in logic and computation, including work alongside postgraduate and university students.",
  },
  {
    title: "ANU Hackathon",
    detail:
      "Participated in an ANU hackathon with university students, building and presenting MVPs.",
  },
  {
    title: "CSIRO work experience",
    detail:
      "Completed work experience at CSIRO and helped conduct a scientific experiment involving bees.",
  },
  {
    title: "Amazon virtual work experience",
    detail:
      "Completed an Amazon virtual work experience program focused on professional technology and workplace practices.",
  },
  {
    title: "WiseTech Global visit",
    detail:
      "Toured WiseTech headquarters, saw the engineering environment and Earn & Learn student community, and later completed CS50 after a recommendation from that visit.",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript / JavaScript", "Python", "C#"],
  },
  {
    title: "Frontend",
    items: ["React", "Responsive web development", "Tailwind CSS"],
  },
  {
    title: "Backend / web engineering",
    items: [
      "REST APIs",
      "Authentication",
      "Server-side integrations",
      "Relational databases",
    ],
  },
  {
    title: "Tools / workflow",
    items: [
      "Git",
      "GitHub",
      "Collaborative development",
      "Code review",
      "Deployment",
      "Testing",
    ],
  },
  {
    title: "Other",
    items: [
      "AI integration",
      "Roslyn / .NET Compiler Platform",
      "Linux / Raspberry Pi",
    ],
  },
];

export const EDUCATION = {
  stage: "Year 12 student",
  school: "Trinity Christian School, ACT",
  subjects: [
    "Specialist Mathematics",
    "Mathematical Methods",
    "Physics",
    "Chemistry",
    "English",
  ],
  note: "More than 10 academic achievement awards from school.",
} as const;

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Resume",
    href: SITE.resume,
    description: "Download PDF",
    kind: "resume",
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    description: SITE.email,
    kind: "email",
  },
  {
    label: "GitHub",
    href: SITE.github,
    description: SITE.githubHandle,
    kind: "github",
  },
  {
    label: "Phone",
    href: SITE.phoneHref,
    description: SITE.phone,
    kind: "phone",
  },
];
