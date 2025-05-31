import React from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import bg from "../assets/bgspline.mp4";
const Homeview = () => {
  return (
    <>
      <div className="min-h-screen relative flex flex-col  ">
        <div className="absolute  inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src={bg}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* <Spline scene="https://prod.spline.design/EPDBxi3OvUGFfB0O/scene.splinecode" /> */}
        </div>
        <div className="z-10 flex flex-col ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Homeview;
