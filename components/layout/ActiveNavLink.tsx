"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ActiveNavLinkProps = {
  href: string;
  children: ReactNode;
};

export function ActiveNavLink({ href, children }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center rounded-full px-4 py-2.5 text-sm font-medium text-white/85 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
        isActive && "bg-brand-accent text-brand-primary hover:bg-brand-accent hover:text-brand-primary"
      )}
    >
      {children}
    </Link>
  );
}
