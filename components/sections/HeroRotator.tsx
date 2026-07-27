"use client";

import { useEffect, useState } from "react";
import { heroHeadlines } from "@/content/site";
import styles from "./HeroRotator.module.css";

const CYCLE_MS = 5500;

/**
 * HeroRotator — cycles through the three primary headlines.
 *
 * Fade transitions (no slide), 5.5s per line, pauses on hover.
 * Respects prefers-reduced-motion: shows only the first line, statically.
 *
 * All three lines exist in the DOM at once. Only opacity changes, so
 * screen readers announce all three; hidden ones are aria-hidden.
 */
export function HeroRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % heroHeadlines.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <div
      className={styles.rotator}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={-1}
    >
      {heroHeadlines.map((headline, i) => {
        const isActive = reducedMotion ? i === 0 : i === active;
        return (
          <h1
            key={i}
            className={`${styles.line} ${isActive ? styles.active : ""}`}
            aria-hidden={!isActive}
          >
            {headline.parts.lead}{" "}
            <em className={styles.accent}>{headline.parts.accent}</em>
          </h1>
        );
      })}
    </div>
  );
}
