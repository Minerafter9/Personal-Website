import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
