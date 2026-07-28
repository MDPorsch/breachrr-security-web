import { Eyebrow, Cta } from "@/components/ui";
import { EngagementCard } from "@/components/sections";
import { engagements, cta } from "@/content/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Work",
  description:
    "Selected engagements from Breachrr Security. Comprehensive security assessments, program build-outs, and ongoing advisory work with growing SaaS companies. Case studies added as engagements close.",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "Work · Breachrr Security",
    description:
      "Selected engagements. As they close, they show up here.",
  },
};

/**
 * Work page.
 *
 * Two-part structure:
 *   1. How we work — three-column note on engagement approach
 *   2. Featured engagements — Verixar for v0.1; more added as they close
 */
export default function WorkPage() {
  return (
    <>
      {/* Page head */}
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <Eyebrow prefix="§">Work</Eyebrow>
          <h1 className={styles.h1}>
            Selected engagements.<br />
            <em>As they close.</em>
          </h1>
          <p className={styles.sub}>
            Every engagement starts with a scoping conversation and ends with
            a closing review. In between, weekly check-ins and full-team
            visibility — we don&apos;t work in silos, and we don&apos;t throw
            documents over the wall.
          </p>
        </div>
      </header>

      {/* How we work — three columns */}
      <section className={styles.howWeWork}>
        <div className={styles.howWeWorkInner}>
          <div className={styles.wwCol}>
            <div className={styles.wwLabel}>How we start</div>
            <p className={styles.wwText}>
              A 30-minute intro call. We ask about the moment that forced the
              conversation, your compliance target, and what&apos;s already in
              place. If we&apos;re the right fit, we scope. If we&apos;re not,
              we say so — and pass a recommendation if we know one.
            </p>
          </div>
          <div className={styles.wwCol}>
            <div className={styles.wwLabel}>How we work</div>
            <p className={styles.wwText}>
              Weekly progress reviews recorded and archived. Findings and
              deliverables tracked in a shared register you keep after the
              engagement. Your team learns as we work — nothing we hand over
              needs an external translator.
            </p>
          </div>
          <div className={styles.wwCol}>
            <div className={styles.wwLabel}>How we close</div>
            <p className={styles.wwText}>
              A closing review — what was delivered, what remains, and what
              handoff looks like. If ongoing advisory makes sense, we
              propose it. If not, we leave clean and check back in three
              months.
            </p>
          </div>
        </div>
      </section>

      {/* Featured engagements */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <Eyebrow prefix="Featured" tone="moss">
            Engagements
          </Eyebrow>
          <h2 className={styles.featuredH}>
            What a program build-out <em>looks like.</em>
          </h2>
          <div className={styles.engagementList}>
            {engagements.map((eng) => (
              <EngagementCard key={eng.slug} {...eng} />
            ))}
          </div>

          <p className={styles.moreNote}>
            More engagements will appear here as they close and clients
            approve the write-ups. For a current picture of what
            we&apos;re working on, email{" "}
            <a href="mailto:mo@breachrrsecurity.com" className={styles.link}>
              mo@breachrrsecurity.com
            </a>
            .
          </p>
        </div>
      </section>

      <Cta {...cta} variant="ink" />
    </>
  );
}
