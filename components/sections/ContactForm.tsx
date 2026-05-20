"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

import { contactEmail } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name    = data.get("name")    as string;
    const email   = data.get("email")   as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="h-12 w-12 text-brand-accent" />
        <h3 className="text-lg font-semibold text-brand-primary">Your email app should open now</h3>
        <p className="text-sm text-brand-muted">
          If it didn&apos;t open automatically, email us directly at{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-brand-primary underline">
            {contactEmail}
          </a>
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-brand-muted underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-brand-primary">
            Name <span className="text-brand-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-brand-primary">
            Email <span className="text-brand-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-semibold text-brand-primary">
          Subject <span className="text-brand-accent">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
          className="rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-brand-primary">
          Your Message <span className="text-brand-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="resize-none rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-accent hover:text-brand-primary"
      >
        Send Message
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
