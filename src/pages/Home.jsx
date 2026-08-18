import { CirclePlay } from "lucide-react";
import SupportedPlatforms from "./SupportedPlatforms";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import FinalCTA from "./FinalCTA";

function Home() {
  return (
    <>
      {/* Glow red effect */}
      <div className="fixed right-[-10%] top-[20%] w-64 h-64 sm:w-80 sm:h-80 sm:top-[22%] md:w-96 md:h-96 md:top-[24%] lg:w-[28rem] lg:h-[28rem] lg:top-[25%] bg-red-600/40 rounded-full blur-3xl pointer-events-none" />

      <div className="mt-25 flex items-center justify-center flex-col text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#ff2d2d]" />

          <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Built for YouTubers
          </span>
        </div>

        {/* main section home */}
        <div className="mt-5">
          <h1 className="lg:text-[4rem] font-primary font-extrabold mt-1">
            Know your <span className="text-primary">worth.</span> <br /> Grow
            it with <span className="text-primary">AI.</span>
          </h1>
          <p className="text-gray-300 mt-1">
            Discover your real YouTube earning potential and <br />
            unlock Ai-powered insights made for creators.
          </p>

          {/* buttons */}
          <div className="mt-20 flex items-center justify-between">
            <button className="inline-flex items-center cursor-pointer justify-center gap-3 rounded-md bg-primary px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
              Start Free Analysis
            </button>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-primary bg-transparent px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
            >
              <CirclePlay size={23} strokeWidth={2} /> See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* supported section */}
      <div className="mt-10">
        <SupportedPlatforms />
      </div>

      {/* Features */}
      <div>
        <FeaturesSection />
      </div>

      {/* How it works */}
      <div>
        <HowItWorks />
      </div>

      {/* Final call to action Btn */}
      <div>
        <FinalCTA />
      </div>
    </>
  );
}

export default Home;
