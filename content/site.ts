/**
 * Site copy — single source of truth for static text.
 *
 * Anything that appears in more than one place (nav, footer, hero headlines,
 * capability descriptions, services, FAQ) lives here. Edit copy in one file,
 * not fifteen.
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
  },
  responseWindow: "48 hours",
  slogan: "Find the gaps. Fix the risks. Stay secure.",
} as const;

/**
 * Top-level navigation. Order is intentional.
 * Services sits between Approach and Work — the buyer needs to know what we
 * do (Approach) before drilling into the specific service categories.
 */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
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
 * The three engagement postures. These describe the SHAPE of the work.
 * Service categories (below) describe the DOMAIN the work covers.
 * An engagement is always one posture across one or more service categories.
 */
export const capabilities = [
  {
    slug: "assess",
    name: "Assess",
    tagline: "Where you are, precisely.",
    summary:
      "A grey-box assessment. Scoped to whichever service area needs eyes — application, cloud, infrastructure, or identity. Findings register, prioritised, ready to close.",
    duration: "Typically 2–4 weeks",
    whatHappens:
      "A grey-box assessment across the service areas that matter to the engagement — most commonly Application & API Security, Cloud & Infrastructure, or a Security Assessment covering multiple domains. We start with a scoping conversation — what you're building, what compliance target is ahead, what's already been done. Then we spend two to four weeks combining static analysis, cloud configuration review, and identity/access audit against what we find. No black-box guesswork; we work with your team and your access.",
    delivers: [
      "Numbered findings register — severity, evidence, remediation guidance",
      "Executive summary (2–3 pages) written for a non-technical reader",
      "Technical appendix with reproducible steps for engineering",
      "90-minute walkthrough call with your team, recorded",
      "Optional: help closing the critical and high findings",
    ],
    firstWeek:
      "Day 1–2 · scoping call, access setup, code repository tour. Day 3–5 · automated scanning setup, initial cloud configuration review. Day 6–7 · first findings triage, priority ranking review with your team.",
    investment: "Fixed-fee, quoted after a 30-minute call and a light scoping doc.",
    typicalCategories: ["security-assessments", "application-api-security", "cloud-infrastructure-security"],
  },
  {
    slug: "build",
    name: "Build",
    tagline: "A program, not a policy binder.",
    summary:
      "A twelve-week program build-out. Compliance target (SOC 2, ISO 27001, UK GDPR) as the anchor, controls as the deliverable, a roadmap for what's left at handoff.",
    duration: "Typically 12 weeks",
    whatHappens:
      "A twelve-week program build-out anchored to a compliance target — SOC 2 Type II, ISO 27001, UK GDPR — or to a Security Readiness need driven by customer requirements. We start where the last audit left off, or where nothing exists. The program is designed collaboratively — your team learns as we build, so what we hand over stays running after we leave. Weekly progress reviews throughout; no month-three surprises.",
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
    investment: "Fixed-fee, scoped to the compliance target and current state. Quoted after a scoping conversation.",
    typicalCategories: ["security-readiness", "security-advisory"],
  },
  {
    slug: "advise",
    name: "Advise",
    tagline: "The team you'd have hired if you had time.",
    summary:
      "Ongoing partnership. Fractional security leadership, quarterly reviews, and incident-response preparedness — the specialist bench on retainer.",
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
    investment: "Monthly retainer, priced per engagement scope.",
    typicalCategories: ["security-advisory", "incident-response"],
  },
] as const;

/**
 * The six service categories. Each is a domain of security work.
 * An engagement is a posture (Assess/Build/Advise) applied to one or more of these.
 *
 * Note: Security Operations & Detection is intentionally deferred from v0.1
 * shape. When ready to publish, add a seventh entry here and it will surface
 * automatically across the site.
 */
