export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  demonstrates: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ResumeItem {
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  description: string;
}
