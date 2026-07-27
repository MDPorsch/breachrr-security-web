import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import styles from "./Cta.module.css";

interface CtaProps {
  eyebrow: string;
  headline: string;
  accent: string;
  body?: string;
  buttonLabel: string;
  buttonHref: string;
  /** Which surface variant to render on. Default: paper. */
  variant?: "paper" | "ink";
  className?: string;
}

/**
 * Cta — the closing call-to-action block.
 *
 * Editorial in tone; not a pressure block. Eyebrow + serif headline with
 * italic moss accent + optional body + one primary action.
 */
export function Cta({
  eyebrow,
  headline,
  accent,
  body,
  buttonLabel,
  buttonHref,
  variant = "paper",
  className,
}: CtaProps) {
  const external = buttonHref.startsWith("http") || buttonHref.startsWith("mailto:");
  const wrapperClass = [
    styles.cta,
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={wrapperClass}>
      <div className={styles.inner}>
        <Eyebrow tone={variant === "ink" ? "moss" : "muted"}>{eyebrow}</Eyebrow>
        <h2 className={styles.headline}>
          {headline} <em className={styles.accent}>{accent}</em>
        </h2>
        {body ? <p className={styles.body}>{body}</p> : null}
        <div className={styles.action}>
          {external ? (
            <a href={buttonHref} className={styles.button}>
              {buttonLabel}
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </a>
          ) : (
            <Link href={buttonHref} className={styles.button}>
              {buttonLabel}
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
