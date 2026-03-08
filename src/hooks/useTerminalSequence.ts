import { useEffect, useState } from "react";
import { DELAYS, SEQUENCE } from "@/data";
import type { TerminalLine } from "@/types";

interface UseTerminalSequenceReturn {
  visibleLines: TerminalLine[];
  currentCmdIndex: number | null;
  formVisible: boolean;
  handleCmdDone: (id: number) => void;
}

const useTerminalSequence = (): UseTerminalSequenceReturn => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState<number | null>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    SEQUENCE.forEach((step, i) => {
      const delay = DELAYS[i];
      const t = setTimeout(() => {
        const line: TerminalLine = { ...step, id: i };

        if (step.type === "cmd") {
          setCurrentCmdIndex(i);
        } else if (step.type === "form") {
          setFormVisible(true);
        } else {
          setVisibleLines((prev) => [...prev, line]);
        }
      }, delay);

      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleCmdDone = (id: number) => {
    const step = SEQUENCE[id];
    setVisibleLines((prev) => [
      ...prev,
      { id, type: "cmd", prompt: step.prompt, text: step.text, typed: true },
    ]);
    setCurrentCmdIndex(null);
  };

  return { visibleLines, currentCmdIndex, formVisible, handleCmdDone };
};

export default useTerminalSequence;
