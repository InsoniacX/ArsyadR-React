import { useEffect, useState } from "react";
import { FORM_FIELDS } from "@/data";
import type { FormState } from "@/types";
import emailjs from "@emailjs/browser";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const TerminalForm = ({
  visible,
}: {
  visible: boolean;
  onSent?: () => void;
}) => {
  const [fields, setFields] = useState<FormState>(INITIAL_FORM);
  const [rowsVisible, setRowsVisible] = useState<boolean[]>(
    new Array(FORM_FIELDS.length).fill(false),
  );
  const [submitVisible, setSubmitVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [error] = useState(false);
  const handleSend = async () => {
    if (!fields.name || !fields.email || !fields.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      // optionally show error state
    } finally {
      setSending(false);
    }
  };

  // Stagger form rows on mount
  useEffect(() => {
    if (!visible) return;
    FORM_FIELDS.forEach((_, i) => {
      setTimeout(() => {
        setRowsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 130);
    });
    setTimeout(() => setSubmitVisible(true), FORM_FIELDS.length * 130 + 120);
  }, [visible]);

  const handleChange = (key: keyof FormState, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const getButtonLabel = () => {
    if (sending) return "sending...";
    if (sent) return "✓ sent";
    return "▶ execute send_message";
  };

  if (!visible) return null;

  return (
    <div className="flex flex-col gap-0 mt-1">
      {/* Form rows */}
      {FORM_FIELDS.map((field, i) => (
        <div
          key={field.key}
          className="flex items-baseline gap-2.5 py-2 border-b border-[#131317] focus-within:border-[#c8a86c]"
          style={{
            opacity: rowsVisible[i] ? 1 : 0,
            transform: rowsVisible[i] ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity .4s ease, transform .4s ease",
          }}
        >
          <span className="text-[#58585f] text-[11px] tracking-[.12em] shrink-0 min-w-45">
            {field.label}
          </span>

          {field.type === "textarea" ? (
            <textarea
              rows={2}
              value={fields[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="bg-transparent border-none outline-none text-[#d5d5df] font-mono text-[13px] flex-1 resize-none leading-relaxed placeholder:text-[#2a2a32] caret-[#c8a86c]"
            />
          ) : (
            <input
              type={field.type}
              value={fields[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="bg-transparent border-none outline-none text-[#d5d5df] font-mono text-[13px] flex-1 placeholder:text-[#2a2a32] caret-[#c8a86c]"
            />
          )}
        </div>
      ))}

      {/* Submit row */}
      <div
        className="mt-7 flex items-center gap-4"
        style={{
          opacity: submitVisible ? 1 : 0,
          transition: "opacity .5s ease",
        }}
      >
        <span className="text-[#c8a86c]">~$</span>
        <button
          onClick={handleSend}
          disabled={sending || sent}
          className="bg-[#c8a86c] text-[#070709] border-none px-7 py-2.5 font-mono text-[11px] tracking-[.18em] uppercase cursor-pointer transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {getButtonLabel()}
        </button>
        <span className="text-[11px] text-[#2a2a32] tracking-[.12em]">
          press enter or click
        </span>
      </div>

      {/* Success message */}
      {sent && (
        <div className="mt-4 px-5 py-4 border border-[#28c840] bg-[#28c840]/5 text-[#4ade80] text-[12px] tracking-widest animate-[fadeUp_.5s_ease_both]">
          ✓ message_sent successfully. i will get back to you soon!
        </div>
      )}
      {error && (
        <div className="mt-4 px-5 py-4 border border-[#ff5f57] bg-[#ff5f57]/5 text-[#ff5f57] text-[12px] tracking-widest animate-[fadeUp_.5s_ease_both]">
          ✕ something went wrong. please try again or email me directly.
        </div>
      )}
    </div>
  );
};

export default TerminalForm;
