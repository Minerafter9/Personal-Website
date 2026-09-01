export type ProjectLabel =
  | "LIVE"
  | "DEPLOYED"
  | "FULL STACK"
  | "TEAM PROJECT"
  | "OPEN SOURCE CONTRIBUTION";

export type ProjectAccent = "blue" | "cyan" | "violet" | "amber";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  labels: ProjectLabel[];
  featured?: boolean;
  contribution?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  prUrl?: string;
  accent: ProjectAccent;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface JourneyItem {
  title: string;
  period: string;
  description: string;
}

export interface Achievement {
  title: string;
  organisation: string;
  detail: string;
  priority?: boolean;
}

export interface Activity {
  title: string;
  detail: string;
}

export interface ContactLink {
  label: string;
  href: string;
  description: string;
  kind: "github" | "email" | "resume" | "phone";
}
