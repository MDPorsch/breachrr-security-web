import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { capabilities } from "@/content/site";
import styles from "./CapabilitiesSection.module.css";

/**
 * CapabilitiesSection — three capabilities in a row.
 *
 * Assess / Build / Advise. Editorial sidebar layout: 320px aside with
 * eyebrow + heading + short frame, three-column grid of tiles on the right.
 *
 * Each tile links to /approach#{slug} — deep-linked to the same-named
 * anchor in the Approach page (built in phase 3).
 */
export function CapabilitiesSection() {
  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow prefix="01">How we work</Eyebrow>
          <h2 className={styles.h}>
            Three engagement types.<br />
            <em>Assess. Build. Advise.</em>
          </h2>
          <p className={styles.p}>
            These describe the shape of the work — how an engagement is scoped
            and delivered. Every engagement is one of these types applied
            across one or more service areas.
          </p>
          <p className={styles.pMuted}>Not a sequence. A shape we cut to fit.</p>
        </aside>

        <div className={styles.tiles}>
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/approach#${cap.slug}`}
              className={styles.tile}
            >
              <div className={styles.tileTop}>
                <h3 className={styles.tileH}>{cap.name}</h3>
                <span className={styles.tileArrow} aria-hidden="true">
                  →
                </span>
              </div>
              <p className={styles.tileTagline}>
                <em>{cap.tagline}</em>
              </p>
              <p className={styles.tileSummary}>{cap.summary}</p>
              <div className={styles.tileMeta}>{cap.duration}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
