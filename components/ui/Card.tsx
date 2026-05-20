import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-brand-line/80 bg-white shadow-soft transition duration-200 hover:shadow-lift",
        className
      )}
    >
      {children}
    </article>
  );
}
