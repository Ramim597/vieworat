import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { Eye, Globe, LayoutGrid, ArrowRight, ChevronDown , DollarSign} from "lucide-react";
import CountrySelect from "../components/CountrySelect"
import { SiYoutubeshorts } from "react-icons/si";
import ContentCategory from "../components/ContentCategory";

function YouTubeMoneyCalculator() {
  return (
    <div className="mt-26 mb-25">
      <title>youtube-money-calculator</title>

      {/* toll bar */}
      <div className="flex items-center justify-center flex-col"> 
          <h1 className="font-bold text-5xl mt-3">YouTube Money <span className="text-primary">Calculator</span></h1>
            <div className="flex gap-1.5 mt-6 border-zinc-700 p-3 border rounded-md group">
              <div className="card group card hover:bg-primary/20 transition-colors duration-300"><FaYoutube size={20} color="#FF0000"/> <p>YouTube</p></div>
              <div className="card group card hover:bg-primary/20 transition-colors duration-300"><SiYoutubeshorts size={20} color="#FF0000" /> <p>YT Shorts</p></div>
              <div className="card group card hover:bg-primary/20 transition-colors duration-300"><FaInstagram size={20} color="#E4405F" /> <p>Instagram</p></div>
              <div className="card group card hover:bg-primary/20 transition-colors duration-300"><FaFacebook size={20} color="#1877F2" /> <p>Facebook</p></div>
          </div>
      </div>
     
     {/* Calculator */}
     <div className="ml-20 mt-10 gap-10 flex">

      {/* left section */}
      <div className="flex items-center flex-col gap-4">
         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><FaYoutube size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">TOTAL YOUTUBE LONG VIEWS</p>
            </div>   
            <div className="flex items-center justify-between border mt-2 p-1 rounded-md border-zinc-700"><input  type="text" className="border-primary outline-0 text-sm p-2"  placeholder="100,000"/> <Eye size={18} /> </div>
            <p className="text-sm mt-5 text-zinc-400">Tip: Type 1k, 12.5k, 1M, 2.3M for quick input</p>
          </div>
        </div>

         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><Globe size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">TARGET COUNTRY</p></div>   
            <div><CountrySelect /></div>
          </div>
        </div>

         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><LayoutGrid size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">CONTENT CATEGORY</p></div>   
            <div> <ContentCategory /> </div>
          </div>
        </div>
      </div>
       
       {/* right section */}
        <div className="right-div w-2xl bg-linear-to-br p-7 rounded-xl from-[#720000] via-[#3d0000] to-[#150000]">
          <div className="border-primary size-15 flex items-center justify-center border-2 rounded-full">
            <DollarSign className="font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,0,123,0.8)]" size={35}/>
          </div>
          <div className="mt-2 text-gray-300">
            ESTIMATE EARNINGS
            </div>
          <div className="font-bold text-6xl">$0.00</div>
          <hr className="text-primary mt-2.5 w-md" />
          <p className="mt-2.5 text-gray-300">Potential earning based on your inputs.</p>
         <button className="w-full h-14 transition-all cursor-pointer duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 mt-6 flex items-center justify-center rounded-lg bg-primary text-white text-lg font-medium">Calculate Earnings</button>
        </div>
     </div>
    </div>
  )
}

export default YouTubeMoneyCalculator
