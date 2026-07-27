import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Cta } from "@/components/ui";
import { cta } from "@/content/site";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getPosturesForService,
} from "@/lib/services";
import styles from "./page.module.css";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Generate one static page per service category at build time. */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/** Per-page metadata. */
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

/**
 * Individual service category page.
 * Structure: hero (name, tagline, summary) → items list → methodology →
 * typical engagement postures → closing CTA.
 */
export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const postures = getPosturesForService(service);

  return (
    <>
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <div className={styles.crumbs}>
            <Link href="/services" className={styles.crumbLink}>
              Services
            </Link>
            <span className={styles.crumbSep} aria-hidden="true">/</span>
            <span className={styles.crumbCurrent}>{service.name}</span>
          </div>

          <Eyebrow prefix="§">Service area</Eyebrow>
          <h1 className={styles.h1}>{service.name}</h1>
          <p className={styles.tagline}>{service.tagline}</p>
          <p className={styles.summary}>{service.summary}</p>
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.section}>
            <div className={styles.sectionAside}>
              <div className={styles.sectionLabel}>What&apos;s included</div>
            </div>
            <div className={styles.sectionMain}>
              <ul className={styles.items}>
                {service.items.map((item, i) => (
                  <li key={i} className={styles.item}>
                    <span className={styles.itemDot} aria-hidden="true">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionAside}>
              <div className={styles.sectionLabel}>How we approach it</div>
            </div>
            <div className={styles.sectionMain}>
              <p className={styles.methodology}>{service.methodology}</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionAside}>
              <div className={styles.sectionLabel}>Typical engagement types</div>
            </div>
            <div className={styles.sectionMain}>
              <div className={styles.postures}>
                {postures.map((posture) => (
                  <Link
                    key={posture.slug}
                    href={`/approach#${posture.slug}`}
                    className={styles.postureCard}
                  >
                    <div className={styles.postureName}>{posture.name}</div>
                    <div className={styles.postureTagline}>
                      <em>{posture.tagline}</em>
                    </div>
                    <div className={styles.postureMeta}>
                      {posture.duration} · read more →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta {...cta} variant="ink" />
    </>
  );
}
