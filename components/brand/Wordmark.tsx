import styles from "./Wordmark.module.css";

export type WordmarkVariant = "paper" | "ink" | "moss" | "monochrome";
export type WordmarkSize = "nav" | "hero" | "footer" | "display";

interface WordmarkProps {
  /** Which surface treatment. Default: paper. */
  variant?: WordmarkVariant;
  /** Which size / usage context. Default: nav. */
  size?: WordmarkSize;
  /** Optional aria-label override; defaults to "Breachrr Security". */
  label?: string;
  /** When rendered as a link, provide href. Otherwise renders as <span>. */
  href?: string;
  /** Optional className passthrough. */
  className?: string;
}

/**
 * The canonical Breachrr Security wordmark.
 *
 * Construction: Georgia roman "Breachrr" + Georgia italic moss "Security" +
 * moss middle-dot at slightly-below half x-height.
 *
 * Renders as inline HTML so the middle-dot picks up the exact CSS treatment.
 * SVGs from the brand kit are for export use (email signatures, print, etc);
 * on the web we render live to preserve fidelity across zoom, dark mode, etc.
 */
export function Wordmark({
  variant = "paper",
  size = "nav",
  label = "Breachrr Security",
  href,
  className,
}: WordmarkProps) {
  const classNames = [
    styles.wordmark,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className={styles.roman}>Breachrr</span>
      <span className={styles.space} aria-hidden="true" />
      <em className={styles.italic}>Security</em>
      <span className={styles.dot} aria-hidden="true">
        ·
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={label} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <span role="img" aria-label={label} className={classNames}>
      {content}
    </span>
  );
}
