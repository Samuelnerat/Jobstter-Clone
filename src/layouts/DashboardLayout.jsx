import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const  [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
  return (
    <div className='flex h-full'>
    {isSidebarOpen && (
        <div className='transition-all duration-300'>
          <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )}
       {/* <Sidebar isSidebarOpen={isSidebarOpen}  />
       <div className='flex-1 transition-all duration-300'> */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'pl-0' : 'pl-0'}`}> 
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        <div className='p-0 md:p-10 bg-blue-50 min-h-full border'> 
            {/* {children} */}
            <Outlet context={{ isSidebarOpen }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
