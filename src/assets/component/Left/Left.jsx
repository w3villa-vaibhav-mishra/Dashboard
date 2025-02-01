import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoTicketSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";

import { LuFolderKanban } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { GrTasks } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { FaBox } from "react-icons/fa6";
import { FiLayout } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

function Left() {
  return (
    <div>
        <div className="flex flex-col w-64 h-full bg-gray-800 text-white rounded-tl-[50px]">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-center h-20 ">
                      <h1 className="text-xl font-bold">Dashboard</h1>
                    </div>
        
        
                    <div className="flex flex-col gap-4 p-4 ">
                      <h1 className="uppercase">Dashbard</h1>
        
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer ">
                        <FaHome className="text-lg" />
                        <Link to="/home" className=" hover:underline">Overview</Link>
                      </div>
        
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
                        <SlCalender className="text-lg" />
                        <Link to="/Table" className=" hover:underline">Table</Link>
                      </div>
        
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
                        <IoTicketSharp className="text-lg" />
                        <Link to="/form" className=" hover:underline">Form</Link>

                      </div>
        
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
                        <FaFile className="text-lg" />
                        <span>File Manager</span>
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
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <h1 className="uppercase">Adminstrator</h1>
        
        
        
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
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <h1 className="uppercase">settings</h1>
        
        
        
                      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-600 cursor-pointer">
                        <MdContactSupport className="text-lg" />
                        <span>Supports</span>
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
                    <div className="flex items-center justify-center p-4 mt-auto bg-gray-700">
                      <span>© 2025 MyCompany</span>
                    </div>
                  </div>
    </div>
  )
}

export default Left