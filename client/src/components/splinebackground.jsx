import React from "react";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Spline scene="https://prod.spline.design/EPDBxi3OvUGFfB0O/scene.splinecode" />
    </div>
  );
};

export default SplineBackground;
