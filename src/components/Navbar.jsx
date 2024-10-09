import React, {useState} from 'react';
import {FaAlignLeft} from 'react-icons/fa'
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import Logo from '../assets/react.svg'
import {Link} from 'react-router-dom'


const Navbar = ({ toggleSidebar, isSidebarOpen }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* Large Screens */}
    <div className={`hidden  md:flex justify-between items-center p-8 bg-white transition-all duration-300 transiti ${isSidebarOpen ? 'w-full' : 'w-full pl-20'}`}>
      <div onClick={toggleSidebar} className='cursor-pointer'>
        <FaAlignLeft className='text-blue-500 text-3xl font-extrabold' />
      </div>
      <div className='text-3xl'>
        Dashboard
      </div>

      <div className='relative'>
      <div onClick={toggleDropdown}  className='flex flex-row items-center bg-blue-500 px-1.5 py-0.5 text-white gap-2 rounded-md text-xl hover:bg-blue-600 cursor-pointer'>
        <IoPersonCircleOutline />
        <p>Test User</p>
        <MdArrowDropDown />
      </div>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-full text-center bg-blue-200 px-1.5 py-2 text-blue-400 gap-2 rounded-md text-xl cursor-pointer'>
          <Link to='/'>Logout</Link>
        </div>
      )}

      </div>
    </div>

{/* Small Screens */}
      <div className=' md:hidden flex justify-between items-center gap-2 p-4 bg-white'>
        <div className='cursor-pointer' onClick={toggleSidebar}>
          <FaAlignLeft className='text-blue-500 text-3xl font-extrabold' />
        </div>
        <div className='w-32'>
          <img src={Logo} alt=''/>
        </div>

        <div className='relative'>
        <div  onClick={toggleDropdown} className='flex flex-row items-center bg-blue-500 p-1 text-white gap-2 rounded-md text-sm hover:bg-blue-600 cursor-pointer' >
            <IoPersonCircleOutline  />
            <p>Test User</p>
            <MdArrowDropDown />
        </div> 

        {isOpen && (
        <div className='right-0 absolute  mt-3 w-full text-center bg-blue-200 px-1.5 py-2 text-blue-400 gap-2 rounded-md text-sm cursor-pointer'>
          <Link to='/'>Logout</Link>
        </div>
      )}
      </div>
      </div>
    </>
  );
};

export default Navbar;
