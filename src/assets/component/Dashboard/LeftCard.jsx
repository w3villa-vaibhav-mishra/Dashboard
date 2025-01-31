import React from 'react';
import { FaChevronRight } from 'react-icons/fa';  // Importing icon for arrow

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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Heading 1</h3>
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <p className="text-gray-500">Some content for Heading 1...</p>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Heading 1</h3>
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <p className="text-gray-500">Some content for Heading 1...</p>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Heading 2</h3>
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <p className="text-gray-500">Some content for Heading 2...</p>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Heading 2</h3>
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
          <p className="text-gray-500">Some content for Heading 2...</p>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
