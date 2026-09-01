import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>{children}</div>
    </section>
  );
}
