import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Saunders | Software Engineering Portfolio",
  description:
    "Portfolio of William Saunders — Year 12 student showcasing software engineering projects in web development, algorithms, databases, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
