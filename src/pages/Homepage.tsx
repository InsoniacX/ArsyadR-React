const Homepage = () => {
  return (
    <section className="flex-1 bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      <div className="w-full mx-12 flex items-center justify-around gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-[#a57f15] dark:bg-[#c9a84c]" />
            <span className="text-xs tracking-[0.3em] text-gray-800 cormorant-garamond dark:text-gray-400 uppercase">
              Open to Opportunities
            </span>
          </div>

          <div className="leading-none">
            <h1 className="text-7xl font-serif font-bold cormorant-garamond text-zinc-800 dark:text-white">
              Arsyad
            </h1>
            <h1 className="text-7xl font-serif italic cormorant-garamond text-[#a57f15] dark:text-[#c9a84c]">
              Rianda Putra
            </h1>
          </div>

          <p className="cormorant-garamond text-sm font-extrabold text-gray-800 dark:text-gray-400 tracking-widest border-b border-gray-700 pb-4">
            // Junior Full-Stack Developer & Technical Support
          </p>

          <p className="text-gray-700 dark:text-gray-300 cormorant-garamond text-base leading-relaxed max-w-md font-semibold">
            New to the field but passionate about growing. I love picking up new
            technologies, building small projects, and learning from every
            mistake along the way.
          </p>

          <div className="flex items-center gap-6 mt-2">
            <a
              href="/project"
              className="px-6 py-3 bg-[#a57f15] hover:bg-[#c2951a] dark:bg-[#c9a84c] text-black text-xs tracking-[0.2em] uppercase font-bold dark:hover:bg-[#b8943d] transition-colors cursor-pointer"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="text-xs tracking-[0.2em] uppercase text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              Get in Touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-0 relative">
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#a57f15] dark:border-[#c9a84c]" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#a57f15] dark:border-[#c9a84c]" />

            <div className="w-full aspect-3/4 bg-[#1a1a1f] flex flex-col items-center justify-center gap-3">
              <img
                src="/download.jpg"
                alt="Profile"
                className="border-4 border-[#a57f15] dark:border-[#c9a84c]"
              />
            </div>

            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#a57f15] dark:border-[#c9a84c]" />
          </div>

          <div className="w-full max-w-sm grid grid-cols-2 border border-gray-800">
            {[
              { value: "<1", label: "Years" },
              { value: "8", label: "Projects" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-4 border-r border-gray-800 last:border-r-0"
              >
                <span className="text-xl font-bold text-black dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-widest text-gray-500 uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
