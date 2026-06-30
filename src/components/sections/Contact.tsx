import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT_LINKS } from "@/data/content";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Feel free to reach out regarding opportunities, collaborations, or questions about my work."
      />
      <Card>
        <p className="text-base leading-relaxed text-slate-300">
          I&apos;m actively building my skills and looking for opportunities to learn and
          contribute — whether through programs like WiseTech Earn &amp; Learn, work
          experience, or software engineering pathways. Take a look at my projects, and
          get in touch if you&apos;d like to connect.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent-cyan/40 hover:bg-accent-cyan/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                {link.label}
              </p>
              <p className="mt-2 text-sm text-slate-300 transition-colors group-hover:text-white">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Card>
    </Section>
  );
}
