# Breachrr Security — Website

Next.js 15 App Router website for Breachrr Security, the cybersecurity services
practice under Breachrr Ltd.

Domain target: **breachrrsecurity.com** (not yet purchased at the time of this
commit).

Built on the design system defined in the Breachrr Security Brand Kit v0.1.

---

## Status: **Phase 1 — Foundation**

Four phases planned:

1. **Foundation** *(current)* — Repo, tokens, fonts, brand primitives, dev page.
2. **Layout + Homepage** — Site header/footer, homepage with hero rotator,
   capability cards, buyer state cards, closing CTA.
3. **Interior pages** — Approach, Work, Contact.
4. **Practice Notes** — MDX pipeline, index, individual note pages.

Phase 1 ships:

- Next.js 15 App Router scaffold with TypeScript
- Design tokens (`styles/tokens.css`) mirroring the brand kit's `tokens.css`
- Geist + Geist Mono loaded via `next/font`
- Georgia as the system serif (no font loading, universal)
- Four brand primitive components — Wordmark, Monogram, CorporateMark,
  LiveIndicator — each fully typed with variants/sizes
- `/dev` page renders every brand primitive at every variant × size × surface

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — auto-redirects to `/dev` during phase 1.

## Directory layout

```
app/
  layout.tsx            # Root layout, fonts, metadata
  page.tsx              # Root (redirects to /dev in phase 1)
  globals.css           # Base resets + typography defaults
  dev/                  # Brand primitives verification page
components/
  brand/                # Wordmark, Monogram, CorporateMark, LiveIndicator
  layout/               # (phase 2: SiteHeader, SiteFooter, PageShell)
  sections/             # (phase 2: Hero, CapabilityCard, etc.)
  ui/                   # (phase 2: Eyebrow, SectionDivider, Cta)
content/
  practice-notes/       # (phase 4: MDX files)
  site.ts               # (phase 2: centralised static copy)
public/
  brand/                # (assets from brand kit)
styles/
  tokens.css            # Design tokens as CSS custom properties
lib/
  practice-notes.ts     # (phase 4: MDX filesystem reader)
```

## Stack decisions

- **Next.js 15 App Router.** Standard modern setup.
- **TypeScript strict mode.**
- **CSS Modules + CSS custom properties.** Not Tailwind — the editorial layout
  wants bespoke CSS, not utility classes.
- **`next/font`** for Geist/Geist Mono. No external CDN calls in production.
- **Georgia** as system serif for the wordmark and display type. No font
  loading, universally available.
- **No CMS.** Practice Notes will be MDX files in the repo (phase 4).
- **No analytics** in v0.1.
- **Deploy target:** Vercel.

## Component contracts

Each brand primitive documents its own API in the source:

- `<Wordmark variant size href label />`
- `<Monogram variant container size label />`
- `<CorporateMark case withCopyright year />`
- `<LiveIndicator variant>label</LiveIndicator>`

See individual files under `components/brand/` for full type signatures and
usage notes.

## Phase 1 checkpoint

Visit `/dev` and check:

- Wordmark dot sits at slightly-below half x-height of "Security" (visual
  middle of the lowercase letters).
- Monogram dot sits in the same position relative to the italic "s".
- All variants (paper/ink/moss/monochrome) render with correct colours on
  their canonical surfaces.
- LiveIndicator pulses at 2.4s (moss variant) or is static under reduced-motion.
- Corporate mark reads as small, muted, administrative — not brand.

If any of the above looks wrong, that's fixed before moving to phase 2.

---

*© 2026 breachrr ltd*
