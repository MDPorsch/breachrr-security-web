import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Breachrr Security — Cybersecurity services for startups and growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image — 1200×630 PNG generated at build time via Satori.
 *
 * Typography matches the brand kit:
 *   - Wordmark: Gelasio Regular + Gelasio Italic (Georgia metric-compatible
 *     substitute — same as brand-kit PNG exports)
 *   - Eyebrow / URL / booking indicator: Geist Mono
 *   - Moss middle-dot rendered as filled SVG circle at 0.115em diameter,
 *     0.2311em above baseline (per the wordmark spec)
 *
 * Fonts are colocated in app/_fonts (Next.js private folder) so they bundle
 * with the edge function via `new URL(..., import.meta.url)`.
 */
export default async function OpengraphImage() {
  // Load brand fonts at edge runtime
  const [gelasioRegular, gelasioItalic, geistMono] = await Promise.all([
    fetch(new URL("./_fonts/Gelasio-Regular.ttf", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(new URL("./_fonts/Gelasio-Italic.ttf", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(new URL("./_fonts/GeistMono-Regular.woff", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
  ]);

  // Match the site's Wordmark CSS exactly:
  //   font-family serif, letter-spacing -0.025em, align-items baseline
  //   .dot uses U+00B7 middle-dot character (font-native, not a drawn circle)
  //   .dot margin-left 0.04em, translateY(0.01em)
  const wordmarkSize = 112;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#f5f2ec",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Hairline grid background — same as site hero */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1a1613 1px, transparent 1px), linear-gradient(90deg, #1a1613 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.04,
            display: "flex",
          }}
        />

        {/* ── Top: eyebrow ─────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Geist Mono",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8a8078",
          }}
        >
          Cybersecurity services
        </div>

        {/* ── Center: wordmark + tagline ──────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          {/*
            Wordmark — mirrors the site's Wordmark.tsx exactly:
            display: flex + align-items: baseline
            font-family: Gelasio, letter-spacing: -0.025em, line-height: 1
            .roman "Breachrr" in ink
            0.28em word-space
            .italic "Security" in Gelasio italic, moss
            .dot U+00B7 in Gelasio roman with 0.04em left margin and 0.01em translateY
          */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: "Gelasio",
              fontSize: wordmarkSize,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              color: "#1a1613",
            }}
          >
            <span style={{ display: "flex" }}>Breachrr</span>
            {/* Word-space between "Breachrr" and "Security" */}
            <span
              style={{
                display: "flex",
                width: `${wordmarkSize * 0.28}px`,
              }}
            />
            <span
              style={{
                display: "flex",
                fontFamily: "Gelasio Italic",
                fontStyle: "italic",
                color: "#2f7d5b",
              }}
            >
              Security
            </span>
            {/* Middle-dot: actual · character in Gelasio, moss, with the
                same 0.04em left margin and 0.01em translateY the site uses. */}
            <span
              style={{
                display: "flex",
                marginLeft: `${wordmarkSize * 0.04}px`,
                color: "#2f7d5b",
                transform: `translateY(${wordmarkSize * 0.01}px)`,
              }}
            >
              ·
            </span>
          </div>

          {/* Tagline — Gelasio Italic */}
          <div
            style={{
              display: "flex",
              fontFamily: "Gelasio Italic",
              fontStyle: "italic",
              fontSize: 48,
              color: "#4a4340",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Find the gaps. Fix the risks. Stay secure.
          </div>
        </div>

        {/* ── Bottom: URL + booking indicator on a hairline divider ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "1px solid #cfc6b8",
            fontFamily: "Geist Mono",
            fontSize: 20,
            letterSpacing: "0.05em",
            color: "#4a4340",
          }}
        >
          <div style={{ display: "flex" }}>breachrrsecurity.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#2f7d5b",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#2f7d5b",
              }}
            />
            <div style={{ display: "flex" }}>Open for engagements</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gelasio",
          data: gelasioRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Gelasio Italic",
          data: gelasioItalic,
          style: "italic",
          weight: 400,
        },
        {
          name: "Geist Mono",
          data: geistMono,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
