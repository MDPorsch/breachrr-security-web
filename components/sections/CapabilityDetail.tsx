import { Eyebrow } from "@/components/ui";
import styles from "./CapabilityDetail.module.css";

interface CapabilityDetailProps {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  whatHappens: string;
  delivers: readonly string[];
  firstWeek: string;
  investment: string;
  duration: string;
}

/**
 * CapabilityDetail — deep-content section for a single capability.
 *
 * Used three times on the Approach page (Assess, Build, Advise). Sidebar layout:
 * capability header on the left, structured deep-content on the right
 * (What happens · What you deliver · A first week · Investment).
 *
 * The slug becomes an anchor target, so /approach#assess deep-links from
 * homepage capability tiles.
 */
export function CapabilityDetail({
  slug,
  number,
  name,
  tagline,
  whatHappens,
  delivers,
  firstWeek,
  investment,
  duration,
}: CapabilityDetailProps) {
  return (
    <section id={slug} className={styles.section}>
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow prefix={number} tone="moss">
            Capability
          </Eyebrow>
          <h2 className={styles.h}>{name}</h2>
          <p className={styles.tagline}>
            <em>{tagline}</em>
          </p>
          <div className={styles.metaBlock}>
            <div className={styles.metaLabel}>Duration</div>
            <div className={styles.metaValue}>{duration}</div>
          </div>
          <div className={styles.metaBlock}>
            <div className={styles.metaLabel}>Investment</div>
            <div className={styles.metaValue}>{investment}</div>
          </div>
        </aside>

        <div className={styles.body}>
          <div className={styles.block}>
            <div className={styles.blockLabel}>What happens</div>
            <p className={styles.blockText}>{whatHappens}</p>
          </div>

          <div className={styles.block}>
            <div className={styles.blockLabel}>What you leave with</div>
            <ul className={styles.list}>
              {delivers.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.listDot} aria-hidden="true">
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <div className={styles.blockLabel}>How we start</div>
            <p className={styles.blockText}>{firstWeek}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
