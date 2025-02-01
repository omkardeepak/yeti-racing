"use client"
import { useEffect, useState } from 'react';
import logo from "../asset/yeti_logo-removebg-preview.png";
import Image from "next/image"
import car from "../asset/landing.jpg"
export default function Landing() {


  useEffect(() => {
    const text = "'First ever team from Kerala to complete endurance race in SAE Supra and Formula Bharath.'";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    let timeoutId;

    function typeWrite() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        timeoutId = setTimeout(typeWrite, 40); // Adjust speed here (milliseconds)
      } else {
        timeoutId = setTimeout(resetTypewriter, 2000); // Wait before resetting
      }
    }

    function resetTypewriter() {
      typewriter.innerHTML = '';
      i = 0;
      typeWrite();
    }

    typeWrite();

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component is unmounted
      typewriter.innerHTML = ''; // Clear the text if component is unmounted
    };
  }, []);

    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 10); // Trigger text animation after 2 seconds
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="flex flex-col h-screen relative  z-0">
        {/* Background Video */}
            <div className="absolute inset-0 z-0 w-full h-full ">
        {/* Car Image */}
        <Image 
          src={car} 
          alt="Car Image" 
          className="object-cover object-bottom w-full h-full  sm:left-0" 
        />
           <div className="absolute inset-0 bg-black opacity-15 z-10"></div> 

  </div>
  
        {/* Animation Container */}
        <div className="z-50 container relative flex justify-center items-center mt-16 h-3/4 w-full overflow-hidden">
          {/* Line Animation */}
          {/* <div className="line absolute w-4 h-1/2  origin-center animate-line-draw"></div>
   */}
        <div className=' mt-8 w-full h-1/2 hidden sm:block'>
        <p
      id="typewriter"
      className={`z-50 sm:w-[600px] sm:h-1/6 h-1/5 sm:left-20 text-shadow p-5 sm:pr-9 sm:mt-10 bottom-0 mb-10 sm:mb-96 relative text-3xl text-white font-Fn text-justify leading-relaxed transition-transform duration-1000 ease-out ${
        showText ? '-translate-x-[0%] opacity-100' : 'translate-x-[100%] opacity-0'
      }`}
    ></p>
        </div>
    
        <div className="absolute w-2 bg-neutral-200 animate-drawLine"></div>

      
  
        <div
            className={`w-full absolute hidden z-30 sm:block overflow-hidden transition-all duration-1000 ease-out ${
                showText ? 'translate-x-[55%] opacity-100' : 'translate-x-[40%] opacity-0 blur-xl'
              }`}
        >
            
            <div className=" relative w-full h-full md:ml-0 -mt-20 z-20 ">
            <div className=" absolute inset-0 lg:text-[13rem]  xl:text-[17rem] w-full -translate-x-2 -translate-y-1.5 font-RacingSansOne stroke-text ">
              YETI
            </div>

            <div className="relative  lg:text-[13rem] xl:text-[17rem] bg-gradient-to-br from-orange-500 via-red-600 to-red-700 inline-block text-transparent bg-clip-text w-full -mb-28 font-RacingSansOne animate-float">
              YETI
            </div>
          </div>
            <div className='lg:ml-60 xl:ml-72 lg:text-5xl xl:text-7xl bg-gradient-to-br from-neutral-400 via-white to-zinc-400 inline-block text-transparent bg-clip-text font-Fn'>Racing</div>
          </div>


          <div className=" w-96 h-full sm:hidden flex mt-16 z-20 ">
          <div className="z-20 absolute mt-8 flex justify-center inset-0 text-[10rem]  w-full -translate-x-2 -translate-y-1.5 font-RacingSansOne stroke-text ">
            YETI
          </div>

          <div className={`z-20 relative text-[10rem] flex justify-center bg-gradient-to-br from-pink-600 via-red-600 to-red-600  text-transparent bg-clip-text w-full -mb-28 font-RacingSansOne animate-float overflow-hidden transition-all duration-1000 ${
                showText ? 'translate-x-[55%] opacity-100 blur-0' : 'translate-x-0 opacity-0 blur-xl'
              }`}>
            YETI
          </div>
        </div>
        <div className='flex absolute w-full sm:hidden overflow-visible justify-end text-4xl mt-12 bg-gradient-to-br from-neutral-400 via-white to-zinc-300  text-transparent bg-clip-text font-Fn mb-28 pr-4'>Racing</div>
          <div>
          
          </div>
        </div>
        
        {/* <p id="typewriter"
      className="z-30 sm:w-1/3 sm:h-1/6 h-1/5 sm:left-20  text-shadow p-5 sm:pr-9 sm:mt-10 bottom-0 mb-10 sm:mb-96 absolute text-2xl text-white font-Fn " >
         </p> */}
        {/* <div className='w-full h-36 backdrop-blur-sm z-30 flex items-end'>asd</div> */}
      </div>
    );
  }