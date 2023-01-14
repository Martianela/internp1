import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="my-10">
      <div className="sm:flex text-center sm:text-left">
        <div className="sm:w-[50%]">
          <h1 className="text-[50px] font-medium my-5">🆁🅰</h1>{" "}
          <ul className="flex flex-col gap-2 ">
            <li>
              <a href="/">Home</a>
            </li>{" "}
            <li>
              <a href="/">About</a>
            </li>{" "}
            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl text-gray-800 font-medium my-10">Contact</h1>{" "}
          <ul className="flex gap-10 justify-center my-10">
            {" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <Link to="www.instagram.com">
                <BsInstagram size={25} />
              </Link>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <Link to="www.instagram.com">
                <BsTwitter size={25} />
              </Link>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <Link to="www.instagram.com">
                <FaLinkedinIn size={25} />
              </Link>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <Link to="www.instagram.com">
                <FaFacebookF size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
