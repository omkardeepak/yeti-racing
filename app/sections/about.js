"use client"
import track from "../asset/images.png";
import track2 from "../asset/images2.png";
import marker from "../asset/94717-angle-icons-sphere-pen-computer-location-marker (1).png"
import logo from "../asset/yeti_logo-removebg-preview.png"
import Image from "next/image";
 export default function About(){


    function enl1(){
        document.getElementById("1").classList.toggle("hidden");
        document.getElementById("1").classList.toggle("block");

    };
    function enl2(){
        document.getElementById("2").classList.toggle("hidden");
        document.getElementById("2").classList.toggle("block");

    };
    function enl3(){
        document.getElementById("3").classList.toggle("hidden");
        document.getElementById("3").classList.toggle("block");

    };






    return(
        <div className="h-screen bg-gradient-to-b from-red-500 to-black z-0 text-white overflow-hidden relative">
  <div className="absolute inset-0 flex justify-center items-center z-10 opacity-35">
    <Image src={logo} alt="yeti logo" className="h-1/2 w-auto" />
  </div>
  <div className="md:flex ">
  <div className=" flex flex-col ml-6 mr-6 mt-2 p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 z-30 w-5/6 md:w-2/3 rounded-3xl  md:p-6 md:mt-32 md:ml-10 lg:w-2/5 lg:h-1/3">
    <div className="-mt-4 mb-1 text-xl md:text-3xl   md:pl-2 font-zenDots">
      About us
    </div>
    <div className="font-Rajdhani text-sm sm:text-base md:text-xl font-light text-justify">
      Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology, Kochi, embodies dedication and collaboration, with a strong presence in competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. Since our debut in SUPRA 2017, we've made significant strides in automotive engineering excellence, progressing from an initial 102nd placement to impressive rankings including 4th in Design Event, 7th overall in FFS INDIA 2017, and 12th in FFS INDIA 2018.
    </div>
  </div>
  <div className="relative z-30 md:ml-40 mt-44">
  {/* Pins (Markers) */}
  <div id="1" className="hidden -mt-40 -z-50 absolute">
  
  2017
  </div>
  <div id="2" className="hidden -mt-40 -z-50 absolute">
        2018
  </div>
  <div id="3" className="hidden -mt-40 -z-50 absolute">
  <ul className="flex flex-row md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10 lg:flex lg:flex-col lg:-ml-40">
  <div className="text-xl font-zenDots ">
      SAE Supra 2024
    </div>
    <li
        className="w-full text-sm font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500  font-display text-3xl">9th</span>
        Overall
    </li>
    <li
        className="w-full text-sm font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-3xl">3rd</span>
        Cost
    </li>
    <li
        className="w-full text-sm font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-3xl">6th</span>
        Endurance
    </li>
</ul>
  </div>
  
  <button className="absolute top-4 right-8 z-40 lg:right-52 lg:-top-7 hover:scale-125" onClick={() => enl1()}><p className="font-zenDots">2017</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
  <button className="absolute top-72 left-36 z-40 hover:scale-125" onClick={() => enl2()}><p className="font-zenDots">2018</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
  <button className="absolute top-48 right-7 z-40 hover:scale-125" onClick={() => enl3()}><p className="font-zenDots">2024</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
    <Image src={track} alt="track" className="h-72 w-full z-30 md:hidden " />
    <Image src={track2} alt="track" className=" ml-64 h-4/6 w-4/6 mt-10 z-30 hidden md:block" />

</div>

  </div>
</div>
    )
 }