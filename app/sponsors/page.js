"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function SponsorsPage() {
  const [visibleSections, setVisibleSections] = useState({
    santaMonica: false,
    dtsRacing: false,
    edstech: false,
    helloscore: false,
    tyreguru: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSections(prev => ({
              ...prev,
              [id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.sponsor-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const getSlideClass = (sectionId, direction) => {
    const baseClasses = "transition-all duration-1000 transform";
    if (!visibleSections[sectionId]) {
      return `${baseClasses} ${direction === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'}`;
    }
    return `${baseClasses} translate-x-0 opacity-100`;
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        {/* First Screen - Black to Dark Red Gradient */}
        <div className="bg-gradient-to-b from-black to-red-900 pb-20">
          <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-16">
            <h1 className="text-center mb-12 animate-bounce text-4xl lg:text-6xl flex flex-col md:flex-row justify-center">
              <span className="text-red-600 font-bold font-zenDots">OUR</span>
              <span className="text-white font-bold ml-4 font-zenDots">SPONSORS</span>
            </h1>
            
            <div className="max-w-4xl mx-auto lg:text-2xl text-center mb-16 text-lg">
              <p className="mb-8 text-gray-300 text-justify font-Rajdhani">
                Yeti Racing is dedicated to pushing the limits of student innovation each year. As a non-profit student team, we deeply appreciate the invaluable support from generous companies and institutions.
              </p>
              <p className="text-gray-300 text-justify font-Rajdhani">
                We're constantly seeking new partners to join us on our journey, enabling us to focus on what we excel at: developing and advancing cutting-edge technology. Click the button below to become a part of our mission to rank among the top Formula Student teams globally.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-20 font-Goldman">
              <a href='/funding'>
                <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full transition-colors duration-300 text-lg transition-all duration-300 hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
                  Back Our Team
                </button>
              </a>
              <a href='#footer'>
                <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full transition-colors duration-300 text-lg transition-all duration-300 hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
                  Sponsorship
                </button>
              </a>
            </div>

            {/* Santa Monica Section */}
            <div id="santaMonica" className="sponsor-section max-w-6xl mx-auto mb-24">
              <div className={getSlideClass('santaMonica', 'right')}>
                <div className="p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      <div className="w-full max-w-[300px]">
                        <Image
                          src="/assets/santa-monica-logo.png"
                          alt="Santa Monica Logo"
                          width={300}
                          height={120}
                          className="w-full transition-transform duration-500 hover:rotate-2 hover:scale-105"
                        />
                      </div>
                      <Link href="https://santamonicaedu.in/">
                        <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                          view more →
                        </button>
                      </Link>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 animate-pulse font-Orbitron text-amber-500">Santa monica</h2>
                      <p className="text-gray-300 text-lg text-justify leading-relaxed font-Rajdhani">
                        Santa Monica Study Abroad, founded in 2002, is a leading educational consultancy that helps students pursue higher education opportunities overseas. With over two decades of experience, they provide expert guidance on university selection, visa processes, and scholarship options, making the study abroad journey smooth and hassle-free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Screen - Dark Red to Black Gradient */}
        <div className="bg-gradient-to-b from-red-900 to-black">
          <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 pt-20">
            {/* DTS Racing Section */}
            <div id="dtsRacing" className="sponsor-section max-w-6xl mx-auto mb-24">
              <div className={getSlideClass('dtsRacing', 'left')}>
                <div className="p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 animate-pulse font-Orbitron text-amber-500">DTS Racing</h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify font-Rajdhani">
                        DTS Racing, founded in 2015 by National and International Champion Dilljith T S, is a prominent motorsports team in India dedicated to promoting motorsports among the younger generation.
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed font-Rajdhani">
                        As part of DTSR Academy Pvt Ltd, the team has quickly risen to become one of India's top national and international racing teams.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      <div className="w-full max-w-[300px]">
                        <Image
                          src="/assets/dts-racing-logo.png"
                          alt="DTS Racing Logo"
                          width={300}
                          height={120}
                          className="w-full hover:-rotate-2 hover:scale-105"
                        />
                      </div>
                      <Link href="https://dtsracing.com/">
                        <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                          view more →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDS Technologies Section */}
            <div id="edstech" className="sponsor-section max-w-6xl mx-auto mb-24">
              <div className={getSlideClass('edstech', 'right')}>
                <div className="p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      <div className="w-full max-w-[300px]">
                        <Image
                          src="/assets/eds-logo.png"
                          alt="EDS Technologies Logo"
                          width={300}
                          height={120}
                          className="w-full hover:rotate-2 hover:scale-105"
                        />
                      </div>
                      <Link href="https://edstechnologies.com/">
                        <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                          view more →
                        </button>
                      </Link>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 animate-pulse font-Orbitron text-amber-500">EDS Technologies</h2>
                      <p className="text-gray-300 text-lg leading-relaxed text-justify font-Rajdhani">
                        EDS Technologies is one of India's leading providers of engineering and enterprise solutions. The company specializes in offering end-to-end solutions in areas such as CAD, CAM, CAE and 3D visual simulation. EDS Technologies serves a wide range of industries, including automotive, aerospace, defense, education, industrial machinery, and electronics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helloscore Section */}
            <div id="helloscore" className="sponsor-section max-w-6xl mx-auto mb-24">
              <div className={getSlideClass('helloscore', 'left')}>
                <div className="p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 animate-pulse font-Orbitron text-amber-500">Helloscore</h2>
                      <p className="text-gray-300 text-lg leading-relaxed text-justify font-Rajdhani">
                        Helloscore, a subsidiary of the esteemed Analyt Group of Companies, is a premier financial services provider dedicated to empowering individuals and businesses with tailored credit solutions. Helloscore specializes in comprehensive credit management services, credit score improvement, credit monitoring, debt settlement, and wealth management.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      <div className="w-full max-w-[300px]">
                        <Image
                          src="/assets/helloscore-logo.png"
                          alt="Helloscore Logo"
                          width={300}
                          height={120}
                          className="w-full hover:-rotate-2 hover:scale-105"
                        />
                      </div>
                      <Link href="https://helloscore.in/">
                        <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                          view more →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TyreGuru Section */}
            <div id="tyreguru" className="sponsor-section max-w-6xl mx-auto pb-24">
              <div className={getSlideClass('tyreguru', 'right')}>
                <div className="p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      <div className="w-full max-w-[300px]">
                        <Image
                          src="/assets/tyreguru.png"
                          alt="TyreGuru Logo"
                          width={300}
                          height={120}
                          className="w-full hover:rotate-2 hover:scale-105"
                        />
                      </div>
                      <Link href="https://www.instagram.com/tyreguru.in/?hl=en">
                        <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                          view more →
                        </button>
                      </Link>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 animate-pulse font-Orbitron text-amber-500">TyreGuru</h2>
                      <p className="text-gray-300 text-lg leading-relaxed text-justify font-Rajdhani">
                        Tyreguru is dedicated to providing expert advice and education about tyres, helping consumers make informed decisions. With engaging content like reels addressing tyre scams and maintenance tips, the page aims to raise awareness and transform the automotive industry through informed choices. Boasting over 101,000 followers, Tyreguru emphasizes customer education and personalized assistance, offering direct support via their contact number, +91 98955 88524.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}