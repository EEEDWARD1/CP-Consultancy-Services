import type { Metadata, Viewport } from "next";
import { Open_Sans, Poppins } from "next/font/google";

import { ContactCta } from "@/components/sections/ContactCta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "@/styles/globals.css";

const BASE = "https://www.cpconsultancyservice.co.uk";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "CP Consultancy Services | Construction Consultancy UK",
    template: "%s | CP Consultancy Services"
  },
  description:
    "CP Consultancy Services delivers expert construction consultancy across the UK, specialising in Project Management, Quantity Surveying, Employer's Agent and Clerk of Works services for public and private sector clients.",
  keywords: [
    "construction consultancy UK",
    "project management construction",
    "quantity surveying",
    "employer's agent",
    "clerk of works",
    "contract administration",
    "CDM services",
    "JCT contracts",
    "NEC contracts",
    "cost consultancy",
    "construction claims consultancy"
  ],
  authors: [{ name: "CP Consultancy Services", url: BASE }],
  creator: "CP Consultancy Services",
  publisher: "CP Consultancy Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: BASE
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE,
    siteName: "CP Consultancy Services",
    title: "CP Consultancy Services | Construction Consultancy UK",
    description:
      "Expert construction consultancy across the UK — Project Management, Quantity Surveying, Employer's Agent and Clerk of Works for public and private sector clients.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 2399,
        height: 960,
        alt: "CP Consultancy Services logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CP Consultancy Services | Construction Consultancy UK",
    description:
      "Expert construction consultancy across the UK — Project Management, Quantity Surveying, Employer's Agent and Clerk of Works.",
    images: ["/images/logo.jpg"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CP Consultancy Services",
  url: BASE,
  email: "kian.jafari@cpconsultancyservice.co.uk",
  description:
    "CP Consultancy Services provides expert construction consultancy including Project Management, Quantity Surveying, Employer's Agent, CDM Services and Clerk of Works across public and private sectors in the UK.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Consultancy Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employer's Agent" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Quantity Surveying" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clerk of Works" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CDM Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Claims Consultancy" } }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <ContactCta />
        <Footer />
      </body>
    </html>
  );
}
