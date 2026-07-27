import { Eyebrow } from "@/components/ui";
import { philosophy } from "@/content/site";
import styles from "./PhilosophyBlock.module.css";

/**
 * PhilosophyBlock — "how we work" editorial statement.
 *
 * Placed between the services listing and the closing CTA on the homepage.
 * One block with three moving thoughts inside — reads as one editorial
 * statement, not three marketing lockups.
 */
export function PhilosophyBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Eyebrow prefix="04" tone="moss">
            {philosophy.eyebrow}
          </Eyebrow>
          <h2 className={styles.h}>
            {philosophy.headline}{" "}
            <em className={styles.accent}>{philosophy.accent}</em>
          </h2>
        </div>

        <div className={styles.body}>
          {philosophy.body.map((paragraph, i) => (
            <p key={i} className={styles.p}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
