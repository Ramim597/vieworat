function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080a10] py-24 lg:py-32">

      {/* Subtle Viewora red glow */}
      <div className="
        absolute
        -right-45
        top-1/2
        -translate-y-1/2
        w-125
        h-125
        rounded-full
        bg-primary/15
        blur-[160px]
        pointer-events-none
      " />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="
          relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#0d111b]
          px-6 py-20
          sm:px-12
          lg:px-20
          text-center
        ">

          {/* Small red glow */}
          <div className="
            absolute
            -right-25
            -top-25
            w-75
            h-75
            rounded-full
            bg-primary/10
            blur-[120px]
            pointer-events-none
          " />

          <div className="relative">

            <h2 className="
              mx-auto
              max-w-4xl
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              text-white
            ">
              Start growing your{" "}
              <span className="text-primary">
                creator journey.
              </span>
            </h2>

            <p className="
              mt-6
              text-lg
              sm:text-xl
              text-slate-400
            ">
              Understand your value, track your growth, and make
              smarter decisions with Viewora.
            </p>

            <button className="mt-5 cursor-pointer group inline-flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
             Start Free Analysis
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </button>
            <p className="mt-5 text-sm text-slate-500">
              Free to start. No credit card required.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;