import { BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { AppRoutes } from "@/router";
import { DarkMode } from "@/hooks";

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = DarkMode();
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <div
      className={`${isDarkMode && "dark"} bg-white h-screen w-full dark:bg-[#070709] flex flex-col`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 pt-24">
        <AppRoutes />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
