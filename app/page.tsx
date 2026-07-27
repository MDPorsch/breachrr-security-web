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
import { cta } from "@/content/site";

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
    </>
  );
}
