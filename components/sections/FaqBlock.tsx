"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui";
import { faq } from "@/content/site";
import styles from "./FaqBlock.module.css";

/**
 * FaqBlock — homepage FAQ.
 *
 * Four questions. Accordion behaviour — one open at a time by default,
 * closing on second click. Keyboard-accessible (native details/summary
 * pattern wrapped for style control).
 */
export function FaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow prefix="06">Common questions</Eyebrow>
          <h2 className={styles.h}>
            Ahead of the <em>first email.</em>
          </h2>
          <p className={styles.p}>
            The questions we hear most often, answered before you send them.
          </p>
        </aside>

        <div className={styles.list}>
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span
                    className={styles.questionToggle}
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={styles.answer}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
