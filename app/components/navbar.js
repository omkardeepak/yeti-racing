"use client"
import Image from "next/image";
import logo from "../asset/wlogo.png";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Sidebar from "./sidebar";
export default function Navbar(){

    const router = useRouter();
    const navigateTo = (path) => {
      router.push(path); // Navigate to the given path
    };

return(
    <div className="flex items-center h-20 border-b-2 border-neutral-400 sm:h-24 sm:border-b-2 sm:border-neutral-400 bg-black">
    <a href="/"><Image src={logo} alt="yeti logo"className="hover:scale-105 h-12 md:h-20 w-20 ml-2 sm:ml-5 sm:h-20 sm:w-32 sm:ml-0 sm:p-1 "></Image></a>
    <div className="hidden sm:flex sm:items-center sm:text-1xl sm:space-x-9 sm:text-neutral-100 sm:ml-auto sm:mr-7 font-Orbitron ">
        <a className="hover:scale-110" href="/team">Team</a>
        <a className="hover:scale-110" href="/">Subsystem</a>
        <a className="hover:scale-110" href="/gallery">Gallery</a>
        <a className="hover:scale-110" href="/sponsors">Sponsors</a>
        <a className="hover:scale-110" href="#footer">Contact us</a>
    </div>
    <div className="  sm:hidden ml-auto mr-7">
        <Sidebar></Sidebar>
    
    </div>
    
</div>
)
}
