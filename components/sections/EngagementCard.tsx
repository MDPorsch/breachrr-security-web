import { Eyebrow } from "@/components/ui";
import styles from "./EngagementCard.module.css";

interface EngagementCardProps {
  slug: string;
  client: string;
  capability: string;
  year: string;
  duration: string;
  summary: string;
  metrics: readonly {
    value: string;
    label: string;
  }[];
  body: string;
}

/**
 * EngagementCard — featured engagement block.
 *
 * Editorial artefact — Practice Note metadata header (client · capability ·
 * year), Georgia summary, three-metric row, italic body paragraph.
 */
export function EngagementCard({
  slug,
  client,
  capability,
  year,
  duration,
  summary,
  metrics,
  body,
}: EngagementCardProps) {
  return (
    <article className={styles.card} id={slug}>
      <header className={styles.header}>
        <Eyebrow prefix={year} tone="moss">
          {duration ? `${capability} · ${duration}` : capability}
        </Eyebrow>
        <h3 className={styles.client}>{client}</h3>
      </header>

      <p className={styles.summary}>{summary}</p>

      <div className={styles.metrics}>
        {metrics.map((m, i) => (
          <div key={i} className={styles.metric}>
            <div className={styles.metricValue}>{m.value}</div>
            <div className={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerRule} />
        <span className={styles.dividerDot}>·</span>
        <span className={styles.dividerRule} />
      </div>

      <p className={styles.body}>{body}</p>

      <footer className={styles.footer}>
        <span className={styles.signature}>
          — Prepared by <em>Breachrr Security</em>
        </span>
      </footer>
    </article>
  );
}
