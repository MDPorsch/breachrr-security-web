import { Eyebrow, Cta } from "@/components/ui";
import { CapabilityDetail } from "@/components/sections";
import { capabilities, cta } from "@/content/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Approach",
  description:
    "How Breachrr Security works — three capabilities, scoped per engagement. Assess, Build, Advise.",
};

/**
 * Approach page — compact. Full deep-content for all three capabilities
 * on one scrollable page. Deep-linkable via #assess / #build / #advise.
 */
export default function ApproachPage() {
  return (
    <>
      {/* Page header */}
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <Eyebrow prefix="§">Approach</Eyebrow>
          <h1 className={styles.h1}>
            Three capabilities.<br />
            <em>One shape, cut to fit.</em>
          </h1>
          <p className={styles.sub}>
            How the practice works. Assess, Build, Advise — what each one
            actually looks like, what you leave with, and how a first week
            starts. Not a tiered menu. A shape we cut to fit the engagement
            in front of us.
          </p>
        </div>
      </header>

      {/* Three capabilities */}
      {capabilities.map((cap, i) => (
        <CapabilityDetail
          key={cap.slug}
          slug={cap.slug}
          number={`0${i + 1}`}
          name={cap.name}
          tagline={cap.tagline}
          whatHappens={cap.whatHappens}
          delivers={cap.delivers}
          firstWeek={cap.firstWeek}
          investment={cap.investment}
          duration={cap.duration}
        />
      ))}

      {/* Closing frame */}
      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingP}>
            Three capabilities. Different engagements combine them differently.
            A program build-out often starts with an assessment. Ongoing
            advisory usually follows a program. Sometimes a single assessment
            is all that's needed — sometimes a five-year advisory partnership
            begins after one intense week.
          </p>
          <p className={styles.closingP}>
            We scope engagements to what the work actually needs, not what a
            tiered pricing sheet says.
          </p>
          <p className={styles.closingEpigraph}>
            <em>Not a sequence. A shape we cut to fit.</em>
          </p>
        </div>
      </section>

      <Cta {...cta} variant="ink" />
    </>
  );
}
