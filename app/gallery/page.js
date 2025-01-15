"use client"
import { useState, useEffect, useRef } from "react";

import Car from "../components/3dcar"
import carimg from "../asset/all car pic fb23.webp"
import bg from "../asset/DSC_0106.JPG"
import Navbar from "../components/navbar"
import img1 from "../asset/DSC_0113 (1).JPG"
import img5 from "../asset/DSC_0113.JPG"
import img3 from "../asset/DSC_0139.JPG"
import img4 from "../asset/DSC_0140.JPG"
import img2 from "../asset/DSC_0466[1].jpg"
import img6 from "../asset/DSC_0483[1].jpg"
import img7 from "../asset/DSC_0664.JPG"
import Image from "next/image"
import lab1 from "../asset/lab1.jpg"
import lab2 from "../asset/lab2.jpg"
import news from "../asset/WhatsApp Image 2025-01-07 at 16.13.02_024b0c67.jpg"

import Footer from "../components/footer"

export default function Gallery(){
  const [rotation, setRotation] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(1920);
    const animationRef = useRef(null);
  
    const images = [
      "/assets/DSC_0664.JPG",
      "/assets/DSC_0027.JPG",
      "/assets/DSC_0139.JPG",
      "/assets/DSC_0173.JPG",
      "/assets/DSC_0181.jpg",
      "/assets/1.jpg",
      "/assets/2.jpg",
      "/assets/4.jpg"
    ];
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      handleResize();
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const animate = () => {
      setRotation((prev) => (prev + 0.3) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isPaused]);
  
    const getImageStyle = (index) => {
      const angleStep = 360 / images.length;
      const angle = (rotation + angleStep * index) * (Math.PI / 180);
      
      const baseRadius = windowWidth < 768 ? 250 : 
                        windowWidth < 1024 ? 350 :
                        windowWidth < 1440 ? 450 : 550;
      
      const x = baseRadius * Math.sin(angle);
      const z = baseRadius * Math.cos(angle);
      const y = baseRadius * Math.sin(angle) * 0.3 - Math.abs(baseRadius * Math.cos(angle) * 0.2);
  
      const zPosition = (z + baseRadius) / (2 * baseRadius);
      const scale = parseFloat((zPosition * 0.5 + 0.5).toFixed(3));
      const opacity = parseFloat((zPosition * 0.6 + 0.4).toFixed(3));
  
      return {
        transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px)
                  rotateY(${(angleStep * index + rotation).toFixed(2)}deg)
                  scale(${scale})`,
        opacity: opacity,
        zIndex: Math.round(zPosition * 1000),
        display: 'block',
      };
    };
  
    const getImageDimensions = () => {
      if (windowWidth < 768) return 'w-36 h-24';
      if (windowWidth < 1024) return 'w-48 h-32';
      if (windowWidth < 1440) return 'w-64 h-44';
      return 'w-72 h-48';
    };
  
    const gridImages = images.slice(0, 8);
    const galleryLetters = "Gallery".split("");
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <div className="w-full h-screen relative bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: 'blur(5px) brightness(0.4)',
          }}
        />

        <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
        
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-row z-10 space-x-1 font-zenDots">
            {galleryLetters.map((letter, index) => (
              <span
                key={index}
                className="text-9xl  z-10  bg-gradient-to-br to-pink-900 via-neutral-300 from-neutral-300  text-transparent bg-clip-text"
                // style={{
                //   background: 'linear-gradient(to right, rgb(128, 4, 4), rgb(114, 55, 55))',
                //   WebkitBackgroundClip: 'text',
                //   WebkitTextFillColor: 'transparent',
                //   backgroundClip: 'text',
                //   animationDelay: `${index * 0.1}s`
                // }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div
            className="relative w-full max-w-[2000px] h-[400px] md:h-[500px] lg:h-[600px] z-10 mx-auto"
            style={{
              perspective: windowWidth < 768 ? "1600px" : "2400px",
              perspectiveOrigin: "50% 40%",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg)",
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2
                            ${getImageDimensions()}
                            transition-all duration-300 
                            hover:scale-20 cursor-pointer
                            shadow-2xl`}
                  style={getImageStyle(index)}
                  onClick={() => setIsPaused(!isPaused)}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl 
                              border-2 border-red-400/30 hover:border-red-400
                              transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute w-full h-1/2 bottom-0 left-0 
                              bg-gradient-to-b from-white/20 to-transparent
                              rounded-b-2xl opacity-50"
                    style={{
                      transform: "rotateX(180deg) translateY(50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 bg-gradient-to-b from-black via-red-950 to-red-700">
          <h2 className="text-5xl lg:text-7xl  text-white mb-12 text-center font-zenDots">SAE Supra<span className="ml-3 text-red-700">'</span>24</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gridImages.map((img, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                           transform hover:scale-90 group"
              >
                <img
                  src={img}
                  alt={`Grid gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500
                           filter grayscale hover:grayscale-0
                           group-hover:rotate-6"
                />
              </div>
            ))}
          </div>
        </div>
<div className="h-96 sm:h-screen bg-gradient-to-b from-red-700 via-red-950 to-black text-white overflow-hidden">
<div className="text-4xl pr-10 pl-4  sm:text-7xl font-zenDots flex  pt-10 sm:pt-20 pb-10 justify-center">Media Coverage</div>
<div className="flex md:mt-36 justify-center items-center lg:w-full w-full p-4">
  <Image src={news} alt="news " height="4000" />
</div>
</div>


  {/* Car component takes all available space */}
<div>
  <Footer className=""></Footer> 
  <Car />  {/* Car should be rendered inside this div */}

  </div> {/* Footer sticks to the bottom */}
</div>

    )
}