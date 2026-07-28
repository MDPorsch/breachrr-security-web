import Script from "next/script";
import {
  Hero,
  CapabilitiesSection,
  ServicesSection,
  BuyerStagesSection,
  PhilosophyBlock,
  PracticeIntro,
  FaqBlock,
} from "@/components/sections";
import { Cta } from "@/components/ui";
import { cta, faq, services } from "@/content/site";

const SITE_URL = "https://breachrrsecurity.com";

export const metadata = {
  title:
    "Breachrr Security — Cybersecurity services for startups and growing businesses",
  description:
    "Breachrr Security helps startups and growing businesses identify and reduce cybersecurity risks. Security assessments, program build-outs, and ongoing advisory across six service areas. Open for engagements.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Breachrr Security",
    description:
      "Security assessments, program build-outs, and ongoing advisory. Open for engagements.",
  },
};

/**
 * FAQPage schema — earns rich results in Google. Questions appear as
 * expandable answers directly in search results when the site ranks.
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/**
 * ItemList schema — signals the six service areas as a discoverable catalog.
 */
const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#services`,
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/services/${service.slug}`,
    name: service.name,
    description: service.tagline,
  })),
};

/**
 * Homepage.
 *
 * Composition (top → bottom):
 *   Hero            — rotating headlines + subhead + booking indicator
 *   Capabilities    — three engagement postures (Assess / Build / Advise)
 *   Services        — six service areas the postures cover
 *   Buyer stages    — three "who we help" descriptors
 *   Philosophy      — "Built around your needs. Not a package."
 *   Practice intro  — the short "the practice" note
 *   FAQ             — four common questions
 *   Closing CTA     — ink variant
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <ServicesSection />
      <BuyerStagesSection />
      <PhilosophyBlock />
      <PracticeIntro />
      <FaqBlock />
      <Cta {...cta} variant="ink" />

      {/* Structured data — FAQPage + ItemList */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ld-services"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
    </>
  );
}
