import Link from "next/link";
import { Wordmark, CorporateMark } from "@/components/brand";
import { nav, site } from "@/content/site";
import styles from "./SiteFooter.module.css";

/**
 * SiteFooter — full footer block.
 *
 * Three columns: wordmark + tagline (left), nav echo (centre),
 * contact + legal + corporate mark + copyright (right).
 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Wordmark variant="paper" size="footer" />
          <p className={styles.tagline}>
            Cybersecurity services for startups and growing businesses.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <div className={styles.navLabel}>Explore</div>
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.meta}>
          <div className={styles.metaBlock}>
            <div className={styles.metaLabel}>Contact</div>
            <a href={`mailto:${site.contact.email}`} className={styles.contactLink}>
              {site.contact.email}
            </a>
            <p className={styles.metaNote}>
              Replies within {site.responseWindow}.
            </p>
          </div>

          <div className={styles.metaBlock}>
            <div className={styles.metaLabel}>Legal</div>
            <ul className={styles.legalList}>
              <li>
                <Link href="/terms" className={styles.legalLink}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.legalLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/trust" className={styles.legalLink}>
                  Trust &amp; Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.baseline}>
        <div className={styles.baselineInner}>
          <CorporateMark withCopyright />
          <span className={styles.baselineNote}>
            All rights reserved. Registered in England &amp; Wales.
          </span>
        </div>
      </div>
    </footer>
  );
}
