import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

function SupportedPlatforms() {
  const platforms = [
    {
      name: "Twitter",
      icon: <FaTwitter />,
      color: "text-[#1DA1F2]",
    },
    {
      name: "Shorts",
      icon: <FaYoutube />,
      color: "text-[#FF0000]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      color: "text-[#FF0000]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      color: "text-[#E4405F]",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      color: "text-[#00F2EA]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      color: "text-[#1877F2]",
    },
  ];

  const infinitePlatforms = [...platforms, ...platforms];

  return (
    <section className="w-full overflow-hidden bg-[#080808] py-20">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-sm font-bold tracking-[0.35em] text-slate-500">
          SUPPORTED MONETIZATION PLATFORMS
        </h2>

        <div className="mx-auto mt-5 h-0.5 w-24 bg-linear-to-r from-transparent via-[#ff3030] to-transparent" />
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-linear-to-r from-[#080808] via-[#080808]/80 to-transparent" />

        {/* Moving content */}
        <div className="flex w-max animate-[marquee_25s_linear_infinite]">
          {infinitePlatforms.map((platform, index) => (
            <div
              key={index}
              className="mx-10 flex min-w-47.5 items-center gap-4"
            >
              {/* Platform Icon */}
              <span className={`text-3xl ${platform.color}`}>
                {platform.icon}
              </span>

              {/* Platform Name */}
              <span className="whitespace-nowrap text-xl font-semibold text-slate-400">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-linear-to-l from-[#080808] via-[#080808]/80 to-transparent" />
      </div>
    </section>
  );
}

export default SupportedPlatforms;
