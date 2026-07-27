import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import type { Service } from "@/content/site";
import styles from "./ServiceCategoryCard.module.css";

interface ServiceCategoryCardProps {
  service: Service;
  number: string;
}

/**
 * ServiceCategoryCard — large card for the /services overview.
 *
 * Shows the full item list and posture map. Contrast with the small tile
 * on the homepage which only shows the category name + tagline + arrow.
 */
export function ServiceCategoryCard({ service, number }: ServiceCategoryCardProps) {
  return (
    <article className={styles.card} id={service.slug}>
      <div className={styles.header}>
        <Eyebrow prefix={number} tone="moss">
          Service area
        </Eyebrow>
        <h2 className={styles.name}>{service.name}</h2>
        <p className={styles.tagline}>{service.tagline}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.itemsBlock}>
          <div className={styles.blockLabel}>What&apos;s included</div>
          <ul className={styles.items}>
            {service.items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.itemDot} aria-hidden="true">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.postureBlock}>
          <div className={styles.blockLabel}>Typical postures</div>
          <div className={styles.postures}>
            {service.postures.map((p) => (
              <span key={p} className={styles.postureTag}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href={`/services/${service.slug}`} className={styles.link}>
          {service.linkLabel}
        </Link>
      </div>
    </article>
  );
}
