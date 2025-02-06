import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProjectsOverview = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full min-h-full  flex flex-col ">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-bold">Projects Overview</h2>
        <button className="text-gray-500">⋮</button>
      </div>
      <div className="flex justify-center ">
      <div className="flex justify-center items-center relative   pt-10 w-60 h-60">
        {/* Outer Circle */}
        <div className="absolute w-4/5 h-full">
          <CircularProgressbarWithChildren
            value={85}
            styles={buildStyles({
              strokeLinecap: "round",
              pathColor: "#9333ea",
              trailColor: "#E5E7EB",
            })}
          />
        </div>
        {/* Middle Circle */}
        <div className="absolute w-3/5 h-4/5">
          <CircularProgressbarWithChildren
            value={75}
            styles={buildStyles({
              strokeLinecap: "round",
              pathColor: "#6366F1",
              trailColor: "transparent",
            })}
          />
        </div>
        {/* Inner Circle */}
        <div className="absolute w-2/5 h-3/5">
          <CircularProgressbarWithChildren
            value={55}
            styles={buildStyles({
              strokeLinecap: "round",
              pathColor: "#F97316",
              trailColor: "transparent",
            })}
          >
            <div className="text-xl font-bold">65%</div>
            <div className="text-[10px] text-gray-500">App Design</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
        <div>
          <h3 className="text-sm font-semibold">App Design</h3>
          <p className="text-xs text-gray-500">16 Total Projects • 3 Members</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;