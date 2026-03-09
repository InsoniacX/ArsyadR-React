import { projects } from "@/data";
import type { Project } from "@/types";
import { useState } from "react";

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`stagger-child group relative overflow-hidden border border-white/10 dark:border-white/10 hover:border-black/10
  bg-white dark:bg-[#0f0f11]
  transition-all duration-500
  ${featured ? "md:col-span-2" : ""}
      `}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition:
          "opacity .6s ease, transform .6s ease, border-color .3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64" : "h-44"}`}>
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Gold top border that grows on hover */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-[#c9a84c] transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Number + title row */}
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className={`cormorant-garamond font-light text-zinc-900 dark:text-white leading-tight
            ${featured ? "text-2xl" : "text-xl"}`}
          >
            {project.title}
          </h3>
          <span className="jetbrains-mono text-[10px] text-[#c9a84c] tracking-[.15em] shrink-0">
            {String(projects.indexOf(project) + 1).padStart(3, "0")}
          </span>
        </div>

        {/* Description */}
        <p
          className={`cormorant-garamond text-gray-600 dark:text-gray-400 leading-relaxed
          ${featured ? "text-base" : "text-sm"}`}
        >
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-2 pt-4 border-t border-black/10 dark:border-white/10">
          {project.githubURL && (
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="jetbrains-mono text-[10px] tracking-[.18em] uppercase text-gray-500 dark:text-gray-400
                hover:text-[#c9a84c] dark:hover:text-[#c9a84c] transition-colors
                flex items-center gap-1.5 relative
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                after:bg-[#c9a84c] after:transition-all after:duration-300 hover:after:w-full"
            >
              GitHub ↗
            </a>
          )}
          {project.demoURL && (
            <a
              href={project.demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="jetbrains-mono text-[10px] tracking-[.18em] uppercase
                text-[#c9a84c] transition-colors
                flex items-center gap-1.5 relative
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                after:bg-[#c9a84c] after:transition-all after:duration-300 hover:after:w-full"
            >
              Preview ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
