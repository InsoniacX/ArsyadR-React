import { Cards } from "../components/ui";

const Projects = () => {
  return (
    <section className="flex-1 bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      <div className="w-full mx-12 flex items-center justify-around gap-12">
        <Cards
          imgSrc="../assets/Screenshot 2025-08-15 153037.png"
          title="Project 1"
          description="This is description for Project 1"
          githubURL="https://github.com/InsoniacX"
          demoURL="https://example.com/demo"
        />
      </div>
    </section>
  );
};

export default Projects;
