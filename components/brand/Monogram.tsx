import styles from "./Monogram.module.css";

export type MonogramVariant = "paper" | "ink" | "moss" | "monochrome";
export type MonogramContainer = "none" | "rounded" | "square";
export type MonogramSize = "sm" | "md" | "lg" | "xl";

interface MonogramProps {
  variant?: MonogramVariant;
  container?: MonogramContainer;
  size?: MonogramSize;
  label?: string;
  className?: string;
}

/**
 * Monogram — the "s·" mark used where the wordmark won't fit.
 *
 * Two canonical uses:
 *   1. Primary (container="none"): transparent italic Georgia "s" + moss dot.
 *      For controlled backgrounds (business card back, letterhead corner,
 *      email signature symbol, footer accent).
 *   2. Container (container="rounded"): same construction inside a rounded
 *      ink/moss/paper container. For uncontrolled backgrounds (favicon, app
 *      icon, avatar).
 */
export function Monogram({
  variant = "ink",
  container = "none",
  size = "md",
  label = "Breachrr Security",
  className,
}: MonogramProps) {
  const classNames = [
    styles.monogram,
    styles[`variant-${variant}`],
    styles[`container-${container}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span role="img" aria-label={label} className={classNames}>
      <em className={styles.s}>s</em>
      <span className={styles.dot} aria-hidden="true">
        ·
      </span>
    </span>
  );
}
