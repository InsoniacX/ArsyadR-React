const About = () => {
  return (
    <section className="flex-1 flex-col bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      <div className="w-full flex mb-12 items-baseline gap-3">
        <span className="jetbrains-mono text-[0.5rem]">01</span>
        <h2 className="cormorant-garamond text-nowrap text-5xl font-thin flex items-end gap-2">
          About <span className="text-[#c9a84c]">Me</span>
        </h2>
        <div className="w-full bg-[#c9a84c] h-px"></div>
      </div>
      <div className="w-full mx-12 flex items-center justify-around gap-12">
        <div className="flex-1 flex flex-col gap-6"></div>
        <div className="flex-1 flex flex-col items-center gap-0 relative"></div>
      </div>
    </section>
  );
};

export default About;
