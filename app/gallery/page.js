"use client"
import Car from "../components/3dcar"
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
<div className="sm:h-screen bg-neutral-950 text-white overflow-hidden">
  <div className="text-4xl pr-10 pl-4 sm:text-5xl font-zenDots flex  pt-10 sm:pt-20 pb-10 justify-center">Turning wrenches, pushing limits.</div>
  <div className=" w-full overflow-hidden ">
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
  <div className="text-3xl font-Rajdhani flex justify-center p-5 sm:pt-14 ">"Behind every great race is a great team in the garage."</div>
</div>

<Footer></Footer>
</div>

    )
}