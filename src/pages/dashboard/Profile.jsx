import React from 'react';

const AllJobs = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='md:max-w-full p-8 bg-white mt-10 mx-4 md:mx-0 max-w-[300px]'>
      <h1 className='text-2xl mb-6'>Profile</h1>

      <form>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Name</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Last Name</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Email</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='email' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-semibold'>Location</label>
            <input 
              className='bg-blue-50 border border-blue-200 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300' 
              name='search' 
              type='text' 
              placeholder=''
            />
          </div>

          <div className='flex flex-col'>
            <button 
              type='button' 
              className='bg-blue-500 rounded-md h-10 w-full px-4 text-white hover:bg-blue-700 transition-all mt-auto'>
              Save Changes
            </button>
          </div>
        </div>
      </form>

    </div>
    </div>
  );
}

export default AllJobs;
