import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 bg-black rounded-full mr-3 flex items-center justify-center ">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="text-gray-800 font-bold text-xl md:flex hidden">
          Project Dashboard
        </span>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search my storyboards"
          className="bg-white text-gray-800 px-3 py-1 pr-10 border border-gray-300 rounded-md mr-4 md:w-72 md:h-10"
        />

        <div
          className="bg-sky-100 border-2 border-sky-200 rounded-md text-black px-4 py-3 w-100 h-12 mr-4 flex items-center justify-center md:flex hidden  "
          role="alert"
        >
          <div
            className="bg-sky-100 border-4 border-sky-200 rounded-full text-black w-8 h-8 flex items-center justify-center mr-2 md:flex hidden"
            role="alert"
          >
            <div className="relative">
              <div className="absolute w-full h-full rounded-full bg-gray-300"></div>
              <div className="absolute w-full h-full rounded-full bg-orange-300"></div>
              <div className="absolute w-full h-full flex items-center justify-center text-gray-800 font-bold text-sm">
                4
              </div>
            </div>
          </div>
          <p className="font-bold text-sm flex items-center">Quick Start</p>
        </div>

        <div
          className="w-10 h-10 rounded-full bg-orange-300 border-2 border-black flex items-center justify-center cursor-pointer mr-4"
          onClick={toggleDropdown}
        >
          <span className="text-gray-800 font-bold text-lg">A</span>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-md">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Profile
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Account
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Settings
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
