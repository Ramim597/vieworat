import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { Eye, Globe, LayoutGrid, ArrowRight, ChevronDown , DollarSign} from "lucide-react";
import { SiYoutubeshorts } from "react-icons/si";



function YouTubeMoneyCalculator() {
  return (
    <>
      <title>youtube-money-calculator</title>

      {/* toll bar */}
      <div className="flex items-center justify-center flex-col"> 
          <h1 className="font-bold text-5xl mt-3">YouTube Money <span className="text-primary">Calculator</span></h1>
            <div className="flex gap-1.5 mt-6">
              <div className="card"><FaYoutube size={20} color="#FF0000" /> <p>YouTube</p></div>
              <div className="card"><SiYoutubeshorts size={20} color="#FF0000" /> <p>YouTube</p></div>
              <div className="card"><FaInstagram size={20} color="#E4405F" /> <p>YouTube</p></div>
              <div className="card"><FaFacebook size={20} color="#1877F2" /> <p>YouTube</p></div>
          </div>
      </div>
     
     {/* Calculator */}
     <div className="ml-20 mt-10 gap-10 flex">

      {/* left section */}
      <div className="flex items-center flex-col gap-4">
         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><FaYoutube size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">TOTAL YOUTUBE LONG VIEWS</p></div>   
            <div className="flex items-center justify-between border mt-2 p-1 rounded-md border-zinc-700"><input  type="text" className="border-primary outline-0 text-sm"  placeholder="100,000"/> <Eye size={18} /> </div>
          </div>
        </div>

         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><Globe size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">TARGET COUNTRY</p></div>   
            <div className="flex items-center justify-between border mt-2 p-1 rounded-md border-zinc-700"><input  type="text" className="border-primary outline-0 text-sm"  placeholder="100,000"/> <ChevronDown size={18} /> </div>
          </div>
        </div>

         <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
          <div>
            <div className="flex items-center gap-1"><LayoutGrid size={18} color="#FF0000"/> <p className="text-zinc-400 text-sm">CONTENT CATEGORY</p></div>   
            <div className="flex items-center justify-between border mt-2 p-1 rounded-md border-zinc-700"><input  type="text" className="border-primary outline-0 text-sm"  placeholder="100,000"/> <ChevronDown size={18} /> </div>
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

          <div className="flex primary-button w-xl p-2 mt-2.5 justify-between items-center">
            <button>
              Calculate Earnings
            </button>
              <ArrowRight className="ml-88" size={22} />
          </div>
        </div>
     </div>
    </>
  )
}

export default YouTubeMoneyCalculator
