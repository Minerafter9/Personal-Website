interface BadgeProps {
  label: string;
  variant?: "blue" | "cyan" | "neutral";
}

export default function Badge({ label, variant = "neutral" }: BadgeProps) {
  const variants = {
    blue: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
    cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
    neutral: "border-white/10 bg-white/5 text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
