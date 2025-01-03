"use client";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";
import About from "./sections/about"
import Sponsor from "./sections/sponsors";
export default function Home() {
  return (
    <div>
  <Navbar></Navbar>
  <div className="h-screen bg-gradient-to-b from-black to-red-500 text-white">
    home
  </div>
  {/* page 2 */}
  <About></About>
  <Sponsor></Sponsor>

<Footer></Footer>
</div>
  );
}
 