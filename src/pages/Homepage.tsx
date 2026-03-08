import { Slider } from "@/components/ui";
import { ScrollReveal } from "@/hooks";

const Homepage = () => {
  // Hero section refs
  const heroLabelRef = ScrollReveal();
  const heroNameRef = ScrollReveal();
  const heroSubtitleRef = ScrollReveal();
  const heroDescRef = ScrollReveal();
  const heroBtnsRef = ScrollReveal();
  const heroImageRef = ScrollReveal();

  // About section refs
  const aboutHeaderRef = ScrollReveal();
  const aboutText1Ref = ScrollReveal();
  const aboutText2Ref = ScrollReveal();
  const aboutInfoRef = ScrollReveal();
  const sliderRef = ScrollReveal();

  return (
    <>
      <section className="flex-1 bg-[#fafafc] dark:bg-[#0a0a0c] z-0 pb-28 text-white flex items-center px-16 py-12">
        <div className="w-full mx-12 flex flex-col md:flex-row items-center justify-around gap-12 z-1">
          <div className="flex-1 flex flex-col text-center md:text-start gap-6">
            {/* Label */}
            <div ref={heroLabelRef} className="reveal flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#a57f15] dark:bg-[#c9a84c]" />
              <span className="text-xs tracking-[0.3em] text-gray-800 cormorant-garamond dark:text-gray-400 uppercase">
                Open to Opportunities
              </span>
            </div>

            {/* Name */}
            <div
              ref={heroNameRef}
              className="reveal reveal-delay-1 leading-none"
            >
              <h1 className="text-7xl font-serif font-bold cormorant-garamond text-zinc-800 dark:text-white">
                Arsyad
              </h1>
              <h1 className="text-7xl font-serif italic cormorant-garamond text-[#a57f15] dark:text-[#c9a84c]">
                Rianda Putra
              </h1>
            </div>

            {/* Subtitle */}
            <p
              ref={heroSubtitleRef}
              className="reveal reveal-delay-2 cormorant-garamond text-sm font-extrabold text-gray-800 dark:text-gray-400 tracking-widest border-b border-gray-700 pb-4"
            >
              // Junior Full-Stack Developer & Technical Support
            </p>

            {/* Description */}
            <p
              ref={heroDescRef}
              className="reveal reveal-delay-3 text-gray-700 dark:text-gray-300 cormorant-garamond text-base leading-relaxed max-w-md font-semibold"
            >
              New to the field but passionate about growing. I love picking up
              new technologies, building small projects, and learning from every
              mistake along the way.
            </p>

            {/* Buttons */}
            <div
              ref={heroBtnsRef}
              className="reveal reveal-delay-4 flex justify-around md:justify-start items-center gap-6 mt-2"
            >
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

          {/* Image */}
          <div
            ref={heroImageRef}
            className="reveal reveal-right flex-1 flex flex-col items-center gap-0 relative"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#a57f15] dark:border-[#c9a84c]" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#a57f15] dark:border-[#c9a84c]" />
              <div className="w-full aspect-3/4 bg-[#1a1a1f] flex flex-col items-center justify-center gap-3">
                <img
                  src="/Hero.jpg"
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

      {/* About Section */}
      <section className="flex-1 flex-col bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
        {/* Section header */}
        <div
          ref={aboutHeaderRef}
          className="reveal w-full flex mb-16 items-baseline gap-3"
        >
          <span className="jetbrains-mono text-[0.5rem]">01</span>
          <h2 className="cormorant-garamond text-nowrap text-5xl font-thin flex items-end gap-2">
            About <span className="text-[#c9a84c]">Me</span>
          </h2>
          <div className="w-full bg-[#c9a84c] h-px"></div>
        </div>

        <div className="w-full mx-12 flex md:items-center flex-col md:flex-row md:justify-around mb-12">
          {/* Bio text */}
          <div className="flex flex-col gap-6 items-center">
            <p
              ref={aboutText1Ref}
              className="reveal reveal-left text-gray-700 dark:text-gray-300 cormorant-garamond text-lg leading-relaxed max-w-md font-semibold"
            >
              I'm a <b>Junior Full-Stack Developer</b> with a passion for
              learning and growth. I enjoy exploring new technologies, building
              projects, and continuously improving my skills. I'm excited to
              contribute to meaningful projects and collaborate with others in
              the tech community.
            </p>
            <p
              ref={aboutText2Ref}
              className="reveal reveal-left reveal-delay-2 text-gray-700 dark:text-gray-300 cormorant-garamond text-lg leading-relaxed max-w-md font-semibold"
            >
              In my free time, I love to read tech blogs, experiment with new
              Programming Languages, and Work on Personal Projects. I'm always
              eager to take on new <i>Challenges</i> and expand my knowledge in
              the world of <b>Software Development</b>.
            </p>
          </div>

          {/* Info blocks */}
          <div
            ref={aboutInfoRef}
            className="reveal reveal-right flex flex-col items-center relative"
          >
            <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
              <h2 className="text-xl jetbrains-mono font-bold">Location</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Bandung, Indonesia
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Kediri, Indonesia
              </p>
            </div>
            <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
              <h2 className="text-xl jetbrains-mono font-bold">Currently</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Open to Opportunities
              </p>
            </div>
            <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
              <h2 className="text-xl jetbrains-mono font-bold">
                Last Education
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Vocational High School Major in Animation
              </p>
            </div>
            <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
              <h2 className="text-xl jetbrains-mono font-bold">Languages</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                Indonesia, English
              </p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="reveal reveal-delay-2 w-full">
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Homepage;
