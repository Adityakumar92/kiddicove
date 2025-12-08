// TermsAndConditions.jsx
import React from "react";

const SectionCard = ({ title, children, id }) => (
  <section id={id} className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-700 leading-relaxed text-sm">{children}</div>
  </section>
);

const TermsAndConditions = () => {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10">
          {/* <p className="text-sm text-gray-500 mb-2">Last updated: 8 September 2025</p> */}
          <h1 className="text-4xl font-bold text-center text-black mb-12">
          Terms &amp; Conditions
        </h1>
          {/* <h1 className="text-4xl font-extrabold text-black"></h1> */}
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            These Terms and Conditions ("Agreement") govern your use of the Deep Connection Innovation Private
            Limited website, mobile applications, WhatsApp communication, and related services ("Service").
          </p>
        </header>

        {/* Content grid */}
        <div className="space-y-8">
          <SectionCard id="intro" title="Overview & Electronic Record">
            <p className="mb-2">
              These terms form an electronic record under the Information Technology Act, 2000. This record is
              computer-generated and does not require physical or digital signatures. This Agreement is a binding
              contract between you and Deep Connection Innovation Private Limited ("Deep Connection", "we", "us").
            </p>
            <p>
              By using our Service, you accept these Terms. Please read carefully. If you do not agree, do not use the
              Service.
            </p>
          </SectionCard>

          <SectionCard id="medical" title="Not a Substitute for Medical Advice">
            <p className="mb-2">
              Content on our platform is for informational purposes only and is not a substitute for professional
              medical advice, diagnosis, or treatment.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are responsible for ensuring any activity is appropriate for your child.</li>
              <li>If in doubt about your child's capability, consult a healthcare professional before proceeding.</li>
              <li>If you suspect developmental delays or health issues, seek prompt professional advice.</li>
            </ul>
          </SectionCard>

          <SectionCard id="subscription" title="Subscription & Membership">
            <p className="mb-2">
              Services are available only to persons legally competent to contract. Memberships are non-transferable and
              restricted to eligible users (not minors under 18). We may terminate subscriptions if we determine you
              are ineligible.
            </p>

            <p className="mt-3">
              Subscriptions are governed by the payment and renewal terms detailed at purchase. Gift subscriptions are
              subject to specific activation terms; refunds and returns are limited as stated in our policy.
            </p>
          </SectionCard>

          <SectionCard id="registration" title="Registration & Account Security">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                You must provide accurate registration data and keep it current. We may suspend or terminate accounts
                for incorrect or misleading information.
              </li>
              <li>
                You are responsible for maintaining account confidentiality and for all activity under your account. If
                you suspect unauthorized use, contact us immediately.
              </li>
              <li>
                We may require password changes or suspend accounts where we suspect misuse or security risk.
              </li>
            </ol>
          </SectionCard>

          <SectionCard id="pricing" title="Pricing, Payments & Chargebacks">
            <p className="mb-2">
              Certain services require payment. Payment obligations remain even if services are discontinued for
              non-payment. All content, algorithms, and intellectual property remain the Company's property.
            </p>
            <p className="mb-1">Important points:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We can recover outstanding payments and charge administrative costs.</li>
              <li>Chargebacks may trigger liabilities for the user — you agree to reimburse chargeback amounts and costs.</li>
              <li>Use of fraudulent payment methods may lead to termination of services and liability for unpaid amounts.</li>
            </ul>
          </SectionCard>

          <SectionCard id="cancellation" title="Cancellation & Refunds">
            <p className="mb-2">
              Cancellation must follow procedures on the platform used for subscription. Prepaid services may be
              non-cancellable and non-refundable. Refunds will be considered per the policy and when services have not
              commenced.
            </p>
            <p>If you have queries, please contact: <span className="font-medium text-blue-600">admin@deepconnection.life</span>.</p>
          </SectionCard>

          <SectionCard id="termination" title="Termination">
            <p className="mb-2">
              We may terminate this Agreement or any account at any time for breach, unlawful conduct, or other reasons
              at our sole discretion. Termination does not relieve you of payment obligations for services already
              ordered or liabilities that arose prior to termination.
            </p>
          </SectionCard>

          <SectionCard id="conduct" title="User Conduct">
            <p className="mb-2">When using the Service you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comply with all applicable laws and use the Service for lawful purposes only.</li>
              <li>Provide accurate and current information when requested.</li>
              <li>Not impersonate others, use fraudulent accounts, or misuse intellectual property.</li>
              <li>Not post or transmit offensive, abusive, infringing, or illegal material.</li>
            </ul>
            <p className="mt-3">
              You agree not to disrupt the Service, attempt unauthorized access to systems, or copy or redistribute our
              proprietary Content without written permission.
            </p>
          </SectionCard>

          <SectionCard id="communication" title="Communications & Notifications">
            <p className="mb-2">
              By using our Service, you consent to receive electronic communications (email, notifications) from us.
              You may disable some notifications in device settings.
            </p>
            <p>
              Important service notices (e.g., transaction confirmations, password resets) may still be sent even if you
              opt out of marketing communications.
            </p>
          </SectionCard>

          <SectionCard id="data" title="Collection, Storage & Sharing of Personal Data">
            <p className="mb-2">
              We provide data storage in user accounts for registration data, activity history, diet & health records, and
              other information uploaded by you ("Data"). We treat personal data as described in our Privacy Policy,
              which is incorporated here by reference.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>We do not collect personal data without your knowledge or consent.</li>
              <li>We may access Data for operational or technical purposes and do not validate user-supplied Data.</li>
              <li>We store Data on an "as-is" basis; you are responsible for its accuracy and integrity.</li>
              <li>We may share personal data with third parties strictly as needed to deliver services, as explained in the Privacy Policy.</li>
            </ul>
          </SectionCard>

          <SectionCard id="liability" title="Indemnification & Limitation of Liability">
            <p className="mb-2">
              You agree to indemnify and hold harmless Deep Connection and its related parties from claims, losses,
              damages, liabilities, costs, and expenses arising from your use or misuse of the Service, breach of this
              Agreement, or violation of laws or third-party rights.
            </p>

            <p className="mb-2">
              Our liability is limited to the maximum extent permitted by law. We will not be liable for indirect,
              incidental, special, punitive, or consequential damages, including loss of profits, revenue, or data.
            </p>
          </SectionCard>

          <SectionCard id="disclaimers" title="Disclaimers & Copyright">
            <p className="mb-2">
              All Content is provided "as is" without warranties of any kind. We do not guarantee accuracy or completeness
              of content, and third-party links/resources are provided for convenience without endorsement.
            </p>

            <p className="mb-2">
              All intellectual property on the Site is our exclusive property. Unauthorized copying or distribution is
              strictly prohibited and may result in civil or criminal penalties.
            </p>
          </SectionCard>

          <SectionCard id="misc" title="Maintenance, Force Majeure & Miscellaneous">
            <p className="mb-2">
              We may temporarily suspend or restrict access for maintenance or upgrades. We are not liable for losses due
              to force majeure events (e.g., natural disasters, strikes, hacking, government actions).
            </p>

            <p>
              This Agreement is governed by Indian law (state of Haryana). You may not assign this Agreement without our
              written consent. Failure to enforce any provision does not constitute waiver.
            </p>
          </SectionCard>

          <SectionCard id="disputes" title="Disputes & Governing Law">
            <p className="mb-2">
              Any dispute arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of
              the courts in Gurugram, Haryana, India.
            </p>
          </SectionCard>

          <SectionCard id="contact" title="Contact">
            <p>
              For any questions about these Terms &amp; Conditions, please contact us at:
              <span className="ml-1 font-medium text-blue-600">admin@deepconnection.life</span>
            </p>
          </SectionCard>
        </div>

        {/* Footer action */}
        <div className="mt-12 text-center">
          <a
            href="/privacy-policy"
            className="inline-block px-6 py-3 rounded-2xl border border-blue-600 text-blue-600 font-medium bg-white hover:bg-blue-50"
          >
            Read our Privacy Policy
          </a>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
