import styles from "./LiveIndicator.module.css";

interface LiveIndicatorProps {
  /** Text next to the pulse dot. */
  children?: React.ReactNode;
  /** Colour variant. Default: "moss" for the standard active/present signal. */
  variant?: "moss" | "phosphor";
  className?: string;
}

/**
 * LiveIndicator — the one always-on motion element in the system.
 *
 * A moss dot with a soft box-shadow halo, pulsing at 2.4s ease-in-out infinite.
 * Signals presence: "on the desk", "booking open", "active engagement".
 * Never more than two on any single page — motion currency is finite.
 */
export function LiveIndicator({
  children,
  variant = "moss",
  className,
}: LiveIndicatorProps) {
  const classNames = [
    styles.wrapper,
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames}>
      <span className={styles.dot} aria-hidden="true" />
      {children ? <span className={styles.label}>{children}</span> : null}
    </span>
  );
}
