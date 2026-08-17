import { Check } from "lucide-react";
import { pricingPlans } from "../data/pricingPlans";
function PricingCard() {
  return (
    <>
      <h1 className="font-extrabold text-5xl text-center mt-10">
        Simple pricing for modern <span className="text-primary">creators</span>
      </h1>
      <p className="text-center mt-6 text-gray-300">
        Grow faster with AI-powered tools for YouTube, TikTok, and more.
      </p>

      <div className="flex m-auto items-center justify-center">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="w-86.75 h-181.25 border border-zinc-700 p-8 rounded-2xl mt-6 ml-6"
          >
            <h3 className="text-2xl font-semibold text-white-900 transition-colors duration-300">
              {plan.name}
            </h3>
            <p className="text-gray-400  text-sm mt-2 transition-colors duration-300">
              {plan.description}
            </p>
            <h2 className="text-4xl font-bold text-white transition-colors duration-300 mt-5">
              ${plan.price}
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </h2>
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-medium py-3 rounded-xl transition-colors duration-300 mt-6 cursor-pointer">
              {plan.button}
            </button>

            <div className="mt-10">
              {plan.features.map((feature) => (
                <div className="flex items-start gap-3 mt-3.5 text-gray-400">
                  <Check size={18} className="mt-1" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PricingCard;
