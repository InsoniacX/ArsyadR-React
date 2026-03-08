import type { FormField, TerminalLine } from "@/types";

export const SEQUENCE: Omit<TerminalLine, "id">[] = [
  { type: "cmd", prompt: "~$", text: "whoami", typed: true },
  { type: "output", text: "arsyad_rianda_putra", cls: "gold" },
  {
    type: "output",
    text: "junior full-stack developer & tech enthusiast",
    cls: "",
  },
  { type: "blank" },
  { type: "cmd", prompt: "~$", text: "cat about.txt", typed: true },
  { type: "output", text: "location 1  : Kediri, East Java, ID", cls: "dim" },
  { type: "output", text: "location 2  : Bandung, West Java, ID", cls: "dim" },
  { type: "output", text: "email       : insoniacx@gmail.com", cls: "dim" },
  { type: "output", text: "github      : github.com/InscX", cls: "dim" },
  { type: "output", text: "status      : open_to_work = true", cls: "green" },
  { type: "blank" },
  { type: "divider" },
  {
    type: "cmd",
    prompt: "~$",
    text: "send_message --to arsyad@email.com",
    typed: true,
  },
  { type: "output", text: "initializing secure channel...", cls: "dim" },
  {
    type: "output",
    text: "✓ connection established. fill in the fields below.",
    cls: "green",
  },
  { type: "blank" },
  { type: "form" },
];

export const DELAYS: number[] = [
  400, 800, 900, 1000, 1200, 1600, 1750, 1900, 2050, 2200, 2400, 2600, 3100,
  3500, 3700, 3900,
];

// Contact form fields
export const FORM_FIELDS: FormField[] = [
  {
    label: "> enter your name    :",
    key: "name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    label: "> enter your email   :",
    key: "email",
    type: "email",
    placeholder: "you@email.com",
  },
  {
    label: "> enter subject      :",
    key: "subject",
    type: "text",
    placeholder: "Project, collab…",
  },
  {
    label: "> your message       :",
    key: "message",
    type: "textarea",
    placeholder: "Type here…",
  },
];

// Status bar info
export const STATUS = {
  left: "open to opportunities",
  right: "insoniacx@portfolio ~ bash",
};

// Title bar info
export const TITLEBAR = {
  title: "contact.sh — insoniacx@portfolio:~",
  tag: "SSH CONNECTED",
};
