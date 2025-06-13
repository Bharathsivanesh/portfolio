import React from "react";
import img from "../assets/about.png";
import computer from "../assets/computer.png";
const About = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row w-[90%] max-w-7xl md:gap-12 h-full justify-center items-center overflow-hidden">
        <div
          className="md:w-1/2 w-full flex items-center justify-center max-w-xs sm:max-w-sm md:max-w-none px-4 md:px-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img src={computer} alt="About" className="w-2/3 h-auto" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="md:w-1/2 w-full px-4 md:px-0 md:h-screen flex items-center gap-8 md:gap-20 flex-col mt-6 md:mt-0"
        >
          <h1 className="font-permanent text-3xl md:text-5xl text-white text-center md:text-left">
            <span className="text-purple-500 px-2">About</span>Me
          </h1>

          <p className="font-sedan text-sm md:text-2xl text-white text-center md:text-left">
            I’m an engineering student who loves building web and mobile
            applications. I enjoy exploring new technologies and quickly adapt
            to them, always looking for ways to turn ideas into real products.
            With strong skills in the MERN stack and React Native, I focus on
            creating useful and efficient solutions. I’m passionate about
            learning, improving, and using technology to solve everyday problems
            in a smart way.
          </p>

          <a
            href="/resume.pdf"
            download
            className="bg-purple-500 text-white px-4 py-2 md:px-6 md:py-3 font-semibold rounded-lg text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
