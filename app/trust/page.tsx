import { LegalPageShell, LegalSection } from "@/components/layout";
import { Cta } from "@/components/ui";
import { cta, site } from "@/content/site";

export const metadata = {
  title: "Trust & Disclosure",
  description:
    "How Breachrr Security handles the essentials — confidentiality, insurance, disclosure, and the tools we work with.",
};

export default function TrustPage() {
  return (
    <>
      <LegalPageShell
        title="Trust & Disclosure"
        subtitle="How we handle the essentials — confidentiality, insurance, disclosure, and the tools we work with."
        effective="27 July 2026"
      >
        <LegalSection num="01" title="Non-disclosure">
          <p>
            A mutual non-disclosure agreement is signed before every scoping
            conversation. Client information covered under NDA remains
            confidential indefinitely.
          </p>
          <p>
            Our standard NDA template is available on request. We are
            comfortable working under yours if you prefer.
          </p>
        </LegalSection>

        <LegalSection num="02" title="Responsible disclosure">
          <p>
            Vulnerabilities identified in third-party systems during our work
            are disclosed to the affected party through their published
            disclosure channel. We do not publish client-specific findings
            without explicit written permission.
          </p>
          <p>
            Our full responsible disclosure policy is available on request.
          </p>
        </LegalSection>

        <LegalSection num="03" title="Incident notification">
          <p>
            If we become aware of a data incident affecting a client, we notify
            the client within <strong>24 hours</strong> with all the information
            they need for their own regulatory notifications.
          </p>
        </LegalSection>

        <LegalSection num="04" title="Insurance">
          <p>
            {/* TODO: confirm carrier and coverage amount before launch */}
            Professional indemnity insurance is held with <strong>Hiscox</strong>,
            with coverage of <strong>£2,000,000</strong> per claim. A
            certificate of insurance is available on request.
          </p>
        </LegalSection>

        <LegalSection num="05" title="Sub-processors">
          <p>
            The tools that may touch client data during engagements are listed
            below. This list is kept current.
          </p>
          {/* TODO: confirm actual sub-processor list before launch */}
          <ul>
            <li>
              <strong>GitHub</strong> — code and issue tracking
            </li>
            <li>
              <strong>1Password</strong> — secrets and credentials
            </li>
            <li>
              <strong>Notion</strong> — engagement documentation
            </li>
            <li>
              <strong>Google Workspace</strong> — email and file collaboration
            </li>
            <li>
              <strong>Slack</strong> — channel-based communication
            </li>
          </ul>
        </LegalSection>

        <LegalSection num="06" title="Contact">
          <p>
            For any trust or disclosure question:{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        </LegalSection>
      </LegalPageShell>

      <Cta {...cta} variant="ink" />
    </>
  );
}
