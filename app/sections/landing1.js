"use client"
import { useEffect, useState } from 'react';
import YetiRacing from "../components/landingtext"
export default function Landing(){
      const [isLoaded, setIsLoaded] = useState(false);
    
      useEffect(() => {
        // This will trigger the animation when the component is loaded
        setIsLoaded(true);
      }, []);

    return(
<div className="min-h-screen w-full relative z-0">
<div className='md:w-1/2 md:right-0 w-full  md:p-0 flex flex-col  items-center absolute h-full'>
<div className='absolute md:items-center h-1/2 lg:right-14 xl:right-20 lg:top-36 bottom-3 md:bottom-0 grid  sm:grid grid-cols-2 md:grid-rows-2 lg:gap-4 xl:gap-8 gap-6 gap-y-0 md:gap-y-0 items-end mb-10'>
  <div className='bg-black md:bg-transparent bg-opacity-50 backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36  z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' loading='lazy' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
    AIR
    </div>
    
  </div>
  <div className='backdrop-blur-sm rounded-3xl border-2  text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' loading='lazy' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
      Endurance Race   </div>
    
  </div>
  <div className='hidden backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 bg-black bg-opacity-55 md:bg-transparent md:bg-opacity-0 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 md:flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24  w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' loading='lazy' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
    Dynamics    </div>
  </div>
  <div className='hidden backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 md:flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' loading='lazy' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl  bottom-1 font-serif'> 
    Efficiency    </div>
    
  </div>
</div>

<div className=' z-50 hidden absolute md:text-base xl:text-2xl bottom-0   h-1/6  md:flex items-center xl:p-7 right-0  lg:p-6 xl:pt-10  w-screen  xl:h-1/6  text-justify font-Fn  text-neutral-200 shadow-2xl'>
    Welcome to the official website of Yeti Racing Cusat - the first ever team from Kerala to win Formula Bharat and complete the endurance race in SAE Supra.
    </div>
    </div>
  {/* Background image */}
  <div className='w-full h-full bg-black opacity-50 absolute z-10 '></div>
  <img 
    src="https://ik.imagekit.io/r70knk9pu/20250124_021845_1_.jpg?updatedAt=1739204278923"
     
    loading="lazy"
    className="object-cover  w-full h-full object-top absolute sm:relative  sm:realtive top-0 left-0 z-0"
  />




  {/* Second Image */}
   <img 
    src="https://ik.imagekit.io/r70knk9pu/Photoroom-20250210_215354.png?updatedAt=1739204736891" 

    loading="lazy"
    className="object-cover  w-full h-full object-top absolute top-0 left-0 z-40"
  /> 
 <div
      className={`xl:mt-32 lg:mt-24  mt-32 md:ml-4 z-30 object-cover font-Inter font-extrabold lg:text-[9rem] xl:text-[14rem] text-[6rem] md:tracking-wider w-full h-full object-bottom absolute top-0 flex flex-col leading-[85px] xl:leading-[185px] lg:leading-[125px] text-gray-300  bg-gradient-to-br to-neutral-600  from-neutral-100  text-transparent bg-clip-text`
      }
    >
      YETI <span>RACING</span>
    </div> 
    
   


    </div>

    )
}