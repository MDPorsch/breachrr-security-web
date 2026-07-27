import { Eyebrow } from "@/components/ui";
import { LiveIndicator } from "@/components/brand";
import { site, contactPrompts } from "@/content/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "How to reach Breachrr Security. Email replies within 48 hours.",
};

/**
 * Contact page.
 *
 * Two-column layout: contact block (email, location, booking, response
 * window) on the left; "what to include when you write" prompt on the right.
 * No form — a mailto: link plus a text prompt to help the reader write a
 * useful first email.
 */
export default function ContactPage() {
  const subject = encodeURIComponent("Intro conversation");
  const mailto = `mailto:${site.contact.email}?subject=${subject}`;

  return (
    <>
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <Eyebrow prefix="§">Contact</Eyebrow>
          <h1 className={styles.h1}>
            Start the <em>conversation.</em>
          </h1>
          <p className={styles.sub}>
            An intro conversation is 30 minutes. We&apos;ll ask about your
            stage, your compliance target, and what forced the conversation.
            Then we tell you honestly whether we&apos;re the right fit.
          </p>
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* Left: contact block */}
          <div className={styles.contactSide}>
            <div className={styles.status}>
              <LiveIndicator>{site.bookingStatus}</LiveIndicator>
            </div>

            <div className={styles.contactBlock}>
              <div className={styles.contactLabel}>Email</div>
              <a href={mailto} className={styles.contactValue}>
                {site.contact.email}
              </a>
              <p className={styles.contactNote}>
                Replies within {site.responseWindow}. If it&apos;s urgent — an
                active incident, a compliance deadline this week — say so in
                the subject.
              </p>
            </div>

            <div className={styles.contactBlock}>
              <div className={styles.contactLabel}>Where we work</div>
              <p className={styles.contactValue}>{site.location}</p>
              <p className={styles.contactNote}>
                Remote-first. Onsite when it helps.
              </p>
            </div>

            <a href={mailto} className={styles.button}>
              Start the conversation
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>

          {/* Right: what to include */}
          <aside className={styles.promptSide}>
            <div className={styles.promptLabel}>
              What to include, if you can
            </div>
            <h2 className={styles.promptH}>
              A useful first email <em>looks like this.</em>
            </h2>
            <p className={styles.promptIntro}>
              You don&apos;t have to include all of this. But the more of it
              you can share up front, the more useful the intro conversation
              will be.
            </p>
            <ul className={styles.promptList}>
              {contactPrompts.map((prompt, i) => (
                <li key={i} className={styles.promptItem}>
                  <span className={styles.promptDot} aria-hidden="true">
                    ·
                  </span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
            <p className={styles.promptClose}>
              Don&apos;t have answers to some of these yet? Say so.
              That&apos;s often part of what we solve together.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
