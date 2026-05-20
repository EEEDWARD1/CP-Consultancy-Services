"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ActiveNavLink } from "@/components/layout/ActiveNavLink";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

const desktopLinks = navLinks.filter((link) => link.href !== "/");

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-white/10 bg-brand-primary shadow-lg"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            aria-label="CP Consultancy Services home"
            className="flex h-full items-center"
          >
            <Image
              src="/images/logo.jpg"
              alt="CP Consultancy Services"
              width={200}
              height={80}
              priority
              className="h-14 w-auto rounded-sm object-contain sm:h-16"
            />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
            {desktopLinks.map((link) => (
              <li key={link.href}>
                <ActiveNavLink href={link.href}>{link.label}</ActiveNavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger — three bars that animate to X */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                open && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Overlay + side panel — rendered as siblings outside the header */}
      {open && (
        <>
          {/* Dark backdrop */}
          <div
            className="fixed inset-0 z-[60] bg-black/50 animate-fade-in lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* White slide-in panel */}
          <aside
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(82vw,360px)] flex-col bg-white shadow-2xl animate-slide-in-right lg:hidden"
            aria-label="Mobile navigation"
          >
            {/* Panel header — pushed below Dynamic Island / status bar */}
            <div
              className="flex items-center justify-between border-b border-brand-line px-5 py-5"
              style={{ paddingTop: "max(1.25rem, env(safe-area-inset-top))" }}
            >
              <span className="text-sm font-semibold text-brand-primary">
                CP Consultancy Services
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-primary transition-colors hover:bg-brand-soft"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium transition-colors duration-150",
                          isActive
                            ? "bg-brand-accent/15 font-semibold text-brand-primary"
                            : "text-brand-ink hover:bg-brand-soft hover:text-brand-primary"
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-brand-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Panel footer — padded above iOS 26 glass bar / home indicator */}
            <div
              className="border-t border-brand-line px-5 py-4"
              style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <p className="text-xs text-brand-muted">
                © CP Consultancy Service 2023
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
