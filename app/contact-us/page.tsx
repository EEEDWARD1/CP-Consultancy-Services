import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { PageBanner } from "@/components/sections/PageBanner";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { contactEmail } from "@/lib/content";

const BASE = "https://www.cpconsultancyservice.co.uk";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with CP Consultancy Services",
  description:
    "Contact CP Consultancy Services for expert construction consultancy. Get in touch to discuss Project Management, Quantity Surveying, Employer's Agent or Clerk of Works requirements for your next project.",
  alternates: {
    canonical: `${BASE}/contact-us`
  },
  openGraph: {
    title: "Contact Us | CP Consultancy Services",
    description:
      "Get in touch to discuss Project Management, Quantity Surveying, Employer's Agent or Clerk of Works requirements for your next construction project.",
    url: `${BASE}/contact-us`,
    images: [{ url: "/images/logo.jpg", width: 2399, height: 960, alt: "CP Consultancy Services" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CP Consultancy Services",
    description:
      "Get in touch to discuss Project Management, Quantity Surveying, Employer's Agent or Clerk of Works requirements."
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: `${BASE}/contact-us` }
  ]
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CP Consultancy Services",
  url: `${BASE}/contact-us`,
  description: "Contact CP Consultancy Services for professional construction consultancy in the UK.",
  isPartOf: { "@type": "WebSite", url: BASE },
  mainEntity: {
    "@type": "ProfessionalService",
    name: "CP Consultancy Services",
    email: contactEmail,
    url: BASE,
    areaServed: { "@type": "Country", name: "United Kingdom" }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <PageBanner />
      <Section className="bg-brand-surface">
        <Card className="mx-auto grid max-w-5xl min-w-0 gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — info panel */}
          <div className="min-w-0 bg-brand-primary p-6 text-white sm:p-10 lg:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent text-brand-primary">
              <Mail aria-hidden="true" className="h-7 w-7" />
            </div>
            <h1 className="mt-8 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 font-body text-base leading-8 text-white/80 sm:text-lg">
              Please complete and submit the form below if you require any additional information or would like to work with us.
            </p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Email us directly
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block break-all text-sm font-medium text-brand-accent hover:underline"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="min-w-0 p-6 sm:p-10 lg:p-12">
            <h2 className="mb-6 text-xl font-semibold text-brand-primary">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </Card>
      </Section>
    </>
  );
}
