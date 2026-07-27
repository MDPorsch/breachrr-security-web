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
    whatHappens:
      "A grey-box product assessment across code, cloud, and identity. We start with a scoping conversation — what you're building, what compliance target is ahead, what's already been done. Then we spend two to four weeks combining static analysis, cloud configuration review, and identity/access audit against what we find. No black-box guesswork; we work with your team and your access.",
    delivers: [
      "Numbered findings register — severity, evidence, remediation guidance",
      "Executive summary (2–3 pages) written for a non-technical reader",
      "Technical appendix with reproducible steps for engineering",
      "90-minute walkthrough call with your team, recorded",
      "Optional: help closing the critical and high findings",
    ],
    firstWeek:
      "Day 1–2 · scoping call, access setup, code repository tour. Day 3–5 · automated scanning setup, initial cloud configuration review. Day 6–7 · first findings triage, priority ranking review with your team.",
    investment: "From £12,500. Scoped to stack complexity.",
  },
  {
    slug: "build",
    name: "Build",
    tagline: "A program, not a policy binder.",
    summary:
      "Program build-out anchored to a compliance target — SOC 2, ISO 27001, UK GDPR. Policy stack, control framework, remediation roadmap. Delivered collaboratively, not thrown over the wall.",
    duration: "Typically 12 weeks",
    whatHappens:
      "A twelve-week program build-out anchored to a compliance target — SOC 2 Type II, ISO 27001, UK GDPR. We start where the last audit left off, or where nothing exists. The program is designed collaboratively — your team learns as we build, so what we hand over stays running after we leave. Weekly progress reviews throughout; no month-three surprises.",
    delivers: [
      "Complete policy stack — 10 to 15 documents, adapted to your operating context",
      "Control framework mapped to your target — SOC 2 CC, ISO Annex A, or equivalent",
      "Evidence collection process and reusable templates",
      "60–90 day remediation roadmap for what's still outstanding at handoff",
      "Team enablement — documentation and light-touch training",
      "Weekly progress reviews, recorded and archived",
    ],
    firstWeek:
      "Day 1 · kickoff and current-state audit. Day 2–3 · policy stack draft, priority-order the controls. Day 4–5 · first control assessments, remediation prioritisation, roadmap first pass.",
    investment: "From £48,000 for the full 12-week program.",
  },
  {
    slug: "advise",
    name: "Advise",
    tagline: "The team you'd have hired if you had time.",
    summary:
      "Fractional security leadership, quarterly reviews, incident-response preparedness. The ongoing partnership after the program is running.",
    duration: "Monthly retainer",
    whatHappens:
      "Ongoing partnership after — or alongside — the program. Fractional security leadership means the practice is your security team lead for as many hours per month as you need. Quarterly reviews keep the program healthy as the company grows. Incident-response preparedness means you don't figure it out under pressure.",
    delivers: [
      "Monthly office hours — typically 8–16 hours across the month",
      "Quarterly program health reviews and roadmap adjustments",
      "Incident-response playbook + biannual readiness drills",
      "Compliance renewal support — SOC 2 Type II re-audit, ISO surveillance",
      "Board-level security reporting when the room needs it",
      "Escalation call — the first hour of any active incident",
    ],
    firstWeek:
      "Week 1 · onboarding, systems familiarisation, current-state review. Week 2–3 · first strategic review, priority setting. Week 4 · monthly leadership check-in, cadence established.",
    investment: "From £3,200 / month.",
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

/**
 * Featured engagements — surfaced on the Work page.
 * For v0.1 this is the Verixar programme build-out. As engagements
 * close and clients approve write-ups, add them here.
 */
export const engagements = [
  {
    slug: "verixar",
    client: "Verixar",
    capability: "build",
    year: "2026",
    duration: "12 weeks",
    summary:
      "Program build-out anchored to SOC 2 Type II readiness for a growing SaaS company facing their first enterprise procurement cycle.",
    metrics: [
      { value: "42 / 42", label: "controls closed" },
      { value: "12", label: "weeks, on schedule" },
      { value: "SOC 2 T-II", label: "ready for audit" },
    ],
    body: "Verixar arrived in the middle of a first enterprise sales cycle with a security questionnaire they couldn't yet answer. Twelve weeks later, the program was in place — policy stack, control framework, evidence collection, and a remediation roadmap for the items outside the initial scope. Full write-up available as a Practice Note.",
    published: true,
  },
] as const;

/**
 * The "what to include" prompt on the contact page.
 * Not a form — a text prompt that helps the reader write a useful first email.
 */
export const contactPrompts = [
  "Company name and what you build",
  "Roughly what stage you're at (headcount, funding, customers)",
  "What forced the conversation — compliance, a customer, an incident, something else",
  "Any timeline you're working against",
  "What's already in place, if anything",
] as const;
