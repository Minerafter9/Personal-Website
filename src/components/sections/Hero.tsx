import { ArrowDown, ArrowUpRight, Code2, FileText, GitBranch } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO_HIGHLIGHTS, HERO_TAGS, SITE } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(860px,100svh)] scroll-mt-24 items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10"
    >
      <div className="site-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
              {SITE.availability}
            </p>
            <p className="mb-5 font-mono text-sm font-medium tracking-wide text-accent-blue">
              Hello, I&apos;m {SITE.name}.
            </p>
            <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {SITE.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {SITE.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.68rem] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                href={SITE.resume}
                download="William-Saunders-Resume.pdf"
                variant="secondary"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Button>
              <Button
                href={SITE.github}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Button>
            </div>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-8 -z-10 rounded-full bg-accent-blue/[0.08] blur-3xl" />
            <div className="glass-panel overflow-hidden rounded-[1.6rem] border border-white/10">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan/70" />
                </div>
                <span className="font-mono text-[0.65rem] text-slate-500">
                  profile.ts
                </span>
                <Code2 className="h-4 w-4 text-slate-500" aria-hidden="true" />
              </div>
              <div className="overflow-x-auto p-5 font-mono text-[0.72rem] leading-7 sm:p-7 sm:text-[0.82rem]">
                <p>
                  <span className="text-accent-violet">const</span>{" "}
                  <span className="text-accent-blue">william</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-slate-300">{"{"}</span>
                </p>
                <p className="pl-5">
                  <span className="text-[#a8d1ff]">role</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-accent-cyan">
                    &quot;Year 12 aspiring software engineer&quot;
                  </span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-[#a8d1ff]">focus</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-slate-300">[</span>
                </p>
                <p className="pl-10 text-accent-cyan">
                  &quot;full-stack&quot;, &quot;cybersecurity&quot;,
                </p>
                <p className="pl-10 text-accent-cyan">
                  &quot;AI&quot;, &quot;computer science&quot;
                </p>
                <p className="pl-5">
                  <span className="text-slate-300">]</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-[#a8d1ff]">approach</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-accent-cyan">
                    &quot;learn by building&quot;
                  </span>
                </p>
                <p className="text-slate-300">{"};"}</p>
                <p className="mt-3 text-slate-600">
                  {"// Ready for the next challenge."}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/[0.08] bg-black/10 px-5 py-3 font-mono text-[0.65rem] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                portfolio / main / ready
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-3">
          {HERO_HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
            >
              <p className="font-mono text-lg font-semibold text-accent-cyan">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
