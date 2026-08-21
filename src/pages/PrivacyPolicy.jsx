const EFFECTIVE_DATE = "August 21, 2026";

const sections = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use-information", label: "2. How We Use Your Information" },
  { id: "information-sharing", label: "3. How We Share Information" },
  { id: "cookies", label: "4. Cookies and Tracking Technologies" },
  { id: "third-party-services", label: "5. Third-Party Services and Links" },
  { id: "security", label: "6. Information Security" },
  { id: "data-retention", label: "7. Data Retention" },
  { id: "your-choices", label: "8. Your Choices and Privacy Rights" },
  { id: "international-data", label: "9. International Data Transfers" },
  { id: "children", label: "10. Children's Privacy" },
  { id: "accessibility", label: "11. Accessibility" },
  { id: "do-not-track", label: '12. "Do Not Track" Signals' },
  { id: "changes", label: "13. Changes to This Privacy Policy" },
  { id: "contact", label: "14. Contact Us" },
];

function SectionTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 pt-10 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950"
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return (
    <h3 className="mt-8 text-xl font-semibold text-slate-900">{children}</h3>
  );
}

function Paragraph({ children }) {
  return (
    <p className="mt-4 text-[16px] sm:text-[17px] leading-8 text-slate-700">
      {children}
    </p>
  );
}

