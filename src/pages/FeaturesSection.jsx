import { features } from "../data/featureSection";


function FeaturesSection() {
  return (
    <section className="w-full bg-[#080b14] px-4 py-24 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Everything you need to
          <span className="bg-linear-to-r from-primary to-[#cd451f] bg-clip-text text-transparent">
            grow smarter
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Powerful tools built for creators who value data over guesswork.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0f1a] transition-all duration-300 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
          >
            {/* Image */}
            <div className="aspect-16/8 w-full overflow-hidden bg-[#111827]">
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-slate-600">Add Image</span>
                </div>
              )}
            </div>

            {/* Text */}
            <div className="px-6 py-6 sm:px-10 sm:py-7">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-400 sm:text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;

// import multplatform from "../assets/Home/channel_rank.jpg";
// import analyze_creator_earnings from "../assets/Home/analyze_creator_earnings.jpg";
// import video_summarizer from "../assets/Home/video_summarizer.jpg";
// import channel_rank from "../assets/Home/channel_rank.jpg";
// function FeaturesSection() {
//   return (
//     <>
//       <h1 className="mt-6 text-[40px] text-center font-bold">
//         Everything you need to
//         <span className="text-primary"> grow smarter</span>
//       </h1>
//       <p className="mt-4 text-xl text-center text-gray-400">
//         Powerful tools built for creators who value data over guesswork.
//       </p>
//       <div>
//         <a href="#">
//           <img
//             src={multplatform}
//             className="w-[400px] h-[300px] rounded-2xl cursor-pointer"
//             alt="multiplatfrom_image"
//           />
//         </a>
//       </div>
//     </>
//   );
// }

// export default FeaturesSection;
