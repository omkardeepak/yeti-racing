'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const navigateTo = (path) => {
    setIsOpen(false); // Close the sidebar after navigation
    router.push(path); // Navigate to the given path
  };
  // Toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div onClick={toggleSidebar} className="">
<svg xmlns="http://www.w3.org/2000/svg"  width="34" height="34" fill="WHITE" className="bi bi-list ml-auto hover:scale-110" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>        
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-[17rem] rounded-md bg-rose-50 bg-opacity-90 text-red-600 w-44 transform transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4 pt-5 pl-6 space-y-5">
          <div className="text-red-500 font-Orbitron text-lg hover:scale-110" onClick={() => navigateTo("/team")}>
            About us
          </div>
          <div className="text-red-500 font-Orbitron text-lg hover:scale-110" onClick={() => navigateTo("/subsystem")}>
            Team
          </div>
          <div className="text-red-500 font-Orbitron text-lg hover:scale-110" onClick={() => navigateTo("/gallery")}>
            Gallery
          </div>
          <div className="text-red-500 font-Orbitron text-lg hover:scale-110" onClick={() => navigateTo("/sponsors")}>
            Sponsors
          </div>
          <div className="text-red-500 font-Orbitron text-lg hover:scale-110" onClick={() => navigateTo("#footer")}>
            Contact us
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
