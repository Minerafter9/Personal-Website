"use client";

import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { SITE } from "@/data/content";

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/resume") {
    return null;
  }

  return (
    <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="text-center text-sm font-semibold text-slate-300 sm:text-left">
            {SITE.name}
          </p>
          <p className="mt-1 text-center font-mono text-[0.62rem] text-slate-600 sm:text-left">
            &copy; {year} / Built with Next.js
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={SITE.resume}
            download="William-Saunders-Resume.pdf"
            className="text-xs text-slate-500 transition-colors hover:text-white"
          >
            Resume
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:text-accent-cyan"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
