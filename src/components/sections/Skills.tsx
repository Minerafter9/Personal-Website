import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and areas I work with across personal projects and learning."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-bg-card px-4 py-5 text-center text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:text-white hover:shadow-md hover:shadow-accent-blue/10"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
