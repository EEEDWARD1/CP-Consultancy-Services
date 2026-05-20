import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonClasses =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-brand-accent hover:text-brand-primary hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonClasses, className)} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({ href, children, className, ariaLabel }: ButtonLinkProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className={cn(buttonClasses, className)}>
      {children}
    </Link>
  );
}
