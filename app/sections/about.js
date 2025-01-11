"use client"
import track from "../asset/images.png";
import track2 from "../asset/images1.png";
import marker from "../asset/94717-angle-icons-sphere-pen-computer-location-marker (1).png"
import logo from "../asset/YetiRacing_1Logo.png"
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
        <div className="h-screen  bg-gradient-to-b from-red-700 to-black z-0 text-white relative ">
  <div className="absolute inset-0 flex justify-center items-center z-10 opacity-25">
    <Image src={logo} alt="yeti logo" className="h-4/5 w-auto object-contain" />
  </div>
  <div className="md:flex ">
  <div className=" flex flex-col h-5/6  z-30 justify-center w-full md:w-2/3  md:p-6 md:mt-32 md:ml-28 lg:w-2/5 lg:h-3/5 xl:w-2/5 xl:mr-36  [background:linear-gradient(45deg,#fb3000,theme(colors.red.800)_30%,black)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.green.300)_90%,_theme(colors.green.500)_94%,_theme(colors.green.600/.48))_border-box] rounded-2xl border-2 border-transparent animate-border items-center">
    <div className="pb-3 text-3xl md:text-4xl   xl:pb-10 font-zenDots xl:p-4 xl:text-6xl justify-center flex">
      About us
    </div>
    <div className="font-Rajdhani text-lg sm:text-base md:text-xl  text-justify xl:text-2xl">
      Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology, Kochi, embodies dedication and collaboration, with a strong presence in competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. Since our debut in SUPRA 2017, we've made significant strides in automotive engineering excellence, progressing from an initial 102nd placement to impressive rankings including 4th in Design Event, 7th overall in FFS INDIA 2017, and 12th in FFS INDIA 2018.
    </div>
  </div>
  <div className="relative z-30 md:ml-40 mt-36">
  {/* Pins (Markers) */}
  <div id="1" className="hidden -mt-40 z-50 absolute">
    <ul className="flex flex-row md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10 lg:flex lg:flex-col lg:-ml-40">
  <div className="text-xl font-zenDots ">
      SAE Supra 2017
    </div>
    <li
        className="w-full text-sm text-center md:text-lg font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500  font-display text-3xl">4th</span>
        Design
    </li>
    {/* <li
        className="w-full text-sm font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-3xl">3rd</span>
        Cost
    </li>
    <li
        className="w-full text-sm font-zenDots text-white p-6 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-3xl">6th</span>
        Endurance
    </li> */}
</ul>
  </div> 
  {/* <div id="2" className="hidden -mt-40 z-50 absolute">
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
  </div> */}
  <div id="3" className="hidden -mt-40 z-50 absolute mr-20">
  <ul className="flex flex-row text-center md:grid grid-cols-3 gap-2  mr-12    text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10 lg:flex lg:flex-col lg:-ml-40">
  <div className="text-lg font-zenDots -ml-6">
      SAE Supra 2024
    </div>
    <li
        className="w-full text-sm font-zenDots text-white p-3 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500  font-display text-xl">9th</span>
        Overall
    </li>
    <li
        className="w-full text-sm font-zenDots text-white p-3 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-xl">3rd</span>
        Cost
    </li>
    <li
        className="w-full text-sm font-zenDots text-white p-3 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-neutral-300 shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-green-500 font-display text-xl">6th</span>
        Endurance
    </li>
</ul>
  </div>
  
  <button className="absolute right-64 md:top-4 md:right-8 z-40 lg:right-52 lg:-top-7 hover:scale-125" onClick={() => enl1()}><p className="font-zenDots">2017</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
  <button className="absolute top-32 left-72 md:top-72 md:left-36 z-40 hover:scale-125" onClick={() => enl2()}><p className="font-zenDots">2018</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
  <button className="absolute top-40 md:top-48 md:right-7 z-40 hover:scale-125" onClick={() => enl3()}><p className="font-zenDots">2024</p>
    <Image src={marker} alt="marker" className="h-14 w-14" />
  </button>
    <Image src={track} alt="track" className="h-72 w-full z-30 md:hidden object-" />
    <Image src={track2} alt="track" className=" md:h-screen w-auto  lg:-mt-36  z-30 hidden md:block object-contain" />

</div>

  </div>
</div>
    )
 }