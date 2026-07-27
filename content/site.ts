/**
 * Site copy — single source of truth for static text.
 *
 * Anything that appears in more than one place (nav, footer, hero headlines,
 * capability descriptions) lives here. Anything one-off can also live here
 * for consistency. Edit copy in one file, not fifteen.
 *
 * v0.1
 */

export const site = {
  name: "Breachrr Security",
  domain: "breachrrsecurity.com",
  legalEntity: "breachrr ltd",
  location: "London / Lagos",
  bookingStatus: "Booking Q4 2026",
  contact: {
    email: "mo@breachrrsecurity.com",
    // phone deliberately omitted from public site for v0.1
  },
  responseWindow: "48 hours",
} as const;

/**
 * Top-level navigation. The order is the order.
 */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/practice-notes", label: "Practice Notes" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Homepage hero.
 * Three rotating headlines + one constant subhead.
 */
export const heroHeadlines = [
  {
    plain: "Security programs, built for the stage you're at.",
    parts: {
      lead: "Security programs,",
      accent: "built for the stage you're at.",
    },
  },
  {
    plain: "Security programs, for teams facing security for the first time.",
    parts: {
      lead: "Security programs,",
      accent: "for teams facing security for the first time.",
    },
  },
  {
    plain: "Cybersecurity built around your business.",
    parts: {
      lead: "Cybersecurity",
      accent: "built around your business.",
    },
  },
] as const;

export const heroSubhead =
  "Breachrr Security helps startups and growing businesses identify and reduce cybersecurity risks, and build a security program that fits how they actually work.";

/**
 * The three capabilities. Not a tiered sequence; a shape cut to fit.
 */
export const capabilities = [
  {
    slug: "assess",
    name: "Assess",
    tagline: "Where you are, precisely.",
    summary:
      "Grey-box product assessment across code, cloud, and identity. You leave with a numbered findings register, prioritised, and a plan for closing them.",
    duration: "Typically 2–4 weeks",
  },
  {
    slug: "build",
    name: "Build",
    tagline: "A programme, not a policy binder.",
    summary:
      "Programme build-out anchored to a compliance target — SOC 2, ISO 27001, UK GDPR. Policy stack, control framework, remediation roadmap. Delivered collaboratively, not thrown over the wall.",
    duration: "Typically 12 weeks",
  },
  {
    slug: "advise",
    name: "Advise",
    tagline: "The team you'd have hired if you had time.",
    summary:
      "Fractional security leadership, quarterly reviews, incident-response preparedness. The ongoing partnership after the programme is running.",
    duration: "Monthly retainer",
  },
] as const;

/**
 * How the practice describes what it works on — for the "who we help" section.
 * These are stage-of-security descriptors, not the internal buyer-state labels.
 */
export const buyerStages = [
  {
    label: "No security setup yet",
    description:
      "You know it needs doing. Nobody has started it. Your first enterprise customer is asking for SOC 2 next quarter.",
  },
  {
    label: "Something set up in a hurry",
    description:
      "A scanner subscription. A policy copied from a template. MFA rolled out last quarter. Not nothing — not coherent either.",
  },
  {
    label: "You've outgrown your first attempt",
    description:
      "A real first attempt exists. The company grew past what that setup can cover. You need it rebuilt to scale.",
  },
] as const;

/**
 * The closing CTA content — reused between home and other pages.
 */
export const cta = {
  eyebrow: "Talk to us",
  headline: "Ready when you are.",
  accent: "Booking Q4 2026.",
  body:
    "An intro conversation is 30 minutes. We'll ask about your stage, your compliance target, and what forced the conversation. Then we tell you honestly whether we're the right fit.",
  buttonLabel: "Start the conversation",
  buttonHref: `mailto:${"mo@breachrrsecurity.com"}?subject=Intro%20conversation`,
} as const;

/**
 * The practice — short bio placeholder used on home page.
 */
export const practiceIntro = {
  eyebrow: "The practice",
  headline: "One principal.",
  accent: "A short bench.",
  body:
    "Breachrr Security is a small practice. MO is the principal — London and Lagos. Engagements draw on a short bench of trusted collaborators when the work calls for it. If we work together, you'll know who is doing the work, and you'll hear from them directly.",
} as const;
