import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-panel rounded-[1.4rem] border border-white/[0.09] p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
