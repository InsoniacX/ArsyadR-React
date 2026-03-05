import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "@/components/layout";
import { AppRoutes } from "@/router";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div
        className={`${isDarkMode && "dark"} bg-white h-screen w-full dark:bg-[#070709] flex flex-col`}
      >
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
