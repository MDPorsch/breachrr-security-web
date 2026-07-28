import {
  Wordmark,
  Monogram,
  CorporateMark,
  LiveIndicator,
} from "@/components/brand";
import styles from "./page.module.css";

export const metadata = {
  title: "Dev — Brand primitives",
  description: "Internal brand-primitives verification page.",
  robots: { index: false, follow: false, nocache: true },
};

/**
 * /dev — Brand primitives verification page.
 *
 * Not part of the public site. Renders every brand primitive at every
 * variant × size × surface so we can eyeball dot alignment, weight,
 * spacing, and contrast in one scroll.
 *
 * Phase 1 checkpoint: if everything on this page looks right, the
 * foundation is solid.
 */
export default function DevPage() {
  return (
    <div className={styles.main}>
      {/* ── Page head ─────────────────────────────────────── */}
      <header className={styles.pageHead}>
        <div className={styles.pageHeadInner}>
          <p className={styles.eyebrow}>§ Brand primitives · v0.1 · dev</p>
          <h1 className={styles.h1}>
            Everything the site is <em>built from.</em>
          </h1>
          <p className={styles.sub}>
            Not the public site. Every brand primitive rendered at every
            variant and size, on every canonical surface. Phase 1 checkpoint.
            If any dot floats too high, any colour reads wrong, or any size
            feels off — that gets fixed here before anything else is built.
          </p>
        </div>
      </header>

      {/* ── Wordmark ──────────────────────────────────────── */}
      <Section
        num="01"
        title={
          <>
            Wordmark — <em>four variants, four sizes.</em>
          </>
        }
        note="Georgia roman + Georgia italic moss + moss middle-dot at slightly-below half x-height. Every surface variant on the surface it's designed for."
      >
        <SurfaceRow>
          <SurfacePanel surface="paper" label="on paper">
            <Wordmark variant="paper" size="hero" />
          </SurfacePanel>
          <SurfacePanel surface="ink" label="on ink">
            <Wordmark variant="ink" size="hero" />
          </SurfacePanel>
          <SurfacePanel surface="moss" label="on moss">
            <Wordmark variant="moss" size="hero" />
          </SurfacePanel>
        </SurfaceRow>

        <div className={styles.subHead}>Sizes — variant: paper</div>
        <div className={styles.sizesRow}>
          <div className={styles.sizeCell}>
            <Wordmark variant="paper" size="display" />
            <div className={styles.sizeLabel}>display · hero+</div>
          </div>
          <div className={styles.sizeCell}>
            <Wordmark variant="paper" size="hero" />
            <div className={styles.sizeLabel}>hero · landing</div>
          </div>
          <div className={styles.sizeCell}>
            <Wordmark variant="paper" size="nav" />
            <div className={styles.sizeLabel}>nav · 18px</div>
          </div>
          <div className={styles.sizeCell}>
            <Wordmark variant="paper" size="footer" />
            <div className={styles.sizeLabel}>footer · 18px</div>
          </div>
        </div>

        <div className={styles.subHead}>Monochrome — for one-colour print</div>
        <SurfacePanel surface="paper" label="monochrome on paper">
          <div style={{ color: "var(--ink)" }}>
            <Wordmark variant="monochrome" size="hero" />
          </div>
        </SurfacePanel>
      </Section>

      {/* ── Monogram ──────────────────────────────────────── */}
      <Section
        num="02"
        title={
          <>
            Monogram — <em>primary + container.</em>
          </>
        }
        note="Italic lowercase 's' with moss middle-dot. Primary (transparent) for controlled backgrounds; container (rounded) for favicons, avatars, app icons."
      >
        <div className={styles.subHead}>Primary — transparent</div>
        <SurfaceRow>
          <SurfacePanel surface="paper" label="paper variant">
            <Monogram variant="paper" size="lg" container="none" />
          </SurfacePanel>
          <SurfacePanel surface="ink" label="ink variant">
            <Monogram variant="ink" size="lg" container="none" />
          </SurfacePanel>
          <SurfacePanel surface="moss" label="moss variant">
            <Monogram variant="moss" size="lg" container="none" />
          </SurfacePanel>
        </SurfaceRow>

        <div className={styles.subHead}>Container — rounded</div>
        <SurfaceRow>
          <SurfacePanel surface="paper" label="ink container">
            <Monogram variant="ink" size="lg" container="rounded" />
          </SurfacePanel>
          <SurfacePanel surface="paper" label="moss container">
            <Monogram variant="moss" size="lg" container="rounded" />
          </SurfacePanel>
          <SurfacePanel surface="ink" label="paper container">
            <Monogram variant="paper" size="lg" container="rounded" />
          </SurfacePanel>
        </SurfaceRow>

        <div className={styles.subHead}>
          Actual sizes — ink container (favicon &amp; avatar scales)
        </div>
        <div className={styles.actualSizes}>
          <div className={styles.actualCell}>
            <Monogram variant="ink" size="xl" container="rounded" />
            <div className={styles.sizeLabel}>xl · 128px</div>
          </div>
          <div className={styles.actualCell}>
            <Monogram variant="ink" size="lg" container="rounded" />
            <div className={styles.sizeLabel}>lg · 88px</div>
          </div>
          <div className={styles.actualCell}>
            <Monogram variant="ink" size="md" container="rounded" />
            <div className={styles.sizeLabel}>md · 44px</div>
          </div>
          <div className={styles.actualCell}>
            <Monogram variant="ink" size="sm" container="rounded" />
            <div className={styles.sizeLabel}>sm · 24px</div>
          </div>
        </div>
      </Section>

      {/* ── Corporate mark ────────────────────────────────── */}
      <Section
        num="03"
        title={
          <>
            Corporate mark — <em>administrative signature.</em>
          </>
        }
        note="'breachrr ltd' in Geist Mono lowercase at 11px, 0.05em tracking. The legal-entity mark, not the brand. Initial-cap version reserved for formal documents."
      >
        <div className={styles.markGrid}>
          <div className={styles.markCell}>
            <CorporateMark />
            <div className={styles.sizeLabel}>lowercase · default</div>
          </div>
          <div className={styles.markCell}>
            <CorporateMark case="initial-caps" />
            <div className={styles.sizeLabel}>initial-caps · legal docs</div>
          </div>
          <div className={styles.markCell}>
            <CorporateMark withCopyright />
            <div className={styles.sizeLabel}>with copyright · footer</div>
          </div>
        </div>
      </Section>

      {/* ── Live indicator ────────────────────────────────── */}
      <Section
        num="04"
        title={
          <>
            Live indicator — <em>the one motion.</em>
          </>
        }
        note="Moss dot at 8px, 4px halo, pulsing at 2.4s ease-in-out infinite. The only always-on motion in the system. Used sparingly — never more than two on a page."
      >
        <div className={styles.indicatorGrid}>
          <SurfacePanel surface="paper" label="on paper">
            <LiveIndicator>on the desk</LiveIndicator>
          </SurfacePanel>
          <SurfacePanel surface="ink" label="on ink">
            <LiveIndicator variant="phosphor">on the desk</LiveIndicator>
          </SurfacePanel>
          <SurfacePanel surface="paper" label="booking status">
            <LiveIndicator>booking Q4 2026</LiveIndicator>
          </SurfacePanel>
        </div>
      </Section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerVersion}>
            Phase 2 · Brand primitives verification · v0.1
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ── Local composition helpers (used only on this dev page) ── */

function Section({
  num,
  title,
  note,
  children,
}: {
  num: string;
  title: React.ReactNode;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <aside className={styles.sectionAside}>
          <div className={styles.sectionNum}>§ {num}</div>
          <h2 className={styles.sectionH}>{title}</h2>
          <p className={styles.sectionNote}>{note}</p>
        </aside>
        <div className={styles.sectionBody}>{children}</div>
      </div>
    </section>
  );
}

function SurfaceRow({ children }: { children: React.ReactNode }) {
  return <div className={styles.surfaceRow}>{children}</div>;
}

function SurfacePanel({
  surface,
  label,
  children,
}: {
  surface: "paper" | "ink" | "moss";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.surfacePanel} ${styles[`surface-${surface}`]}`}>
      <div className={styles.surfaceLabel}>{label}</div>
      <div className={styles.surfaceContent}>{children}</div>
    </div>
  );
}
