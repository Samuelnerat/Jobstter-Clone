import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ isSidebarOpen }) => {
  const data = {
    labels: ['Mar2022', 'Apr2022', 'May2022', 'Jun2022', 'Jul2022', 'Aug2022'],
    datasets: [
      {
        data: [8, 6, 4, 5, 6, 5],
        backgroundColor: 'rgb(59, 130, 246)',
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-full  md:w-11/12' : 'w-full'} mx-auto`}>
      <div className="relative h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
