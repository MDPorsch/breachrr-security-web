import styles from "./PageShell.module.css";

interface PageShellProps {
  /** Max content width. Default: default (1440px). */
  width?: "default" | "narrow" | "wide";
  /** Vertical padding above/below. Default: default. */
  spacing?: "default" | "compact" | "spacious" | "none";
  children: React.ReactNode;
  className?: string;
}

/**
 * PageShell — max-width container with consistent horizontal padding
 * and vertical rhythm.
 *
 * Every page-level section should be wrapped in a PageShell. Nested
 * PageShells don't compound their max-width; the outermost wins.
 */
export function PageShell({
  width = "default",
  spacing = "default",
  children,
  className,
}: PageShellProps) {
  const classNames = [
    styles.shell,
    styles[`width-${width}`],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}
