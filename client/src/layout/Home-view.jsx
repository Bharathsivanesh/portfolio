import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import bg from "../assets/bgspline.mp4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Homeview = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <div className="bg-black transition-all duration-300 h-screen flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/e427cc58-b745-47dd-bb9b-499d27a68ce3/RkXUhXr2yz.lottie"
            loop
            autoplay
            className="w-1/2 h-1/2"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen transition-all duration-300 relative flex flex-col  ">
        <div className="absolute  inset-0 w-full h-full z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover md:object-fill"
            src={bg}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* <Spline scene="https://prod.spline.design/EPDBxi3OvUGFfB0O/scene.splinecode" /> */}
        </div>
        <div className="z-10 flex flex-col  ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Homeview;
