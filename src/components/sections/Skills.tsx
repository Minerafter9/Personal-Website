import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_GROUPS } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" className="border-y border-white/[0.05] bg-white/[0.012]">
      <SectionHeading
        eyebrow="05 / Skills"
        title="Tools I have actually used on the work above."
        subtitle="Grouped by how I use them. No percentage bars, and no claim of professional mastery."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => (
          <div
            key={group.title}
            className="rounded-[1.3rem] border border-white/[0.09] bg-white/[0.025] p-6"
          >
            <span className="font-mono text-[0.6rem] text-slate-500">
              0{index + 1}
            </span>
            <h3 className="mt-2 font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((skill) => (
                <li key={skill} className="text-sm text-slate-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
