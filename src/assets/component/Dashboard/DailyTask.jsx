import React from "react";
// import { Clock } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import one from "../images/profile.jpg"

const DailyTask = () => {
  return (
    <div className="p-6  h-full bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daily Task</h1>
        <select className="border p-2 rounded">
          <option>Action 1</option>
          <option>Action 2</option>
          <option>Action 3</option>
        </select>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div className="border p-4 rounded shadow flex flex-col">
          <h2 className="text-lg font-semibold">Task 1</h2>
          <p className="text-sm text-gray-600">This is the description of task 1, providing some details about the task.</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-gray-500 text-sm">
              {/* <FaRegClock size={16} className="mr-1" /> */}
              <span>Updated 3 days ago</span>
            </div>
            <div className="flex -space-x-2">
              <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white" />
              <img src={one} alt="User 2" className="w-8 h-8 rounded-full border border-white" />
              <img src={one} alt="User 3" className="w-8 h-8 rounded-full border border-white" />
            </div>
          </div>
        </div>
        <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Task 1</h2>
          <p className="text-sm text-gray-600">This is the description of task 1, providing some details about the task.</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-gray-500 text-sm">
              {/* <FaRegClock size={16} className="mr-1" /> */}
              <span>Updated 3 days ago</span>
            </div>
            <div className="flex -space-x-2">
              <img src={one} alt="User 1" className="w-8 h-8 rounded-full border border-white" />
              <img src={one} alt="User 2" className="w-8 h-8 rounded-full border border-white" />
              <img src={one} alt="User 3" className="w-8 h-8 rounded-full border border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTask;
