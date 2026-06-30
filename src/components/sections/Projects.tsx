import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Selected work demonstrating frontend development, algorithms, backend systems, and personal branding."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} label={tech} variant="blue" />
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                Features
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                What this project demonstrates
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.demonstrates.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button
                href={project.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href={project.liveUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
