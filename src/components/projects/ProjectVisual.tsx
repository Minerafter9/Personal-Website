import type { ReactNode } from "react";
import {
  BookOpen,
  CloudSun,
  Code2,
  GitBranch,
  LayoutDashboard,
  Plane,
  Shield,
  Ship,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

interface ProjectVisualProps {
  projectId: string;
}

function Frame({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: ReactNode;
  tone?: "cyan" | "violet" | "blue" | "amber";
}) {
  const tones = {
    cyan: "text-accent-cyan",
    violet: "text-accent-violet",
    blue: "text-accent-blue",
    amber: "text-accent-amber",
  };

  return (
    <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/10 bg-[#08131f]">
      <div className="flex h-9 items-center justify-between border-b border-white/[0.07] px-3">
        <span className={`font-mono text-[0.48rem] font-semibold ${tones[tone]}`}>
          {title}
        </span>
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function EazyMealVisual() {
  return (
    <Frame title="EAZYMEAL">
      <div className="flex items-center gap-2 text-accent-cyan">
        <UtensilsCrossed className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.55rem]">meal plan / fridge input</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Auth", "Meals", "AI"].map((label) => (
          <div
            key={label}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-2 font-mono text-[0.48rem] text-slate-300"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-accent-cyan/20 bg-accent-cyan/[0.06] p-2 font-mono text-[0.42rem] leading-4 text-slate-400">
        normalise(geminiResponse)
        <br />
        {"→ strip fences, fill missing fields"}
      </div>
    </Frame>
  );
}

function AnalyzersVisual() {
  return (
    <Frame title="WTG.ANALYZERS / PR 243" tone="violet">
      <div className="flex items-center gap-2 text-accent-violet">
        <GitBranch className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.55rem]">C# · Roslyn · WTG3012</span>
      </div>
      <div className="mt-3 space-y-1.5 font-mono text-[0.42rem] leading-4 text-slate-400">
        <p className="text-slate-500">{"#if DEBUG"}</p>
        <p>{"expression && true"}</p>
        <p className="text-slate-500">{"#endif"}</p>
      </div>
      <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-2 py-1 font-mono text-[0.42rem] text-accent-violet">
        <Shield className="h-2.5 w-2.5" />
        code-fix skipped when #if present
      </div>
    </Frame>
  );
}

function InterhouseVisual() {
  return (
    <Frame title="INTERHOUSE SPORTS" tone="blue">
      <div className="flex items-center gap-2 text-accent-blue">
        <LayoutDashboard className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.55rem]">scores · results</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {["House A", "House B", "House C"].map((house, index) => (
          <div key={house} className="flex items-center gap-2">
            <span className="w-12 font-mono text-[0.4rem] text-slate-500">{house}</span>
            <span
              className="h-1.5 rounded-full bg-accent-blue/70"
              style={{ width: `${70 - index * 16}%` }}
            />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function CargoVisual() {
  return (
    <Frame title="CARGOQUOTE" tone="amber">
      <div className="flex items-center gap-2 text-accent-amber">
        <Truck className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.55rem]">air · sea · road</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { icon: Plane, label: "Air" },
          { icon: Ship, label: "Sea" },
          { icon: Truck, label: "Road" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-2 text-slate-300"
          >
            <Icon className="h-3 w-3 text-accent-amber" />
            <span className="font-mono text-[0.42rem]">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-accent-amber/20 bg-accent-amber/[0.06] p-2 font-mono text-[0.42rem] leading-4 text-slate-400">
        cheapest · fastest · balanced
      </div>
    </Frame>
  );
}

function WeatherVisual() {
  return (
    <Frame title="WEATHER" tone="blue">
      <div className="flex items-center gap-2 text-accent-blue">
        <CloudSun className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.55rem]">OpenWeather API</span>
      </div>
      <div className="mt-4 h-8 rounded-md border border-white/[0.07] bg-white/[0.03]" />
    </Frame>
  );
}

function PortfolioVisual() {
  return (
    <Frame title="PORTFOLIO">
      <div className="flex items-center gap-2 text-accent-cyan">
        <Code2 className="h-3.5 w-3.5" />
        <BookOpen className="h-3.5 w-3.5 text-slate-500" />
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-2/3 rounded bg-white/70" />
        <div className="h-1 w-full rounded bg-white/10" />
        <div className="h-1 w-4/5 rounded bg-white/10" />
      </div>
    </Frame>
  );
}

export default function ProjectVisual({ projectId }: ProjectVisualProps) {
  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1025]"
      aria-hidden="true"
    >
      {projectId === "eazymeal" && <EazyMealVisual />}
      {projectId === "wtg-analyzers" && <AnalyzersVisual />}
      {projectId === "interhouse-sports" && <InterhouseVisual />}
      {projectId === "cargoquote" && <CargoVisual />}
      {projectId === "weather-app" && <WeatherVisual />}
      {projectId === "personal-portfolio" && <PortfolioVisual />}
    </div>
  );
}
