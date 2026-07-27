"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark, LiveIndicator } from "@/components/brand";
import { nav, site } from "@/content/site";
import styles from "./SiteHeader.module.css";

/**
 * SiteHeader — sticky nav bar.
 *
 * Wordmark left, top-level nav centre-right, booking status indicator far right.
 * On mobile the nav collapses into a menu button.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className={styles.wordmarkLink}
        >
          <Wordmark variant="paper" size="nav" />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.status}>
          <LiveIndicator>{site.bookingStatus}</LiveIndicator>
        </div>
      </div>
    </header>
  );
}
