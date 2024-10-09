import React from 'react';
import Logo from '../assets/react.svg';
import { ImStatsDots } from "react-icons/im";
import { RiMenuSearchLine, RiTodoLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const activeClassName = "text-blue-600 font-bold";
  const inactiveClassName = "text-[#3d5267]";

  return (
    <>
    {/* Large screens */}
    <div className={`hidden md:block transition-transform transform bg-white h-full ${isSidebarOpen ? 'translate-x-0 w-64 p-6' : 'w-0'}`}>
      <div className='pl-2'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='mt-14 pl-3'>
        <NavLink 
          to="stats" 
          className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md hover:bg-blue-50 hover:w-full hover:pl-4 ${isActive ? activeClassName : inactiveClassName}`}
        >
          <ImStatsDots/><p className='text-[#3d5267]'>Stats</p>
        </NavLink>
        
        <NavLink 
          to='all_jobs' 
          className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md hover:bg-blue-50 hover:w-full hover:pl-4 ${isActive ? activeClassName : inactiveClassName}`}
        >
          <RiMenuSearchLine /><p className='text-[#3d5267]'>All Jobs</p>
        </NavLink>
        
        <NavLink 
          to='add_jobs' 
          className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md  hover:bg-blue-50 hover:w-full hover:pl-4 ${isActive ? activeClassName : inactiveClassName}`}
        >
          <RiTodoLine /><p className='text-[#3d5267]'>Add Job</p>
        </NavLink>
        
        <NavLink 
          to='profile' 
          className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md hover:bg-blue-50 hover:w-full hover:pl-4 ${isActive ? activeClassName : inactiveClassName}`}
        >
          <ImProfile /><p className='text-[#3d5267]'>Profile</p>
        </NavLink>
      </div>
    </div>

    {/* Small screens */}


{isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white p-12 w-64 rounded-lg shadow-lg">
            
            <button 
              className="absolute top-4 left-4 text-4xl text-[#842029]" 
              onClick={closeSidebar} 
            >
              <FaTimes />
            </button>

            <div className="mb-6 text-center mt-10">
              <img src={Logo} alt='logo' className='mx-auto' />
            </div>

            <div className='mt-6'>
              <NavLink 
                to="stats" 
                className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md justify-center hover:bg-blue-50 ${isActive ? activeClassName : inactiveClassName}`}
                onClick={closeSidebar}
              >
                <ImStatsDots /><p className='text-[#3d5267]'>Stats</p>
              </NavLink>
              
              <NavLink 
                to='all_jobs' 
                className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md justify-center hover:bg-blue-50 ${isActive ? activeClassName : inactiveClassName}`}
                onClick={closeSidebar}
              >
                <RiMenuSearchLine /><p className='text-[#3d5267]'>All Jobs</p>
              </NavLink>
              
              <NavLink 
                to='add_jobs' 
                className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md justify-center hover:bg-blue-50 ${isActive ? activeClassName : inactiveClassName}`}
                onClick={closeSidebar}
              >
                <RiTodoLine /><p className='text-[#3d5267]'>Add Job</p>
              </NavLink>
              
              <NavLink 
                to='profile' 
                className={({ isActive }) => `flex flex-row items-center gap-3 py-3 text-md justify-center hover:bg-blue-50 ${isActive ? activeClassName : inactiveClassName}`}
                onClick={closeSidebar}
              >
                <ImProfile /><p className='text-[#3d5267]'>Profile</p>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
