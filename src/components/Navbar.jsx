import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DL.</h1>
        <ul className='hidden md:flex items-center black-color'>
          <li className='p-4 hover:text-white cursor-pointer'><a href='#reviews'>Reviews</a></li>
          <li className='p-4 hover:text-white cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='p-4 hover:text-white cursor-pointer'><a href="#services">Services</a></li>
          <li className='p-4'><a href="#form"><button className='gradient-button cursor-pointer'>CONTACT</button></a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-10 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <div className="flex" >
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>DL.</h1>
            <div onClick={handleNav} className='items-center justify-center'>
              <AiOutlineClose size={20}/> 
            </div>
          </div>
          <li className='p-4 hover:text-white cursor-pointer'><a href='#reviews'>Reviews</a></li>
          <li className='p-4 hover:text-white cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='p-4 hover:text-white cursor-pointer'><a href="#services">Services</a></li>
          <li className='p-4'><a href="#form">CONTACT</a></li>
        </ul>
      </div>
    );
  };

export default Navbar