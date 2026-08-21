import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { Eye, Globe, LayoutGrid, DollarSign } from "lucide-react";
import CountrySelect from "../components/CountrySelect";
import { SiYoutubeshorts } from "react-icons/si";
import ContentCategory from "../components/ContentCategory";
import { useState } from "react";
import { categoryMultipliers } from "../data/rpmData/categoryData";
import { countryData } from "../data/rpmData/countryData";

function YouTubeMoneyCalculator() {
  const [views, setViews] = useState(100_000);
  const [selectedCountry, setSelectedCountry] = useState("AE");
  const [earnings, setEarnings] = useState(0);
  const [contentCategory, setContentCategory] = useState("all");

  const countryRPM = countryData[selectedCountry]?.baseRPM; // country rpm used as base RPM
  const categoryMultiplier = categoryMultipliers[contentCategory];
  console.log(categoryMultiplier);

  function calcEarnings() {
    const finalRPM = countryRPM * categoryMultiplier;
    const earnings = (finalRPM * Number(views)) / 1000;

    setEarnings(earnings);
  }

  return (
    <div className="mt-26 mb-25">
      <title>youtube-money-calculator</title>

      {/* toll bar */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-5xl mt-3">
          YouTube Money <span className="text-primary">Calculator</span>
        </h1>
        <div className="flex justify-center w-full px-4">
          <div className="mt-17 w-full max-w-2xl border border-zinc-700/80 bg-zinc-950/80 p-2 rounded-2xl flex flex-wrap justify-center gap-2 shadow-lg">
            <button className="flex-1 cursor-pointer min-w-32.5 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 text-primary border border-primary/40 transition-all duration-200 hover:bg-primary/20">
              <FaYoutube size={20} />
              YouTube
            </button>

            <button className="flex-1 cursor-pointer min-w-32.5 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-300 border border-transparent transition-all duration-200 hover:bg-zinc-900 hover:text-primary">
              <SiYoutubeshorts size={20} />
              YT Shorts
            </button>

            <button className="flex-1 cursor-pointer min-w-32.5 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-300 border border-transparent transition-all duration-200 hover:bg-pink-500/10 hover:text-pink-500 hover:border-pink-500/40">
              <FaInstagram size={20} />
              Instagram
            </button>

            <button className="flex-1 cursor-pointer min-w-32.5 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-300 border border-transparent transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/40">
              <FaFacebook size={20} />
              Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="ml-20 mt-10 gap-10 flex">
        {/* left section */}
        <div className="flex items-center flex-col gap-4">
          <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <p className="text-zinc-400 text-sm">
                  TOTAL YOUTUBE LONG VIEWS
                </p>
              </div>
              <div className="flex items-center justify-between border mt-2 p-1 rounded-md border-zinc-700">
                <input
                  type="text"
                  value={views}
                  onChange={(e) => {
                    setViews(e.target.value);
                  }}
                  className="border-primary outline-0 text-sm p-2"
                  placeholder="100,000"
                />{" "}
                <Eye size={20} className="mr-3" />{" "}
              </div>
              <p className="text-sm mt-5 text-zinc-400">
                Tip: Type 1k, 12.5k, 1M, 2.3M for quick input
              </p>
            </div>
          </div>

          <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
            <div>
              <div className="flex items-center gap-1">
                <Globe size={20} color="#FF0000" />{" "}
                <p className="text-zinc-400 text-sm">TARGET COUNTRY</p>
              </div>
              <div>
                <CountrySelect
                  value={selectedCountry}
                  onChange={(option) => {
                    setSelectedCountry(option.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
            <div>
              <div className="flex items-center gap-1">
                <LayoutGrid size={20} color="#FF0000" />{" "}
                <p className="text-zinc-400 text-sm">CONTENT CATEGORY</p>
              </div>
              <div>
                {" "}
                <ContentCategory
                  value={contentCategory}
                  onChange={(option) => {
                    setContentCategory(option.value);
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="right-div w-2xl bg-linear-to-br p-7 rounded-xl from-[#720000] via-[#3d0000] to-[#150000]">
          <div className="border-primary size-15 flex items-center justify-center border-2 rounded-full">
            <DollarSign
              className="font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,0,123,0.8)]"
              size={35}
            />
          </div>
          <div className="mt-2 text-gray-300">ESTIMATE EARNINGS</div>
          <div className="font-bold mt-4 text-6xl">${earnings.toFixed(2)}</div>
          <hr className="text-primary mt-2.5 w-md" />
          <p className="mt-2.5 text-gray-300">
            Potential earning based on your inputs.
          </p>
          <button
            className="w-full h-14 transition-all cursor-pointer duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 mt-6 flex items-center justify-center rounded-lg bg-primary text-white text-lg font-medium"
            onClick={calcEarnings}
          >
            Calculate Earnings
          </button>
        </div>
      </div>
    </div>
  );
}

export default YouTubeMoneyCalculator;
