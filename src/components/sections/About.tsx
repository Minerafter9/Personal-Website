import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/data/content";

export default function About() {
  return (
    <Section id="about" className="border-y border-white/[0.05] bg-white/[0.012]">
      <SectionHeading
        eyebrow="01 / About"
        title="I like software that other people actually use."
        subtitle="Year 12 aspiring software engineer focused on full-stack work, cybersecurity and AI — and on learning computer science beyond the school syllabus."
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I enjoy technical problems with a real purpose: a meal planner with
              accounts and payments, a school competition system that staff depend on,
              or a compiler-analyser bug that had to survive professional review.
            </p>
            <p>
              I look for work that is more than a tutorial. That has meant deploying
              applications, collaborating on GitHub, talking to stakeholders, and
              teaching myself tools such as C# and Roslyn when a problem required them.
            </p>
          </div>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition-colors hover:text-white"
          >
            See the work
            <ArrowRight className="h-4 w-4" />
          </a>
        </Card>

        <Card>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-blue">
            Education
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">{EDUCATION.stage}</h3>
          <p className="mt-1 text-sm text-slate-400">{EDUCATION.school}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{EDUCATION.note}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {EDUCATION.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
