"use client"
import Car from "../components/3dcar"
import carimg from "../asset/all car pic fb23.webp"
import bg from "../asset/DSC_0106.JPG"
import Navbar from "../components/navbar"
import img1 from "../asset/DSC_0113 (1).JPG"
import img5 from "../asset/DSC_0113.JPG"
import img3 from "../asset/DSC_0139.JPG"
import img4 from "../asset/DSC_0140.JPG"
import img2 from "../asset/DSC_0466[1].jpg"
import img6 from "../asset/DSC_0483[1].jpg"
import img7 from "../asset/DSC_0664.JPG"
import Image from "next/image"
import lab1 from "../asset/lab1.jpg"
import lab2 from "../asset/lab2.jpg"
import news from "../asset/WhatsApp Image 2025-01-07 at 16.13.02_024b0c67.jpg"

import Footer from "../components/footer"

export default function Gallery(){
    return(
        <div>
            <Navbar></Navbar>
            <div className=" sm:h-screen bg-black text-white sm:flex h-1/2">
            <div className="relative">
  <Image
    src={img7}
    alt="yeti background"
    className="sm:object-contain h-full w-full z-0 object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
  <div className="absolute inset-0 flex md:mr-56 justify-center items-center z-20">
    <div className="font-Orbitron font-extrabold text-6xl lg:text-8xl lg:mr-36 xl:text-9xl text-white">Gallery</div>
  </div>
</div>


<div className="hidden space-x-6  h-screen absolute z-20 right-0 md:space-x-4  sm:flex">
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
<div className="sm:h-screen bg-gradient-to-b from-black to-red-700 text-white overflow-hidden">
  <div className="text-4xl pr-10 pl-4 sm:text-5xl font-zenDots flex  pt-10 sm:pt-20 pb-10 justify-center">Turning wrenches, pushing limits.</div>
  <div className=" w-full overflow-hidden md:mt-10 ">
    <ul className="flex items-center justify-center space-x-11 min-w-max animate-infinite-scrollr">
      <li>
        <Image src={lab1} height="350" alt="helloscore" />
      </li>
      <li>
        <Image src={lab2} height="350" alt="tyreguru"/>
      </li>
      <li>
        <Image src={lab1} height="350" alt="eds" />
      </li>
      <li>
        <Image src={lab2} height="350" alt="dts" />
      </li>
      <li>
        <Image src={lab1} height="350" alt="santamonica" />
      </li>
  
      {/* Duplicate set */}
      <li>
        <Image src={lab2} height="350" alt="helloscore" />
      </li>
      <li>
        <Image src={lab1} height="350" alt="tyreguru" />
      </li>
      <li>
        <Image src={lab2} height="350" alt="eds" />
      </li>
      <li>
        <Image src={lab1} height="350" alt="dts" />
      </li>
      <li>
        <Image src={lab2} height="350" alt="santamonica" />
      </li>
      <li>
        <Image src={lab1} height="350" alt="helloscore" />
      </li>
    </ul>
  </div>
  <div className=" text-2xl md:text-3xl font-Rajdhani flex justify-center p-5 sm:pt-24 ">"Behind every great race is a great team in the garage."</div>
</div>
<div className="h-96 sm:h-screen bg-gradient-to-b from-red-700 to-black text-white overflow-hidden">
<div className="text-4xl pr-10 pl-4  sm:text-6xl font-zenDots flex  pt-10 sm:pt-20 pb-10 justify-center">Media Coverage</div>
<div className="flex md:mt-36 justify-center items-center">
  <Image src={news} alt="news " height="4000" />
</div>
</div>
<div className="relative h-screen sm:h-screen bg-neutral-950 text-white overflow-hidden">
  <Image src={bg} className="w-full h-full sm:object-fill object-cover z-0"/>
  <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
<div className="z-30  inset-0 absolute flex text-4xl pr-10 pl-4 sm:text-7xl font-zenDots pt-10 sm:pt-10  justify-center">SAE Supra <span className="pl-3 text-red-600"> '</span>  24</div>
<div className="flex flex-wrap justify-center gap-2 p-10 md:p-16 absolute z-50 inset-0 mt-12 items-center">
  <div className="w-4/5 sm:w-1/4 p-1">
    <Image src={img1} alt="Image 1" className="w-full h-auto object-cover" />
  </div>
  <div className="w-4/5 sm:w-1/4 p-1">
    <Image src={img2} alt="Image 2" className="w-full h-auto object-cover" />
  </div>
  <div className="w-4/5 sm:w-1/4 p-1">
    <Image src={img3} alt="Image 3" className="w-full h-auto object-cover" />
  </div>
  <div className="w-4/5 sm:w-1/4 p-1">
    <Image src={img4} alt="Image 4" className="w-full h-auto object-cover" />
  </div>
  <div className="hidden sm:block sm:w-1/4 p-1">
    <Image src={img5} alt="Image 5" className="w-full h-auto object-cover" />
  </div>
  <div className="hidden sm:block sm:w-1/4 p-1">
    <Image src={img6} alt="Image 6" className="w-full h-auto object-cover" />
  </div>
</div>



</div>
<div className="h-screen "><Car></Car></div>

<Footer></Footer>
</div>

    )
}