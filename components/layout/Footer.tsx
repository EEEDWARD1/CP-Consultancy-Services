import Link from "next/link";

import { footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark px-4 py-8 text-center text-xs text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link
          href="/"
          className="font-semibold text-white transition duration-300 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
        >
          CP Consultancy Services
        </Link>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className="rounded-sm text-white/80 transition duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
