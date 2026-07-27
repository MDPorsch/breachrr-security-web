import { Hero, CapabilitiesSection, BuyerStagesSection, PracticeIntro } from "@/components/sections";
import { Cta } from "@/components/ui";
import { cta } from "@/content/site";

/**
 * Homepage.
 *
 * Composition:
 *   Hero (rotating headlines + subhead + booking indicator)
 *   Capabilities (Assess / Build / Advise)
 *   Buyer stages (the three "who we help" descriptors)
 *   Practice intro (short "the practice" note)
 *   Closing CTA
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <BuyerStagesSection />
      <PracticeIntro />
      <Cta {...cta} variant="ink" />
    </>
  );
}
