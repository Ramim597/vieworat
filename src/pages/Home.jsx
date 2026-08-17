import ytIcon from "../assets/yt_icon.png";
import { CirclePlay } from "lucide-react";
function Home() {
  return (
    <>
      {/* Glow red effect */}
      <div className="fixed right-[-10%] top-[20%] w-64 h-64 sm:w-80 sm:h-80 sm:top-[22%] md:w-96 md:h-96 md:top-[24%] lg:w-[28rem] lg:h-[28rem] lg:top-[25%] bg-red-600/40 rounded-full blur-3xl pointer-events-none" />

      <div className="mt-12 flex items-center justify-center flex-col text-center">
        <div className="p-3 h-8 flex gap-1.5 border border-red-400 rounded-[10px] font-medium shadow-2xl items-center justify-center text-primary">
          <img
            className="size-5"
            src={ytIcon}
            alt="YouTube logo: white play button on red circular background"
          />
          <p className="text-sm">BUILT FOR YOUTUBERS</p>
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
            <button className="primary-button w-40 h-9">
              Start Free Analysis
            </button>

            <a
              href="#"
              className="flex items-center justify-center w-48 h-10 border gap-2 rounded border-primary"
            >
              <CirclePlay size={23} strokeWidth={2} /> See How It Works
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
