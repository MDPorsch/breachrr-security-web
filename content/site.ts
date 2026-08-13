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
  bookingStatus: "Open for engagements",
  contact: {
    email: "info@breachrrsecurity.com",
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
      "A security assessment scoped to whichever service area needs attention: application, cloud, infrastructure, or identity. You leave with a prioritised findings register, ready to close.",
    duration: "Scoped per engagement",
    whatHappens:
      "A security assessment across the service areas that matter to the engagement. Most commonly this is Application & API Security, Cloud & Infrastructure, or a Security Assessment covering multiple domains. We start with a scoping conversation to understand what you're building, what compliance target is ahead, and what's already been done. Then we combine static analysis, cloud configuration review, and identity/access audit against what we find. No black-box guesswork; we work alongside your team, with your access.",
    delivers: [
      "Numbered findings register with severity, evidence, and remediation guidance",
      "Executive summary written for a non-technical reader",
      "Technical appendix with reproducible steps for engineering",
      "Recorded walkthrough call with your team",
      "Optional: help closing the critical and high findings",
    ],
    firstWeek:
      "Start: scoping call, access setup, code repository tour. Then: automated scanning setup, initial cloud configuration review. Once we have findings: triage and priority ranking with your team.",
    investment: "Fixed-fee, quoted after an initial call and a light scoping doc.",
    typicalCategories: ["security-assessments", "application-api-security", "cloud-infrastructure-security"],
  },
  {
    slug: "build",
    name: "Build",
    tagline: "A program, not a policy binder.",
    summary:
      "A structured security program build-out with a compliance target (SOC 2, ISO 27001, UK GDPR) as the anchor. Controls are the deliverable, plus a roadmap for what's outstanding at handoff.",
    duration: "Scoped per engagement",
    whatHappens:
      "A structured security program build-out anchored to a compliance target: SOC 2 Type II, ISO 27001, UK GDPR, or a Security Readiness need driven by customer requirements. We start where the last audit left off, or where nothing exists. The program is designed collaboratively so your team learns as we build; what we hand over stays running after we leave. Progress reviews throughout, no surprises.",
    delivers: [
      "Complete policy stack adapted to your operating context",
      "Control framework mapped to your target (SOC 2 CC, ISO Annex A, or equivalent)",
      "Evidence collection process and reusable templates",
      "Remediation roadmap for what's outstanding at handoff",
      "Team enablement, including documentation and light-touch training",
      "Regular progress reviews, recorded and archived",
    ],
    firstWeek:
      "Start: kickoff and current-state audit. Then: policy stack draft, priority-order the controls. Once controls are prioritised: first assessments, remediation prioritisation, roadmap first pass.",
    investment: "Fixed-fee, scoped to the compliance target and current state. Quoted after a scoping conversation.",
    typicalCategories: ["security-readiness", "security-advisory"],
  },
  {
    slug: "advise",
    name: "Advise",
    tagline: "The team you'd have hired if you had time.",
    summary:
      "Ongoing partnership with quarterly reviews and incident-response preparedness. Expert security counsel when you need it.",
    duration: "Ongoing retainer",
    whatHappens:
      "An ongoing partnership after or alongside the program. The practice serves as your security team lead, with regular strategic reviews that keep the program healthy as the company grows. Incident-response preparedness means you don't figure it out under pressure.",
    delivers: [
      "Regular office hours",
      "Regular program health reviews and roadmap adjustments",
      "Incident-response playbook plus regular readiness drills",
      "Compliance renewal support for SOC 2 Type II re-audit and ISO surveillance",
      "Board-level security reporting when the room needs it",
      "Escalation call for the first hour of any active incident",
    ],
    firstWeek:
      "Start: onboarding, systems familiarisation, current-state review. Then: first strategic review, priority setting. Once priorities are set: regular leadership check-ins, cadence established.",
    investment: "Ongoing retainer, priced per engagement scope.",
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
    summary: "The foundational engagement. This is where the security conversation starts for most organisations, before the compliance target and before the roadmap. A grounded, evidence-led view of where you stand.",
    items: [
      "Cybersecurity risk assessments",
      "Security posture assessments",
      "Vulnerability assessments",
      "Attack surface assessments",
      "Security gap assessments",
    ],
    methodology:
      "We work grey-box, with your access and alongside your team. Each assessment produces a numbered findings register, prioritised by real business impact rather than headline severity. Every finding comes with reproducible evidence, a specific remediation path, and a paragraph explaining why it matters in your context.",
    postures: ["assess"],
    linkLabel: "See what an assessment covers →",
  },
  {
    slug: "application-api-security",
    name: "Application & API Security",
    tagline: "Identify and address security weaknesses in the applications and APIs your business relies on.",
    summary: "Focused review of the surface most attackers touch: application logic, authentication flows, API contracts, session handling, and injection paths. Read the way the next attacker will read them.",
    items: [
      "Web application security",
      "API security assessments",
      "Authentication and authorization reviews",
      "Vulnerability identification",
      "Security configuration reviews",
      "Secure development guidance",
    ],
    methodology:
      "Manual review by a senior engineer, augmented (not replaced) by static analysis and light dynamic testing. We read the code the way an attacker reads production, with attention to business-logic weirdness and auth-boundary drift, rather than only ticking OWASP Top 10 boxes.",
    postures: ["assess", "advise"],
    linkLabel: "See what an application review covers →",
  },
  {
    slug: "cloud-infrastructure-security",
    name: "Cloud & Infrastructure Security",
    tagline: "Strengthen the security of your cloud environments, infrastructure, identities, and networks.",
    summary: "Where most modern breaches happen: misconfigured trust boundaries, over-scoped IAM, forgotten resources with public access. AWS, GCP, Azure, and everything under the console.",
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
    summary: "The ongoing brain-share. A named senior person for the questions that don't warrant a project: architecture calls, hiring rubrics, tool selection, incident triage, and board reporting.",
    items: [
      "Security program development",
      "Security policies and procedures",
      "Cybersecurity frameworks",
      "Risk management",
      "Security architecture guidance",
      "Security maturity improvement",
    ],
    methodology:
      "Monthly retainer, shared channel, quarterly strategic reviews. We treat advisory as a relationship rather than a hotline. The value compounds as we build shared context about your business, your team, and how you operate.",
    postures: ["advise", "build"],
    linkLabel: "See what advisory covers →",
  },
  {
    slug: "security-readiness",
    name: "Security Readiness",
    tagline: "Prepare your organisation to meet the security expectations of customers, partners, and stakeholders.",
    summary: "The engagement that gets you audit-ready, or customer-ready, without the compliance-theatre binder. SOC 2, ISO 27001, UK GDPR, or a specific enterprise customer's security questionnaire.",
    items: [
      "Compliance readiness",
      "Security framework alignment",
      "Security control assessments",
      "Customer security requirements",
      "Security documentation",
    ],
    methodology:
      "We focus on the underlying practice, not the checkbox. Your auditor gets what they need; you keep the controls you build. The point isn't a certificate. It's an operating rhythm that produces the certificate as a side effect.",
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
      "Preparedness first: playbooks written for the incident types your business faces, tested regularly with your team. Response second: for retainer clients, a named lead on-call with a four-hour response window. For everyone else, we'll always answer, and refer if we can't take it on quickly enough.",
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
      "A scanner subscription. A policy copied from a template. MFA rolled out last quarter. It's not nothing, but it's not coherent either.",
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
    "Cybersecurity works best as a partnership. Every engagement runs that way, alongside your founders, engineers, IT, and leadership rather than around them.",
    "No unnecessary complexity. No one-size-fits-all solutions. No security theatre. Just practical expertise focused on reducing the risk that matters to your business.",
  ],
} as const;

