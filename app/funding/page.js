"use client"
import Navbar from "../components/navbar"
import bg from "../asset/DSC_0641.JPG"
import qr from "../asset/WhatsApp Image 2025-01-04 at 21.22.27_36b3f519.jpg"
import Image from "next/image"
import Footer from "../components/footer"
export default function (){
    return (
            <div>
            <Navbar></Navbar>
            <div className="h-screen  bg-gradient-to-b from-black to-red-700">
                <div className="relative h-screen ">
                <Image src={bg} alt="bg" className="object-cover z-0 h-full w-full "/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                
                <div className="h-full flex-col md:flex md:flex-row items-center md:p-20 z-20 absolute inset-0">
                <div className="text-white flex flex-col font-Goldman w-full  md:w-3/5 text-4xl md:text-7xl text-start leading-relaxed p-6 md:p-0">
                <div className="mb-3">Fuel Our Passion:</div>
                <div>Help Us Build the Next Generation of Formula Racing!</div>
                </div>
                <div className="flex  flex-col h-52 md:h-full w-52 md:w-1/2   bg-red-600 bg-opacity-45 md:bg-opacity-35 items-center ">
                <Image src={qr} alt="qr "className="object-contain z-20 h-3/4  flex justify-center items-center pt-10 md:pt-20"/>
                <div className="flex justify-center pt-7 text-white  text-xl font-Rajdhani">Pay to ashwins78@fifederal using this QR code 💰
                </div>

            </div>
            </div>
            </div>
        
            </div>

            <Footer/>
        </div>
    )
}