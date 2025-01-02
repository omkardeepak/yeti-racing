"use client"
import Image from "next/image";
import Sidebar from "./sidebar";
import logo from "../asset/yeti_logo-removebg-preview.png";
import { useState } from "react";
export default function Navbar(){

return(
    <div className="flex items-center h-20 border-b-2 border-neutral-400 sm:h-24 sm:border-b-2 sm:border-neutral-400 bg-black">
    <Image src={logo} alt="yeti logo" className=" h-12 w-12 ml-5 sm:h-20 sm:w-20 sm:ml-3 sm:p-1 "></Image>
    <div className="hidden sm:flex sm:items-center sm:text-1xl sm:space-x-6 sm:text-neutral-100 sm:ml-auto sm:mr-7">
        <a href="#">Team</a>
        <a href="#">Subsystem</a>
        <a href="#">Gallery</a>
        <a href="#">Sponsors</a>
        <a href="#">Contact us</a>
    </div>
    <div className="  sm:hidden ml-auto mr-7">
    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="WHITE" className="bi bi-list ml-auto hover:scale-110" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </div>
    
</div>
)
}
