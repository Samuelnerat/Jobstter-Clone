import React from 'react';

const AllJobs = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='md:max-w-full p-8 bg-white mt-10 mx-4 md:mx-0 max-w-[300px]'>
      <h1 className='text-2xl mb-6'>Add Job</h1>

      <form>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Position</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Company</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Job Location</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm  text-gray-700 font-normal'>Status</label>
            <select className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300'>
              <option value='pending'>Pending</option>
              <option value='interview'>Interview</option>
              <option value='declined'>Declined</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm  text-gray-700 font-normal'>Job Type</label>
            <select className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300'>
              <option value=''>Full Time</option>
              <option value='pending'>Part Time</option>
              <option value='interview'>Intership</option>
              <option value='declined'>Remote</option>
            </select>
          </div>

          <div className='flex flex-row gap-3'>
            <button 
              type='button' 
              className='bg-[#627d98] rounded-md h-10 w-full px-4 text-white hover:bg-[#20282f] transition-all mt-auto'>
              Clear
            </button>
            <button 
              type='button' 
              className='bg-blue-400 rounded-md h-10 w-full px-4 text-white hover:bg-blue-600 transition-all mt-auto'>
              Submit
            </button>
          </div>
        </div>
      </form>

    </div>
    </div>
  );
}

export default AllJobs;
