import { ArrowUpRight, GitBranch } from "lucide-react";
import ProjectVisual from "@/components/projects/ProjectVisual";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/data/content";
import type { Project } from "@/types";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-auto flex flex-wrap gap-3 pt-7">
      {project.prUrl && (
        <Button
          href={project.prUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pull Request
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      )}
      {project.githubUrl && (
        <Button
          href={project.githubUrl}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch className="h-4 w-4" />
          GitHub
        </Button>
      )}
      {project.liveUrl && (
        <Button
          href={project.liveUrl}
          variant={project.prUrl ? "outline" : "primary"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live site
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article
      className={`card-lift glass-panel overflow-hidden rounded-[1.5rem] border ${
        project.contribution
          ? "border-accent-violet/25"
          : "border-white/[0.09]"
      }`}
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {project.labels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-wider text-slate-300"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-cyan">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
        <div className="p-5 lg:p-6">
          <ProjectVisual projectId={project.id} />
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="card-lift glass-panel flex flex-col rounded-[1.4rem] border border-white/[0.09] p-6">
      <ProjectVisual projectId={project.id} />
      <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
      <ProjectLinks project={project} />
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="02 / Selected work"
        title="Projects that had to work for other people."
        subtitle="Flagship work first: a deployed full-stack product, a merged contribution to WiseTech Global’s public analysers, and school software that was approved and used."
      />

      <div className="space-y-5">
        {FEATURED_PROJECTS.filter((project) => project.featured).map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {FEATURED_PROJECTS.filter((project) => !project.featured).map((project) => (
          <CompactCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
          More projects
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Smaller work that still shows API integration and how I present software.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {MORE_PROJECTS.map((project) => (
            <CompactCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
