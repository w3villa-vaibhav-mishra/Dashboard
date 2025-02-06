import React, { useState, useEffect } from "react";
// import { FaHome, FaUserAlt, FaChartBar, FaCog } from "react-icons/fa";
import { FaSearch, FaBell, FaUserCircle, FaSun, FaMoon, FaEllipsisV } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import one from "../Images/men1.jpg"
import two from "../Images/men2.jpg"
import three from "../Images/women.jpg"

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
// import Graph from "./assets/component/Graph";
import Doughnuts from "./Doughnut";
import LineChart from "./ProjactStaticsChart";
import LeftCard from "./LeftCard";
import DailyTask from "./DailyTask";
import ProjectOverview from "./ProjectOverview";
import Cards from "../Dashboard/cards"
// import one from "../images/profile.jpg"
// import Navbar from "./assets/component/Dashboard/Navbar";
function Dashboard() {
  return (
    <div className="flex-1 flex flex-col gap-2 bg-slate-100 p-2 lg:pl-4 lg:max-h-screen ">
      <h1 className="text-lg font-bold p-2">Dashboard &gt; Overview</h1>

      {/* 4 Card Section */}
      <div className="p-2 lg:p-0  lg:max-h-[50%]">
        <Cards />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row gap-2 lg:max-h-[40%]  ">
        <div className="  lg:w-[30%] bg-white shadow-lg rounded-3xl p-4 h-[320px] ">
          <h1 className="text-lg font-bold ">Monthly Target</h1>
          <div className="flex justify-center items-center h-[80%] ">
            <Doughnuts />
          </div>
        </div>

        <div className="hidden md:flex flex-1 h-[320px] bg-white shadow-lg rounded-3xl overflow-hidden">
          <LineChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-2 lg:max-h-[340px]  ">
        <div className="lg:w-1/3 bg-white shadow-lg rounded-3xl overflow-auto  overflow-y-scroll scrollbar-hide ">
          <LeftCard />
        </div>
        <div className="lg:w-1/3 bg-white shadow-lg rounded-3xl overflow-y-scroll scrollbar-hide  ">
          <ProjectOverview />
        </div>
        <div className="lg:w-1/3 bg-white shadow-lg rounded-3xl overflow-y-scroll scrollbar-hide  p-2">
          <DailyTask />
        </div>
      </div>
    </div>
  );
}


export default Dashboard