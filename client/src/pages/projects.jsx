import React from "react";
import Card from "../components/card";
import Skills from "./skills";

const Projects = () => {
  const projects = [{}, {}, {}, {}, {}, {}];
  return (
    <div className="flex flex-col items-center gap-4 p-4  md:mt-0 mt-16 ">
      <h1 className="font-permanent text-3xl md:text-5xl text-white ">
        <span className="text-purple-500 px-6">My</span>Project's
      </h1>

      <div className="flex md:mt-16  flex-row gap-12 md:gap-24 justify-center flex-wrap p-4 md:w-full">
        {projects.map((project, idx) => (
          <Card key={idx} />
        ))}
      </div>
      <Skills />
    </div>
  );
};

export default Projects;
