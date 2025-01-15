"use client"
import track from "../asset/images.png";
import road from "../asset/road.png";
import marker from "../asset/94717-angle-icons-sphere-pen-computer-location-marker (1).png"
import logo from "../asset/YetiRacing_1Logo.png"
import pitlane2 from "../asset/pitlane2.jpg"
import Image from "next/image";
import { useEffect } from "react";
 export default function About1(){
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add("visible");
                }, index * 200); // Stagger the appearance by 200ms per item
              } else {
                entry.target.classList.remove("visible");
              }
            });
          },
          { threshold: 0.1 } // Trigger when at least 10% of the item is visible
        );
    
        items.forEach((item) => {
          observer.observe(item);
        });
    
        return () => {
          items.forEach((item) => {
            observer.unobserve(item);
          });
        };
      }, []);
    
      return (
        <div className="h-screen relative flex sm:flex-row flex-col items-center bg-black  z-0">
  <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
  <Image src={pitlane2} className="absolute inset-0  flex item justify-center  z-20  object-cover  w-full h-full "/>
            <div className="md:w-1/2 left-0 justify-center  flex flex-col items-center absolute z-50 sm:p-7 md:h-full mb-10 md:space-y-16 space-y-3 w-full">
            <div className="text-center font-zenDots text-6xl md:text-7xl bg-gradient-to-r to-pink-700 via-neutral-100 from-neutral-300  text-transparent bg-clip-text md:m-0 mt-12 mb-5">About us</div>
            
            <div className="border-2 md:w-5/6 md:h-4/6  justify-center  rounded-xl  bg-black bg-opacity-40 w-80  ">
            <div className="font-Goldman flex flex-col p-6 pt-2 pb-2 text-2xl md:text-5xl md:p-6 text-white"><div className="flex"><span className=""> Y</span>eti Racing</div><span className="md:text-3xl text-xl text-red-600 ">CUSAT</span></div>
            <div className="p-7 pb-2 pt-0 md:pb-3 md:text-2xl text-lg flex w-full  text-justify text-white font-Rajdhani">
            Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology, Kochi, embodies dedication and collaboration, with a strong presence in prestigious competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. Since our debut in SUPRA 2017, we've made significant strides in automotive engineering excellence.            </div>
            
            <div className="justify-center w-full flex font-Rajdhani pb-4 md:pb-0"><a href="/team" className="text-white p-1 md:p-3 rounded-full border-2 flex flex-row hover:scale-110 border-green-700 hover:bg-green-500" >Know more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2 items-center flex h-full" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></a></div>

            </div>
            </div>
          <div className=" w-full bottom-0 hidden h-3/2 z-40 md:w-1/2 md:right-0 flex-grow md:items-center absolute md:z-50 p-7 md:h-full  md:flex">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute h-full w-1 bg-indigo-800 left-1 bottom-7"></div>
    
              {/* Timeline Items */}
              <div className="relative md:mb-16 pl-10 timeline-item">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-full h-36 space-y-3 space-x-3">
                  <h3 className="text-orange-500 md:text-lg font-Fb">SAE SUPRA 2017</h3>
                  <div className="text-gray-300 font-Fn flex flex-row space-x-7  ">
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl  text-red-600">
                    AIR 4<span className="font-fn text-sm text-white">Design</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl text-red-600">
                    AIR 6<span className="font-fn text-sm text-white">Endurance</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl text-red-600">
                    AIR 3<span className="font-fn text-sm text-white">Cost</span>
                    </div>
                   
                  
                  </div>
                </div>
              </div>
    
              <div className="relative md:mb-16 pl-10 timeline-item ">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md md:w-full h-36 space-y-3 space-x-3">
                  <h3 className="text-orange-500 md:text-lg font-Fb  ">SAE SUPRA 2024</h3>
                  <div className="text-gray-300 font-Fn flex flex-row space-x-7 ">
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl text-red-600 ">
                    AIR 9<span className="font-fn text-sm text-white">Overall</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl text-red-600 ">
                    AIR 6<span className="font-fn text-sm text-white">Endurance</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-xl text-red-600 ">
                    AIR 3<span className="font-fn text-sm text-white">Cost</span>
                    </div>
                   
                  
                  </div>
                  
                </div>
              </div>
    
              <div className="relative md:mb-16 pl-10 timeline-item md:block hidden">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-1/2 h-1/2">
                  <h3 className="text-orange-500 text-lg font-Fb">Formula Bharath 2025</h3>
                  
                </div>
              </div>


            </div>
          </div>
        </div>
      );
    };
    