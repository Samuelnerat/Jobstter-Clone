import React from 'react';
import Logo from '../assets/react.svg';
import {Link } from 'react-router-dom'

const Login = () => {
  // const demoPage = () => {
  //   window.location.href = '/dashboard/stats';
  // }
  return (
    <div className='bg-blue-50 flex justify-center items-center h-full md:h-screen py-10 md:py-0'>
      <div className='p-10 max-w-[280px] md:max-w-[400px] rounded-md w-full bg-white border-t-4 border-blue-500 shadow-lg'>
        <div className='flex justify-center'>
          <img src={Logo} alt='logo'/>
        </div>

        <h1 className='text-center text-3xl text-slate-800 mt-8'>Login</h1>

        <form className='mt-8'>
          <div className='flex flex-col'>
            <label>Email</label>
            <input type='email' name='email' className='bg-blue-50 outline-none border-blue-200 border rounded-md my-3 h-8'/>
          </div>

          <div className='flex flex-col'>
            <label>Password</label>
            <input type='passwword' name='password' className='bg-blue-50 outline-none border-blue-200 border rounded-md my-3 h-8'/>
          </div>
          <button className='w-full bg-blue-500 text-white p-1 my-4 rounded-md hover:bg-blue-700'>Submit</button>
        </form>
        {/* <button onClick={demoPage} className='w-full bg-blue-300 text-blue-500 p-1 rounded-md hover:bg-blue-700 hover:text-white'>Demo App</button> */}
        <Link to='/dashboard/stats'><button className='w-full bg-blue-300 text-blue-500 p-1 rounded-md hover:bg-blue-700 hover:text-white'>Demo App</button></Link>
        <p className='text-center text-base mt-4'>Not a member yet? <Link to='/register'><span className='text-blue-500 cursor-pointer'>Register</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
