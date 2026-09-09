import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  secondary:
    "border border-zinc-200 bg-white text-zinc-900 hover:border-brand-300 hover:text-brand-700",
  ghost: "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950",
  light: "bg-white text-brand-900 hover:bg-brand-50",
  dark: "bg-zinc-900 text-white hover:bg-zinc-800",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
): string {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  children,
}: ButtonProps) {
  const classes = `${buttonClassName(variant, size)} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}