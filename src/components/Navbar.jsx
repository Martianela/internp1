import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-1 flex justify-between sticky top-0 z-10 bg-white">
      <a href="/">
        <h1 className="text-[50px] font-medium">🆁🅰</h1>
      </a>
      <div className="items-center flex flex-col justify-center">
        <ul className="flex gap-4 text-lg text-gray-700">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/profile"}>
            <li>Profile</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
