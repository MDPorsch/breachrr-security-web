import { PageShell } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { LiveIndicator } from "@/components/brand";
import { site } from "@/content/site";
import styles from "../approach/page.module.css";

export const metadata = {
  title: "Contact",
  description: "How to reach Breachrr Security.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Eyebrow prefix="§">Contact</Eyebrow>
      <h1 className={styles.h}>
        Start the <em>conversation.</em>
      </h1>
      <p className={styles.p}>
        An intro conversation is 30 minutes. We'll ask about your stage,
        your compliance target, and what forced the conversation. Then we
        tell you honestly whether we're the right fit.
      </p>
      <p className={styles.p}>
        Email <a href={`mailto:${site.contact.email}`} className={styles.link}>
          {site.contact.email}
        </a>. Replies within {site.responseWindow}.
      </p>
      <p className={styles.p}>
        <LiveIndicator>{site.bookingStatus}</LiveIndicator>
      </p>
      <p className={styles.phase}>
        <span>Phase 3</span> · Booking form integration coming.
      </p>
    </PageShell>
  );
}
