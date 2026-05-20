import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ImageSlideshow } from "@/components/sections/ImageSlideshow";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeContent, slideshowImages } from "@/lib/content";

const BASE = "https://www.cpconsultancyservice.co.uk";

export const metadata: Metadata = {
  title: "CP Consultancy Services | Construction Consultancy UK",
  description:
    "CP Consultancy Services provides professional construction consultancy across the UK. Specialists in Project Management, Quantity Surveying, Employer's Agent and Clerk of Works for public and private sector clients.",
  alternates: {
    canonical: BASE
  },
  openGraph: {
    title: "CP Consultancy Services | Construction Consultancy UK",
    description:
      "Professional construction consultancy across the UK — Project Management, Quantity Surveying, Employer's Agent and Clerk of Works.",
    url: BASE,
    images: [{ url: "/images/logo.jpg", width: 2399, height: 960, alt: "CP Consultancy Services" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CP Consultancy Services | Construction Consultancy UK",
    description:
      "Professional construction consultancy across the UK — Project Management, Quantity Surveying, Employer's Agent and Clerk of Works."
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CP Consultancy Services",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CP Consultancy Services | Construction Consultancy UK",
  url: BASE,
  description:
    "Professional construction consultancy across the UK specialising in Project Management, Quantity Surveying, Employer's Agent and Clerk of Works.",
  isPartOf: { "@type": "WebSite", url: BASE }
};

const heroTitleWords = ["Building", "Your", "Vision"];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="vision-gradient-banner relative isolate min-h-[80svh] overflow-hidden bg-brand-primary">
        <ImageSlideshow
          images={slideshowImages}
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-35 mix-blend-soft-light"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-brand-primary/35" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-7xl items-center px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              <span className="sr-only">Building Your Vision</span>
              <span aria-hidden="true" className="flex flex-wrap gap-x-4 gap-y-2">
                {heroTitleWords.map((word, index) => (
                  <span
                    key={word}
                    className="hero-word-reveal inline-block"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/90 sm:text-xl">
              {homeContent.heroText}
            </p>
            <ButtonLink
              href="/contact-us"
              className="mt-9 gap-2 bg-white !text-brand-primary hover:bg-brand-accent hover:!text-brand-primary"
            >
              <span>{homeContent.heroCta}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section className="border-t-4 border-brand-accent bg-brand-surface">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-lg border border-brand-line/80 bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="h-1 w-16 rounded-full bg-brand-accent" />
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight text-brand-primary sm:text-4xl">
              {homeContent.introTitle}
            </h2>
          </div>
          <p className="font-body text-base leading-8 text-brand-muted sm:text-lg">
            {homeContent.introText}
          </p>
        </div>
      </Section>
    </>
  );
}
