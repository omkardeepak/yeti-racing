"use client"
import React from 'react';
import img1 from "../asset/DSC_0113 (1).JPG"
import img5 from "../asset/DSC_0113.JPG"
import img3 from "../asset/DSC_0139.JPG"
import img4 from "../asset/DSC_0140.JPG"
import img2 from "../asset/DSC_0466[1].jpg"
import img6 from "../asset/DSC_0483[1].jpg"
import img7 from "../asset/DSC_0664.JPG"
import abstract from "../asset/clipart-wave-line-17.png"
import Image from "next/image"
export default function Crowdfund(){
    return(
        <div className=" text-white flex sm:flex-col flex-row h-screen bg-gradient-to-b from-black to-red-700">
          <Image src={abstract} className='absolute flex z-0 h-screen pb-5'/>
            <div className="flex flex-col w-1/2 h-screen left-0 justify-center items-center ">
            <div className="flex relative bottom-20 justify-center text-6xl font-zenDots">Support Us</div>
      <div className=" w-full max-w-lg bg-opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black  backdrop-blur-sm text-gray-100 p-8 rounded-3xl border-2 h-80 ">
        <div className="space-y-6">
          {/* Header */}
          <h1 className="text-4xl font-light tracking-wide text-gray-200 font-Orbitron">
            Join the Drive
          </h1>
          
          {/* Description */}
          <p className="text-xl leading-relaxed font-Rajdhani">
            Join YETI on the fast track to innovation
            —help us bring our student-built Formula
            race car to life with your support!
          </p>
          
          {/* Amount */}
          
          {/* Progress Bar */}
          {/* <div className="relative h-2 rounded-full bg-gray-800 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-pink-600 to-red-500"
              style={{ width: `${progress}%` }}
            />
          </div> */}
          
          {/* Progress Percentage */}
         
          
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
        className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-white focus:outline-none  font-Orbitron text-xl "
      >        Back our team</button></a>


      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
            </div>
            <div className="flex h-screen  w-1/2 right-0 absolute justify-center items-center ">
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