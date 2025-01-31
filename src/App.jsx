import React, { useState, useEffect } from "react";
// import { FaHome, FaUserAlt, FaChartBar, FaCog } from "react-icons/fa";
import { FaSearch, FaBell, FaUserCircle, FaSun, FaMoon, FaEllipsisV } from "react-icons/fa";

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
import Doughnuts from "./assets/component/Dashboard/Doughnut";
import LineChart from "./assets/component/Dashboard/ProjactStaticsChart";
import LeftCard from "./assets/component/Dashboard/LeftCard";
import DailyTask from "./assets/component/Dashboard/DailyTask";
import ProjectOverview from "./assets/component/Dashboard/ProjectOverview"
import Navbar from "./assets/component/Header/Navbar";
import Dashboard from "./assets/component/Dashboard/Dashboard";
import Left from "./assets/component/Left/Left";
import { Outlet } from "react-router-dom";




function App() {
 
  return (
    <>
      <div className="flex justify-center">
        <div className="flex  w-[100%] ">
          <Left/>
          <div className="w-full  flex flex-col">
            <div className=" bg-white dark:bg-gray-800 ">
             <Navbar/>
            </div>
            
            <div>
            <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
