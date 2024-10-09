import React from 'react';
import { MdLuggage } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import BarChart from '../../components/BarChart';
import StatusCard from '../../components/StatusCard';
import { useOutletContext } from 'react-router-dom';



const Stats = () => {
  const { isSidebarOpen } = useOutletContext();

  return (
    <div className='flex flex-col justify-between'>
      <div className={`flex flex-col md:flex-row md:justify-between gap-4 ${isSidebarOpen ? '' : 'w-full'}`}>

      <StatusCard
        count={28}
        label='Pending Applications'
        color='#e9b949'
        icon={MdLuggage}
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-full md:w-1/3' : 'w-full md:w-1/2'}`}
      />
      <StatusCard
        count={25}
        label='Interviews Scheduled'
        color='#647acb'
        icon={FaCalendarCheck}
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-full md:w-1/3' : 'w-full md:w-1/2'}`}
      />
      <StatusCard
        count={22}
        label='Jobs Declined'
        color='#d66a6a'
        icon={FaBug}
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-full md:w-1/3' : 'w-full md:w-1/2'}`}
      />

      </div>

      <div>
        <div className='mt-14 flex justify-center items-center flex-col text-2xl m-2 '>
          <h1 className='text-[#102d60]'>Monthly Applications</h1>
          <p className='text-blue-500 mt-4 text-lg'>Area Chart</p>
        </div>

        <div className={`flex flex-col justify-between h-full transition-all duration-300 ${isSidebarOpen ? ' pl-0 md:pl-0' : 'pl-0 md:pl-16'}`}>
          <BarChart isSidebarOpen={isSidebarOpen}/>
        </div>
   
      </div>
      
    </div>
  );
}

export default Stats;

