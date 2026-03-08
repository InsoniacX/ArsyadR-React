import { useRef, useEffect } from "react";
import { techs } from "@/data";

// Double the array so the loop is seamless
const doubled = [...techs, ...techs];

const Slider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 3; // px per frame — adjust to taste
    const singleWidth = track.scrollWidth / 2;

    const animate = () => {
      position += speed;
      // Reset once we've scrolled one full set of items
      if (position >= singleWidth) {
        position = 0;
      }
      track.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-6 w-max">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 w-20 h-20 md:w-32 md:h-32 shrink-0
                border border-white/10 bg-white/3
                hover:border-[#c9a76f]/40 hover:bg-[#c9a76f]/5
                transition-all duration-200 cursor-default"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-8 h-8 md:w-12 md:h-12 ${tech.invert ? "invert" : ""}`}
              />
              <span className="jetbrains-mono text-[12px] text-gray-500 uppercase tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
