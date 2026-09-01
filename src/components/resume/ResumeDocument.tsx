import { RESUME } from "@/data/resume";

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="resume-section-title mt-4 border-b border-[#D2D8DE] pb-1 text-[0.82rem] font-bold tracking-[0.04em] text-[#1F374E]">
      {children}
    </h2>
  );
}

function Role({
  title,
  organisation,
  period,
  detail,
}: {
  title: string;
  organisation: string;
  period: string;
  detail: string;
}) {
  return (
    <article className="mt-2">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[0.84rem] leading-snug text-[#1a2330]">
          <span className="font-semibold">{title}</span>
          <span className="font-normal"> — {organisation}</span>
        </h3>
        <p className="shrink-0 text-[0.72rem] text-[#5F5F5F]">{period}</p>
      </div>
      <p className="mt-0.5 pl-3 text-[0.78rem] leading-5 text-[#2b3340]">
        <span className="font-semibold text-[#00707A]">• </span>
        {detail}
      </p>
    </article>
  );
}

export default function ResumeDocument() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[210mm] bg-white px-8 py-7 text-[#1a2330] shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-8">
      <header className="text-center">
        <h1 className="text-[1.7rem] font-bold tracking-[0.04em] text-[#1F374E]">
          {RESUME.name.toUpperCase()}
        </h1>
        <p className="mt-1 text-[0.82rem] font-semibold text-[#00707A]">
          {RESUME.title}
        </p>
        <p className="mt-2 border-b border-[#9CA8B3] pb-1.5 text-[0.72rem] text-[#5F5F5F]">
          Phone number: {RESUME.phone}
          <span className="px-1.5">•</span>
          Email:{" "}
          <a href={`mailto:${RESUME.email}`} className="hover:underline">
            {RESUME.email}
          </a>
        </p>
        <p className="border-b border-[#9CA8B3] py-1.5 text-[0.72rem] text-[#5F5F5F]">
          Github:{" "}
          <a
            href={RESUME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0563C1] hover:underline"
          >
            {RESUME.githubLabel}
          </a>
          <span className="px-1.5">•</span>
          Personal Website:{" "}
          <a
            href={RESUME.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0563C1] hover:underline"
          >
            {RESUME.websiteLabel}
          </a>
        </p>
        <p className="border-b border-[#9CA8B3] py-1.5 text-[0.72rem] text-[#5F5F5F]">
          {RESUME.location}
        </p>
      </header>

      <SectionTitle>PROFILE</SectionTitle>
      <p className="mt-2 text-[0.8rem] leading-5">{RESUME.profile}</p>

      <SectionTitle>TECHNICAL SKILLS</SectionTitle>
      <p className="mt-2 text-[0.8rem] leading-5">
        {RESUME.skills.join("  •  ")}
      </p>

      <SectionTitle>SOFTWARE PROJECTS & TECHNICAL EXPERIENCE</SectionTitle>
      {RESUME.projects.map((item) => (
        <Role key={item.title} {...item} />
      ))}

      <SectionTitle>EDUCATION & EXPERIENCE</SectionTitle>
      {RESUME.education.map((item) => (
        <Role key={item.title} {...item} />
      ))}

      <SectionTitle>COMPETITIONS & ACADEMIC ACHIEVEMENT</SectionTitle>
      <ul className="mt-2 space-y-1">
        {RESUME.achievements.map((item) => (
          <li key={item.label} className="pl-3 text-[0.78rem] leading-5">
            <span className="font-semibold text-[#00707A]">• </span>
            <span className="font-semibold">{item.label}</span> {item.detail}
          </li>
        ))}
      </ul>

      <SectionTitle>LEADERSHIP, SERVICE & SPORT</SectionTitle>
      <ul className="mt-2 space-y-1">
        {RESUME.leadership.map((item) => (
          <li key={item.label} className="pl-3 text-[0.78rem] leading-5">
            <span className="font-semibold text-[#00707A]">• </span>
            <span className="font-semibold">{item.label}</span> {item.detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
