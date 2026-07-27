import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  /** Small monospaced prefix, e.g. "§ 01" or "01 —". Optional. */
  prefix?: string;
  /** Colour treatment. Default: muted. */
  tone?: "muted" | "moss" | "ink";
  children: React.ReactNode;
  className?: string;
}

/**
 * Eyebrow — the small uppercase label above headlines.
 *
 * 11px, 0.18em tracking, Geist. Muted colour by default.
 */
export function Eyebrow({
  prefix,
  tone = "muted",
  children,
  className,
}: EyebrowProps) {
  return (
    <p className={`${styles.eyebrow} ${styles[`tone-${tone}`]} ${className ?? ""}`.trim()}>
      {prefix ? <span className={styles.prefix}>{prefix}</span> : null}
      {children}
    </p>
  );
}
