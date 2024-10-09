import React from 'react';
import Logo from '../assets/react.svg'
import Landing from '../assets/landing.svg'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    
    // const pageSwitch = () => {
    //     window.location.href = '/login';
    // }

  return (
    <div className='bg-blue-50 px-4 md:px-20 pt-6 h-screen'>
      <div className='pb-5 md:pb-0'><img src={Logo} alt='logo'/></div>

      <div className='flex justify-between gap-0 md:gap-7 w-full items-center'>
        <div className='w-full md:w-1/2 '>
            <h1 className='text-[#102a43] font-bold text-[45px] md:text-5xl mb-9'>Job<span className='text-blue-500'> Tracking </span>App</h1>
            <p className='text-sm leading-7 text-[#53678c] mb-5'> Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
            {/* <button className='bg-blue-500 text-white px-4 py-1.5 text-xl rounded-md' onClick={pageSwitch}>Login/Register</button> */}
            <Link to="/login" className='bg-blue-500 text-white px-4 py-1.5 text-xl rounded-md' >Login/Register</Link>
        </div>
        <div className='w-1/2 hidden md:block'><img src={Landing} alt='two people shaking hands'/></div>
      </div>
    </div>
  );
}

export default LandingPage;
