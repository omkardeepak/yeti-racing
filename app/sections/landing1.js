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
        <div className="min-h-screen w-full relative  z-0">
  {/* First Image */}
  <div className="bg-black opacity-60 w-full h-full inset-0 z-10 absolute"></div>
  <img 
    src="https://ik.imagekit.io/r70knk9pu/landing1.jpg?updatedAt=1739036146680" 
    width={200} 
    height={200} 
    loading="lazy"
    className="object-cover hidden sm:block w-full h-full object-bottom absolute top-0 left-0 z-0"
  />

  {/* Second Image */}
  <img 
    src="https://ik.imagekit.io/r70knk9pu/Photoroom-20250208_231709.png?updatedAt=1739036946309" 
    width={200} 
    height={200} 
    loading="lazy"
    className="object-cover hidden sm:block w-full h-full object-bottom absolute top-0 left-0 z-50"
  />
<div
      className={`mt-5 object-cover font-Inter font-extrabold text-[12rem] w-full h-full object-bottom absolute top-0 
      z-30 flex flex-col leading-[160px] text-gray-300 transition-transform duration-700 ease-in-out ${
        isLoaded ? 'translate-x-[650px]' : '-translate-x-[900px]'
      }`}
    >
      YETI <span>RACING</span>
    </div></div>

    )
}