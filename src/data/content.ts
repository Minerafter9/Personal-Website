import type { ContactLink, NavLink, Project, ResumeItem } from "@/types";

export const SITE = {
  name: "William Saunders",
  title: "Software Engineering Portfolio",
  email: "william.saunders@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  resume: "#resume",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SQL",
  "PHP",
  "HTML/CSS",
  "C/C++",
  "Git/GitHub",
  "Cybersecurity",
  "Algorithms",
  "Databases",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "marketinc",
    title: "Marketinc",
    description:
      "A social media planning SaaS dashboard for organising, scheduling, and analysing social media posts.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
    ],
    features: [
      "Calendar-based post planning",
      "Post editor overlay",
      "Analytics dashboard",
      "Image preview",
      "Ideas and hashtag section",
      "Clean SaaS-style interface",
    ],
    demonstrates: [
      "Frontend development",
      "UI design",
      "Component-based architecture",
      "Real-world product thinking",
    ],
    githubUrl: "https://github.com/your-username/marketinc",
    liveUrl: "https://example.com/marketinc",
  },
  {
    id: "binary-tree-path-finder",
    title: "Binary Tree Path Finder",
    description:
      "A Python algorithm project that finds the maximum-sum path in a binary tree using depth-first search and recursion.",
    techStack: ["Python", "DFS", "Recursion", "Data Structures"],
    features: [
      "Parses binary tree input",
      "Handles missing nodes",
      "Searches root-to-leaf paths",
      "Returns the path with the highest sum",
    ],
    demonstrates: [
      "Algorithmic thinking",
      "Recursion",
      "Data structures",
      "Problem solving under competition-style constraints",
    ],
    githubUrl: "https://github.com/your-username/binary-tree-path-finder",
    liveUrl: "https://example.com/binary-tree-path-finder",
  },
  {
    id: "library-database-system",
    title: "Library Database System",
    description:
      "A PHP and MySQL web app for managing a school library database.",
    techStack: ["PHP", "MySQL", "SQL", "HTML", "CSS"],
    features: [
      "Add, edit, delete, and view records",
      "Manage books, book types, students, and staff",
      "Connect frontend forms to a MySQL database",
      "Use SQL queries for CRUD operations",
    ],
    demonstrates: [
      "Backend basics",
      "Database design",
      "CRUD functionality",
      "Practical web development",
    ],
    githubUrl: "https://github.com/your-username/library-database-system",
    liveUrl: "https://example.com/library-database-system",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "This website, designed to present projects, skills, achievements, and resume information in a professional way.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Project showcase",
      "Resume section",
      "Contact section",
      "Responsive design",
      "Reusable components",
    ],
    demonstrates: [
      "Frontend development",
      "Personal branding",
      "Resume-ready presentation",
      "Clean UI design",
    ],
    githubUrl: "https://github.com/your-username/portfolio",
    liveUrl: "https://example.com",
  },
];

export const RESUME_SECTIONS: ResumeItem[] = [
  {
    title: "Education",
    items: [
      "Year 12 Student",
      "Interested in software engineering, IT, AI, cybersecurity, and web development",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Programming: Python, JavaScript, TypeScript, PHP, SQL, C/C++",
      "Web: React, Next.js, Tailwind CSS, HTML, CSS",
      "Tools: Git, GitHub, databases, command line",
      "Interests: AI, cybersecurity, algorithms, full-stack development",
    ],
  },
  {
    title: "Achievements",
    items: [
      "Maths Olympiad achievement — placeholder",
      "CSIRO work experience — placeholder",
      "Coding competitions — placeholder",
      "Personal software projects — placeholder",
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    description: SITE.email,
  },
  {
    label: "GitHub",
    href: SITE.github,
    description: "github.com/your-username",
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    description: "linkedin.com/in/your-username",
  },
];
