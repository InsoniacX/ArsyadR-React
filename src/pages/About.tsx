const About = () => {
  return (
    <section className="flex-1 flex-col bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      <div className="w-full flex mb-16 items-baseline gap-3">
        <span className="jetbrains-mono text-[0.5rem]">01</span>
        <h2 className="cormorant-garamond text-nowrap text-5xl font-thin flex items-end gap-2">
          About <span className="text-[#c9a84c]">Me</span>
        </h2>
        <div className="w-full bg-[#c9a84c] h-px"></div>
      </div>
      <div className="w-full mx-12 flex items-center justify-around">
        <div className="flex-1 flex flex-col gap-6 items-center">
          <p className="text-gray-700 dark:text-gray-300 cormorant-garamond text-lg leading-relaxed max-w-md font-semibold">
            I'm a <b>Junior Full-Stack Developer</b> with a passion for learning
            and growth. I enjoy exploring new technologies, building projects,
            and continuously improving my skills. I'm excited to contribute to
            meaningful projects and collaborate with others in the tech
            community.
          </p>
          <p className="text-gray-700 dark:text-gray-300 cormorant-garamond text-lg leading-relaxed max-w-md font-semibold">
            In my free time, I love to read tech blogs, experiment with new
            Programming Languages, and Work on Personal Projects. I'm always
            eager to take on new <i>Challenges</i> and expand my knowledge in
            the world of <b>Software Development</b>.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center relative">
          <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
            <h2 className="text-xl jetbrains-mono font-bold ">Location</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Jakarta, Indonesia
            </p>
          </div>
          <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
            <h2 className="text-xl jetbrains-mono font-bold ">Currently</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Open to Opportunities
            </p>
          </div>
          <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
            <h2 className="text-xl jetbrains-mono font-bold ">
              Last Education
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Vocational High School Major in Animation
            </p>
          </div>
          <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
            <h2 className="text-xl jetbrains-mono font-bold ">Languages</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Indonesia, English
            </p>
          </div>
          {/* <div className="w-full h-1/4 relative cormorant-garamond border-gray-900 border-s-2 my-3 py-4 px-4">
            <h2 className="text-xl jetbrains-mono font-bold ">Location</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Jakarta, Indonesia
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
