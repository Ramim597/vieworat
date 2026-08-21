import { TrendingUp, Zap, ShieldCheck } from "lucide-react";

function CalculatorFeatures() {
  const features = [
    {
      icon: TrendingUp,
      title: "Real regional RPMs",
      description:
        "Estimates built on actual per-country ad rates, not a flat guess.",
    },
    {
      icon: Zap,
      title: "Instant results",
      description:
        "Type your views and get an earnings estimate in seconds.",
    },
    {
      icon: ShieldCheck,
      title: "Category-aware accuracy",
      description:
        "Multipliers adjust for niche so your estimate stays realistic.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 mt-20">
      {/* Heading */}
      <h2 className="mb-14 text-center text-4xl font-bold text-white md:text-5xl">
        Earnings
        <span className="text-[#fd2d2d]">Calculator</span> helps you
      </h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-[#fd2d2d] bg-[#080808] p-10 transition-all duration-300 hover:bg-[#fd2d2d]"
            >
              {/* Icon */}
              <div className="mb-8 flex border-primary h-16 w-16 items-center justify-center rounded-2xl bg-[#fd2d2d]/10 transition-all duration-300 group-hover:bg-black/20">
                <Icon
                  size={32}
                  strokeWidth={2}
                  className="text-[#fd2d2d] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-8 text-slate-400 transition-colors duration-300 group-hover:text-white/90">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CalculatorFeatures;