import React from 'react';

const AllJobs = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='max-w-[300px] md:max-w-full p-8 bg-white mt-10 mx-4 md:mx-0'>
      <h1 className='text-2xl mb-6'>Search Form</h1>

      <form>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm text-gray-700 font-normal'>Search</label>
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
              <option value=''>All</option>
              <option value='pending'>Pending</option>
              <option value='interview'>Interview</option>
              <option value='declined'>Declined</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Type</label>
            <select className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300'>
              <option value=''>All</option>
              <option value='full-time'>Full-time</option>
              <option value='part-time'>Part-time</option>
              <option value='contract'>Remote</option>
              <option value='contract'>Internship</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Sort</label>
            <select className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300'>
              <option value='date'>Latest</option>
              <option value='name'>Oldest</option>
              <option value='status'>A-z</option>
              <option value='contract'>Z-a</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <button 
              type='button' 
              className='bg-red-100 rounded-md h-10 w-full px-4 text-red-800 hover:bg-red-200 transition-all mt-auto'>
              Clear Filters
            </button>
          </div>
        </div>
      </form>

    </div>
    </div>
  );
}

export default AllJobs;
