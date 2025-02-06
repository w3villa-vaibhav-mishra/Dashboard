import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  // Sample data for 12 months
  const data = {
    '12 months': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
      datasets: [
        {
          label: 'Hours',
          data: [150, 180, 200, 250, 300, 400, 450, 350, 370, 420, 480, 500], 
          backgroundColor: 'rgb(236,146,18)', 
          borderColor: 'orange',
          
          borderWidth: 1, 
        },
        {
          label: 'Projects',
          data: [120, 160, 200, 230, 270, 310, 350, 370, 410, 440, 480, 490],
          backgroundColor: 'gray',
          borderColor: 'gray', 
          borderWidth: 1, 
        },
      ],
    },
    '7 days': {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
      datasets: [
        {
          label: 'Hours',
          data: [20, 30, 25, 40, 35, 45, 50], 
          
          backgroundColor: 'orange', 
          borderColor: 'orange', 
          borderWidth: 1, 
        },
        {
          label: 'Projects',
          data: [18, 22, 19, 27, 26, 30, 35], 
          backgroundColor: 'gray', 
          borderColor: 'gray', 
          borderWidth: 1, 
        },
      ],
    },
    '30 days': {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), 
      datasets: [
        {
          label: 'Hours',
          data: new Array(30).fill(30).map((_, index) => 100 + index * 5),
          backgroundColor: 'orange', 
          borderColor: 'orange', 
          borderWidth: 1, 
        },
        {
          label: 'Projects',
          data: new Array(30).fill(15).map((_, index) => 100 + index * 3), 
          backgroundColor: 'gray', 
          borderColor: 'gray', 
          borderWidth: 1, 
        },
      ],
    },
    '24 hours': {
      labels: ['0:00', '6:00', '12:00', '18:00'], 
      datasets: [
        {
          label: 'Hours',
          data: [10, 20, 15, 25], 
          backgroundColor: 'orange',
          borderColor: 'orange', 
          borderWidth: 1, 
        },
        {
          label: 'Projects',
          data: [8, 15, 12, 20], 
          backgroundColor: 'gray',
          borderColor: 'gray', 
          borderWidth: 1, 
        },
      ],
    },
  };

  
  const [selectedRange, setSelectedRange] = useState('12 months');

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', 
      },
      tooltip: {
        enabled: true, 
      },
    },
    scales: {
      y: {
        min: 100, 
        max: 500, 
        ticks: {
          stepSize: 50, 
        },
      },
      x: {
        ticks: {
          autoSkip: false,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2, 
        borderRadius: { topLeft: 10, topRight: 10 }, 
        barThickness: 10, 
      },
    },
  };
  
  return (
    <div className="w-full h-[370px] p-4  bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-center font-bold text-lg">Project Statistics Chart</h2>
        <div className="flex space-x-4">
          {/* Buttons for different time ranges */}
          {['12 months', '7 days', '30 days', '24 hours'].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-2 py-1 rounded-lg text-sm ${selectedRange === range ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Bar chart */}
      <Bar className=' max-h-[230px] min-w-full bg-white' data={data[selectedRange]} options={options} />
    </div>
  );
}

export default BarChart;
