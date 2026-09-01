import type { Metadata, Viewport } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "William Saunders | Software Engineering Portfolio",
    template: "%s | William Saunders",
  },
  description:
    "Year 12 aspiring software engineer. Full-stack projects including EazyMeal, a merged contribution to WiseTech Global’s WTG.Analyzers, and national cybersecurity competition results.",
  keywords: [
    "William Saunders",
    "software engineering portfolio",
    "Year 12 student",
    "full-stack development",
    "WTG.Analyzers",
  ],
  openGraph: {
    title: "William Saunders | Software Engineering Portfolio",
    description:
      "Year 12 aspiring software engineer with full-stack, cybersecurity and open-source contribution work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#140A2E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
