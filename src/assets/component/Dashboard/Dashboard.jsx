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
// import Graph from "./assets/component/Graph";
import Doughnuts from "./Doughnut";
import LineChart from "./ProjactStaticsChart";
import LeftCard from "./LeftCard";
import DailyTask from "./DailyTask";
import ProjectOverview from "./ProjectOverview"
// import Navbar from "./assets/component/Dashboard/Navbar";
function Dashboard() {
  return (
    <div>
         <div className="h-full flex flex-col gap-2 border-2 bg-slate-100 pt-2 pl-4">
            <h1 className="text-lg font-bold mb-4">Dashboard &gt; Overview</h1>
            {/* 4 cart section */}
              <div className="h-[15%]  flex gap-2 dark:bg-gray-800">
                <div className="w-[25%] h-[100%]  ">
                  <div className="bg-white dark:bg-gray-800 p-6 h-[100%] rounded-2xl shadow-lg max-w-lg mx-auto">
                    {/* Heading with line and three dots */}
                    <div className="flex justify-between  ">
                      <div className=" text-gray-900 dark:text-white">
                        <h2 className="text-xl font-semibold">Project Dashboard</h2>
                        <p className="dark:text-white">Create a dashboard design</p>
                      </div>
                      <div className=" ">
                        <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                      </div>

                    </div>
                    <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div>

                    {/* Content section with left-aligned paragraph and right-aligned profile */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 dark:text-gray-300">Updated 5 Hours ago</p>
                      <FaUserCircle className="text-gray-500 dark:text-white text-2xl cursor-pointer" />
                    </div>
                  </div>
                  
                </div>
                <div className="w-[25%] h-[100%] ">
                  <div className="bg-white dark:bg-gray-800 p-6 h-[100%] rounded-2xl shadow-lg max-w-lg mx-auto">
                    {/* Heading with line and three dots */}
                    <div className="flex justify-between  ">
                      <div className=" text-gray-900 dark:text-white">
                        <h2 className="text-xl font-semibold">Project Dashboard</h2>
                        <p className="dark:text-white">Create a dashboard design</p>
                      </div>
                      <div className=" ">
                        <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                      </div>

                    </div>
                    <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div>

                    {/* Content section with left-aligned paragraph and right-aligned profile */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 dark:text-gray-300">Updated 5 Hours ago</p>
                      <FaUserCircle className="text-gray-500 dark:text-white text-2xl cursor-pointer" />
                    </div>
                  </div>
                  
                </div>
                <div className="w-[25%] h-[100%] ">
                  <div className="bg-white dark:bg-gray-800 p-6 h-[100%] rounded-2xl shadow-lg max-w-lg mx-auto">
                    {/* Heading with line and three dots */}
                    <div className="flex justify-between  ">
                      <div className=" text-gray-900 dark:text-white">
                        <h2 className="text-xl font-semibold">Project Dashboard</h2>
                        <p className="dark:text-white">Create a dashboard design</p>
                      </div>
                      <div className=" ">
                        <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                      </div>

                    </div>
                    <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div>

                    {/* Content section with left-aligned paragraph and right-aligned profile */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 dark:text-gray-300">Updated 5 Hours ago</p>
                      <FaUserCircle className="text-gray-500 dark:text-white text-2xl cursor-pointer" />
                    </div>
                  </div>
                  
                </div>
                <div className="w-[25%] h-[100%] ">
                  <div className="bg-white dark:bg-gray-800 p-6 h-[100%] rounded-2xl shadow-lg max-w-lg mx-auto">
                    {/* Heading with line and three dots */}
                    <div className="flex justify-between  ">
                      <div className=" text-gray-900 dark:text-white">
                        <h2 className="text-xl font-semibold">Project Dashboard</h2>
                        <p className="dark:text-white">Create a dashboard design</p>
                      </div>
                      <div className=" ">
                        <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                      </div>

                    </div>
                    <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div>

                    {/* Content section with left-aligned paragraph and right-aligned profile */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 dark:text-gray-300">Updated 5 Hours ago</p>
                      <FaUserCircle className="text-gray-500 dark:text-white text-2xl cursor-pointer" />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="h-[40%] w-full flex gap-2">
                <div className="w-[30%]    bg-white rounded-3xl overflow-hidden flex flex-col p-4  ">
                  <div className="h-[30px]">
                  <h1 className="text-lg font-bold">Monthly Target</h1>
                  </div>
                  <div className=" justify-center items-center flex  h-full">
                  <Doughnuts />
                  </div>
                  
                </div>
                <div className=" w-[70%] h-[100%] rounded-3xl bg-white overflow-hidden">
                  <LineChart/>
                </div>

              </div>
              <div className="h-full w-full flex gap-2">
                      <div className=" w-[33%] rounded-3xl overflow-hidden">
                        <LeftCard/>
                      </div>
                      <div className="rounded-3xl overflow-hidden w-[33%]">
                        <ProjectOverview/>
                      </div>
                      <div className=" rounded-3xl w-[33%] overflow-hidden">
                        <DailyTask/>
                      </div>
              </div>
            </div>

    </div>
  )
}

export default Dashboard