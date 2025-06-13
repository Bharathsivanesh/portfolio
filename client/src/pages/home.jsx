import React from "react";
import Navbar from "../components/navbar";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex flex-col  gap-4 md:gap-8  md:justify-center text-center items-center mt-16 md:h-96 h-48"
        >
          <div>
            <h1 className="text-white text-3xl md:text-5xl font-permanent">
              Hi👋, <span className="text-purple-500">I'm </span>Bharath
            </h1>
          </div>
          <div className="md:max-w-3xl p-3">
            <h2 className="text-gray-200  text-sm md:text-3xl font-light font-sedan">
              I'm an engineering student who loves solving problems I create
              websites and mobile apps to make things easier, I enjoy building
              useful products that help people in daily life.
            </h2>
          </div>
        </div>
        <div className="md:mt-44 flex flex-col gap-2">
          <About />
          <Projects />
          <Contact />

          {/* <contact /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
