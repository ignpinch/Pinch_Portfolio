import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi"
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";


const Feedback = () => {
  return (
    <>
        <div className='py-10 pb-[10vh] overflow-hidden  xl:py-[10vh] overflow-x-hidden h-auto w-full bg-[#1a1a1a] relative'>  
        <div class="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className=' relative flex justify-center items-center font-briceRegular w-full h-7 bg-[#c6e58a] rotate-[4deg] inl'> 
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
        </div>   
        <div className=' relative flex justify-center items-center font-briceRegular w-full h-7 bg-[#c6e58a] rotate-[-3deg]'>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
        </div>    
            <div className='px-5 xl:py-[10vh] p-5 flex items-center justify-center flex-col'>
                <BiSolidQuoteLeft className='z-10 w-[8vh] h-auto text-[#c588d1] mt-10 mb-5' />

                <div className='text-center text-white'>
                    <p className='md:text-2xl md:w-[70vh] xl:w-[100vh] w-[45vh] font-inter font-light xl:text-2xl text-[22px]'>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                </div>

                <div className='flex justify-center items-center p-2 mt-4'>
                    <div className='flex justify-content items-center pr-5 border-r-2'>
                        <img className='z-10 object-fit w-8 h-8 object-cover rounded-full' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
                        <h1 className='ml-3 font-inter font-medium text-white xl:text-md text-sm'>Juan Daniel</h1> 
                    </div>
                        <h1 className='ml-4 pr-5 text-[#727273] font-inter font-light xl:text-md text-sm '> CEO at Google</h1>
                </div>

                <div className='z-10 flex justify-center items-center my-6'>
                    <FaAngleLeft className='w-5 h-auto text-[#f5f378] mx-4'/>
                    <FaAngleRight className='w-5 h-auto text-[#f5f378] mx-4'/>
                </div>
            </div>
            
            <div className=' relative flex justify-center items-center font-briceRegular w-full h-7 bg-[#c6e58a] rotate-[-3deg] inl'>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
        </div>   
        <div className='mt-0 relative flex justify-center items-center font-briceRegular w-full h-7 bg-[#c6e58a] rotate-[4deg]'>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
                <h1 className='mx-8 inline-block'>testimonials</h1>
            </div>
        </div>  
    </>
  )
}

export default Feedback