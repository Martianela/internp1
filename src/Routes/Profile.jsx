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
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
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
          <h1 className="text-lg font-medium ">
            <MdSchool className="inline mr-2" size={30} />
            Education detail
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <h1>Collage Name</h1>
            <p className="text-sm">Year CGPA:</p>
          </div>
        </div>{" "}
        <div>
          <h1 className="text-lg font-medium ">
            <MdSchool className="inline mr-2" size={30} />
            skills
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <p className="text-sm">HTML CSS JAVASCRIPT REACT.JS </p>
          </div>
        </div>{" "}
        <div>
          <h1 className="text-lg font-medium ">
            <GrProjects className="inline mr-2" size={20} />
            Projects
          </h1>
          <div className="border-2 border-red-900/10 p-2 rounded-md text-gray-700 my-1">
            <div className="my-4">
              <h1>Project 1</h1>
              <p className="text-sm">discription</p>
            </div>
            <div className="my-4">
              <h1>Project 2</h1>
              <p className="text-sm">Year CGPA:</p>
            </div>
            <div className="my-4">
              <h1>Project 3 </h1>
              <p className="text-sm">Year CGPA:</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium ">
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
          <h1 className="text-lg font-medium ">
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
        <div className="pb-10 pt-4">
          <h1 className="text-2xl font-bold ">Website Name</h1>
          <ul className="my-3 flex flex-col gap-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
