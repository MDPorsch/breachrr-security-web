import { PageShell } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "./page.module.css";

export const metadata = {
  title: "Approach",
  description:
    "How Breachrr Security works — capabilities, methodology, who we help and who we're not right for.",
};

/**
 * Approach page — deferred to phase 3.
 * Placeholder shows a phase-labelled note so the nav resolves and the reader
 * isn't dropped into a 404.
 */
export default function ApproachPage() {
  return (
    <PageShell>
      <Eyebrow prefix="§">Approach</Eyebrow>
      <h1 className={styles.h}>
        The <em>substantial</em> page.
      </h1>
      <p className={styles.p}>
        This is where the Approach content lives — what each capability
        actually looks like in practice, how we work, who we help in depth,
        who we're not right for.
      </p>
      <p className={styles.p}>
        Content is being written now. Check back shortly, or email{" "}
        <a href="mailto:mo@breachrrsecurity.com" className={styles.link}>
          mo@breachrrsecurity.com
        </a>{" "}
        directly.
      </p>
      <p className={styles.phase}>
        <span>Phase 3</span> · Full Approach page under construction.
      </p>
    </PageShell>
  );
}
