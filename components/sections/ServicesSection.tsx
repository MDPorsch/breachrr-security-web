import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { services } from "@/content/site";
import styles from "./ServicesSection.module.css";

/**
 * ServicesSection — homepage services listing.
 *
 * Lighter treatment than CapabilitiesSection. The three engagement postures
 * (Assess/Build/Advise) sit above; these six service categories describe the
 * domains the postures cover. Two-column grid of category cards, each linking
 * into /services/[slug].
 */
export function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow prefix="02">What we cover</Eyebrow>
          <h2 className={styles.h}>
            Six service areas.<br />
            <em>One shape, cut to fit.</em>
          </h2>
          <p className={styles.p}>
            The three engagement types above are how we work. These are the
            areas we work across. Most engagements combine several — an
            application review and a cloud review, a readiness build with an
            advisory continuation, an incident-response retainer paired with
            quarterly assessments.
          </p>
          <Link href="/services" className={styles.allLink}>
            All service areas
            <span className={styles.allLinkArrow} aria-hidden="true">→</span>
          </Link>
        </aside>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <h3 className={styles.cardH}>{service.name}</h3>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </div>
              <p className={styles.cardTagline}>{service.tagline}</p>
              <div className={styles.cardMeta}>
                {service.items.length} services · {service.postures.join(" · ")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
