import React from "react";
import Card from "../components/card";
import Spline from "@splinetool/react-spline";
import img from "../assets/about.png";
const About = () => {
  return (
    <>
      <div className=" justify-center flex">
        <div className="flex flex-col md:flex-row w-4/5  md:gap-12  h-full  justify-center items-center">
          <div className="md:w-1/2 w-2/3">
            <img src={img} />
          </div>
          <div className="md:w-1/2 p-4 md:p-0 md:h-screen flex items-center gap-8 md:gap-24 flex-col ">
            <h1 className="font-permanent text-3xl md:text-5xl text-white ">
              <span className="text-purple-500 px-6">About</span>Me
            </h1>
            <h1 className="font-serif md:text-left text-center text-sm md:text-3xl text-white     items-center">
              I'm Bharath, a passionate web developer focused on building clean
              and responsive websites. I'm currently learning the MERN stack and
              React to create dynamic and full-stack applications. I love to
              explore new technologies and turn ideas into real-world solutions.
            </h1>
            <button className="bg-purple-500 text-white px-3 py-2 md:px-6 md:py-3 font-semibold rounded-lg">
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
