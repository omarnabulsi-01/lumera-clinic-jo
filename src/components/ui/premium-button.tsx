import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  icon?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-rosegold text-warm-white shadow-soft hover:bg-rosegold-dark",
  secondary: "border border-line bg-warm-white text-charcoal hover:border-rosegold/60 hover:text-rosegold",
  ghost: "bg-warm-white/12 text-charcoal ring-1 ring-line/80 hover:bg-warm-white",
  dark: "bg-charcoal text-warm-white hover:bg-mocha",
};

export function PremiumButton({
  children,
  href,
  variant = "primary",
  icon,
  className,
  ...buttonProps
}: PremiumButtonProps) {
  const classes = cn(
    "focus-visible-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
