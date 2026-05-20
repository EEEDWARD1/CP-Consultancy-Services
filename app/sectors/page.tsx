import type { Metadata } from "next";

import { Accordion } from "@/components/sections/Accordion";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sectorItems } from "@/lib/content";

const BASE = "https://www.cpconsultancyservice.co.uk";

export const metadata: Metadata = {
  title: "Sectors We Work In | Residential, Leisure, Commercial & Education",
  description:
    "CP Consultancy Services works across Residential, Leisure & Community, Corporate Properties, Commercial Offices and Education sectors. Proven delivery of projects for local authorities, housing associations and private clients throughout the UK.",
  alternates: {
    canonical: `${BASE}/sectors`
  },
  openGraph: {
    title: "Sectors We Work In | CP Consultancy Services",
    description:
      "Residential, Leisure & Community, Corporate Properties, Commercial Offices and Education — proven project delivery for local authorities, housing associations and private clients across the UK.",
    url: `${BASE}/sectors`,
    images: [{ url: "/images/logo.jpg", width: 2399, height: 960, alt: "CP Consultancy Services" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors We Work In | CP Consultancy Services",
    description:
      "Residential, Leisure, Corporate Properties, Commercial Offices and Education — proven project delivery across the UK."
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Sectors", item: `${BASE}/sectors` }
  ]
};

const sectorsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Sectors",
  url: `${BASE}/sectors`,
  itemListElement: sectorItems.map((sector, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: sector.title
  }))
};

export default function SectorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sectorsSchema) }}
      />

      <PageBanner />
      <Section className="bg-brand-surface" innerClassName="max-w-5xl">
        <SectionHeader title="Sectors we work in" />
        <div className="mt-12">
          <Accordion
            items={sectorItems.map((sector) => ({
              title: sector.title,
              content: (
                <div className="space-y-6">
                  {sector.projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              )
            }))}
          />
        </div>
      </Section>
    </>
  );
}
