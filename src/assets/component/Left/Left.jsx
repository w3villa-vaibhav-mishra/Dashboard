import React from 'react'
import { FaHome, FaUserAlt, FaChartBar, FaCog, FaFile, FaBox } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {  IoMdPeople, IoMdLogOut } from "react-icons/io";
import { LuFolderKanban } from "react-icons/lu";
import { GrProjects, GrTasks } from "react-icons/gr";
import { FiLayout } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoTicketSharp } from "react-icons/io5";


function Left() {
  return (
    <div className="flex flex-col w-64 max-h-screen  bg-gray-800 text-white border-2 border-white  ">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-20 border-b-2 border-white">
        <h1 className="text-3xl text-orange-600 font-bold">Dashboard</h1>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col flex-grow gap-4 p-4 overflow-y-auto scrollbar-hide">
        <h1 className="uppercase">Dashboard</h1>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <FaHome className="text-lg" />
          <Link to="/home" className="hover:underline">Overview</Link>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <SlCalender className="text-lg" />
          <Link to="/Table" className="hover:underline">Table</Link>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <IoTicketSharp className="text-lg" />
          <Link to="/form" className="hover:underline">Form</Link>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <FaFile className="text-lg" />
          <Link to="/Get" className="hover:underline">Get</Link>

        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <LuFolderKanban className="text-lg" />
          <span>Kanban</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <GrProjects className="text-lg" />
          <span>Projects</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <GrTasks className="text-lg" />
          <span>Tasks</span>
        </div>

        <h1 className="uppercase mt-4">Administrator</h1>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <IoMdPeople className="text-lg" />
          <span>Auth Pages</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <FaBox className="text-lg" />
          <span>Extra Pages</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <FiLayout className="text-lg" />
          <span>Layout</span>
        </div>

        <h1 className="uppercase mt-4">Settings</h1>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <MdContactSupport className="text-lg" />
          <span>Support</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <FaChartBar className="text-lg" />
          <span>Settings</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
          <IoMdLogOut className="text-lg" />
          <span>Log Out</span>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="flex items-center justify-center p-4 bg-gray-700">
        <span>© 2025 MyCompany</span>
      </div>
    </div>
  )
}

export default Left;

