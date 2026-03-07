import type { CardProps } from "@/types";
import { FaGithub, FaArrowRight } from "react-icons/fa6";

const Cards = ({ imgSrc, title, description, githubURL }: CardProps) => {
  return (
    <div className="flex-col max-w-1/5 rounded-lg jetbrains-mono bg-[#1a1a1f] p-6 gap-4 w-full h-fit">
      <div className="w-full h-fit bg- flex flex-col justify-around rounded-md p-6">
        <img src={imgSrc} alt="This is Cards Thumbnail" sizes="240px" />
      </div>
      <div className="w-fit text-center space-y-4 h-fit bg- flex flex-col justify-around rounded-md p-6">
        <div className="px-4 py-2 space-y-4">
          <h3 className="text-xl font-bold capitalize">{title}</h3>
          <p>{description}</p>
        </div>
        <a
          href={githubURL}
          className="flex rounded-lg border-2 items-center justify-center space-x-2 py-2"
        >
          <FaGithub size={32} />
          <span>Github Repository</span>
        </a>
        <a
          href={githubURL}
          className="flex rounded-lg border-2 items-center justify-center space-x-2 py-2"
        >
          <span>Project Demo</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Cards;
