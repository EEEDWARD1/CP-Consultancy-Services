import Link from "next/link";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="w-full overflow-x-clip border-y border-brand-line/40 bg-[linear-gradient(118deg,#001322_0%,#00203a_46%,#123b58_100%)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-2xl space-y-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Start the conversation
          </p>
          <h2
            id="contact-cta-heading"
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Planning a project or need expert construction advice?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Reach out to discuss your brief, ask a question, or arrange a consultation. We’ll
            guide you toward the right next step.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-primary shadow-sm transition duration-200 hover:bg-white hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Contact Us
          </Link>
          <span className="text-sm text-white/70">Response by email from our contact page</span>
        </div>
      </div>
    </section>
  );
}