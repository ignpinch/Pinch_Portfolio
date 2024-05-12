import React from 'react'
import aboutmephoto from "../assets/aboutme.png";
import { SiInstagram , SiFacebook , SiTiktok , SiGithub } from "react-icons/si"

function aboutme() {
  return (
    <>
        <div className='relative w-full h-auto px-[30vh] py-[10vh] bg-[#1a1a1a]'> 
            <div className="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className=' h-auto w-full flex flex-col justify-center items-center '>
                <div className='flex justify-start w-full'>
                    <h1 className=' text-[#f5f378] my-5 font-briceRegular text-6xl font-bold leading-[6vh]'>ABOUT <br/>ME<span className='text-white text-[10vh] '>.</span></h1>
                </div>
                <div className='grid grid-cols-3  gap-5 '>
                    <div className=' z-10'>
                        <img src={aboutmephoto} alt="" />
                    </div>
                    <div className='bg-black col-span-2 grid grid-rows-2s'>
                        <div className='text-white font-briceThin'>
                            <p className='text-3xl'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                        <div className='bg-white'>
                        </div>
                    </div>
                </div>
                <div className=' w-full py-10 h-auto my-10'>
                    <div className='flex justify-center gap-10' >
                        <div className='border-2 h-auto p-2 px-5 rounded-full gap-2 flex text-white'>
                            <SiInstagram className='w-5 h-auto' />
                            <p className='font-poppins'>Intagram</p>
                        </div>    
                        <div className='border-2 h-auto p-2 px-5 rounded-full gap-2 flex text-white'>
                            <SiTiktok className='w-5 h-auto' />
                            <p className='font-poppins'>Tiktok</p>
                        </div>                        
                        <div className='border-2 h-auto p-2 px-5 rounded-full gap-2 flex text-white'>
                            <SiGithub className='w-5 h-auto' />
                            <p className='font-poppins'>Github</p>
                        </div>     <div className='border-2 h-auto p-2 px-5 rounded-full gap-2 flex text-white'>
                            <SiFacebook className='w-5 h-auto' />
                            <p className='font-poppins'>Facebook</p>
                        </div>    
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default aboutme