export const services = [
  {
    slug: "security-assessments",
    name: "Security Assessments",
    tagline: "Understand your security posture and identify the risks that matter most.",
    summary: "The foundational engagement. Where the security conversation starts for most organisations — before the compliance target, before the roadmap. A grounded, evidence-led view of where you actually stand.",
    items: [
      "Cybersecurity risk assessments",
      "Security posture assessments",
      "Vulnerability assessments",
      "Attack surface assessments",
      "Security gap assessments",
    ],
    methodology:
      "We work grey-box — with your access, alongside your team. Each assessment produces a numbered findings register, prioritised by real business impact rather than headline severity. Every finding has reproducible evidence, a specific remediation path, and a paragraph explaining why it matters in your context.",
    postures: ["assess"],
    linkLabel: "See what an assessment covers →",
  },
  {
    slug: "application-api-security",
    name: "Application & API Security",
    tagline: "Identify and address security weaknesses in the applications and APIs your business relies on.",
    summary: "Focused review of the surface most attackers actually touch. Application logic, authentication flows, API contracts, session handling, injection paths — read the way the next attacker will.",
    items: [
      "Web application security",
      "API security assessments",
      "Authentication and authorization reviews",
      "Vulnerability identification",
      "Security configuration reviews",
      "Secure development guidance",
    ],
    methodology:
      "Manual review by a senior engineer, augmented (not replaced) by static analysis and light dynamic testing. We read the code the way an attacker reads production — with attention to business-logic weirdness and auth-boundary drift, not just OWASP-Top-10 checkboxes.",
    postures: ["assess", "advise"],
    linkLabel: "See what an application review covers →",
  },
  {
    slug: "cloud-infrastructure-security",
    name: "Cloud & Infrastructure Security",
    tagline: "Strengthen the security of your cloud environments, infrastructure, identities, and networks.",
    summary: "Where most modern breaches actually happen — misconfigured trust boundaries, over-scoped IAM, forgotten resources with public access. AWS, GCP, Azure, and everything under the console.",
    items: [
      "Cloud security assessments",
      "Infrastructure security reviews",
      "Network security assessments",
      "Identity and access management",
      "Security configuration reviews",
    ],
    methodology:
      "We map trust, spot the drift, and hand back a plan that survives your next audit. Every recommendation includes a Terraform-friendly control expression where one exists, so remediation is a code change and not a runbook item.",
    postures: ["assess", "build"],
    linkLabel: "See what a cloud review covers →",
  },
  {
    slug: "security-advisory",
    name: "Security Advisory",
    tagline: "Get practical cybersecurity expertise aligned with your organisation's goals.",
    summary: "The ongoing brain-share. A named senior person for the questions that don't warrant a project — architecture calls, hiring rubrics, tool selection, incident triage, board reporting.",
    items: [
      "Security program development",
      "Security policies and procedures",
      "Cybersecurity frameworks",
      "Risk management",
      "Security architecture guidance",
      "Security maturity improvement",
    ],
    methodology:
      "Monthly retainer, shared channel, quarterly strategic reviews. We treat advisory as a relationship, not a hotline — the value compounds as we build shared context about your business, your team, and how you actually operate.",
    postures: ["advise", "build"],
    linkLabel: "See what advisory covers →",
  },
  {
    slug: "security-readiness",
    name: "Security Readiness",
    tagline: "Prepare your organisation to meet the security expectations of customers, partners, and stakeholders.",
    summary: "The engagement that gets you audit-ready — or customer-ready — without the compliance-theatre binder. SOC 2, ISO 27001, UK GDPR, or a specific enterprise customer's security questionnaire.",
    items: [
      "Compliance readiness",
      "Security framework alignment",
      "Security control assessments",
      "Customer security requirements",
      "Security documentation",
    ],
    methodology:
      "We focus on the underlying practice, not the checkbox. Your auditor gets what they need; you keep the controls you build. The point isn't a certificate — it's an operating rhythm that produces the certificate as a side effect.",
    postures: ["build", "advise"],
    linkLabel: "See what readiness covers →",
  },
  {
    slug: "incident-response",
    name: "Incident Response & Preparedness",
    tagline: "Be ready to respond when security incidents happen.",
    summary: "The work you do before the incident, and the person you call during it. Retainer clients get a named lead and a four-hour response window; everyone gets a plan that survives contact with reality.",
    items: [
      "Incident response planning",
      "Incident response playbooks",
      "Incident readiness assessments",
      "Post-incident security assessments",
      "Recovery and improvement planning",
    ],
    methodology:
      "Preparedness first: playbooks written for the incident types your business actually faces, tested twice a year with your team. Response second: for retainer clients, a named lead on-call with a four-hour response window. For everyone else, we'll always answer, and refer if we can't take it on quickly enough.",
    postures: ["advise", "build"],
    linkLabel: "See what incident work covers →",
  },
] as const;

/**
 * How the practice describes what it works on — for the "who we help" section.
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
 * Philosophy block — the "how we work" editorial statement on the homepage.
 * Placed between the services listing and the closing CTA.
 * One block, three moving thoughts inside it.
 */
export const philosophy = {
  eyebrow: "How we work",
  headline: "Built around your needs.",
  accent: "Not a package.",
  body: [
    "Every Breachrr Security engagement is tailored to your environment, priorities, and objectives. There is no template we pull off a shelf.",
    "Cybersecurity works best as a partnership. Every engagement runs that way — alongside your founders, engineers, IT, and leadership, not around them.",
    "No unnecessary complexity. No one-size-fits-all solutions. No security theatre. Just practical expertise focused on reducing risk that actually matters to your business.",
  ],
} as const;

/**
 * FAQ block — four questions surfaced on the homepage.
 */
export const faq = [
  {
    question: "How much does an engagement cost?",
    answer:
      "It depends on scope. Fixed-fee, quoted after a 30-minute call and a light scoping doc. We don't publish starting-from numbers because they mislead — the shape of the work matters more than the size.",
  },
  {
    question: "Do you carry insurance and sign NDAs?",
    answer:
      "Yes to both. Professional indemnity in place; mutual NDA signed before scoping starts. Full details in our Trust & disclosure documentation, available on request.",
  },
  {
    question: "How is Breachrr Security different from Breachrr?",
    answer:
      "Same parent (Breachrr Ltd), different arms. Breachrr is the cybersecurity technology product line — credential-monitoring SaaS. Breachrr Security is the services arm — assessments, advisory, incident work. Separate teams, shared standards.",
  },
  {
    question: "Do you take incident response calls out of hours?",
    answer:
      "For retainer clients, yes — with a named lead and a four-hour response window. For everyone else we'll always answer, and refer if we can't take it on quickly enough.",
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
  accent: "A specialist bench.",
  body:
    "Breachrr Security is a specialist cybersecurity consultancy. MO is the principal — London and Lagos. Engagements draw on a bench of trusted senior collaborators when the work calls for it. If we work together, you'll know who is doing the work, and you'll hear from them directly.",
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
    body: "Verixar arrived in the middle of a first enterprise sales cycle with a security questionnaire they couldn't yet answer. Twelve weeks later, the program was in place — policy stack, control framework, evidence collection, and a remediation roadmap for the items outside the initial scope.",
    published: true,
  },
] as const;

/**
 * The "what to include" prompt on the contact page.
 */
export const contactPrompts = [
  "Company name and what you build",
  "Roughly what stage you're at (headcount, funding, customers)",
  "What forced the conversation — compliance, a customer, an incident, something else",
  "Any timeline you're working against",
  "What's already in place, if anything",
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
export type Service = (typeof services)[number];
