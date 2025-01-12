"use client"
import React from 'react';
import Image from 'next/image';
import logo from "../asset/YetiRacing_1Logo.png"
export default function Loader() {
  return (
    <div className="fixed h-screen inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Custom preloader image */}
      <Image src={logo} alt="Loading..." className="w-52 h-32 mb-4 animate-scale-blur" />

      {/* Loading text */}
      <div className="text-white text-center text-3xl pb-2 font-Goldman justify-center flex animate-scale-blur"><span className='text-red-600'>Y</span>eti racing</div>
      </div>
  );
}