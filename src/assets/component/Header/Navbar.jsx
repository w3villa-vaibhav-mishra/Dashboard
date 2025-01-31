import React,{useState,useEffect} from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoTicketSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { LuFolderKanban } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { GrTasks } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { FaBox } from "react-icons/fa6";
import { FiLayout } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { FaSearch, FaBell, FaUserCircle, FaSun, FaMoon, FaEllipsisV } from "react-icons/fa";


function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      // Check for the user’s dark mode preference in localStorage
      const savedMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedMode);
      if (savedMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, []);
  
   
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
          document.body.classList.add("dark");
          localStorage.setItem("darkMode", "true");
        } else {
          document.body.classList.remove("dark");
          localStorage.setItem("darkMode", "false");
        }
      };
  return (
    <div>
         <nav className="bg-white dark:bg-gray-800  border-2 p-4">
                        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                          {/* Left Side: Search Bar */}
                          <div className="relative flex items-center space-x-2">
                            {/* Search Icon inside input */}
                            <FaSearch className="absolute left-5 text-gray-500 dark:text-white" />
                            <input
                              type="text"
                              placeholder="Search tasks..."
                              className="p-2 pl-10 border border-gray-300 rounded-3xl w-80 dark:bg-gray-700 dark:text-white"
                            />
                          </div>
        
                          {/* Right Side: Dark Mode, Notifications, Profile */}
                          <div className="flex items-center space-x-4">
                            {/* Dark Mode Toggle Icon */}
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
        
                            {/* Notifications */}
                            <div className="relative">
                              <FaBell className="text-gray-500 dark:text-white text-xl" />
                              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                                3
                              </span>
                            </div>
        
                            {/* Profile Icon */}
                            <div>
                              <FaUserCircle className="text-gray-500 dark:text-white text-2xl" />
                            </div>
                          </div>
                        </div>
                      </nav>
    </div>
  )
}

export default Navbar