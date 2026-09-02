import { ArrowUpRight, GitBranch, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import { CONTACT_LINKS, SITE } from "@/data/content";

const contactIcons = {
  github: GitBranch,
  email: Mail,
};

export default function Contact() {
  return (
    <Section id="contact" className="overflow-hidden pb-24 sm:pb-32">
      <div className="rounded-[1.6rem] border border-white/[0.09] bg-white/[0.03] p-7 sm:p-10 lg:p-12">
        <p className="eyebrow mb-5">06 / Contact</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
          Email or GitHub.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
          I am a Year 12 student in {SITE.location} looking for software engineering
          pathways where I can contribute and keep learning.
        </p>

        <div className="mt-8 grid gap-3 sm:max-w-md">
          {CONTACT_LINKS.map((link) => {
            const Icon = contactIcons[link.kind];
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.09] bg-black/10 p-4 transition-colors hover:border-accent-cyan/25"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 group-hover:text-accent-cyan">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[0.6rem] uppercase tracking-wider text-slate-500">
                    {link.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-slate-200">
                    {link.description}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-accent-cyan" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
