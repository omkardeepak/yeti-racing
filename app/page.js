"use client";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
export default function Home() {
  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-red-500 h-screen">
  <Navbar></Navbar>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        
      </main>
    </div>
  );
}
