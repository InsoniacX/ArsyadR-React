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
      <h1 className="text-xl font-bold text-black dark:text-white">Navbar</h1>
      <div className="bg-zinc-400 dark:bg-zinc-900">
        <div className="bg-transparent p-2 rounded-xl gap-2 flex items-center">
          <button
            className="bg-transparent p-3 hover:bg-zinc-500/20 dark:hover:bg-zinc-700 dark:text-white dark:hover:text-white/80 rounded-lg text-black"
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
