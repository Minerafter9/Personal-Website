interface BadgeProps {
  label: string;
  variant?: "blue" | "cyan" | "neutral";
}

export default function Badge({ label, variant = "neutral" }: BadgeProps) {
  const variants = {
    blue: "border-accent-blue/25 bg-accent-blue/[0.08] text-[#a8d1ff]",
    cyan: "border-accent-cyan/25 bg-accent-cyan/[0.08] text-accent-cyan",
    neutral: "border-white/10 bg-white/[0.035] text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[0.68rem] font-medium tracking-wide ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
