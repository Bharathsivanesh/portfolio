import React from "react";
import Card from "../components/card";
import Skills from "./skills";

import atten from "../assets/attendence.jpg";
import navigator from "../assets/navigator.png";
import parenting from "../assets/parenting.png";
import hospital from "../assets/hospital.png";
import portfolio from "../assets/portfolio.png";
import barcode from "../assets/barcode.png";
import bakery from "../assets/bakery.png";
import hostel from "../assets/hostel.png";
import gift from "../assets/gift.png";
const Projects = () => {
  const projects = [
    {
      image: bakery,
      title: "Bakery Order App",
      description:
        "A Flutter Bakery Order & Payment App that simplifies order placement and offers multiple payment options. It also provides admins with clear insights through sales analytics.",
      github: "https://github.com/Bharathsivanesh/Hostel-Attendence-App",
    },
    {
      image: hospital,
      title: "Doctor Appointmnet",
      description:
        "A web-based Doctor Appointment System where patients can book appointments, make payments, and get email updates. Admins manage doctors and appointments using an intuitive dashboar",
      github: "https://github.com/Bharathsivanesh/Doctor-appointment",
    },
    {
      image: hostel,
      title: "  Hostel Attendence App",
      description:
        "A React-Native Hostel Attendance App that helps wardens take attendance, manage student records, and notify parents about absences. Admins can assign blocks and manage warden access with ease.",
      github: "https://github.com/Bharathsivanesh/Hostel-Attendence-App",
    },
    {
      image: portfolio,
      title: "Portfolio",
      description:
        "A modern portfolio built using React and Spline, featuring smooth animations and interactive 3D elements. It showcases my projects, skills, and creativity in a visually engaging way",
      github: "https://github.com/Bharathsivanesh/portfolio",
    },
    {
      image: parenting,
      title: "Parenting Blog",
      description:
        "A MERN-based Parenting Blog platform where parents can create, edit, and manage their own blogs. Other users can view all parenting posts and gain helpful insights",
      github: "https://github.com/Bharathsivanesh/parenting-blog",
    },
    {
      image: gift,
      title: "Gift Store",
      description:
        "Gift Store Website,This is a simple Gift Store website made using only HTML and CSS. It showcases a clean and responsive layout for a gift shop with stylish design and user-friendly interface. 🛍️✨",
      github: "https://github.com/Bharathsivanesh/Gift-store",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 p-4 overflow-hidden md:mt-0 mt-16 ">
      <div data-aos="fade-right" data-aos-duration="1000">
        <h1 className="font-permanent text-3xl md:text-5xl text-white ">
          <span className="text-purple-500 px-6">My</span>Project's
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:p-24 md:w-full"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-2xl shadow-lg w-full h-64"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-fill rounded-2xl"
            />

            {/* Overlay Title */}
            <div
              className="absolute bottom-0 left-0 w-full h-2/3 bg-purple-500 bg-opacity-60 
                   transform translate-y-full group-hover:translate-y-0 
                   transition-transform duration-500 flex items-center gap-1 flex-col  "
            >
              <h3 className="text-white text-2xl  mt-3 font-permanent">
                {project.title}
              </h3>
              <h3 className="text-white text-sm text-center font-sedan">
                {project.description}
              </h3>
              <a href={project.github} target="_blank">
                <img src={navigator} alt="" className="w-8 h-8 mb-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <Skills />
    </div>
  );
};

export default Projects;
