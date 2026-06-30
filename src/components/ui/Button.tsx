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
    "bg-accent-blue text-white hover:bg-[#3d8fe6] hover:shadow-lg hover:shadow-accent-blue/20",
  secondary:
    "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/20 hover:border-accent-cyan/50",
  outline:
    "border border-white/20 text-slate-200 hover:border-accent-blue/50 hover:text-white hover:bg-white/5",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark";

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
