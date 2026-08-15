import ytIcon from "../assets/yt_icon.png";
import { CirclePlay } from "lucide-react";
function Home() {
  return (
    <>
      <div className="mt-20 flex items-center justify-center flex-col text-center">
        <div className="w-42 h-8 flex gap-1.5 border border-red-400 rounded-[10px] font-medium shadow-2xl items-center justify-center text-primary">
          <img
            className="size-5"
            src={ytIcon}
            alt="YouTube logo: white play button on red circular background"
          />
          <p className="text-sm">Built for YouTubers</p>
        </div>

        {/* main section home */}
        <div className="mt-5">
          <h1 className="text-5xl font-primary font-extrabold mt-1.5">
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
