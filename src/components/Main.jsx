import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import pinchImage from "../assets/myprofile.png";
import iconImage from "../assets/wave.png";


function Main() {
  return (
    <>
      <div className='relative xl:mt-0 lg:md:sm:mt-[10vh] w-full h-auto pb-10 bg-[#1a1a1a]'>        
      <div class="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className='h-screen flex flex-col justify-center items-center p-5'>
          <div className='flex mb-2 justify-center items-center gap-2 w-auto h-atuo px-5 p-2 rounded-full'>
            <p className='text-[#f5f378] font-briceThin z-10'>Hi, It's me Pinch</p>
            <img src={iconImage} alt="icon" className='w-5 h-5'/>
          </div>
            
          <img src={pinchImage} alt="Pinch" className='w-[30vh]  mb-3 z-10 hover:scale-110 duration-300 hover:drop-shadow-[0_0_40px_rgba(197,_136,_209,_0.10)] resize-x' /> 
          
          <p className='sm:w-[70vh] lg:md:w-[100vh] mb-5 text-lg xl:text-4xl text-center mx-10 clamp-2 font-medium text-white font-briceThin'>Experienced Freelance UI/UX, Developer, & Graphic Designer crafting captivating digital experiences.</p>
          <div className='font-bold font-inter z-10'>
            <button className='m-2 rounded-xl text-[#1a1a1a] bg-[#c588d1] p-4 w-auto'>Download CV</button>
            <button className='m-2 rounded-xl text-black bg-[#c6e58a] p-4 w-auto'>Contact me</button>
          </div>
        </div>
        <div className='flex justify-center '>
          <div className=' flex justify-center w-[4vh] h-[7vh] rounded-full border-2 border-white relative'>
            <div className='contents-"" w-[5px] h-[5px] mt-[1.50vh] border-2 border-white bg-white rounded-full animate-scroll-down '></div>
          </div>
        </div>
        <p className='text-center text-white opacity-35 text-[10px] my-2 font-inter'>SCROLL</p>
      </div>
    </>
  )
}

export default Main