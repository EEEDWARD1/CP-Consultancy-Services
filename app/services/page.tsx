import type { Metadata } from "next";

import { Accordion } from "@/components/sections/Accordion";
import { PageBanner } from "@/components/sections/PageBanner";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceItems } from "@/lib/content";

const BASE = "https://www.cpconsultancyservice.co.uk";

export const metadata: Metadata = {
  title: "Construction Consultancy Services | Project Management & Quantity Surveying",
  description:
    "Our construction consultancy services cover Project Management, Employer's Agent, Quantity Surveying and Clerk of Works. Expert support from project inception through to the end of the defect liability period across the UK.",
  alternates: {
    canonical: `${BASE}/services`
  },
  openGraph: {
    title: "Construction Consultancy Services | CP Consultancy Services",
    description:
      "Project Management, Employer's Agent, Quantity Surveying and Clerk of Works — expert construction consultancy from inception to defect liability period across the UK.",
    url: `${BASE}/services`,
    images: [{ url: "/images/logo.jpg", width: 2399, height: 960, alt: "CP Consultancy Services" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Consultancy Services | CP Consultancy Services",
    description:
      "Project Management, Employer's Agent, Quantity Surveying and Clerk of Works — expert construction consultancy across the UK."
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }
  ]
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Consultancy Services",
  url: `${BASE}/services`,
  itemListElement: serviceItems.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.paragraphs[0],
      provider: {
        "@type": "ProfessionalService",
        name: "CP Consultancy Services",
        url: BASE
      }
    }
  }))
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <PageBanner />
      <Section className="bg-brand-surface">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Services we provide" />
          <div className="mt-12">
            <Accordion
              items={serviceItems.map((service) => ({
                title: service.title,
                content: (
                  <div className="space-y-5">
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="font-body text-base leading-8 text-brand-muted sm:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )
              }))}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
