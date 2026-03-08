import { useEffect, useRef, useState } from "react";
import { SEQUENCE } from "@/data";
import useTerminalSequence from "@/hooks/useTerminalSequence";
import {
  CmdLine,
  OutputLine,
  StaticCmdLine,
} from "@/components/ui/TerminalAtoms";
import { TitleBar, StatusBar } from "@/components/ui";
import TerminalForm from "@/components/ui/Forms";

const TerminalContact = () => {
  const [hasSent, setHasSent] = useState(false);

  useEffect(() => {
    if (!hasSent) return;
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [hasSent]);

  const bodyRef = useRef<HTMLDivElement>(null);
  const { visibleLines, currentCmdIndex, formVisible, handleCmdDone } =
    useTerminalSequence();

  useEffect(() => {
    if (bodyRef.current) {
      // eslint-disable-next-line react-hooks/immutability
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, formVisible]);

  return (
    <section className="flex items-center justify-center px-5 py-10 bg-[#070709] relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.08) 3px,rgba(0,0,0,.08) 4px)",
        }}
      />

      <div
        className="pointer-events-none fixed left-0 right-0 h-16 z-10"
        style={{
          background:
            "linear-gradient(to bottom,transparent,rgba(200,168,108,.025),transparent)",
          animation: "scanline 6s linear infinite",
        }}
      />

      <div
        className="w-full max-w-195 bg-[#0a0a0c] border border-[#2a2a32] animate-fadeUp"
        style={{
          animation:
            "fadeUp .8s ease both, termGlow 4s ease-in-out 1s infinite",
        }}
      >
        <TitleBar />

        <div
          ref={bodyRef}
          className="px-11 pt-9 pb-11 min-h-170 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {visibleLines.map((line) => {
            if (line.type === "blank")
              return <div key={line.id} className="h-2" />;

            if (line.type === "divider")
              return (
                <hr
                  key={line.id}
                  className="border-none border-t border-[#1e1e24] my-5"
                />
              );

            if (line.type === "output")
              return (
                <OutputLine key={line.id} text={line.text!} cls={line.cls} />
              );

            if (line.type === "cmd" && line.typed)
              return (
                <StaticCmdLine
                  key={line.id}
                  prompt={line.prompt!}
                  text={line.text!}
                />
              );

            return null;
          })}

          {/* Currently typing command */}
          {currentCmdIndex !== null && (
            <CmdLine
              key={`typing-${currentCmdIndex}`}
              prompt={SEQUENCE[currentCmdIndex].prompt!}
              text={SEQUENCE[currentCmdIndex].text!}
              onDone={() => handleCmdDone(currentCmdIndex)}
            />
          )}

          {/* Contact form */}
          <TerminalForm visible={formVisible} onSent={() => setHasSent(true)} />
        </div>

        <StatusBar />
      </div>

      <style>{`
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline  { 0%{top:-15%} 100%{top:115%} }
        @keyframes termGlow  {
          0%,100%{box-shadow:0 0 40px rgba(200,168,108,.08),0 0 80px rgba(200,168,108,.04)}
          50%{box-shadow:0 0 60px rgba(200,168,108,.14),0 0 120px rgba(200,168,108,.07)}
        }
        @keyframes pulse {
          0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)}
          70%{box-shadow:0 0 0 8px rgba(74,222,128,0)}
        }
        ::-webkit-scrollbar { display:none; }
      `}</style>
    </section>
  );
};

export default TerminalContact;
