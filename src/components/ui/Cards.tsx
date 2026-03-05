import type { CardProps } from "@/types";

const Cards = ({
  imgSrc,
  title,
  description,
  githubURL,
  demoURL,
}: CardProps) => {
  return (
    <div className="flex flex-col max-w-1/5 justify-around rounded-lg bg-[#1a1a1f] p-6 gap-4 w-full h-fit">
      <div className="w-full h-fit bg- flex flex-col justify-around rounded-md p-6">
        <img src={imgSrc} alt="This is Cards Thumbnail" sizes="240px" />
      </div>
      <div className="w-fit text-center space-y-4 h-fit bg- flex flex-col justify-around rounded-md p-6">
        <div className="px-4 py-2">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex w-full justify-between gap-4 items-center">
          <a href={githubURL} className="rounded-md px-4 py-2">
            This is Button
          </a>
          <a href={demoURL} className="rounded-md px-4 py-2">
            This is Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
