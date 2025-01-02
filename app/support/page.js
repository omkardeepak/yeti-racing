"use client"
import Image from "next/image";
import logo from "../asset/yeti_logo-removebg-preview.png"
export default function Support(){
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black to-red-500">
          {/* Fixed Background Image (logo) */}
          <div className="fixed inset-0 z-0 flex items-center justify-center">
            <Image src={logo} alt="yeti logo" className="w-1/3 h-auto opacity-50" />
          </div>
      
          {/* Scrollable Foreground Content */}
          <div className="relative z-10 overflow-y-auto h-screen">
            <div className="w-96 h-96 mx-auto mt-24 rounded-3xl overflow-hidden shadow-lg bg-transparent text-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-300 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
      
            {/* Additional Scrollable Content for Testing Scroll */}
            <div className="w-96 h-96 mx-auto mt-12 rounded-3xl overflow-hidden shadow-lg bg-transparent text-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">More Content</div>
                <p className="text-gray-300 text-base">
                  More content goes here to test the scroll behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }      