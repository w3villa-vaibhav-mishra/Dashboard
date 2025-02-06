import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { CiTextAlignRight } from "react-icons/ci";


const LeftCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      {/* Header with Project Summary and Three-Dot Menu */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Project Summary</h2>
        <div className="cursor-pointer text-gray-500 text-xl">
          <span>...</span> {/* Three dots menu */}
        </div>
      </div>

      {/* Two cards below the heading */}
      <div className="grid grid-rows-2 gap-6">
        {/* First Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
          {/* First Section */}
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <CiTextAlignRight
              className="w-6 h-6 rounded-full p-1 bg-orange-200 text-orange-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">Tiddo App</h3>
              <p className="text-gray-500 text-sm ">10 Members</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <FaPeopleGroup
              className="w-6 h-6 rounded-full p-1 bg-blue-200 text-blue-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">Homie SAAS Application</h3>
              <p className="text-gray-500 text-sm">24 Member</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
          {/* Second Section */}
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <CiCreditCard2
              className="w-6 h-6 rounded-full p-1 bg-orange-200 text-orange-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">In Progress</h3>
              <p className="text-gray-500 text-sm">22 Projects</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <IoCheckmarkDoneCircle
              className="w-6 h-6 rounded-full p-1 bg-green-200 text-green-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">Completed</h3>
              <p className="text-gray-500 text-sm">10 projects</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
          {/* Second Section */}
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <CiCreditCard2
              className="w-6 h-6 rounded-full p-1 bg-orange-200 text-orange-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">In Progress</h3>
              <p className="text-gray-500 text-sm">22 Projects</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            {/* Left - Profile Image */}
            <IoCheckmarkDoneCircle
              className="w-6 h-6 rounded-full p-1 bg-blue-200 text-green-600"
            />

            {/* Middle - Text Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-700">Completed</h3>
              <p className="text-gray-500 text-sm">10 projects</p>
            </div>

            {/* Right - See More */}
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
