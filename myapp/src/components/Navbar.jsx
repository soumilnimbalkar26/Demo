import React from "react";
import "../index.css";
// import PP from "../images/ProfilePicture.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "../Pages/Home";

const Navbar = () => {
  const [DarkMode, setDarkMode] = useState();

  const ToggleDarkMode = () => {
    setDarkMode(!DarkMode);
  };
  return (
    <nav
      className={`p-5 ${
        DarkMode ? "bg-gray-900" : "bg-gray-100"
      } bg-gray-100 p-5 flex items-center justify-between sticky top-0 z-[20] drop-shadow-md`}
    >
      <span className="flex items-center">
        {/* <img className="object-cover h-11 w-11 mx-4" src={PP} alt="img" /> */}
        <Link
          to="/"
          className={`font-bold text-3xl ${
            DarkMode ? "text-white" : "text-black"
          } mx-4 hover:text-gray-600 duration-500`}
        >
          PORTFOLIO
        </Link>
      </span>

      <ul className="flex items-center">
        <li>
          <Link
            to="../Pages/Project.jsx"
            className={`${
              DarkMode ? "text-white" : "text-black"
            } mx-4 hover:text-gray-600 duration-500 `}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="../Pages/Contact.jsx"
            className={`${
              DarkMode ? "text-white" : "text-black"
            } mx-4 hover:text-gray-600 duration-500 `}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="../Pages/About.jsx"
            className={`${
              DarkMode ? "text-white" : "text-black"
            } mx-4 hover:text-gray-600 duration-500 `}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="../Pages/SignUp.jsx"
            className="bg-gray-500 hover:bg-gray-50 p-3 rounded text-gray-50 hover:text-gray-700 duration-500 mx-4"
          >
            SignUp
          </Link>
        </li>
        <li>
          <Link
            to="../Pages/SignIn.jsx"
            className="bg-gray-500 hover:bg-gray-50 p-3 rounded text-gray-50 hover:text-gray-700 duration-500 mx-4"
          >
            SignIn
          </Link>
        </li>

        <button
          className={`${
            DarkMode ? "bg-gray-300" : "bg-white"
          } bg-white p-3 rounded-md hover:bg-gray-200`}
          onClick={ToggleDarkMode}
        >
          {DarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
