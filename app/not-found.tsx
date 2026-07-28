import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

/**
 * 404 page. Rendered inside the same shell as every other page (SiteHeader +
 * SiteFooter come from app/layout.tsx), so it feels part of the site rather
 * than a raw error.
 */
export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow prefix="404">Not found</Eyebrow>
        <h1 className={styles.h1}>
          The page you&apos;re looking for<br />
          <em>doesn&apos;t exist.</em>
        </h1>
        <p className={styles.body}>
          It may have moved, been renamed, or never existed at all. Here&apos;s
          where you probably wanted to go.
        </p>

        <nav className={styles.nav} aria-label="Recovery links">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                <span className={styles.navLabel}>Home</span>
                <span className={styles.navDesc}>
                  Start at the beginning.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/approach" className={styles.navLink}>
                <span className={styles.navLabel}>Approach</span>
                <span className={styles.navDesc}>
                  How we work — three engagement types.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                <span className={styles.navLabel}>Services</span>
                <span className={styles.navDesc}>
                  Six areas we cover across the security stack.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                <span className={styles.navLabel}>Contact</span>
                <span className={styles.navDesc}>
                  Start the conversation.
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
