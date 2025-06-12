import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Homeview from "./layout/Home-view";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./pages/contact";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      {/* <BackgroundParticles /> */}
      <Routes>
        <Route path="/" element={<Homeview />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
