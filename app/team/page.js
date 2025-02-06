"use client"
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';


export default function TeamPage() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger the confetti when the div is visible
          confetti({
            particleCount: 350,
            spread: 350,
            origin: { y: 0.4 },
            colors: ['#ffd700', '#ffffff'], // Customize confetti colors
          });
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the div is visible
      }
    );

    if (confettiRef.current) {
      observer.observe(confettiRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (confettiRef.current) {
        observer.unobserve(confettiRef.current);
      }
    };
  }, []);

  const achievements = [
    { id: 1, title: "OVERALL", rank: "1", event: "FB 2025" },
    { id: 2, title: "DYNAMICS", rank: "1", event: "FB 2025" },
    { id: 3, title: "ENDURANCE RACE", rank: "1", event: "FB 2025" },
    { id: 4, title: "EFFICIENCY", rank: "1", event: "FB 2025" },
    { id: 5, title: "Eng. DESIGN", rank: "7", event: "FB 2025" },
    { id: 7, title: "OVERALL", rank: "9", event: "SAE SUPRA 2024" },
    { id: 8, title: "COST & MFG", rank: "3", event: "SAE SUPRA 2024" },
    { id: 9, title: "ENDURANCE RACE", rank: "6", event: "SAE SUPRA 2024" },
  ];

  const Badge = ({ achievement }) => (
    <div className="relative group flex flex-col items-center space-y-2 text-center">
      {/* Title */}
      <div className="md:text-lg text-red-500 font-Fn px-2 h-10">
        {achievement.title}
      </div>
      
      {/* Rank with spinning star */}
      <div className="relative">
        <div className="absolute inset-0 ">
          <img src="/assets/1st.png" alt="star"></img>
        </div>
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bottom-3 ">
          <div className="text-3xl md:text-4xl font-Fb  drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-amber-200">
            {achievement.rank}
          </div>
        </div>
      </div>

      {/* Event */}
      <div className="text-xs md:text-sm text-neutral-300 md:font-Fb font-Fn">
        {achievement.event}
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-neutral-800 pb-9">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-16">
          <h1 className="text-center mb-8 lg:mb-12">
            <span className="text-4xl lg:text-7xl font-zenDots bg-gradient-to-r from-red-700 via-red-700 to-red-700 text-transparent bg-clip-text flex justify-center animate-bounce">
              ABOUT US
            </span>
          </h1>
          
          <div className="grid grid-cols-12 gap-4 md:gap-8 justify-center">
            <div className="col-span-12 md:col-start-2 md:col-span-10 mb-8 md:mb-20">
              <p className="text-gray-300 md:text-2xl text-lg text-justify font-Rajdhani mb-10">
                Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology,
                KOCHI, embodies dedication and collaboration with a strong presence in prestigious competitions like SAE SUPRA, F1S
                INDIA, and FORMULA BHARAT. Yeti Racing has recently achieved remarkable success at Formula Bharath 2025, securing an
                impressive <span className='font-semibold'>All India Rank 1</span> overall. Notably, we completed a successful endurance run, becoming one of only six cars to
                achieve this feat and marking a significant milestone as the first team from Kerala to complete endurance at the
                competition.
              </p> 
              <p className="text-gray-300 md:text-2xl font-Rajdhani text-justify">
                    Looking ahead, Yeti Racing is gearing up for exciting challenges at Formula Bharat 2025 and Formula Imperial
                    2025, with aspirations to push the boundaries of design and performance even further.
                  </p> <br></br>
                  <p className="text-gray-300 md:text-2xl font-Rajdhani text-justify mb-10">
                   
                  </p>
                  <div id='achievements' className="flex text-xs md:text-xl flex-col md:flex-row w-full gap-4 justify-center">
                  <a 
                    href="https://www.suprasaeindia.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <button className="w-full bg-transparent border-2 border-green-500 text-white px-8 py-3 rounded-full transition-all duration-300 font-Goldman hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
                      SAE SUPRA
                    </button>
                  </a>
                  
                  <a 
                    href="https://www.formulabharat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <button className="w-full bg-transparent border-2 border-green-500 text-white px-8 py-3 rounded-full transition-all duration-300 font-Goldman hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
                      FORMULA BHARAT
                    </button>
                  </a>
                  <a 
                    href="https://www.fmae.in/fmaeffsindia/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <button className="w-full bg-transparent border-2 border-green-500 text-white px-8 py-3 rounded-full transition-all duration-300 font-Goldman hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
                      FFS INDIA
                    </button>
                  </a>
                </div>
            </div>

            <div ref={confettiRef}  className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-14">
              <div className="col-span-12 md:col-span-5">
                {/* Two-column grid for mobile, three-column for desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 ">
                  {achievements.map((achievement) => (
                    <Badge key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
{/* <div ref={confettiRef} className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from bg-red-950 via-black to-black">
      
    </div> */}
      <Footer />
    </div>
  );
}