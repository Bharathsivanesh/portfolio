import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import bg from "../assets/bgspline.mp4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Footer from "../components/Footer";
import MouseParticles from "react-mouse-particles";

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
      <div className="bg-black transition-all duration-300 h-screen flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/e427cc58-b745-47dd-bb9b-499d27a68ce3/RkXUhXr2yz.lottie"
          loop
          autoplay
          className="md:w-24 md:h-24 w-1/2 h-1/2"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={bg}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* If you want to switch back to Spline later, uncomment this:
        <Spline
          scene="https://prod.spline.design/EPDBxi3OvUGFfB0O/scene.splinecode"
          className="w-full h-full object-cover"
        />
        */}
      </div>
      <MouseParticles
        g={2.3}
        num={1}
        radius={8}
        life={0.8}
        v={1.2}
        color="random"
        alpha={0.16}
        level={12}
      />
      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Homeview;
