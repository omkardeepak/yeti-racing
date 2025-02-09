"use client"
import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
export default function Confetti(){

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


  return(
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
  )

}