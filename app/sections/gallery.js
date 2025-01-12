"use client"
import React from 'react';
import img1 from "../asset/DSC_0113 (1).JPG"
import img5 from "../asset/DSC_0113.JPG"
import img3 from "../asset/DSC_0139.JPG"
import img4 from "../asset/DSC_0140.JPG"
import img2 from "../asset/DSC_0466[1].jpg"
import img6 from "../asset/DSC_0483[1].jpg"
import { useEffect, useRef, useState } from "react";
import img7 from "../asset/DSC_0664.JPG"
import abstract from "../asset/clipart-wave-line-17.png"
import Image from "next/image"
export default function Crowdfund(){

 
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Increment the progress gradually
            let currentProgress = 0;
            const interval = setInterval(() => {
              if (currentProgress < 75) {
                currentProgress += 1;
                setProgress(currentProgress);
              } else {
                clearInterval(interval); // Stop when it reaches 45%
              }
            }, 20); // Update every 50 milliseconds
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
        }
      );
  
      if (progressRef.current) {
        observer.observe(progressRef.current);
      }
  
      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current);
        }
      };
    }, []);

    return(
        <div ref={progressRef} className=" text-white flex sm:flex-col flex-row h-screen bg-gradient-to-b from-black to-red-700 ">
          <Image src={abstract} alt="abs" className='absolute flex z-0 h-full w-full pb-10'/>
            <div className="flex flex-col p-4 sm:w-1/2 w-full h-screen left-0 justify-center items-center ">
            <div className=" relative bottom-20 flex ml-12 justify-center md:ml-0 text-6xl lg:text-6xl xl:text-7xl font-zenDots bg-gradient-to-r from-cyan-500 via-green-600 to-indigo-600  text-transparent bg-clip-text w-full ">Support Us</div>
      <div className="md:w-full max-w-lg bg-opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black  backdrop-blur-sm text-gray-100 p-8 rounded-3xl border-2 border-green-600 md:h-90 w-90">
        <div className="space-y-6">
          {/* Header */}
          <h1 className="text-4xl tracking-wide text-gray-200 font-Goldman">
            Join the Drive
          </h1>
          
          {/* Description */}
          <p className="md:text-xl  text-2xl leading-relaxed font-Rajdhani">
            Join YETI on the fast track to innovation
            —help us bring our student-built Formula
            race car to life with your support!
          </p>
          
          {/* Amount */}
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-red-700 to-pink-500 h-3 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div> 
          
          {/* Progress Percentage */}
          <div className="flex justify-end text-lg font-Rajdhani text-white-700">
            {progress}%
          </div>
          
          {/* CTA Button */}
          <div className='flex justify-center'>
          <div className="mx-auto flex w-full max-w-lg items-center justify-center">
  <div
    className=" relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl  p-[1.5px]"
  >
    <div
      className=" animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]"
    ></div>
    <div className="hover:scale-105 relative z-20 flex w-full rounded-[0.60rem] bg-green-700  p-2">
      <a href='/funding'>
      <button
        type="text"
        className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-white focus:outline-none  font-Goldman text-2xl md:text-xl "
      >        Back our team</button></a>


      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
            </div>
            <div className="md:flex h-screen  w-1/2 right-0 absolute justify-center items-center hidden ">
                <div className="hidden space-x-6  absolute z-20 right-0 md:space-x-4  sm:flex h-screen">
                <div className=" overflow-hidden ">
                  <ul className="flex flex-col items-center justify-center  min-w-max animate-infinite-scrollyr space-y-3">
                    <li>
                      <Image src={img1} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="tyreguru"/>
                    </li>
                    <li>
                      <Image src={img3} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img5} height="130" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img6} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img7} height="130" alt="tyreguru" />
                    </li>
                    <li>
                      <Image src={img1} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img6} height="130" alt="santamonica" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="helloscore" />
                    </li>
                  </ul>
                </div>
                <div className=" overflow-hidden pb-3">
                  <ul className="flex flex-col items-center justify-center min-w-max animate-infinite-scrollyl space-y-3">
                    <li>
                      <Image src={img3} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img6} height="130" alt="tyreguru" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img1} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img7} height="130" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img1} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="tyreguru"/>
                    </li>
                    <li>
                      <Image src={img3} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img5} height="130" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img6} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img7} height="130" alt="tyreguru" />
                    </li>
                    <li>
                      <Image src={img1} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img6} height="130" alt="santamonica" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="helloscore" />
                    </li>
                  </ul>
                </div>
                
                <div className=" overflow-hidden pb-3 sm:hidden lg:hidden xl:block">
                  <ul className="flex flex-col items-center justify-center  min-w-max animate-infinite-scrollyr space-y-3">
                  <li>
                      <Image src={img1} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="tyreguru"/>
                    </li>
                    <li>
                      <Image src={img3} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img5} height="130" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img6} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img7} height="130" alt="tyreguru" />
                    </li>
                    <li>
                      <Image src={img1} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img6} height="130" alt="santamonica" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="helloscore" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img1} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="tyreguru"/>
                    </li>
                    <li>
                      <Image src={img3} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img5} height="130" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <Image src={img6} height="130" alt="helloscore" />
                    </li>
                    <li>
                      <Image src={img7} height="130" alt="tyreguru" />
                    </li>
                    <li>
                      <Image src={img1} height="130" alt="eds" />
                    </li>
                    <li>
                      <Image src={img2} height="130" alt="dts" />
                    </li>
                    <li>
                      <Image src={img6} height="130" alt="santamonica" />
                    </li>
                    <li>
                      <Image src={img4} height="130" alt="helloscore" />
                    </li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
    )
}