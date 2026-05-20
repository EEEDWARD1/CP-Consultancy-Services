import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function SectionHeader({ title, children, className }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-brand-accent" />
      <h1 className="text-balance text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
        {title}
      </h1>
      {children ? <div className="mt-6 font-body text-base leading-8 text-brand-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}
