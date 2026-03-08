import { STATUS, TITLEBAR } from "@/data";

// ── Title bar (top of terminal) ──
export const TitleBar = () => (
  <div className="bg-[#111114] border-b border-[#1e1e24] px-4 py-3.5 flex items-center gap-2 relative">
    <div className="w-2.75 h-2.75 rounded-full bg-[#ff5f57] cursor-pointer hover:brightness-125 transition-all" />
    <div className="w-2.75 h-2.75 rounded-full bg-[#febc2e] cursor-pointer hover:brightness-125 transition-all" />
    <div className="w-2.75 h-2.75 rounded-full bg-[#28c840] cursor-pointer hover:brightness-125 transition-all" />
    <span className="absolute left-1/2 -translate-x-1/2 text-[11px] text-[#3a3a42] tracking-[.12em]">
      {TITLEBAR.title}
    </span>
    <span className="ml-auto text-[9px] text-[#2a2a32] border border-[#1e1e24] px-2.5 py-0.5 tracking-[.18em] uppercase">
      {TITLEBAR.tag}
    </span>
  </div>
);

// ── Status bar (bottom of terminal) ──
export const StatusBar = () => (
  <div className="border-t border-[#1e1e24] px-11 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2.5 text-[10px] text-[#3a3a42] tracking-[.14em]">
      <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
      {STATUS.left}
    </div>
    <div className="text-[10px] text-[#2a2a32] tracking-widest">
      {STATUS.right}
    </div>
  </div>
);
