import { Cards } from "../components/ui";

const Projects = () => {
  return (
    <section className="flex-1 flex-col bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      <div className="w-full flex mb-16 items-baseline gap-3">
        <span className="jetbrains-mono text-[0.5rem]">02</span>
        <h2 className="cormorant-garamond text-nowrap text-5xl font-thin flex items-end gap-2">
          My <span className="text-[#c9a84c]">Projects</span>
        </h2>
        <div className="w-full bg-[#c9a84c] h-px"></div>
      </div>
      <div className="flex w-full my-12 gap-12">
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 1"
          description="This is description for Project 1"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 2"
          description="This is description for Project 2"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 3"
          description="This is description for Project 3"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 4"
          description="This is description for Project 4"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 5"
          description="This is description for Project 5"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
      </div>
    </section>
  );
};

export default Projects;
