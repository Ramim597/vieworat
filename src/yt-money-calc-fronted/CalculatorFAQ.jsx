import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CalculatorFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the YouTube earnings calculator work?",
      answer:
        "Enter your total views, select your target country, and choose a content category. The calculator uses the selected RPM and category multiplier to estimate your potential earnings.",
    },
    {
      question: "Is the estimated earnings amount accurate?",
      answer:
        "The result is an estimate based on the RPM data and category multiplier used by the calculator. Actual YouTube earnings can vary depending on audience, monetized views, content, seasonality, and advertiser demand.",
    },
    {
      question: "Are the country RPM values official?",
      answer:
        "No. YouTube does not publish a fixed RPM for every country. The values used here are benchmark estimates intended to provide a useful approximation.",
    },
    {
      question: "Does the content category affect earnings?",
      answer:
        "Yes. Different content categories can have different advertising values, so the calculator applies a category multiplier to the selected country RPM.",
    },
    {
      question: "Can I calculate earnings for different countries?",
      answer:
        "Yes. Select a country from the country dropdown and the calculator will use the corresponding RPM data for that country.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050505] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="mb-14 text-center text-4xl font-bold text-white md:text-5xl">
          Frequently Asked <span className="text-[#fd2d2d]">Questions</span>
        </h2>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#fd2d2d] bg-[#120505]"
                    : "border-[#fd2d2d]/40 bg-[#0b0b0b] hover:border-[#fd2d2d]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={24}
                    className={`shrink-0 text-[#fd2d2d] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 text-base leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CalculatorFAQ;
