"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const onHome = pathname === "/";

  const handleNavClick = () => setMobileOpen(false);
  const sectionHref = (href: string) => (onHome ? href : `/${href}`);

  useEffect(() => {
    const updateNavigation = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      if (!onHome) {
        setActiveSection("");
        return;
      }

      const section = [...NAV_LINKS]
        .reverse()
        .find(({ href }) => {
          const element = document.querySelector(href);
          return element && element.getBoundingClientRect().top <= 180;
        });

      setActiveSection(section?.href.slice(1) ?? "home");
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, [onHome]);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-bg-dark transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#100a25]/80 px-3 py-2.5 shadow-2xl shadow-black/15 backdrop-blur-xl sm:px-4">
        <a
          href={sectionHref("#home")}
          className="group flex items-center gap-2.5 rounded-xl pr-2"
          aria-label={`${SITE.name}, home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent-cyan/30 bg-accent-cyan/[0.09] font-mono text-xs font-bold text-accent-cyan transition-colors group-hover:bg-accent-cyan/15">
            {SITE.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={sectionHref(link.href)}
                aria-current={
                  onHome && activeSection === link.href.slice(1) ? "page" : undefined
                }
                className={`rounded-lg px-2.5 py-2 text-[0.78rem] font-medium transition-colors ${
                  onHome && activeSection === link.href.slice(1)
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume"
            className="hidden items-center gap-1.5 rounded-xl border border-white/10 px-3 py-2 text-[0.78rem] font-medium text-slate-200 transition-colors hover:border-accent-cyan/30 hover:text-white sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#100a25]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(link.href)}
                  onClick={handleNavClick}
                  className={`block rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    onHome && activeSection === link.href.slice(1)
                      ? "bg-accent-cyan/10 text-accent-cyan"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.resume}
            download="William-Saunders-Resume.pdf"
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100"
          >
            Download resume
            <FileText className="h-4 w-4" />
          </a>
          <a
            href={sectionHref("#contact")}
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-between rounded-xl bg-accent-cyan px-4 py-3 text-sm font-semibold text-[#071817]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}

      <div
        className="fixed left-0 top-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
