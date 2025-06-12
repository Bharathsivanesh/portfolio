import React, { useState } from "react";
import { Link } from "react-router-dom";
import drawer from "../assets/align-left.png"; // Make sure this image exists
import cross from "../assets/cross.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Top */}
      <div className="flex flex-row justify-between items-center p-6 md:p-8 w-full text-white">
        <h1 className="font-permanent text-2xl md:text-4xl">
          <span className="text-purple-500">M</span>y Portfolio
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row gap-6 md:gap-16 font-permanent text-xl md:text-2xl">
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

        {/* Drawer Icon (Mobile only) */}
        <div className="md:hidden">
          <img
            src={drawer}
            alt="Menu"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white z-50 font-permanent text-3xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <img
            src={cross}
            alt="Menu"
            className="w-10 h-10 cursor-pointer absolute top-20 right-10"
            onClick={toggleMenu}
          />
          <Link to="/" onClick={toggleMenu}>
            <span className="text-purple-500">H</span>ome
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <span className="text-purple-500">A</span>bout
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <span className="text-purple-500">P</span>rojects
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <span className="text-purple-500">C</span>ontact
          </Link>
          <button
            onClick={toggleMenu}
            className="mt-8 text-sm border px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
