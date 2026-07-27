import { LegalPageShell, LegalSection } from "@/components/layout";
import { Cta } from "@/components/ui";
import { cta, site } from "@/content/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms under which Breachrr Security engagements are carried out.",
};

export default function TermsPage() {
  return (
    <>
      <LegalPageShell
        title="Terms of Service"
        subtitle="The terms under which we engage."
        effective="27 July 2026"
      >
        <LegalSection num="01" title="Who we are">
          <p>
            Breachrr Security is a trading name of Breachrr Ltd, company number{" "}
            {/* TODO: replace with real Companies House number before launch */}
            <strong>16234567</strong>, registered in England and Wales.
          </p>
        </LegalSection>

        <LegalSection num="02" title="Engagement structure">
          <p>
            Every engagement begins with a scoping conversation and a written
            Statement of Work (SOW). The SOW defines scope, deliverables, and
            fees. No work begins until the SOW is signed by both parties.
          </p>
        </LegalSection>

        <LegalSection num="03" title="Fees and payment">
          <p>
            Fees are fixed and quoted in advance in the SOW.{" "}
            {/* TODO: confirm payment terms before launch */}
            <strong>50% is payable on Statement of Work signature</strong> and{" "}
            <strong>50% on completion</strong> for engagements under £25,000.
            Ongoing retainers are invoiced monthly, Net 30 from invoice date.
          </p>
          <p>
            Late payment attracts statutory interest under the Late Payment of
            Commercial Debts (Interest) Act 1998.
          </p>
        </LegalSection>

        <LegalSection num="04" title="Confidentiality">
          <p>
            Both parties are bound by mutual non-disclosure agreement.
            Client-specific findings and materials remain confidential. We may
            publish anonymised methodology or case studies only with explicit
            written permission from the client.
          </p>
        </LegalSection>

        <LegalSection num="05" title="Intellectual property">
          <p>
            Deliverables produced for the client become the client&apos;s
            property upon full payment. We retain rights to our underlying
            methodology, templates, and tools. Neither party may use the
            other&apos;s name or logo publicly without written permission.
          </p>
        </LegalSection>

        <LegalSection num="06" title="Warranties and liability">
          <p>
            We warrant that services will be performed with reasonable skill
            and care. Our liability for any engagement is limited to the fees
            paid under that engagement. Neither party is liable for indirect
            or consequential losses.
          </p>
          <p>
            Nothing in these terms limits liability for death, personal injury,
            or fraud.
          </p>
        </LegalSection>

        <LegalSection num="07" title="Termination">
          <p>
            {/* TODO: confirm notice period before launch */}
            Either party may terminate an engagement with{" "}
            <strong>14 days&apos;</strong> written notice. Client pays for work
            completed to the date of termination. Confidentiality obligations
            survive termination.
          </p>
        </LegalSection>

        <LegalSection num="08" title="Governing law">
          <p>
            These terms are governed by the laws of England and Wales. Disputes
            are subject to the exclusive jurisdiction of the English courts.
          </p>
        </LegalSection>

        <LegalSection num="09" title="Contact">
          <p>
            For any question about these terms:{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        </LegalSection>
      </LegalPageShell>

      <Cta {...cta} variant="ink" />
    </>
  );
}
