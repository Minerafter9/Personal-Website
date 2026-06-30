import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { RESUME_SECTIONS } from "@/data/content";

export default function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        title="Resume"
        subtitle="A simplified overview of education, skills, and achievements."
      />
      <Card className="divide-y divide-white/10">
        {RESUME_SECTIONS.map((section) => (
          <div key={section.title} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-300 sm:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </Section>
  );
}
