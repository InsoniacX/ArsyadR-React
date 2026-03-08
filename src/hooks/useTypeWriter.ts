import { useEffect, useState } from "react";

interface UseTypewriterReturn {
  displayed: string;
  done: boolean;
}

const useTypewriter = (
  text: string,
  speed: number = 40,
  start: boolean = false,
): UseTypewriterReturn => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    setDisplayed("");
    setDone(false);

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return { displayed, done };
};

export default useTypewriter;
