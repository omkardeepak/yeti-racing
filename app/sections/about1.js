"use client"
import track from "../asset/images.png";
import road from "../asset/road.png";
import marker from "../asset/94717-angle-icons-sphere-pen-computer-location-marker (1).png"
import logo from "../asset/YetiRacing_1Logo.png"
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
        <div className="h-screen p-7 flex sm:flex-row flex-col items-center bg-gradient-to-b from-red-700 to-black z-0">
            <Image src={logo} className="flex item justify-center inset-0 z-0 opacity-65 object-contain p-40 w-full h-full"/>
            <div className="w-1/2 left-0 justify-center flex flex-col items-center absolute z-50 p-7 h-full mb-10 space-y-16">
            <div className="text-center font-zenDots text-7xl text-white">About us</div>
            <div className="border-2 md:w-5/6 md:h-4/6 justify-center  rounded-xl ">
            <div className="font-Goldman flex flex-col p-6 text-5xl text-white">Yeti Racing<span className="text-3xl text-orange-600 ">CUSAT</span></div>
            <div className="p-7 pt-0 pb-3 text-2xl  flex w-full  text-justify text-white font-Rajdhani">
            Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology, Kochi, embodies dedication and collaboration, with a strong presence in prestigious competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. Since our debut in SUPRA 2017, we've made significant strides in automotive engineering excellence.            </div>
            
            <div className="justify-center w-full flex"><a href="/team" className="text-white p-3 rounded-full border-2 flex flex-row hover:scale-105">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2 " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></a></div>

            </div>
            </div>
          <div className="w-1/2 right-0 flex items-center absolute z-50 p-7 h-full ">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute h-full w-1 bg-indigo-800 left-1 bottom-7"></div>
    
              {/* Timeline Items */}
              <div className="relative mb-16 pl-10 timeline-item">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-5/6 h-36">
                  <h3 className="text-orange-500 text-lg font-bold">SUPRA 2017</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
    
              <div className="relative mb-16 pl-10 timeline-item">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-5/6 h-36">
                  <h3 className="text-orange-500 text-lg font-bold">SUPRA 2024</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
    
              <div className="relative mb-16 pl-10 timeline-item">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-5/6 h-36">
                  <h3 className="text-orange-500 text-lg font-bold">Formula Bharath 2024</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
    
              {/* <div className="relative mb-10 pl-10 timeline-item">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md w-5/6">
                  <h3 className="text-orange-500 text-lg font-bold">SUPRA 2007 4</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      );
    };
    