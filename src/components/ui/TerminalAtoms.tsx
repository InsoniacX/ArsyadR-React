import { useEffect } from "react";
import useTypewriter from "@/hooks/useTypeWriter";
import type { OutputCls } from "@/types";

// ── Blinking cursor ──
export const Cursor = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <span className="inline-block w-1.75 h-3.25 bg-[#c8a86c] align-middle ml-0.5 animate-blink" />
  );
};

// ── Output color map ──
const OUTPUT_COLORS: Record<OutputCls, string> = {
  gold: "text-[#c8a86c]",
  green: "text-[#4ade80]",
  dim: "text-[#3a3a42]",
  error: "text-[#ff5f57]",
  "": "text-[#9494a4]",
};

// ── Single output line ──
export const OutputLine = ({
  text,
  cls = "",
}: {
  text: string;
  cls?: OutputCls;
}) => (
  <div
    className={`pl-5.5 text-[12px] leading-relaxed mb-1 animate-[fadeUp_.3s_ease_both] ${OUTPUT_COLORS[cls]}`}
  >
    {text}
  </div>
);

// ── Command line with typewriter effect ──
export const CmdLine = ({
  prompt,
  text,
  onDone,
}: {
  prompt: string;
  text: string;
  onDone: () => void;
}) => {
  const { displayed, done } = useTypewriter(text, 42, true);

  useEffect(() => {
    if (done) onDone();
  }, [done, onDone]);

  return (
    <div className="flex items-baseline mb-1.5 text-[13px] leading-relaxed animate-[fadeUp_.3s_ease_both]">
      <span className="text-[#c8a86c] mr-2.5 shrink-0">{prompt}</span>
      <span className="text-[#d5d5df]">{displayed}</span>
      <Cursor visible={!done} />
    </div>
  );
};

// ── Already-typed command (no animation) ──
export const StaticCmdLine = ({
  prompt,
  text,
}: {
  prompt: string;
  text: string;
}) => (
  <div className="flex items-baseline mb-1.5 text-[13px] leading-relaxed">
    <span className="text-[#c8a86c] mr-2.5 shrink-0">{prompt}</span>
    <span className="text-[#d5d5df]">{text}</span>
  </div>
);
