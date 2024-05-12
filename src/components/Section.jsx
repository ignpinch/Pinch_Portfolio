import React from 'react'
import project1 from '../assets/NexplayImage.jpg'
import project2 from '../assets/KopiMed.png'
import project3 from '../assets/Paws.png'

function Section() {
  return (
    <>
      <div className='relative w-full h-auto bg-[#1a1a1a]'>
      <div class="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className='h-auto pt-[10vh] pb-[5vh] flex justify-center flex-col items-center '>
          <div className='z-10 xl:w-[134vh] lg:w-[63vh] md:w-[63vh] xl:text-left lg:text-left md:text-left text-center sm:ml-[7vh]'>
            <h1 className=' text-[#f5f378] my-5 font-briceRegular text-6xl font-bold leading-[6vh]'>UI/UX <br/>DESIGNS<span className='text-white text-[10vh] '>.</span></h1>
          </div>
          
          <div className=' h-auto grid xl:lg:md:grid-cols-2 grid-cols-1 gap-12 p-5 '>
            <div className="group relative items-center overflow-hidden justify-center  rounded-2xl cursor-pointer">
              
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh]  md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project1} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>

              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">NEXTPLAY</h1>
                <p className='text-white font-poppins mr-[6vh]'>Nextplay offers a diverse music library catering to all tastes.</p>
                <a href="" className='text-[#c6e58a] font-briceThin mb-[3vh] mt-3 before:content-"" before:w-[0vh] before:h-[1px] before:bg-[#c6e58a] before:absolute before:bottom-6 before:rounded-xl hover:before:w-[16vh] before:duration-300'>See Case Study</a>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project2} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">KOPIMED</h1>
                <p className='text-white font-poppins mr-[6vh]'>Kopimed App: Satisfying every coffee craving, one cup at a time.</p>
                <a href="" className='text-[#c6e58a] font-briceThin mb-[3vh] mt-3 before:content-"" before:w-[0vh] before:h-[1px] before:bg-[#c6e58a] before:absolute before:bottom-6 before:rounded-xl hover:before:w-[16vh] before:duration-300'>See Case Study</a>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl'>
                <img src={project3} alt="Nextplay"  className='rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">PAWS : ADOPTION APP</h1>
                <p className='text-white font-poppins mr-[6vh]'>Finding furry friends their forever homes, effortlessly.</p>
                <a href="" className='text-[#c6e58a] font-briceThin mb-[3vh] mt-3 before:content-"" before:w-[0vh] before:h-[1px] before:bg-[#c6e58a] before:absolute before:bottom-6 before:rounded-xl hover:before:w-[16vh] before:duration-300'>See Case Study</a>
              </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden rounded-2xl cursor-pointer">
              <div className='md:sm:lg:xl:h-[34vh] h-[30vh] md:xl:sm:lg:w-[60vh] rounded-2xl '>
                <img src=""  alt="Nextplay"  className='bg-black rounded-2xl lg:w-full xl:w-full md:w-full sm:w-full w-[56vh] h-full  brightness-100 cursor-pointer group-hover:scale-150 group-hover:brightness-50 duration-300'/>  
              </div>
              <div className='absolute px-9 inset-0 flex flex-col justify-end -bottom-60 group-hover:bottom-0 duration-300'>
                <h1 className="text-3xl font-poppins font-bold text-white">IT'S TIME</h1>
                <p className='text-white font-poppins mr-[6vh]'>Nextplay offers a diverse music library catering to all tastes.</p>
                <a href="" className='text-[#c6e58a] font-briceThin mb-[3vh] mt-3 before:content-"" before:w-[0vh] before:h-[1px] before:bg-[#c6e58a] before:absolute before:bottom-6 before:rounded-xl hover:before:w-[16vh] before:duration-300'>See Case Study</a>
              </div>
            </div>

            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Section