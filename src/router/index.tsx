import { Route, Routes } from "react-router-dom";
import { Homepage, About, Project, Contact } from "@/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
