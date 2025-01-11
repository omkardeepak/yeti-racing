"use client";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";
import About from "./sections/about"
import Sponsor from "./sections/sponsors";
import Crowdfund from "./sections/gallery";
import Landing from "./sections/landing";
export default function Home() {
  return (
    <div className="">
  <Navbar></Navbar>
    <Landing></Landing>
  {/* page 2 */}
  <About>
  </About>
  <Crowdfund/>
<Sponsor></Sponsor>

<Footer></Footer>
</div>
  );
}
 