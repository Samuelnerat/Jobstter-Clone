import React, { useState } from 'react';
import Logo from '../assets/react.svg';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const userData = { name, email, password };
      console.log(userData);
      const response = await fetch('http://localhost:4000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message);
      }
      toast.success('User successfully registered');

      localStorage.setItem('token', data.token);
      // window.location.href = "/dashboard/stats";
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  

  const demoPage = () => {
    window.location.href = '/dashboard/stats';
  };

  return (
    <div className='bg-blue-50 flex justify-center items-center h-full'>
      <ToastContainer />
      <div className='p-10 max-w-[280px] md:max-w-[400px] rounded-md w-full bg-white border-t-4 border-blue-500 shadow-lg my-12'>
        <div className='flex justify-center'>
          <img src={Logo} alt='logo' />
        </div>

        <h1 className='text-center text-3xl text-slate-800 mt-8'>Register</h1>

        <form className='mt-8' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              className='bg-blue-50 outline-none border-blue-200 border rounded-md my-3 h-8'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              className='bg-blue-50 outline-none border-blue-200 border rounded-md my-3 h-8'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              className='bg-blue-50 outline-none border-blue-200 border rounded-md my-3 h-8'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='w-full bg-blue-500 text-white p-1 my-4 rounded-md hover:bg-blue-700'>
            Submit
          </button>
        </form>
        <button
          onClick={demoPage}
          className='w-full bg-blue-300 text-blue-500 p-1 rounded-md hover:bg-blue-700 hover:text-white'
        >
          Demo App
        </button>
        <p className='text-center text-base mt-4'>
          Already a member?{' '}
          <Link to='/login'>
            <span className='text-blue-500 cursor-pointer'>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
