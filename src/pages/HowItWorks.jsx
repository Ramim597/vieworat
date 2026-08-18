function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Paste your YouTube link",
      description:
        "Enter any channel URL, username, or video link to get started.",
    },
    {
      number: "2",
      title: "View estimated earnings",
      description:
        "See revenue estimates, RPM data, and growth projections instantly.",
    },
    {
      number: "3",
      title: "Track performance",
      description:
        "Monitor your channel's progress and compare with benchmarks.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b0f1a] py-24 lg:py-32">
      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 rounded-full bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            How it <span className="text-red-500">works</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Three simple steps to understand your channel's value.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[65%] w-[70%] h-px bg-linear-to-r from-red-500/40 to-white/5" />
              )}

              {/* Number */}
              <div
                className="
                  relative z-10
                  mx-auto
                  w-19
                  h-19
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  border-red-500/30
                  bg-[#111827]
                  shadow-[0_0_30px_rgba(255,43,43,0.08)]
                "
              >
                <span className="text-2xl font-semibold text-red-500">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm mx-auto text-base leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
