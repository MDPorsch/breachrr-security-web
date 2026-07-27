import styles from "./SectionDivider.module.css";

/**
 * SectionDivider — hairline rule broken by a centred moss middle-dot.
 *
 * Use once per page between major sections. Don't repeat multiple times
 * on the same view — the dot is a considered pause, not a bullet.
 */
export function SectionDivider() {
  return (
    <div className={styles.divider} role="presentation" aria-hidden="true">
      <span className={styles.rule} />
      <span className={styles.dot}>·</span>
      <span className={styles.rule} />
    </div>
  );
}
