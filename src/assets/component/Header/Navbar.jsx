import React, { useState, useEffect } from "react";
import { FaSearch, FaBell, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <div className="w-auto lg:w-full  ">
      <nav className=" dark:bg-gray-800 border-b-2 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          
          
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-3xl dark:bg-gray-700 dark:text-white focus:outline-none"
            />
          </div>

          
          
          <div className="flex items-center space-x-4">
            
            
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-white p-2 rounded-full"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-300" />
              )}
            </button>

            
            
            <div className="relative">
              <FaBell className="text-gray-500 dark:text-white text-xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </div>

            
            
            <div>
              <FaUserCircle className="text-gray-500 dark:text-white text-2xl" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
