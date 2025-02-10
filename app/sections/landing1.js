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

<div className='absolute  right-24  hidden top-36 sm:grid grid-cols-2 grid-rows-2 gap-4'>
  <div className='backdrop-blur-sm rounded-3xl border-2 border-neutral-400 h-52 w-48 z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='w-32 h-32 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute text-6xl font-serif'> 
      1
    </div>
    <div className='absolute text-xl bottom-1 font-serif'> 
    AIR
    </div>
    
  </div>
  <div className='backdrop-blur-sm rounded-3xl border-2 border-neutral-400 h-52 w-48 z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='w-32 h-32 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute text-6xl font-serif'> 
      1
    </div>
    <div className='absolute text-xl bottom-1 font-serif'> 
    Dynamics    </div>
    
  </div>
  <div className='backdrop-blur-sm rounded-3xl border-2 border-neutral-400 h-52 w-48 z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='w-32 h-32 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute text-6xl font-serif'> 
      1
    </div>
    <div className='absolute text-xl bottom-1 font-serif'> 
    Endurance Race    </div>
  </div>
  <div className='backdrop-blur-sm rounded-3xl border-2 border-neutral-400 h-52 w-48 z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='w-32 h-32 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute text-6xl font-serif'> 
      1
    </div>
    <div className='absolute text-xl bottom-1 font-serif'> 
    Efficiency    </div>
    
  </div>
</div>

<div className='z-50 absolute md:text-xl w-full md:w-1/2 md:-right-20 hidden sm:block md:bottom-20 font- p-10 md:p-40 text-justify font-Fn  text-neutral-200'>
    Welcome to the official website of Yeti Racing Cusat - the first ever team from Kerala to win Formula Bharat and complete the endurance race in SAE Supra
    </div>
  {/* Background image */}
  <div className='w-full h-full bg-black opacity-50 absolute z-10'></div>
  <img 
    src="https://ik.imagekit.io/r70knk9pu/20250124_021845_1_.jpg?updatedAt=1739204278923"
     
    loading="lazy"
    className="object-cover  w-full h-full object-top absolute sm:relative  sm:realtive top-0 left-0 z-0"
  />

<div>

</div>


  {/* Second Image */}
   <img 
    src="https://ik.imagekit.io/r70knk9pu/Photoroom-20250210_215354.png?updatedAt=1739204736891" 
    width={200} 
    height={200} 
    loading="lazy"
    className="object-cover block w-full h-full object-bottom absolute top-0 left-0 z-40"
  /> 
 <div
      className={`md:mt-32  mt-28 md:ml-9 z-30 object-cover font-Inter font-extrabold md:text-[14rem] text-[6rem] md:tracking-wider w-full h-full object-bottom absolute top-0 flex flex-col leading-[85px] md:leading-[185px] text-gray-300  bg-gradient-to-br to-neutral-600  from-neutral-100  text-transparent bg-clip-text`
      }
    >
      YETI <span>RACING</span>
    </div> 
    
   


    </div>

    )
}