"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggle(title: string) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }

  return (
    <div className="w-full space-y-3">
      {items.map((item) => {
        const isOpen = openItems.has(item.title);

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => toggle(item.title)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-brand-primary transition-colors duration-150 hover:bg-brand-soft sm:px-6"
            >
              <span>{item.title}</span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-accent transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {/* Animated expand/collapse using CSS grid trick */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-brand-line bg-brand-surface/50 px-5 py-6 sm:px-6">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
