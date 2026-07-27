import { PageShell } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "../approach/page.module.css";

export const metadata = {
  title: "Practice Notes",
  description:
    "Field notes and considered writing from the Breachrr Security practice.",
};

export default function PracticeNotesIndex() {
  return (
    <PageShell>
      <Eyebrow prefix="§">Practice Notes</Eyebrow>
      <h1 className={styles.h}>
        Notes from the <em>desk.</em>
      </h1>
      <p className={styles.p}>
        Practice Notes are the running body of writing from Breachrr Security —
        engagement reflections, field observations, thinking-out-loud about
        the work. Not a corporate blog. Not a marketing feed.
      </p>
      <p className={styles.p}>
        The first notes are being written now. When they publish, they'll
        appear here — one per month or so, when there's something worth saying.
      </p>
      <p className={styles.phase}>
        <span>Phase 4</span> · MDX pipeline &amp; first notes coming.
      </p>
    </PageShell>
  );
}
