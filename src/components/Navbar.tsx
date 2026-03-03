import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  return (
    <nav className="w-full h-16 sticky top-0 bg-zinc-400 dark:bg-zinc-900 flex items-center justify-between p-6">
      <h1 className="text-3xl font-bold text-black jetbrains-mono dark:text-white">
        Insc<span className="text-[#a57f15] dark:text-[#c9a84c]">X</span> //
      </h1>
      <div className="flex flex-row gap-4">
        <a
          href="/"
          className="text-gray-800 jetbrains-mono dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-800 jetbrains-mono dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
        >
          About
        </a>
        <a
          href="/project"
          className="text-gray-800 jetbrains-mono dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="text-gray-800 jetbrains-mono dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
        >
          Contact
        </a>
      </div>
      <div className="bg-zinc-400 dark:bg-zinc-900">
        <div className="bg-transparent p-2 rounded-xl gap-2 flex items-center">
          <button
            className="bg-transparent p-3 hover:bg-zinc-500/20 dark:hover:bg-zinc-700 jetbrains-mono dark:text-white dark:hover:text-white/80 rounded-lg text-black"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <LuMoon /> : <LuSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
