function CalculatorHowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Enter your views",
      description: "e.g. 100K, 500K, 1M views",
    },
    {
      number: "2",
      title: "Choose country & category",
      description: "RPM adjusts based on your selected inputs",
    },
    {
      number: "3",
      title: "Get your estimated earnings",
      description: "See your potential revenue instantly",
    },
  ];

  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            How our <span className="text-[#fd2d2d]">Earnings Calculator </span>
            works
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
            Three simple steps between you and an estimate of your potential
            YouTube earnings.
          </p>

          <a
            href="#calculator"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#fd2d2d] px-7 py-4 font-semibold text-white shadow-lg shadow-[#fd2d2d]/20 transition-all duration-300 hover:bg-[#e62626]"
          >
            Calculate Your Earnings
          </a>
        </div>

        {/* Right side */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6.5 top-7 h-[calc(100%-56px)] w-px bg-[#fd2d2d]/40" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-7">
                {/* Number */}
                <div className="relative z-10 flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full border border-[#fd2d2d] bg-[#fd2d2d] text-lg font-bold text-white shadow-lg shadow-[#fd2d2d]/20">
                  {step.number}
                </div>

                {/* Text */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-base text-slate-500 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorHowItWorks;
