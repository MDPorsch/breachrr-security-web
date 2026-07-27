import { Eyebrow } from "@/components/ui";
import { site } from "@/content/site";
import styles from "./LegalPageShell.module.css";

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  effective?: string;
  children: React.ReactNode;
}

/**
 * LegalPageShell — shared layout for Terms of Service, Privacy Policy,
 * and Trust & Disclosure pages.
 *
 * Editorial layout with 320px sidebar + content column, matching the
 * rest of the site. Sidebar shows the § section index; content area
 * shows the actual sections.
 */
export function LegalPageShell({
  title,
  subtitle,
  effective,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <Eyebrow prefix="§">{title.split(" ")[0]}</Eyebrow>
          <h1 className={styles.h1}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {effective ? (
            <p className={styles.effective}>Effective {effective}</p>
          ) : null}
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <aside className={styles.aside}>
            <div className={styles.asideLabel}>Contents</div>
            <p className={styles.asideNote}>
              Questions about anything on this page — {" "}
              <a
                href={`mailto:${site.contact.email}`}
                className={styles.asideLink}
              >
                {site.contact.email}
              </a>
            </p>
          </aside>

          <div className={styles.sections}>{children}</div>
        </div>
      </section>
    </>
  );
}

interface LegalSectionProps {
  num: string;
  title: string;
  children: React.ReactNode;
}

/**
 * LegalSection — a single § section within a legal page.
 */
export function LegalSection({ num, title, children }: LegalSectionProps) {
  return (
    <section
      className={styles.section}
      id={`section-${num}`}
    >
      <div className={styles.sectionHead}>
        <span className={styles.sectionNum}>§{num}</span>
        <h2 className={styles.sectionH}>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}
