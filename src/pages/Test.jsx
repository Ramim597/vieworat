import { Eye } from "lucide-react";
import { useState } from "react";
function Test() {
  const [views, setViews] = useState(100_000);
  return (
    <div className="mt-26 mb-25">
      <div className="left-div bg-[#171717] w-100 p-3 rounded-md border border-zinc-700">
        <div>
          <div className="flex items-center gap-1">
            <p className="text-zinc-400 text-sm">TOTAL YOUTUBE LONG VIEWS</p>
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
            />
            <Eye size={20} className="mr-3" />
          </div>
          <p className="text-sm mt-5 text-zinc-400">
            Tip: Type 1k, 12.5k, 1M, 2.3M for quick input
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
