import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  flex-row justify-center md:justify-between items-center p-6 md:p-8 w-full text-white">
      <h1 className="font-permanent text-4xl hidden md:block">
        <span className="text-purple-500">M</span>y Portfolio
      </h1>

      <div className="flex flex-row gap-6 md:gap-16 font-permanent text-xl md:text-2xl">
        <Link to="/">
          <span className="text-purple-500">H</span>ome
        </Link>
        <Link to="/about">
          <span className="text-purple-500">A</span>bout
        </Link>
        <Link to="/projects">
          <span className="text-purple-500">P</span>rojects
        </Link>
        <Link to="/contact">
          <span className="text-purple-500">C</span>ontact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
