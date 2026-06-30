import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />
      <Card>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I am a Year 12 student working toward a career in software engineering. I am
          drawn to practical problem solving, algorithms, databases, web applications,
          and cybersecurity — and I learn best by building real projects that solve
          concrete problems.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          This portfolio is designed to demonstrate both my technical ability and my
          communication skills. Each project reflects a different area of software
          development, from frontend interfaces and component architecture to backend
          systems, database design, and algorithmic thinking.
        </p>
      </Card>
    </Section>
  );
}
