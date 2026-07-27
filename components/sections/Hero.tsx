import { HeroRotator } from "./HeroRotator";
import { LiveIndicator } from "@/components/brand";
import { heroSubhead, site } from "@/content/site";
import styles from "./Hero.module.css";

/**
 * Hero — the top-of-homepage block.
 *
 * Eyebrow, rotating headlines (three lines cycling), constant subhead,
 * booking indicator. The hairline grid is a decorative overlay at 4% opacity.
 */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>
            Cybersecurity services
          </p>
          <div className={styles.status}>
            <LiveIndicator>{site.bookingStatus}</LiveIndicator>
          </div>
        </div>

        <HeroRotator />

        <p className={styles.subhead}>{heroSubhead}</p>
      </div>
    </section>
  );
}
