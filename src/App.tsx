import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { AppRoutes } from "@/router";
import { DarkMode } from "@/hooks";

export default function App() {
  const { isDarkMode, toggleDarkMode } = DarkMode();

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
