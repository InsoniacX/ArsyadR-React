import { useEffect, useState } from "react";
import { SEQUENCE } from "@/data";
import type { TerminalLine } from "@/types";

const OUTPUT_DELAY = 80;
const CMD_PAUSE = 400;

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

  // Queue of remaining steps to process
  const [stepQueue, setStepQueue] = useState<number[]>(
    SEQUENCE.map((_, i) => i),
  );
  const [waitingForCmd, setWaitingForCmd] = useState(false);
  const [pendingForm, setPendingForm] = useState(false);

  // Process next step in queue
  useEffect(() => {
    // Don't proceed if waiting for a cmd to finish typing
    if (waitingForCmd) return;
    // Nothing left in queue
    if (stepQueue.length === 0) return;

    const [current, ...rest] = stepQueue;
    const step = SEQUENCE[current];

    const t = setTimeout(
      () => {
        if (step.type === "cmd") {
          // Start typing — pause queue until typing is done
          setCurrentCmdIndex(current);
          setWaitingForCmd(true);
          setStepQueue(rest);
        } else if (step.type === "form") {
          setPendingForm(true);
          setStepQueue(rest);
        } else if (step.type === "blank" || step.type === "divider") {
          setVisibleLines((prev) => [...prev, { ...step, id: current }]);
          setStepQueue(rest);
        } else {
          // output line
          setVisibleLines((prev) => [...prev, { ...step, id: current }]);
          setStepQueue(rest);
        }
      },
      step.type === "cmd" ? CMD_PAUSE : OUTPUT_DELAY,
    );

    return () => clearTimeout(t);
  }, [stepQueue, waitingForCmd]);

  const handleCmdDone = (id: number) => {
    const step = SEQUENCE[id];

    setVisibleLines((prev) => [
      ...prev,
      { id, type: "cmd", prompt: step.prompt, text: step.text, typed: true },
    ]);

    setCurrentCmdIndex(null);
    setWaitingForCmd(false); // ← this unblocks the queue to continue
  };

  // Handle form visibility separately in a useEffect
  useEffect(() => {
    if (!pendingForm) return;
    if (waitingForCmd) return;
    if (stepQueue.length > 0) return;

    const t = setTimeout(() => {
      setFormVisible(true);
      setPendingForm(false);
    }, 400);

    return () => clearTimeout(t);
  }, [pendingForm, waitingForCmd, stepQueue]);

  return { visibleLines, currentCmdIndex, formVisible, handleCmdDone };
};

export default useTerminalSequence;