function BulletList({ children }) {
  return (
    <ul className="mt-4 space-y-3 pl-6 list-disc text-[16px] sm:text-[17px] leading-8 text-slate-700">
      {children}
    </ul>
  );
}

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header / Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
            {/* Introduction */}
            <Paragraph>
              This Privacy Policy explains how <strong>vieworat</strong>
              ("vieworat," "we," "us," or "our") collects, uses, discloses,
              protects, and otherwise processes information when you visit or
              use our website, applications, creator tools, calculators,
              analytics features, and other services that link to this Privacy
              Policy (collectively, the "Services").
            </Paragraph>

            <Paragraph>
              vieworat is designed to provide creators with tools and estimates
              related to content performance and potential creator earnings. Our
              Services may include calculators, educational information,
              estimates, analytics-related features, and other tools intended to
              help users better understand creator monetization.
            </Paragraph>

            <Paragraph>
              By accessing or using the Services, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with
              this Privacy Policy, please do not use the Services.
            </Paragraph>

            <Paragraph>
              This Privacy Policy should be read together with our
              <a
                href="/terms"
                className="text-[#fd2d2d] hover:underline font-medium ml-1"
              >
                Terms of Service
              </a>
              .
            </Paragraph>

            <Paragraph>
              <strong>Important:</strong> vieworat provides estimates and
              informational tools. Calculation inputs and estimated earnings
              should not be considered guaranteed income, financial advice, or
              official earnings information from YouTube, Google, TikTok,
              Instagram, or any other platform.
            </Paragraph>

            {/* Contents */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">Contents</h2>

              <nav className="mt-5">
                <ol className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[#fd2d2d] hover:underline text-[16px] sm:text-[17px]"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* 1 */}
            <SectionTitle id="information-we-collect">
              1. INFORMATION WE COLLECT
            </SectionTitle>

            <Paragraph>
              We may collect information that you provide directly to us,
              information collected automatically when you use the Services,
              information collected through cookies and similar technologies,
              and information we receive from third parties.
            </Paragraph>

            <SubTitle>1.1 Information You Provide</SubTitle>

            <Paragraph>
              Depending on the features you use, you may provide information
              such as:
            </Paragraph>

            <BulletList>
              <li>
                Your name, username, or other account information if an account
                feature is available.
              </li>
              <li>
                Your email address or other contact information when you contact
                us or subscribe to communications.
              </li>
              <li>
                Creator or channel-related information that you voluntarily
                enter into vieworat tools.
              </li>
              <li>
                Calculator inputs such as views, country, content category,
                platform, RPM, CPM, engagement information, or other information
                used to generate estimates.
              </li>
              <li>
                Feedback, support requests, messages, and other communications
                you voluntarily send to us.
              </li>
              <li>
                Payment or transaction information if vieworat offers paid
                Services. Payment card information may be processed directly by
                our payment provider rather than stored by vieworat.
              </li>
            </BulletList>

            <SubTitle>1.2 Automatically Collected Information</SubTitle>

            <Paragraph>
              When you access or use the Services, certain technical and usage
              information may be automatically collected, including:
            </Paragraph>

            <BulletList>
              <li>IP address or approximate network location.</li>
              <li>Browser type and version.</li>
              <li>Operating system and device type.</li>
              <li>Pages, screens, or features you access.</li>
              <li>Date, time, and duration of visits.</li>
              <li>Referring pages or websites.</li>
              <li>
                General usage information, diagnostics, and error information.
              </li>
            </BulletList>

            <SubTitle>1.3 Calculator and Tool Information</SubTitle>

            <Paragraph>
              vieworat may process the information you enter into our
              calculators and creator tools so that we can generate the result
              you requested. For example, this may include an estimated earnings
              calculation based on views, geography, platform, category, RPM,
              CPM, or other inputs.
            </Paragraph>

            <Paragraph>
              Unless a feature specifically states otherwise, calculator inputs
              are not intended to function as verified official financial or
              platform earnings data.
            </Paragraph>

            <SubTitle>1.4 Cookies and Similar Technologies</SubTitle>

            <Paragraph>
              We may use cookies, local storage, pixels, analytics technologies,
              and similar technologies to operate the Services, remember
              preferences, understand usage, improve performance, and measure
              the effectiveness of our website and marketing.
            </Paragraph>

            {/* 2 */}
            <SectionTitle id="how-we-use-information">
              2. HOW WE USE YOUR INFORMATION
            </SectionTitle>

            <Paragraph>
              We may use information collected through the Services for the
              following purposes:
            </Paragraph>

            <BulletList>
              <li>Provide, operate, maintain, and improve vieworat.</li>
              <li>
                Generate calculator results, estimates, insights, and other
                requested outputs.
              </li>
              <li>
                Respond to questions, support requests, and other
                communications.
              </li>
              <li>Personalize parts of the Services.</li>
              <li>
                Understand how users interact with vieworat and improve the user
                experience.
              </li>
              <li>
                Detect, prevent, investigate, and respond to fraud, abuse,
                unauthorized access, security incidents, and technical issues.
              </li>
              <li>Analyze aggregated usage trends and product performance.</li>
              <li>
                Communicate with you about products, services, updates, or
                promotional information where permitted by applicable law.
              </li>
              <li>Comply with applicable legal obligations.</li>
              <li>
                Establish, exercise, or defend legal claims and enforce our
                agreements.
              </li>
            </BulletList>

            {/* 3 */}
            <SectionTitle id="information-sharing">
              3. HOW WE SHARE INFORMATION
            </SectionTitle>

            <Paragraph>
              We do not disclose your information except as described in this
              Privacy Policy, as necessary to provide the Services, or where
              required or permitted by applicable law.
            </Paragraph>

            <SubTitle>3.1 Service Providers</SubTitle>

            <Paragraph>
              We may share information with service providers that perform
              services on our behalf, such as hosting, database management,
              analytics, customer support, email delivery, security,
              infrastructure, and payment processing.
            </Paragraph>

            <Paragraph>
              These providers are generally permitted to use information only as
              necessary to provide their services to us and are expected to
              maintain appropriate safeguards.
            </Paragraph>

            <SubTitle>3.2 Analytics Providers</SubTitle>

            <Paragraph>
              We may use third-party analytics services such as
              <strong>[GOOGLE ANALYTICS / PLAUSIBLE / OTHER]</strong> to
              understand website usage, diagnose issues, and improve vieworat.
              These providers may collect information about your use of the
              Services in accordance with their own privacy policies.
            </Paragraph>

            <SubTitle>3.3 Payment Providers</SubTitle>

            <Paragraph>
              If vieworat offers paid products or subscriptions, payments may be
              processed by third-party payment providers such as
              <strong>[STRIPE / OTHER PAYMENT PROVIDER]</strong>. We do not need
              to receive or store your full payment card number to process a
              transaction when the payment provider handles that information
              directly.
            </Paragraph>

            <SubTitle>3.4 Legal and Safety Reasons</SubTitle>

            <Paragraph>
              We may disclose information when reasonably necessary to comply
              with applicable law, legal process, governmental requests, protect
              the rights or safety of vieworat or others, investigate fraud or
              abuse, or enforce our Terms of Service.
            </Paragraph>

            <SubTitle>3.5 Business Transfers</SubTitle>

            <Paragraph>
              If vieworat is involved in a merger, acquisition, financing,
              reorganization, sale of assets, bankruptcy, or similar business
              transaction, information may be transferred as part of that
              transaction, subject to applicable legal requirements.
            </Paragraph>

            <SubTitle>3.6 With Your Consent</SubTitle>

            <Paragraph>
              We may share information for purposes you authorize or otherwise
              consent to.
            </Paragraph>

            {/* 4 */}
            <SectionTitle id="cookies">
              4. COOKIES AND TRACKING TECHNOLOGIES
            </SectionTitle>

            <Paragraph>
              Cookies are small text files stored on your device. We may use
              cookies and similar technologies to:
            </Paragraph>

            <BulletList>
              <li>Keep the Services functioning correctly.</li>
              <li>Remember preferences and settings.</li>
              <li>Understand website traffic and usage.</li>
              <li>Measure performance and improve our Services.</li>
              <li>
                Support advertising or marketing activities where applicable.
              </li>
              <li>Help prevent fraud and abuse.</li>
            </BulletList>

            <Paragraph>
              Depending on your location, we may provide controls allowing you
              to accept, reject, or manage certain non-essential cookies.
            </Paragraph>

            <Paragraph>
              You can also control cookies through your browser settings.
              Blocking certain cookies may affect functionality.
            </Paragraph>

            {/* 5 */}
            <SectionTitle id="third-party-services">
              5. THIRD-PARTY SERVICES AND LINKS
            </SectionTitle>

            <Paragraph>
              The Services may contain links to third-party websites,
              applications, platforms, APIs, or services. These third parties
              operate independently from vieworat and may maintain their own
              privacy policies and terms.
            </Paragraph>

            <Paragraph>
              vieworat is not responsible for the privacy practices, security,
              content, or policies of third-party websites or services that you
              choose to access.
            </Paragraph>

            <Paragraph>
              For example, vieworat may provide information or tools related to
              platforms such as YouTube, TikTok, Instagram, or other creator
              platforms. vieworat is an independent service and is not
              necessarily affiliated with, endorsed by, or operated by those
              platforms.
            </Paragraph>

            {/* 6 */}
            <SectionTitle id="security">6. INFORMATION SECURITY</SectionTitle>

            <Paragraph>
              We use reasonable administrative, technical, and organizational
              measures intended to protect information against unauthorized
              access, alteration, disclosure, or destruction.
            </Paragraph>

            <Paragraph>
              However, no method of transmitting or storing information over the
              Internet is completely secure. Therefore, we cannot guarantee
              absolute security.
            </Paragraph>

            <Paragraph>
              You are responsible for maintaining the confidentiality of any
              credentials associated with your account, if applicable.
            </Paragraph>

            {/* 7 */}
            <SectionTitle id="data-retention">7. DATA RETENTION</SectionTitle>

            <Paragraph>
              We retain information only for as long as reasonably necessary for
              the purposes described in this Privacy Policy, including to
              provide the Services, maintain business records, resolve disputes,
              enforce agreements, prevent abuse, and comply with applicable
              legal obligations.
            </Paragraph>

            <Paragraph>
              Retention periods may vary depending on the type of information,
              the reason it was collected, and applicable legal requirements.
            </Paragraph>

            {/* 8 */}
            <SectionTitle id="your-choices">
              8. YOUR CHOICES AND PRIVACY RIGHTS
            </SectionTitle>

            <Paragraph>
              Depending on your location and applicable law, you may have
              certain rights regarding your personal information.
            </Paragraph>

            <SubTitle>8.1 Access</SubTitle>

            <Paragraph>
              You may have the right to request information about the personal
              information we process about you.
            </Paragraph>

            <SubTitle>8.2 Correction</SubTitle>

            <Paragraph>
              You may have the right to request correction of inaccurate or
              incomplete personal information.
            </Paragraph>

            <SubTitle>8.3 Deletion</SubTitle>

            <Paragraph>
              You may have the right to request deletion of personal
              information, subject to applicable legal exceptions.
            </Paragraph>

            <SubTitle>8.4 Data Portability</SubTitle>

            <Paragraph>
              In certain circumstances, you may have the right to receive
              certain personal information in a structured, commonly used, and
              machine-readable format.
            </Paragraph>

            <SubTitle>8.5 Marketing Communications</SubTitle>

            <Paragraph>
              You may unsubscribe from promotional emails by using the
              unsubscribe mechanism contained in those communications or by
              contacting us.
            </Paragraph>

            <SubTitle>8.6 Privacy Requests</SubTitle>

            <Paragraph>
              To submit a privacy-related request, contact us at:
            </Paragraph>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700">
                <strong>Email:</strong>
                <a
                  href="mailto:[YOUR PRIVACY EMAIL]"
                  className="text-[#fd2d2d] hover:underline"
                >
                  [YOUR PRIVACY EMAIL]
                </a>
              </p>
            </div>

            <Paragraph>
              We may need to verify your identity before completing certain
              requests. We will respond within the time required by applicable
              law.
            </Paragraph>

            {/* 9 */}
            <SectionTitle id="international-data">
              9. INTERNATIONAL DATA TRANSFERS
            </SectionTitle>

            <Paragraph>
              vieworat and our service providers may operate in countries
              different from the country in which you live. As a result, your
              information may be processed or stored in other jurisdictions.
            </Paragraph>

            <Paragraph>
              Where required by applicable law, we take appropriate measures
              intended to provide lawful protection for personal information
              transferred across borders.
            </Paragraph>

            {/* 10 */}
            <SectionTitle id="children">10. CHILDREN'S PRIVACY</SectionTitle>

            <Paragraph>
              The Services are not intended for children under the age of 13,
              unless otherwise expressly stated and permitted by applicable law.
            </Paragraph>

            <Paragraph>
              We do not knowingly collect personal information from children
              under 13 without a lawful basis or appropriate consent. If you
              believe a child has provided personal information to us, please
              contact us so that we can review and take appropriate action.
            </Paragraph>

            <Paragraph>
              Where local laws establish a higher minimum age for certain
              data-processing activities, we will apply the requirements of
              applicable law.
            </Paragraph>

            {/* 11 */}
            <SectionTitle id="accessibility">11. ACCESSIBILITY</SectionTitle>

            <Paragraph>
              We aim to make this Privacy Policy accessible to individuals with
              disabilities. If you have difficulty accessing this policy or
              would like to receive it in another format, please contact us at
              the address listed below.
            </Paragraph>

            {/* 12 */}
            <SectionTitle id="do-not-track">
              12. "DO NOT TRACK" SIGNALS
            </SectionTitle>

            <Paragraph>
              Some browsers offer a "Do Not Track" setting. Because there is
              currently no universally accepted standard for responding to these
              signals, vieworat may not respond to all browser-based Do Not
              Track signals.
            </Paragraph>

            <Paragraph>
              Where applicable law requires us to recognize a legally recognized
              opt-out preference signal, we will process that signal in
              accordance with applicable law.
            </Paragraph>

            {/* 13 */}
            <SectionTitle id="changes">
              13. CHANGES TO THIS PRIVACY POLICY
            </SectionTitle>

            <Paragraph>
              We may update this Privacy Policy from time to time to reflect
              changes to our Services, technology, business practices, or legal
              requirements.
            </Paragraph>

            <Paragraph>
              When we make changes, we will update the effective date at the top
              of this Privacy Policy. If changes are material, we may provide
              additional notice when required by applicable law.
            </Paragraph>

            <Paragraph>
              We encourage you to review this Privacy Policy periodically to
              remain informed about how vieworat handles information.
            </Paragraph>

            {/* 14 */}
            <SectionTitle id="contact">14. CONTACT US</SectionTitle>

            <Paragraph>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or vieworat's privacy practices, please contact us.
            </Paragraph>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-3 text-[16px] sm:text-[17px] text-slate-700">
                <p>
                  <strong>Company:</strong> [YOUR LEGAL BUSINESS NAME]
                </p>

                <p>
                  <strong>Website:</strong>
                  <a
                    href="[YOUR WEBSITE URL]"
                    className="text-[#fd2d2d] hover:underline"
                  >
                    [YOUR WEBSITE URL]
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>
                  <a
                    href="mailto:[YOUR SUPPORT EMAIL]"
                    className="text-[#fd2d2d] hover:underline"
                  >
                    [YOUR SUPPORT EMAIL]
                  </a>
                </p>

                <p>
                  <strong>Privacy Email:</strong>
                  <a
                    href="mailto:[YOUR PRIVACY EMAIL]"
                    className="text-[#fd2d2d] hover:underline"
                  >
                    [YOUR PRIVACY EMAIL]
                  </a>
                </p>

                <p>
                  <strong>Address:</strong> [YOUR BUSINESS ADDRESS, IF
                  APPLICABLE]
                </p>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <p className="text-sm leading-7 text-slate-500">
                This Privacy Policy is provided for vieworat and should be
                customized to accurately reflect the data vieworat actually
                collects, stores, shares, and processes. You should remove any
                section or provider that does not apply to your Services and add
                any disclosures required by the laws applicable to your business
                and users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
