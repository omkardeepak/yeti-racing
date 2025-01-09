"use client"
import { useEffect, useRef, useState } from 'react';

import helloscore from "../asset/helloscore.png"
import tyreguru from "../asset/tyreguru.png"
import eds from "../asset/eds.png"
import dts from "../asset/dts.png"
import santamonica from "../asset/santamonica.png"
import Image from "next/image"
export default function Sponsor(){

      
    return (
        <div className="relative h-screen bg-neutral-950 text-white overflow-hidden z-0">
            <video className=" absolute w-full h-full z-0 object-cover" src='/assets/IMG_6205.mp4' autoPlay loop muted></video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
            <div className="relative flex sm:mt-20 mt-24 justify-center text-7xl md:text-9xl font-Goldman z-50 ">
      <span className=" mr-4 sm:mr-7 bg-gradient-to-r from-red-300 via-red-600 to-orange-400 inline-block text-transparent bg-clip-text">Our Sponsors</span>
    </div>

<div className="absolute pt-64 sm:pt-28 lg:pt-48 z-20">
<div className=" w-full overflow-hidden ">
<hr></hr>
  <ul className="flex items-center justify-center space-x-11 min-w-max animate-infinite-scrollr ">
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru"/>
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>

    {/* Duplicate set */}
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru" />
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
  </ul>
</div>
<hr className=" bg-red-800"></hr>
<div className="w-full overflow-hidden">
  <ul className="flex items-center justify-center space-x-11 min-w-max animate-infinite-scrolll">
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru" />
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>

    {/* Duplicate set */}
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru" />
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
  </ul>
</div>
<hr></hr>

<div className="w-full overflow-hidden">
  <ul className="flex items-center justify-center space-x-11 min-w-max animate-infinite-scrollr">
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru" />
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>

    {/* Duplicate set */}
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
    <li>
      <Image src={tyreguru} height="100" alt="tyreguru" />
    </li>
    <li>
      <Image src={eds} height="100" alt="eds" />
    </li>
    <li>
      <Image src={dts} height="130" alt="dts" />
    </li>
    <li>
      <Image src={santamonica} height="80" alt="santamonica" />
    </li>
    <li>
      <Image src={helloscore} height="80" alt="helloscore" />
    </li>
  </ul>
  <hr></hr>
</div>
</div>

</div>
      );
      
} 