import type { Metadata } from "next";

import { PageBanner } from "@/components/sections/PageBanner";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutParagraphs } from "@/lib/content";

const BASE = "https://www.cpconsultancyservice.co.uk";

export const metadata: Metadata = {
  title: "About CP Consultancy Services | UK Construction Consultants",
  description:
    "CP Consultancy Services combines client-side, consultancy and contractor experience to deliver construction projects on time and within budget. Specialists in JCT and NEC contracts across public and private sectors in the UK.",
  alternates: {
    canonical: `${BASE}/about`
  },
  openGraph: {
    title: "About CP Consultancy Services | UK Construction Consultants",
    description:
      "Experienced construction consultants combining client-side, consultancy and contractor expertise. Specialists in JCT and NEC contracts for public and private sector clients across the UK.",
    url: `${BASE}/about`,
    images: [{ url: "/images/logo.jpg", width: 2399, height: 960, alt: "CP Consultancy Services" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About CP Consultancy Services | UK Construction Consultants",
    description:
      "Experienced construction consultants specialising in JCT and NEC contracts for public and private sector clients across the UK."
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE}/about` }
  ]
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About CP Consultancy Services",
  url: `${BASE}/about`,
  description:
    "CP Consultancy Services combines client-side, consultancy and contractor experience to deliver construction projects on time and within budget.",
  isPartOf: { "@type": "WebSite", url: BASE }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <PageBanner />
      <Section className="bg-brand-surface">
        <SectionHeader title="About Us" />
        <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-brand-line/80 bg-white p-6 shadow-soft sm:p-10">
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="border-l-2 border-brand-accent/70 pl-5 font-body text-base leading-8 text-brand-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