/**
 * FAQ block — four questions surfaced on the homepage.
 */
export const faq = [
  {
    question: "How much does an engagement cost?",
    answer:
      "It depends on scope. Fixed-fee, quoted after an initial call and a light scoping doc. We don't publish starting-from numbers because they mislead. The shape of the work matters more than the size.",
  },
  {
    question: "Do you carry insurance and sign NDAs?",
    answer:
      "Yes to both. Professional indemnity in place; mutual NDA signed before scoping starts. Full details in our Trust & disclosure documentation, available on request.",
  },
  {
    question: "How is Breachrr Security different from Breachrr?",
    answer:
      "Same parent (Breachrr Ltd), different arms. Breachrr is the cybersecurity technology product line, a credential-monitoring SaaS. Breachrr Security is the services arm, covering assessments, advisory, and incident work. Separate teams, shared standards.",
  },
  {
    question: "Do you take incident response calls out of hours?",
    answer:
      "For retainer clients, yes, with a named lead and a four-hour response window. For everyone else we'll always answer, and refer if we can't take it on quickly enough.",
  },
] as const;

/**
 * The closing CTA content — reused between home and other pages.
 */
export const cta = {
  eyebrow: "Talk to us",
  headline: "Ready when you are.",
  accent: "Open for engagements.",
  body:
    "An intro conversation to talk through your situation. We'll ask about your stage, your compliance target, and what forced the conversation. Then we tell you honestly whether we're the right fit.",
  buttonLabel: "Start the conversation",
  buttonHref: `mailto:info@breachrrsecurity.com?subject=Intro%20conversation`,
} as const;

/**
 * The practice — short bio placeholder used on home page.
 */
export const practiceIntro = {
  eyebrow: "The practice",
  headline: "Specialist expertise.",
  accent: "Direct engagement.",
  body:
    "Breachrr Security is a specialist cybersecurity consultancy. Every engagement is led by senior operators, not intermediaries. If we work together, you'll know exactly who is doing the work, and you'll hear from them directly.",
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
    capability: "assess",
    year: "2026",
    duration: "",
    summary:
      "A comprehensive multi-domain security assessment covering application & API security, cloud & infrastructure security, security advisory, security readiness, and incident response & preparedness.",
    metrics: [
      { value: "42 / 42", label: "controls closed" },
      { value: "5 domains", label: "assessed" },
      { value: "SOC 2 T-II", label: "ready for audit" },
    ],
    body: "A five-domain security assessment for Verixar spanning Application & API Security, Cloud & Infrastructure Security, Security Advisory, Security Readiness, and Incident Response & Preparedness. Full case study in preparation.",
    published: true,
  },
] as const;

/**
 * The "what to include" prompt on the contact page.
 */
export const contactPrompts = [
  "Company name and what you build",
  "Roughly what stage you're at (headcount, funding, customers)",
  "What forced the conversation: compliance, a customer, an incident, something else",
  "Any timeline you're working against",
  "What's already in place, if anything",
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
export type Service = (typeof services)[number];
