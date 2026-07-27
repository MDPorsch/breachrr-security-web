import styles from "./CorporateMark.module.css";

interface CorporateMarkProps {
  /**
   * "lowercase" (default) for design contexts — footers, business cards,
   * email signatures. "initial-caps" for legal documents where jurisdiction
   * requires it (invoices, terms of service, contracts).
   */
  case?: "lowercase" | "initial-caps";
  /** Include copyright prefix ("© YEAR "). Default: false. */
  withCopyright?: boolean;
  /** Year for copyright. Default: current year. */
  year?: number;
  className?: string;
}

/**
 * CorporateMark — the legal-entity mark.
 *
 * "breachrr ltd" in Geist Mono lowercase at 11px, stone-500. Not the brand;
 * the administrative signature. Appears in footers, on business card backs,
 * in email signature footers. Never leads a page.
 */
export function CorporateMark({
  case: caseVariant = "lowercase",
  withCopyright = false,
  year = new Date().getFullYear(),
  className,
}: CorporateMarkProps) {
  const text = caseVariant === "initial-caps" ? "Breachrr Ltd" : "breachrr ltd";
  const display = withCopyright ? `© ${year} ${text}` : text;

  return (
    <span className={`${styles.mark} ${className ?? ""}`.trim()}>
      {display}
    </span>
  );
}
