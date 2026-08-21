const EFFECTIVE_DATE = "August 21, 2026";

const sections = [
  { id: "general-conditions", label: "1. General Conditions" },
  { id: "right-to-use", label: "2. Right to Use Our Services" },
  { id: "user-accounts", label: "3. User Accounts" },
  { id: "calculator-results", label: "4. Calculator Results and Estimates" },
  { id: "intellectual-property", label: "5. Intellectual Property" },
  { id: "prohibited-uses", label: "6. Prohibited Uses" },
  {
    id: "third-party-platforms",
    label: "7. Third-Party Platforms and Services",
  },
  { id: "accuracy", label: "8. Accuracy, Completeness and Timeliness" },
  { id: "billing", label: "9. Billing and Payments" },
  { id: "availability", label: "10. Service Availability" },
  { id: "warranty", label: "11. Warranty Disclaimer" },
  { id: "limitation", label: "12. Limitation of Liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "children", label: "14. Children's Information" },
  { id: "termination", label: "15. Termination" },
  { id: "governing-law", label: "16. Governing Law" },
  { id: "severability", label: "17. Severability" },
  { id: "changes", label: "18. Changes to These Terms" },
  { id: "contact", label: "19. Contact Us" },
];

function SectionTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 pt-12 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950"
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

function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
            Terms of Service
          </h1>

          <p className="mt-5 text-base sm:text-lg font-semibold uppercase tracking-wide text-slate-800">
            Please read these Terms of Service carefully.
          </p>

          <p className="mt-4 text-lg sm:text-xl text-slate-600">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
            {/* INTRODUCTION */}

            <Paragraph>
              These Terms of Service ("Terms", "Terms of Service") govern your
              access to and use of the vieworat website, creator tools,
              calculators, features, content, applications, and related services
              (collectively, the "Services").
            </Paragraph>

            <Paragraph>
              vieworat ("vieworat", "we", "us", or "our") provides tools
              intended to help creators estimate potential earnings, understand
              creator monetization concepts, and analyze information related to
              online content platforms.
            </Paragraph>

            <Paragraph>
              By accessing or using the Services, you agree to be bound by these
              Terms of Service and our
              <a
                href="/privacy"
                className="font-medium text-[#fd2d2d] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </Paragraph>

            <Paragraph>
              If you do not agree with these Terms, you must not use the
              Services.
            </Paragraph>

            {/* IMPORTANT NOTICE */}

            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-red-900">
                Important Notice About Earnings Estimates
              </h3>

              <p className="mt-3 text-[16px] sm:text-[17px] leading-8 text-red-800">
                vieworat provides estimates for informational and educational
                purposes only. Earnings displayed by vieworat are not guaranteed
                earnings and should not be considered official earnings
                statements from YouTube, Google, TikTok, Instagram, or any other
                third-party platform.
              </p>

              <p className="mt-3 text-[16px] sm:text-[17px] leading-8 text-red-800">
                Actual creator earnings may vary significantly depending on
                advertising rates, audience location, content category,
                monetization eligibility, platform policies, seasonality, ad
                availability, revenue-sharing arrangements, taxes, and other
                factors.
              </p>
            </div>

            {/* CONTENTS */}

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">Contents</h2>

              <nav className="mt-5">
                <ol className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[16px] sm:text-[17px] text-[#fd2d2d] hover:underline"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* 1 */}

            <SectionTitle id="general-conditions">
              1. GENERAL CONDITIONS
            </SectionTitle>

            <Paragraph>
              You must read these Terms carefully before using vieworat. By
              accessing or using any part of the Services, you confirm that you
              understand and agree to these Terms.
            </Paragraph>

            <Paragraph>
              We may update, modify, suspend, or discontinue any part of the
              Services at any time. Features may be added, removed, changed,
              limited, or temporarily unavailable.
            </Paragraph>

            <Paragraph>
              You agree to use the Services only for lawful purposes and in
              accordance with these Terms and applicable laws and regulations.
            </Paragraph>

            {/* 2 */}

            <SectionTitle id="right-to-use">
              2. RIGHT TO USE OUR SERVICES
            </SectionTitle>

            <Paragraph>
              Subject to these Terms, vieworat grants you a limited,
              non-exclusive, non-transferable, revocable right to access and use
              the Services for your personal, informational, educational, and
              lawful purposes.
            </Paragraph>

            <Paragraph>
              You may not reproduce, redistribute, resell, sublicense,
              duplicate, or commercially exploit the Services or any portion of
              them without our prior written permission.
            </Paragraph>

            <Paragraph>
              We reserve the right to suspend or restrict access to the Services
              if we reasonably believe that you have violated these Terms,
              applicable law, or the rights of vieworat or others.
            </Paragraph>

            {/* 3 */}

            <SectionTitle id="user-accounts">3. USER ACCOUNTS</SectionTitle>

            <SubTitle>3.1 Account Information</SubTitle>

            <Paragraph>
              Certain vieworat features may require an account. When creating an
              account, you agree to provide information that is accurate,
              current, and complete.
            </Paragraph>

            <Paragraph>
              You are responsible for maintaining the confidentiality of your
              account credentials and for activities that occur through your
              account.
            </Paragraph>

            <SubTitle>3.2 Account Security</SubTitle>

            <Paragraph>
              You should notify vieworat promptly if you believe that your
              account has been accessed without authorization.
            </Paragraph>

            <Paragraph>
              vieworat is not responsible for losses resulting from your failure
              to protect your account credentials, except where otherwise
              required by applicable law.
            </Paragraph>

            {/* 4 */}

            <SectionTitle id="calculator-results">
              4. CALCULATOR RESULTS AND ESTIMATES
            </SectionTitle>

            <Paragraph>
              vieworat may provide calculators or tools that estimate potential
              creator revenue using information entered by the user or
              assumptions, averages, formulas, or other data used by the
              Services.
            </Paragraph>

            <SubTitle>4.1 Estimates Are Not Guaranteed</SubTitle>

            <Paragraph>
              Any amount shown by a vieworat calculator is an estimate and does
              not represent a promise, guarantee, prediction, or official
              statement of future income.
            </Paragraph>

            <Paragraph>
              Actual earnings may be higher or lower than vieworat's estimates.
            </Paragraph>

            <SubTitle>4.2 Factors Affecting Earnings</SubTitle>

            <Paragraph>
              Actual earnings may depend on many factors, including but not
              limited to:
            </Paragraph>

            <BulletList>
              <li>Audience location and demographics.</li>

              <li>Advertising demand.</li>

              <li>Content category and subject matter.</li>

              <li>Viewer engagement and watch behavior.</li>

              <li>Monetization eligibility.</li>

              <li>Platform revenue-sharing policies.</li>

              <li>Ad availability and advertiser demand.</li>

              <li>Seasonality and market conditions.</li>

              <li>Taxes, fees, and other deductions.</li>

              <li>Changes made by YouTube or other third-party platforms.</li>
            </BulletList>

            <SubTitle>4.3 No Financial Advice</SubTitle>

            <Paragraph>
              vieworat's calculators and informational content do not constitute
              financial, tax, accounting, investment, legal, or professional
              advice.
            </Paragraph>

            <Paragraph>
              You should consult a qualified professional before making
              financial decisions based on information obtained through the
              Services.
            </Paragraph>

            {/* 5 */}

            <SectionTitle id="intellectual-property">
              5. INTELLECTUAL PROPERTY
            </SectionTitle>

            <Paragraph>
              The Services and their content, design, branding, graphics,
              software, text, layouts, logos, icons, interfaces, databases,
              calculations, formulas, and other materials are owned by vieworat
              or its licensors unless otherwise stated.
            </Paragraph>

            <Paragraph>
              Except as expressly permitted by these Terms, you may not copy,
              modify, reproduce, distribute, sell, license, publicly display,
              publish, create derivative works from, reverse engineer, or
              otherwise exploit any portion of the Services without prior
              written authorization.
            </Paragraph>

            <Paragraph>
              "vieworat" and related branding are trademarks or trade names of
              vieworat or their respective owners and may not be used without
              permission.
            </Paragraph>

            {/* 6 */}

            <SectionTitle id="prohibited-uses">6. PROHIBITED USES</SectionTitle>

            <Paragraph>You agree not to use the Services:</Paragraph>

            <BulletList>
              <li>For any unlawful, fraudulent, or abusive purpose.</li>

              <li>
                To violate any applicable law, regulation, or third-party right.
              </li>

              <li>
                To attempt to gain unauthorized access to vieworat or its
                infrastructure.
              </li>

              <li>
                To interfere with, disrupt, overload, or damage the Services.
              </li>

              <li>
                To use bots, scripts, scrapers, crawlers, or automated systems
                to access the Services without authorization.
              </li>

              <li>
                To copy or systematically extract data from vieworat for the
                purpose of creating a competing database or service.
              </li>

              <li>
                To reverse engineer, decompile, disassemble, or attempt to
                discover the source code of the Services.
              </li>

              <li>
                To upload malicious code, viruses, malware, ransomware, or
                harmful material.
              </li>

              <li>To impersonate another person, company, or organization.</li>

              <li>
                To use vieworat in a manner that violates the rights of others.
              </li>
            </BulletList>

            {/* 7 */}

            <SectionTitle id="third-party-platforms">
              7. THIRD-PARTY PLATFORMS AND SERVICES
            </SectionTitle>

            <Paragraph>
              vieworat may provide information, tools, links, or calculations
              relating to third-party platforms such as YouTube, Google, TikTok,
              Instagram, or other services.
            </Paragraph>

            <Paragraph>
              vieworat is an independent service and is not necessarily
              affiliated with, endorsed by, sponsored by, or officially
              connected with any third-party platform unless explicitly stated.
            </Paragraph>

            <Paragraph>
              Your use of third-party platforms is governed by their own terms,
              policies, and agreements. You are responsible for reviewing and
              complying with those terms.
            </Paragraph>

            <Paragraph>
              We do not control and are not responsible for changes,
              interruptions, restrictions, policies, algorithms, monetization
              systems, or decisions made by third-party platforms.
            </Paragraph>

            {/* 8 */}

            <SectionTitle id="accuracy">
              8. ACCURACY, COMPLETENESS AND TIMELINESS
            </SectionTitle>

            <Paragraph>
              We aim to provide useful and reasonably accurate information, but
              we do not guarantee that all content, calculations, formulas,
              data, estimates, or other information available through vieworat
              will always be accurate, complete, current, or error-free.
            </Paragraph>

            <Paragraph>
              We may modify, correct, update, or remove information at any time
              without prior notice.
            </Paragraph>

            <Paragraph>
              You acknowledge that platform rates, policies, algorithms,
              monetization rules, advertising markets, and other factors can
              change over time.
            </Paragraph>

            {/* 9 */}

            <SectionTitle id="billing">9. BILLING AND PAYMENTS</SectionTitle>

            <Paragraph>
              Certain vieworat features may be offered free of charge, while
              other features may require payment.
            </Paragraph>

            <Paragraph>
              Where paid Services are offered, applicable prices, billing
              periods, renewal terms, and cancellation conditions will be
              presented before purchase.
            </Paragraph>

            <Paragraph>
              Payments may be processed through third-party payment providers.
              Those providers may collect and process payment information
              according to their own terms and privacy policies.
            </Paragraph>

            <SubTitle>9.1 Subscriptions</SubTitle>

            <Paragraph>
              If vieworat offers subscriptions, a subscription may renew
              automatically according to the billing terms presented when you
              purchase the subscription, unless you cancel before the applicable
              renewal date.
            </Paragraph>

            <SubTitle>9.2 Refunds</SubTitle>

            <Paragraph>
              Refund eligibility will depend on the refund policy presented at
              the time of purchase and applicable law.
            </Paragraph>

            {/* 10 */}

            <SectionTitle id="availability">
              10. SERVICE AVAILABILITY
            </SectionTitle>

            <Paragraph>
              We do not guarantee that vieworat will always be available,
              uninterrupted, secure, or error-free.
            </Paragraph>

            <Paragraph>
              The Services may be temporarily unavailable due to maintenance,
              updates, technical problems, infrastructure failures, security
              incidents, or circumstances outside our reasonable control.
            </Paragraph>

            <Paragraph>
              We reserve the right to modify, suspend, or discontinue any part
              of the Services at any time.
            </Paragraph>

            {/* 11 */}

            <SectionTitle id="warranty">11. WARRANTY DISCLAIMER</SectionTitle>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-[15px] sm:text-[16px] leading-8 font-medium uppercase text-slate-800">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES
                ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
                ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
              </p>

              <p className="mt-5 text-[15px] sm:text-[16px] leading-8 font-medium uppercase text-slate-800">
                vieworat DOES NOT GUARANTEE THAT THE SERVICES WILL BE ACCURATE,
                COMPLETE, RELIABLE, SECURE, AVAILABLE, OR ERROR-FREE.
              </p>

              <p className="mt-5 text-[15px] sm:text-[16px] leading-8 font-medium uppercase text-slate-800">
                vieworat DOES NOT GUARANTEE ANY PARTICULAR LEVEL OF CREATOR
                EARNINGS, REVENUE, BUSINESS RESULTS, TRAFFIC, VIEWS, OR
                MONETIZATION.
              </p>
            </div>

            {/* 12 */}

            <SectionTitle id="limitation">
              12. LIMITATION OF LIABILITY
            </SectionTitle>

            <Paragraph>
              To the maximum extent permitted by applicable law, vieworat and
              its owners, employees, contractors, service providers, licensors,
              and affiliates will not be liable for indirect, incidental,
              consequential, special, exemplary, or punitive damages arising out
              of or related to your use of the Services.
            </Paragraph>

            <Paragraph>
              This includes, without limitation, loss of revenue, loss of
              profits, loss of data, loss of business opportunities, loss of
              expected earnings, or other economic losses.
            </Paragraph>

            <Paragraph>
              To the maximum extent permitted by applicable law, the total
              liability of vieworat arising from or relating to the Services
              will not exceed the amount you paid to vieworat for the Services
              during the twelve months preceding the event giving rise to the
              claim, or the minimum amount permitted by applicable law where no
              payment was made.
            </Paragraph>

            {/* 13 */}

            <SectionTitle id="indemnification">
              13. INDEMNIFICATION
            </SectionTitle>

            <Paragraph>
              To the extent permitted by applicable law, you agree to defend,
              indemnify, and hold harmless vieworat and its officers, employees,
              contractors, affiliates, licensors, and service providers from
              claims, damages, losses, liabilities, costs, and expenses arising
              out of:
            </Paragraph>

            <BulletList>
              <li>Your violation of these Terms.</li>

              <li>Your unlawful use of the Services.</li>

              <li>Your violation of another person's or entity's rights.</li>

              <li>Information or content you submit through the Services.</li>
            </BulletList>

            {/* 14 */}

            <SectionTitle id="children">
              14. CHILDREN'S INFORMATION
            </SectionTitle>

            <Paragraph>
              Unless otherwise explicitly stated, vieworat's Services are not
              intended for children under thirteen (13) years of age.
            </Paragraph>

            <Paragraph>
              We do not knowingly collect personal information from children
              under thirteen (13). If you believe that a child has provided
              personal information to vieworat, please contact us.
            </Paragraph>

            {/* 15 */}

            <SectionTitle id="termination">15. TERMINATION</SectionTitle>

            <Paragraph>
              We may suspend or terminate your access to the Services at any
              time if we reasonably believe you have violated these Terms,
              applicable law, or the rights of vieworat or others.
            </Paragraph>

            <Paragraph>You may stop using the Services at any time.</Paragraph>

            <Paragraph>
              Provisions that by their nature should survive termination,
              including intellectual property, disclaimers, limitations of
              liability, indemnification, and dispute-related provisions, will
              continue to apply after termination.
            </Paragraph>

            {/* 16 */}

            <SectionTitle id="governing-law">16. GOVERNING LAW</SectionTitle>

            <Paragraph>
              These Terms will be governed by and interpreted in accordance with
              the laws of <strong>[YOUR JURISDICTION]</strong>, without regard
              to conflict of law principles, except to the extent applicable law
              requires otherwise.
            </Paragraph>

            <Paragraph>
              Any dispute arising from or relating to these Terms or the
              Services will be handled in the manner required by applicable law.
            </Paragraph>

            {/* 17 */}

            <SectionTitle id="severability">17. SEVERABILITY</SectionTitle>

            <Paragraph>
              If any provision of these Terms is found to be invalid, unlawful,
              or unenforceable, that provision will be modified or severed to
              the minimum extent necessary, and the remaining provisions will
              remain in effect.
            </Paragraph>

            {/* 18 */}

            <SectionTitle id="changes">18. CHANGES TO THESE TERMS</SectionTitle>

            <Paragraph>
              We may update these Terms from time to time to reflect changes in
              our Services, business practices, technology, or legal
              requirements.
            </Paragraph>

            <Paragraph>
              When we make changes, we will update the effective date displayed
              at the top of this page.
            </Paragraph>

            <Paragraph>
              Your continued use of the Services after the updated Terms become
              effective constitutes acceptance of the revised Terms, where
              permitted by applicable law.
            </Paragraph>

            {/* 19 */}

            <SectionTitle id="contact">19. CONTACT US</SectionTitle>

            <Paragraph>
              If you have questions, concerns, or requests regarding these Terms
              of Service, please contact us.
            </Paragraph>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-4 text-[16px] sm:text-[17px] leading-8 text-slate-700">
                <p>
                  <strong>Company:</strong> [YOUR LEGAL BUSINESS NAME]
                </p>

                <p>
                  <strong>Website:</strong>
                  <a
                    href="[YOUR WEBSITE]"
                    className="text-[#fd2d2d] hover:underline"
                  >
                    [YOUR WEBSITE]
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

            {/* FINAL NOTE */}

            <div className="mt-12 border-t border-slate-200 pt-8">
              <p className="text-sm leading-7 text-slate-500">
                These Terms of Service are a general development draft for
                vieworat. They should be customized to accurately reflect
                vieworat's actual business structure, services, payment model,
                jurisdictions, third-party integrations, and applicable laws.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsOfService;
