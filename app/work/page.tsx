import { PageShell } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "../approach/page.module.css";

export const metadata = {
  title: "Work",
  description: "Selected engagements from Breachrr Security.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <Eyebrow prefix="§">Work</Eyebrow>
      <h1 className={styles.h}>
        Selected <em>engagements.</em>
      </h1>
      <p className={styles.p}>
        This page shows the work as it closes. Rather than fill it with
        stock imagery and generic client logos, we're keeping it honest —
        it'll populate as engagements complete and clients approve the
        write-up.
      </p>
      <p className={styles.p}>
        For a current picture of what we're working on, email{" "}
        <a href="mailto:mo@breachrrsecurity.com" className={styles.link}>
          mo@breachrrsecurity.com
        </a>{" "}
        directly.
      </p>
      <p className={styles.phase}>
        <span>Phase 3</span> · Case studies added as engagements close.
      </p>
    </PageShell>
  );
}
