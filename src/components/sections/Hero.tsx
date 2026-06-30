import Button from "@/components/ui/Button";
import { SITE } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-cyan">
          {SITE.name}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {SITE.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I&apos;m a Year 12 student interested in software engineering, web development,
          AI, cybersecurity, and problem solving. This portfolio showcases projects I have
          built using Python, JavaScript, React, SQL, PHP, and other technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href={SITE.github} variant="secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button href={SITE.resume} variant="outline">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
