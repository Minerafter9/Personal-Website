import { SITE } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Built with Next.js, React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
