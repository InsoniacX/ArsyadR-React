import { ProjectCard } from "@/components/ui";
import { projects } from "@/data";
import { ScrollReveal, StaggerReveal } from "@/hooks";

const Projects = () => {
  const headerRef = ScrollReveal();
  const gridRef = StaggerReveal();

  return (
    <section className="flex-1 flex-col bg-[#fafafc] dark:bg-[#0a0a0c] text-white flex items-center px-16 py-12">
      {/* Section header */}
      <div
        ref={headerRef}
        className="reveal w-full flex mb-16 items-baseline gap-3"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity .7s ease, transform .7s ease",
        }}
      >
        <span className="jetbrains-mono text-[0.5rem] text-black dark:text-white">
          02
        </span>
        <h2 className="cormorant-garamond text-nowrap text-5xl font-thin text-zinc-900 dark:text-white flex items-end gap-2">
          My <span className="text-[#c9a84c]">Projects</span>
        </h2>
        <div className="w-full bg-[#c9a84c] h-px" />
      </div>

      {/* Masonry grid */}
      <div
        ref={gridRef}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            featured={index === 0} // first card is featured (spans 2 cols)
          />
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        .stagger-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .reveal.revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
