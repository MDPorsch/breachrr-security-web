import { Monogram } from "@/components/brand";
import { Eyebrow } from "@/components/ui";
import { practiceIntro } from "@/content/site";
import styles from "./PracticeIntro.module.css";

/**
 * PracticeIntro — homepage "the practice" section.
 *
 * Reassures the buyer that the person they'll work with is the person
 * they're reading about. Placeholder for a real portrait; monogram
 * stands in for now.
 */
export function PracticeIntro() {
  return (
    <section className={styles.section} id="the-practice">
      <div className={styles.inner}>
        <div className={styles.markSide}>
          <Monogram
            variant="ink"
            container="rounded"
            size="xl"
            label="Breachrr Security"
          />
        </div>
        <div className={styles.textSide}>
          <Eyebrow prefix="03">{practiceIntro.eyebrow}</Eyebrow>
          <h2 className={styles.h}>
            {practiceIntro.headline}{" "}
            <em>{practiceIntro.accent}</em>
          </h2>
          <p className={styles.body}>{practiceIntro.body}</p>
        </div>
      </div>
    </section>
  );
}
