import { CalendarDays } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { JOURNEY, LEARNING } from "@/data/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="border-y border-white/[0.05] bg-white/[0.012]"
    >
      <SectionHeading
        eyebrow="03 / Engineering journey"
        title="From personal projects to reviewed professional code."
        subtitle="A short progression, not a full autobiography: each step involved a more realistic software problem."
      />

      <ol className="relative space-y-0 before:absolute before:bottom-4 before:left-[0.42rem] before:top-4 before:w-px before:bg-white/10">
        {JOURNEY.map((item) => (
          <li key={item.title} className="relative grid gap-3 py-5 pl-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-4 border-[#11112a] bg-accent-cyan" />
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-slate-500">
                <CalendarDays className="h-3 w-3" />
                {item.period}
              </p>
            </div>
            <p className="text-sm leading-6 text-muted">{item.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-white">Further learning</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {LEARNING.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
            >
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
