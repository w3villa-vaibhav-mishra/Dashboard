import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Navbar from "./assets/component/Header/Navbar";
import Left from "./assets/component/Left/Left";
import Temporary from "./assets/component/Temporary";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex box-border  border-black ">
      
      
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white z-50 shadow-md transition-transform duration-300 lg:h-screen
          lg:relative lg:translate-x-0 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Left onClose={() => setIsSidebarOpen(false)} /> 
          
      </div>

      
      <div className="flex-1 flex flex-col lg:h-screen ">
      
        <div className="bg-white dark:bg-gray-800 w-full shadow-md flex items-center justify-between p-2  ">
          
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl p-2 text-gray-800 dark:text-white lg:hidden"
          >
            <FaBars />
          </button>
          <Navbar />
        </div>

        
        <div className="flex-1 bg-slate-100 dark:bg-gray-900   overflow-hidden">
          <Outlet />
       
        </div>
      </div>
    </div>
  );
}

export default App;
