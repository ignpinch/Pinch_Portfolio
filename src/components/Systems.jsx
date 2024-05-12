import React from 'react'
import project1 from '../assets/KopiWebsite.png'
import project2 from '../assets/SacredHeart.png'
import project3 from '../assets/LibraryManagement.png'
import project4 from '../assets/StudentManagement.png'

function Systems() {
  return (
    <>
      <div className='w-full h-auto relative bg-[#1a1a1a] '>
      <div class="opacity-50 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className='h-auto pt-[5vh] pb-[20vh] flex justify-center flex-col items-center '>
          <div className='z-10 xl:w-[118vh] lg:w-[48vh] md:w-[48vh] xl:text-right lg:text-right md:text-right text-center sm:ml-[7vh]'>
            <h1 className='text-[#c588d1] my-5 font-briceRegular text-6xl font-bold leading-[6vh]'>WEBSITE<br/><span className='text-white text-[10vh] '>.</span>PROJECTS</h1>
          </div>
          <div className=' h-auto grid xl:lg:md:grid-cols-2 grid-cols-1 gap-12 p-5 '>
            <div className="group relative items-center overflow-hidden justify-center  rounded-2xl cursor-pointer">
              
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh]  md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project1} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>

              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">KOPIMED</h1>
                <p className='text-white font-poppins mb-5 mr-[6vh]'>Kopimed App: Satisfying every coffee craving, one cup at a time.</p>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl '>
                <img src={project4}  alt="Nextplay"  className='bg-black rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">DATA MANAGEMENT</h1>
                <p className='text-white font-poppins mb-5 mr-[6vh]'>It's a Student Data Management System for all the students of Rizal Technologicla University.</p>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project3} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-75 duration-300 group-hover:blur-[0.70px] '/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">LIBRARY SYSTEM</h1>
                <p className='text-white font-poppins mb-5 mr-[6vh]'>ChronoLib: A Library Management System for the students of Rizal Technological University.</p>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project2} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">SCHEDULING SYSTEM</h1>
                <p className='text-white font-poppins mb-5 mr-[6vh]'>It's a Scheduling Management System for the church of Sacred Heart of Jesus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Systems