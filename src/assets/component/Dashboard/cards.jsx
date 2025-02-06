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
function Cards() {
    return (
        <div className="w-full ">
            <div className="max-h-[20%]  flex justify-center flex-wrap gap-2 dark:bg-gray-800  xl:flex-nowrap">
                <div className="w-80 lg:w-[45%] h-[100%] xl:w-[25%]  ">
                    <div className="bg-white  dark:bg-gray-800 p-6 h-[100%] rounded-2xl  shadow-lg max-w-lg mx-auto">
                        {/* Heading with line and three dots */}
                        <div className="flex justify-between  ">
                            <div className=" text-gray-900 dark:text-white">
                                <h2 className="text-lg font-semibold">Project Dashboard</h2>
                                <p className="dark:text-white text-[14px]">Create a dashboard design</p>
                            </div>
                            <div className=" ">
                                <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                            </div>

                        </div>
                        {/* <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div> */}

                        {/* Content section with left-aligned paragraph and right-aligned profile */}
                        <div className="flex justify-between items-center mt-4">
                            <p className="flex text-gray-700 dark:text-gray-300 text-sm"><CiClock2 className="text-2xl text-red-800 mr-2" />Updated 5 Hours ago</p>
                            <div className="flex -space-x-2">
                                <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={two} alt="User 2" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={three} alt="User 3" className="w-8 h-8 rounded-full border border-white object-cover object-center xl:hidden 2xl:flex" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80 lg:w-[45%] h-[100%] xl:w-[25%]  ">
                    <div className="bg-white  dark:bg-gray-800 p-6 h-[100%] rounded-2xl  shadow-lg max-w-lg mx-auto">
                        {/* Heading with line and three dots */}
                        <div className="flex justify-between  ">
                            <div className=" text-gray-900 dark:text-white">
                                <h2 className="text-lg font-semibold">Create a style guide</h2>
                                <p className="dark:text-white text-[14px]">Style guide for the business</p>
                            </div>
                            <div className=" ">
                                <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                            </div>

                        </div>
                        {/* <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div> */}

                        {/* Content section with left-aligned paragraph and right-aligned profile */}
                        <div className="flex justify-between items-center mt-4">
                            <p className="flex text-gray-700 dark:text-gray-300 text-sm"><CiClock2 className="text-2xl text-red-800 mr-2" />Updated 5 Hours ago</p>
                            <div className="flex -space-x-2">
                                <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={two} alt="User 2" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={three} alt="User 3" className="w-8 h-8 rounded-full border border-white object-cover object-center xl:hidden 2xl:flex" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80  lg:w-[45%] h-[100%] xl:w-[25%] ">
                    <div className="bg-white  dark:bg-gray-800 p-6 h-[100%] rounded-2xl  shadow-lg max-w-lg mx-auto">
                        {/* Heading with line and three dots */}
                        <div className="flex justify-between  ">
                            <div className=" text-gray-900 dark:text-white">
                                <h2 className="text-lg font-semibold">Create Wireframes</h2>
                                <p className="dark:text-white text-[14px]">Wireframe for the agency</p>
                            </div>
                            <div className=" ">
                                <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                            </div>

                        </div>
                        {/* <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div> */}

                        {/* Content section with left-aligned paragraph and right-aligned profile */}
                        <div className="flex justify-between items-center mt-4">
                            <p className="flex text-gray-700 dark:text-gray-300 text-sm"><CiClock2 className="text-2xl text-red-800 mr-2" />Updated 5 Hours ago</p>
                            <div className="flex -space-x-2">
                                <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={two} alt="User 2" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={three} alt="User 3" className="w-8 h-8 rounded-full border border-white object-cover object-center xl:hidden 2xl:flex" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80  lg:w-[45%] h-[100%] xl:w-[25%] ">
                    <div className="bg-white  dark:bg-gray-800 p-6 h-[100%] rounded-2xl  shadow-lg max-w-lg mx-auto">
                        {/* Heading with line and three dots */}
                        <div className="flex justify-between  ">
                            <div className=" text-gray-900 dark:text-white">
                                <h2 className="text-lg font-semibold">Conduct user research</h2>
                                <p className="dark:text-white text-[14px]">Conduct user reaserch</p>
                            </div>
                            <div className=" ">
                                <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer " />
                            </div>

                        </div>
                        {/* <div className="h-[2px] bg-gray-300 my-3 dark:bg-gray-600"></div> */}

                        {/* Content section with left-aligned paragraph and right-aligned profile */}
                        <div className="flex justify-between items-center mt-4">
                            <p className="flex text-gray-700 dark:text-gray-300 text-sm"><CiClock2 className="text-2xl text-red-800 mr-2" />Updated 5 Hours ago</p>
                            <div className="flex -space-x-2">
                                <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={two} alt="User 2" className="w-8 h-8 rounded-full border border-white object-cover object-center" />
                                <img src={three} alt="User 3" className="w-8 h-8 rounded-full border border-white object-cover object-center xl:hidden 2xl:flex" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards