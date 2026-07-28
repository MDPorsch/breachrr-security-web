import { LegalPageShell, LegalSection } from "@/components/layout";
import { Cta } from "@/components/ui";
import { cta, site } from "@/content/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Breachrr Security handles personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
  openGraph: {
    url: "/privacy",
    title: "Privacy Policy · Breachrr Security",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalPageShell
        title="Privacy Policy"
        subtitle="How Breachrr Security handles personal data."
        effective="27 July 2026"
      >
        <LegalSection num="01" title="What we collect">
          <p>
            When you contact us, we collect your name, email address, company,
            and any information you share about your organisation.
          </p>
          <p>
            When you visit this website, we collect standard server logs — IP
            address, browser, pages viewed. We do not use tracking cookies or
            third-party analytics that identify individual visitors.
          </p>
        </LegalSection>

        <LegalSection num="02" title="How we use it">
          <p>
            To respond to your enquiry, to scope and deliver engagements you
            contract us for, and to maintain records required by law
            (accounting, tax, and regulatory obligations).
          </p>
        </LegalSection>

        <LegalSection num="03" title="Who we share it with">
          <p>
            Our sub-processors, listed on our{" "}
            <a href="/trust">Trust &amp; Disclosure</a> page. HMRC and other
            authorities where legally required. We do not sell data to anyone.
          </p>
        </LegalSection>

        <LegalSection num="04" title="Your rights under UK GDPR">
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal data. You can also object to processing, request
            data portability, or withdraw consent where applicable.
          </p>
          <p>
            To exercise any of these rights, contact{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            You can also complain to the ICO if you are unhappy with how we
            handle your data.
          </p>
        </LegalSection>

        <LegalSection num="05" title="How long we keep it">
          <p>
            {/* TODO: confirm retention periods with counsel before launch */}
            Enquiries that do not become engagements: <strong>12 months</strong>.
            Engagement records: <strong>7 years</strong>, as required by UK
            accounting regulations.
          </p>
        </LegalSection>

        <LegalSection num="06" title="International transfers">
          <p>
            Data may be processed by our sub-processors in the US, EU, or UK.
            All transfers use appropriate safeguards under UK GDPR — standard
            contractual clauses or adequacy decisions as applicable.
          </p>
        </LegalSection>

        <LegalSection num="07" title="Contact">
          <p>
            For any privacy question:{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        </LegalSection>
      </LegalPageShell>

      <Cta {...cta} variant="ink" />
    </>
  );
}
