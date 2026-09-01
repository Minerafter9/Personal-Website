import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-accent-cyan bg-accent-cyan text-[#071817] shadow-[0_10px_34px_rgba(110,247,232,0.16)] hover:-translate-y-0.5 hover:bg-white hover:border-white hover:shadow-[0_14px_44px_rgba(110,247,232,0.24)]",
  secondary:
    "border border-accent-blue/35 bg-accent-blue/10 text-[#b8d9ff] hover:-translate-y-0.5 hover:border-accent-blue/65 hover:bg-accent-blue/15 hover:text-white",
  outline:
    "border border-white/14 bg-white/[0.025] text-slate-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06] hover:text-white",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45";

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
