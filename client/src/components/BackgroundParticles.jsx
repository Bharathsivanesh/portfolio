import React from "react";
import Particles from "react-tsparticles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

const particlesInit = async (main) => {
  await loadBigCirclesPreset(main);
};

const BackgroundParticles = () => {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "big-circles",
      }}
    />
  );
};

export default BackgroundParticles;
