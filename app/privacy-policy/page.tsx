import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { privacyText } from "@/app/privacy-policy/privacy-text";

export function generateMetadata(): Metadata {
  return {
    title: "PRIVACY POLICY",
    description: "Last updated December 11, 2023",
    openGraph: {
      title: "PRIVACY POLICY",
      description: "Last updated December 11, 2023",
      url: "/privacy-policy"
    }
  };
}

export default function PrivacyPolicyPage() {
  return (
    <Section className="bg-brand-surface" innerClassName="max-w-4xl">
      <article className="rounded-lg border border-brand-line/80 bg-white p-6 shadow-soft sm:p-10">
        <pre className="whitespace-pre-wrap font-body text-sm leading-7 text-brand-muted sm:text-base">
          {privacyText}
        </pre>
      </article>
    </Section>
  );
}
