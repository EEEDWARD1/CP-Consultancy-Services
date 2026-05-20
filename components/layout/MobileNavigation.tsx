"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  links: NavLink[];
};

export function MobileNavigation({ links }: MobileNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname]);

  // Focus the close button when drawer opens
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isOpen]);

  // Scroll lock + Escape key
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        openBtnRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger trigger */}
      <button
        ref={openBtnRef}
        type="button"
        className="inline-flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-full border border-brand-accent bg-brand-accent text-brand-primary shadow-sm transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary lg:hidden"
        aria-label="Open navigation menu"
        aria-controls="mobile-nav"
        aria-expanded={isOpen}
        onClick={open}
      >
        <Menu aria-hidden="true" className="h-6 w-6" />
      </button>

      {/* Drawer — only mounted when open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-brand-primary/70 animate-mobile-menu-fade"
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={close}
          />

          {/* Slide-in panel */}
          <aside
            id="mobile-nav"
            className="absolute inset-y-0 right-0 z-10 flex h-dvh w-[min(88vw,24rem)] flex-col overflow-y-auto bg-white shadow-2xl animate-mobile-menu-panel"
          >
            <div className="flex min-h-20 items-center justify-between border-b border-brand-line px-5">
              <span className="text-sm font-semibold text-brand-primary">
                CP Consultancy Services
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-primary transition duration-200 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                aria-label="Close navigation menu"
                onClick={close}
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="p-4">
              <ul className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center justify-between rounded-lg px-4 py-4 text-base font-medium text-brand-ink transition duration-200 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-inset",
                          isActive && "bg-brand-accent-soft text-brand-primary"
                        )}
                        onClick={close}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-brand-accent"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
