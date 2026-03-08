export type LineType = "cmd" | "output" | "blank" | "divider" | "form";
export type OutputCls = "gold" | "green" | "dim" | "error" | "";

export interface TerminalLine {
  id: number;
  type: LineType;
  text?: string;
  cls?: OutputCls;
  prompt?: string;
  typed?: boolean;
}

export interface FormField {
  label: string;
  key: "name" | "email" | "subject" | "message";
  type: "text" | "email" | "textarea";
  placeholder: string;
}

export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
