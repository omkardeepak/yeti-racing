import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export default function TeamPage() {
  const achievements = [
    { id: 1, title: "OVERALL AIR", rank: "9", event: "SAE SUPRA 2024" },
    { id: 2, title: "COST & MFG", rank: "3", event: "SAE SUPRA 2024" },
    { id: 3, title: "ENDURANCE RACE", rank: "6", event: "SAE SUPRA 2024" },
    { id: 4, title: "Eng. DESIGN", rank: "9", event: "SAE SUPRA 2024" },
    { id: 5, title: "DESIGN   EVENT RANK", rank: "4", event: "SUPRA 2017" },
    { id: 6, title: "QUALIFICATION RANK", rank: "17", event: "FORMULA BHARAT'25" },
  ];

  const Badge = ({ achievement }) => (
    <div className="relative group flex flex-col items-center space-y-2 text-center">
      {/* Title */}
      <div className="text-xs text-red-500 font-Fn px-2">
        {achievement.title}
      </div>
      
      {/* Rank with spinning star */}
      <div className="relative">
  <div className="absolute inset-0 animate-spin-slow">
    <svg
      viewBox="0 0 300 300"
      className="w-32 h-32 drop-shadow-[0_0_9px_rgba(255,255,0,1)]"
    >
      <path
        d="M150 10 L180 100 L290 100 L200 160 L230 260 L150 200 L70 260 L100 160 L10 100 L120 100 Z"
        className="fill-transparent stroke-yellow-400 stroke-2"
      />
    </svg>
  </div>
  <div className="relative flex items-center justify-center w-32 h-32">
    <div className="md:text-4xl font-Fb text-white">
      {achievement.rank}
    </div>
  </div>
</div>


      {/* Event */}
      <div className=" text-xs md:text-sm text-gray-400 md:font-Fb font-Fn">
        {achievement.event}
      </div>
    </div>
  );

  return (
    <div>
        <Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-red-950 pb-9">
      <div className="max-w-[1400px] mx-auto px-8 pt-16">
        <h1 className="text-center mb-8 lg:mb-12">
          <span className="text-4xl lg:text-7xl font-zenDots bg-gradient-to-r from-red-800 via-red-600 to-red-400 text-transparent bg-clip-text flex justify-center">
            ABOUT US
          </span>
        </h1>
        
        <div className="grid grid-cols-12 gap-8 justify-center">
          <div className="col-start-2 col-span-10 mb-12">
            <p className="text-gray-300 md:text-2xl  text-lg text-justify font-Rajdhani">
              Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology,
              KOCHI, embodies dedication and collaboration with a strong presence in prestigious competitions like SAE SUPRA, F1S
              INDIA, and FORMULA BHARAT. Yeti Racing has recently achieved remarkable success at SUPRA 2024, securing an
              impressive All India Rank of 9 overall. Notably, we completed a successful endurance run, becoming one of only six cars to
              achieve this feat and marking a significant milestone as the first team from Kerala to complete endurance at the
              competition.
            </p>
          </div>

          <div className="col-span-full grid grid-cols-12 gap-8">
            <div className="col-span-5">
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <Badge key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>

            <div className="col-span-6 col-start-7">
              <div className="mb-8">
                <p className="text-gray-300 md:text-2xl  font-Rajdhani">
                  Looking ahead, Yeti Racing is gearing up for exciting challenges at Formula Bharat 2025 and Formula Imperial
                  2025, with aspirations to push the boundaries of design and performance even further.
                </p>
              </div>

              <div className="mb-12">
                <p className="text-gray-300 md:text-2xl  font-Rajdhani">
                  Reflecting on our journey, the team first participated in SUPRA 2017, where we secured an impressive 4th place
                  in the Design event. This early achievement showcased our innovative engineering and laid the foundation for
                  future successes.
                </p>
              </div>

              <div className="flex text-xs md:text-2xl flex-col md:flex-row w-full gap-4 justify-center ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}