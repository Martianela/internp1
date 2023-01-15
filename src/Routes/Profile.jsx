import React from "react";
import Navbar from "../components/Navbar";
import { MdSchool } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col sm:flex-row gap-20 text-center w-full  mx-auto
        py-20
      "
      >
        <div>
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png"
            }
            alt=""
            className="rounded-[100%] w-52 h-52 mx-auto "
          />
        </div>
        <div className="flex flex-col justify-center text-center sm:text-left text-slate-700">
          <h1 className="text-3xl font-bold">Rishabh soni</h1>
          <p>frontend devloper</p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-10 text-slate-700">
        <div>
          <h1 className="text-lg font-medium  mb-4">
            <MdSchool className="inline mr-2" size={30} />
            Education detail
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <h1>Collage Name</h1>
            <p className="text-sm">Year CGPA:</p>
          </div>
        </div>{" "}
        <div>
          <h1 className="text-lg font-medium  mb-4">
            <MdSchool className="inline mr-2" size={30} />
            skills
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <p className="text-sm">HTML CSS JAVASCRIPT REACT.JS </p>
          </div>
        </div>{" "}
        <div>
          <h1 className="text-lg font-medium  mb-4">
            <GrProjects className="inline mr-2" size={20} />
            Projects
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <div className="my-4">
              <h1 className="text-lg text-medium">Project 1</h1>
              <p className="text-sm">
                Our website is a modern, interactive web application built using
                React and Tailwind CSS. The user-friendly design and easy
                navigation make it a pleasure to use.
              </p>
            </div>
            <hr />
            <div className="my-4">
              <h1 className="text-lg text-medium">Project 2</h1>
              <p className="text-sm">
                Our website is a modern, interactive web application built using
                React and Tailwind CSS. The user-friendly design and easy
                navigation make it a pleasure to use.
              </p>
            </div>
            <hr />
            <div className="my-4">
              <h1 className="text-lg text-medium ">Project 3 </h1>
              <p className="text-sm">
                Our website is a modern, interactive web application built using
                React and Tailwind CSS. The user-friendly design and easy
                navigation make it a pleasure to use.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium  mb-4 ">
            <AiOutlineGithub className="inline mr-2" size={30} />
            github link
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <p className="text-sm">
              <a href="https://github.com/Martianela">
                https://github.com/Martianela
              </a>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium  mb-4">
            <AiFillLinkedin className="inline mr-2" size={30} />
            Linkedin link
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <p className="text-sm">
              <a href="https://www.linkedin.com/in/rishabh-soni-351797252/">
                https://www.linkedin.com/in/rishabh-soni-351797252/
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
