import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({ children, className, innerClassName }: SectionProps) {
  return (
    <section className={cn("w-full overflow-x-clip py-16 sm:py-24 lg:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
