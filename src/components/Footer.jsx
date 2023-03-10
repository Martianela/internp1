import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="my-10">
      <div className=" flex flex-col gap-10 sm:flex-row text-center sm:text-left">
        <div className="sm:w-[40%]">
          <h1 className="text-[50px] font-medium my-5">🆁🅰</h1>{" "}
          <ul className="flex flex-col gap-4  text-lg text-gray-600">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>{" "}
            <li>
              <a className="hover:underline" href="/">
                About
              </a>
            </li>{" "}
            <li>
              <a className="hover:underline" href="/">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl text-gray-800 font-medium my-10">Contact</h1>{" "}
          <ul className="flex gap-10 justify-center my-10">
            {" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <a href="https://www.instagram.com/">
                <BsInstagram size={25} />
              </a>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <a href="https://www.twitter.com">
                <BsTwitter size={25} />
              </a>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <a href="https://www.linkedin.com">
                <FaLinkedinIn size={25} />
              </a>
            </li>{" "}
            <li className="bg-gray-700 rounded-[100%] text-center p-2 text-white">
              <a href="https://www.facebook.com">
                <FaFacebookF size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
