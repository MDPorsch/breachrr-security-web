import { Eyebrow, Cta } from "@/components/ui";
import { ServiceCategoryCard } from "@/components/sections";
import { services, cta } from "@/content/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Services",
  description:
    "Six service areas across the security stack — from assessments to incident response. Every engagement scoped to what the work needs.",
};

/**
 * Services overview page.
 *
 * Lists all six service categories with full item breakdown and posture map.
 * Each category deep-links to its own detail page.
 */
export default function ServicesPage() {
  return (
    <>
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <Eyebrow prefix="§">Services</Eyebrow>
          <h1 className={styles.h1}>
            Six service areas.<br />
            <em>The security stack, covered.</em>
          </h1>
          <p className={styles.sub}>
            Every engagement combines an engagement type — Assess, Build, or
            Advise — with one or more of the service areas below. The service
            areas describe what the work touches; the engagement type describes
            the shape it takes.
          </p>
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {services.map((service, i) => (
            <ServiceCategoryCard
              key={service.slug}
              service={service}
              number={`0${i + 1}`}
            />
          ))}
        </div>
      </section>

      <Cta {...cta} variant="ink" />
    </>
  );
}
