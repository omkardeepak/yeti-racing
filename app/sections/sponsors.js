"use client"
import helloscore from "../asset/helloscore.png"
import tyreguru from "../asset/tyreguru.png"
import eds from "../asset/eds.png"
import dts from "../asset/dts.png"
import santamonica from "../asset/santamonica.png"
import Image from "next/image"
export default function Sponsor(){
    return (
        <div className="h-screen bg-gradient-to-b from-black to-red-500 text-white overflow-hidden">
            <div className="relative flex sm:mt-20 mt-24 justify-center text-4xl md:text-5xl  font-Orbitron font-bold ">
      Our Sponsors
    </div>
<div className="absolute pt-44 sm:pt-32">
<div className="w-full overflow-hidden">
<hr></hr>
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
</div>
<hr></hr>
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