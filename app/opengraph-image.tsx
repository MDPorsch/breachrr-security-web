import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Breachrr Security — Cybersecurity services for startups and growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image — 1200x630 PNG generated at build time via Satori.
 *
 * Editorial layout matching the brand kit: paper canvas, hairline grid,
 * wordmark treatment with moss middle-dot, tagline in serif italic, slogan
 * in monospace.
 */
export default async function OpengraphImage() {
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
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Hairline grid background */}
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

        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8a8078",
          }}
        >
          Cybersecurity services
        </div>

        {/* Center: wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#1a1613",
            }}
          >
            <span style={{ fontStyle: "normal" }}>Breachrr</span>
            <span
              style={{
                fontStyle: "italic",
                color: "#2f7d5b",
                marginLeft: "20px",
              }}
            >
              Security
            </span>
            <span
              style={{
                color: "#2f7d5b",
                marginLeft: "12px",
                lineHeight: 0.5,
              }}
            >
              ·
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontStyle: "italic",
              color: "#4a4340",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Find the gaps. Fix the risks. Stay secure.
          </div>
        </div>

        {/* Bottom: URL and slogan */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid #cfc6b8",
            fontFamily: "monospace",
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
            <span
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#2f7d5b",
              }}
            />
            Open for engagements
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
