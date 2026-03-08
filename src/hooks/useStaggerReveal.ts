import { useEffect, useRef } from "react";

const useStaggerReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const children = container.querySelectorAll(".stagger-child");
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add("stagger-revealed");
          }, i * 120);
        });
        observer.unobserve(container);
      },
      { threshold: 0.05 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useStaggerReveal;
