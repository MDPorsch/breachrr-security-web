import { Eyebrow } from "@/components/ui";
import { buyerStages } from "@/content/site";
import styles from "./BuyerStagesSection.module.css";

/**
 * BuyerStagesSection — "who we help" row.
 *
 * Three descriptors that let a right-fit prospect recognise themselves.
 * Internally these map to Greenfield / Improvised / Outgrown, but those
 * labels stay internal per the positioning decision.
 */
export function BuyerStagesSection() {
  return (
    <section className={styles.section} id="who-we-help">
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow prefix="02">Who we help</Eyebrow>
          <h2 className={styles.h}>
            You might recognise <em>where you are.</em>
          </h2>
          <p className={styles.p}>
            The buyer we serve isn't defined by size or revenue. It's defined
            by the moment. Something forced the conversation — a first
            enterprise customer, a first investor question, a first audit, a
            first serious incident. The security team is either being built,
            outsourced, or hired for the first time.
          </p>
        </aside>

        <div className={styles.tiles}>
          {buyerStages.map((stage, i) => (
            <div key={i} className={styles.tile}>
              <div className={styles.tileNum}>0{i + 1}</div>
              <h3 className={styles.tileH}>{stage.label}</h3>
              <p className={styles.tileP}>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
