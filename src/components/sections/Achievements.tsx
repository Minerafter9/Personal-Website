import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS, LEADERSHIP } from "@/data/content";

export default function Achievements() {
  const featured = ACHIEVEMENTS.filter((item) => item.priority);
  const rest = ACHIEVEMENTS.filter((item) => !item.priority);

  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="04 / Achievements"
        title="Competition results first, then leadership."
        subtitle="Technical contests are listed with placements. School roles and sport sit below so they do not compete with the engineering evidence."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {featured.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.3rem] border border-white/[0.09] bg-white/[0.03] p-6"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent-cyan">
              {item.organisation}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
          </article>
        ))}
        {rest.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.3rem] border border-white/[0.08] bg-white/[0.02] p-6"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
              {item.organisation}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold text-white">Leadership and other work</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/[0.07] p-5"
            >
              <h4 className="font-medium text-slate-200">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
