import React from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../assets/Pinch_Logo.png";

function Navbar() {
  return (
    <>
        <div className=' w-full relative'>
        <div class="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <nav className='h-[8vh] flex items-center justify-center w-auto mx-5 font-inter text-white gap-7'>
            
            <div className='z-10'>
              <img src={logo} alt="pinch" className='h-auto w-[10vh] mt-5 '/>
            </div>
            <HiOutlineMenu size={30} className='absolute left-0 mx-5'/>
          </nav>
        </div>
    </>
  )
}

export default Navbar