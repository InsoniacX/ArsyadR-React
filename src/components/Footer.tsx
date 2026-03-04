const Footer = () => {
  return (
    <footer className="bg-zinc-400 text-black font-bold dark:bg-zinc-900 dark:text-white py-4">
      <div className="container mx-auto text-center jetbrains-mono text-sm flex justify-between">
        <p>&copy; 2024 Arsyad Rianda Putra - All rights reserved.</p>
        <div className="flex gap-4 text-center jetbrains-mono">
          <a
            href="https://github.com/InsoniacX"
            className="text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-white/60 font-extrabold uppercase"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/arsyadr_1"
            className="text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-white/60 font-extrabold uppercase"
          >
            Instagram
          </a>
          <a
            // href="https://github.com/InsoniacX"
            className="text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-white/60 font-extrabold uppercase"
          >
            Resume
          </a>
          <a
            href="https://www.youtube.com/@averoseee"
            className="text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-white/60 font-extrabold uppercase"
          >
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
