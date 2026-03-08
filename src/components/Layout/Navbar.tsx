import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full h-24 sticky top-0 z-50 bg-zinc-200 dark:bg-zinc-950 flex items-center justify-between p-6">
      <h1 className="text-sm font-mono mx-4 uppercase jetbrains-mono text-black dark:text-[#c9a84c]">
        InscX // Junior Full-Stack
      </h1>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-row gap-4 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative jetbrains-mono text-gray-800 dark:text-gray-300
              hover:text-gray-600 dark:hover:text-[#c8a86c] transition-colors
              after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
              after:bg-[#c8a86c] after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg">
        <div className="bg-transparent rounded-xl gap-2 flex">
          <button
            className="hidden lg:flex bg-transparent p-3 hover:bg-zinc-500/20
              dark:hover:bg-zinc-700 jetbrains-mono dark:text-white
              dark:hover:text-white/80 rounded-lg text-black cursor-pointer"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <LuMoon /> : <LuSun />}
          </button>
        </div>
      </div>

      <button
        className="bg-transparent p-3 hover:bg-zinc-500/20 dark:hover:bg-zinc-700
          jetbrains-mono dark:text-white dark:hover:text-white/80 rounded-lg
          text-black lg:hidden z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      <div
        style={{
          transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: "transform 500ms ease-in-out, opacity 400ms ease-in-out",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 w-full h-screen z-40 bg-zinc-200 dark:bg-zinc-950 flex flex-col items-center justify-center gap-8 lg:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`
              relative jetbrains-mono text-gray-800 dark:text-gray-300
              hover:text-gray-600 dark:hover:text-[#c8a86c] transition-colors
              after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
              after:bg-[#c8a86c] after:transition-all after:duration-300 hover:after:w-full
              ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            {link.label}
          </a>
        ))}

        {/* Theme toggle inside mobile menu */}
        <button
          onClick={toggleDarkMode}
          className="mt-4 p-3 rounded-lg bg-zinc-300 dark:bg-zinc-800
            text-black dark:text-white hover:bg-zinc-400 dark:hover:bg-zinc-700
            transition-colors cursor-pointer"
        >
          {isDarkMode ? <LuMoon size={20} /> : <LuSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
