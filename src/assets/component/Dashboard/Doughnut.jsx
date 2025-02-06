import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

function Doughnuts() {
  const data = {
    labels: ['Pending Project', 'Done Project', 'New Project', 'Reviewed Project'],
    datasets: [
      {
        label: 'Poll',
        data: [3, 3, 3, 1], 
        backgroundColor: ['black', 'red', 'orange', 'blue'], 
        
        borderColor: ['black', 'red', 'orange', 'blue'],
        
        borderWidth: 1, 
        
        
      },
    ],
  };

  
  
  const options = {
    responsive: true,
    
    cutout: '70%', 
    
    plugins: {
      tooltip: {
       
        
      },
      legend: {
        display: false, 
        
      },
    },
  };


  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
  const percentages = data.datasets[0].data.map((value) => ((value / total) * 100).toFixed(1));

  return (
    <div className="h-[50%] w-[100%] flex flex-col rounded-lg items-center justify-center ">
      <Doughnut data={data} options={options} />
      <div className="mt-4 space-x-4 flex items-center justify-center">
        {data.labels.map((label, index) => (
          <div key={index} className="flex flex-col justify-center items-center ">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></div>
            <p className=" flex  justify-center text-center text-sm font-semibold">{label}</p>
            <p className="text-sm text-gray-500 ml-2">({percentages[index]}%)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doughnuts;
