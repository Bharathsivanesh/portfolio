import React from "react";
import { motion } from "framer-motion";

import php from "../assets/PHP.png";
import node from "../assets/Node.js.png";
import flutter from "../assets/Flutter.png";
import mongo from "../assets/MongoDB.png";
import figma from "../assets/Figma.png";
import mysql from "../assets/MySQL.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import rect from "../assets/react.png";
import native from "../assets/native.png";
import tc from "../assets/TailwindCSS.png";

import express from "../assets/express.png";
import Contact from "./contact";
const skills = [
  rect,
  php,
  mongo,
  node,
  figma,
  flutter,
  mysql,
  git,
  native,
  firebase,
  express,
  tc,
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  return (
    <>
      <div className="flex flex-col gap-20 mt-16 justify-center items-center">
        <div data-aos="flip-left" data-aos-duration="2000">
          <h1 className="font-permanent text-3xl md:text-5xl text-white">
            <span className="text-purple-500 px-6">Tech</span>Stack
          </h1>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          className="grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-16"
        >
          {skills.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="Skill Logo"
              className="w-12 h-12 md:w-24 md:h-24"
              variants={floatAnimation}
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 15 }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
