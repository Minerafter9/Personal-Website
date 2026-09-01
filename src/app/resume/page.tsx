import type { Metadata } from "next";
import { ArrowLeft, Download } from "lucide-react";
import ResumeDocument from "@/components/resume/ResumeDocument";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for William Saunders, Year 12 aspiring software engineer.",
};

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-[#ece7dc] px-3 pb-16 pt-28 sm:px-6">
      <div className="no-print mx-auto mb-5 flex max-w-[210mm] flex-wrap items-center justify-between gap-3">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1F374E] hover:text-[#00707A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </a>
        <a
          href={SITE.resume}
          download="William-Saunders-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-[#1F374E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#00707A]"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>
      <ResumeDocument />
    </div>
  );
}
