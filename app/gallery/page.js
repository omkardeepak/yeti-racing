"use client"
import { useState, useEffect, useRef, useMemo } from "react";
import Car from "../components/3dcar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Utility function for debouncing
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const VideoGallery = () => {
    const [viewport, setViewport] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      const updateViewport = () => {
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
  
      updateViewport();
      const debouncedResize = debounce(updateViewport, 150);
      window.addEventListener("resize", debouncedResize);
      return () => window.removeEventListener("resize", debouncedResize);
    }, []);
  
     const calculateFontSize = () => {
    const width = viewport.width * 0.85;  // Keep original width calculation
    const height = viewport.height * 0.98;
    return Math.min(width / 4.2, height / 0.85);  // Keep width ratio but adjust height
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-black via-red-950 to-red flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* SVG mask for the full GALLERY text */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <mask id="textMask">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-black uppercase tracking-tighter"
                style={{
                  fontSize: calculateFontSize(),
                  letterSpacing: "-0.08em",
                  transform: "scaleY(1.8)",  // Increased from 1.2 to 1.8 to make text taller
                  transformOrigin: "center",
                }}
                fill="white"
              >
                GALLERY
              </text>
            </mask>
          </defs>
        </svg>

        {/* Video masked to show within all letters */}
        <div className="relative w-screen h-screen">
          <video
            src="/assets/reel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              mask: "url(#textMask)",
              WebkitMask: "url(#textMask)"
            }}
          />
        </div>
      </div>
    </div>
  );
}

const ImageGrid = () => {
  const SPIN_DURATION = 7;
  const HOVER_IMAGES = useMemo(() => [
    { id: 0, hoverImage: "/assets/f1.jpeg" },
    { id: 1, hoverImage: "/assets/f2.jpg" },
    { id: 2, hoverImage: "/assets/f3.jpg" },
    { id: 3, hoverImage: "/assets/f4.jpg" },
    { id: 4, hoverImage: "/assets/f5.jpg" },
    { id: 5, hoverImage: "/assets/f6.jpg" },
    { id: 6, hoverImage: "/assets/f7.jpg" },
    { id: 7, hoverImage: "/assets/f8.jpg" },
    { id: 8, hoverImage: "/assets/f9.jpg" },
    { id: 9, hoverImage: "/assets/f10.jpg" },
    { id: 10, hoverImage: "/assets/f11.jpg" },
    { id: 11, hoverImage: "/assets/f12.jpg" },
    { id: 12, hoverImage: "/assets/f13.jpg" },
    { id: 13, hoverImage: "/assets/f14.png" },
    { id: 14, hoverImage: "/assets/f15.jpg" }
  ], []);

  const [hoveredCell, setHoveredCell] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const cells = useMemo(() => 
    Array.from({ length: 15 }, (_, index) => ({
      id: index,
      mainImageUrl: "/assets/carhd.jpg",
      ...HOVER_IMAGES[index]
    }))
  , [HOVER_IMAGES]);

  useEffect(() => {
    const imagePromises = [...new Set([
      ...cells.map(cell => cell.mainImageUrl),
      ...cells.map(cell => cell.hoverImage),
      "/assets/shi-rembg.png"
    ])].map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setIsLoading(false));
  }, [cells]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-red-950 via-red-1000 to-black flex items-center justify-center">
        <div className="text-white text-lg font-zenDots animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen transition-transform duration-500">
      <style jsx>{`
        @keyframes horizontalSpin {
          from { transform: translateX(-50%) rotateY(-90deg); }
          to { transform: translateX(-50%) rotateY(90deg); }
        }
        .cell-hover-effect {
          transform: translateZ(0);
          backface-visibility: hidden;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
      `}</style>

      <div className="container mx-auto py-8">
        <h1 className="text-white text-4xl md:text-6xl font-zenDots tracking-wider text-center">
          FORMULA BHARAT'25
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full px-4 gap-4">
        <div className="w-full lg:w-3/5 p-4">
          <div 
            className="grid gap-1"
            style={{
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              aspectRatio: '5/3',
              width: '100%'
            }}
          >
            {cells.map((cell) => (
              <div
                key={cell.id}
                className="relative aspect-square overflow-hidden cursor-pointer cell-hover-effect"
                onMouseEnter={() => setHoveredCell(cell.id)}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{
                    backgroundImage: `url(${cell.mainImageUrl})`,
                    backgroundSize: '500% 300%',
                    backgroundPosition: `${(cell.id % 5) * -100}% ${Math.floor(cell.id / 5) * -100}%`,
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                />
                
                {hoveredCell === cell.id && (
                  <div
                    className="absolute inset-0 transition-all duration-300 ease-out"
                    style={{
                      backgroundImage: `url(${cell.hoverImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <div className="relative w-full aspect-square" style={{ perspective: '1000px' }}>
            <img
              src="/assets/shi-rembg.png"
              alt="Rotating Image"
              className="w-full h-full object-contain absolute left-1/2"
              style={{
                animation: `horizontalSpin ${SPIN_DURATION}s linear infinite normal`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState(1920);
  const animationRef = useRef(null);

  const images = useMemo(() => [
    "/assets/DSC_0664.JPG",
    "/assets/DSC_0027.JPG",
    "/assets/DSC_0139.JPG",
    "/assets/DSC_0173.JPG",
    "/assets/DSC_0181.jpg",
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/4.jpg"
  ], []);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 150);
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <VideoGallery />
      <ImageGrid />

      <div className="relative z-10 w-full px-4 py-16 bg-gradient-to-b from-black via-red to-red-950">
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-white mb-8 md:mb-12 text-center font-zenDots">
          SAE Supra<span className="ml-3 text-red-700">'</span>24
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
          {images.map((img, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-2xl transition-transform duration-300 cursor-pointer
                         hover:scale-95 transform-gpu"
            >
              <img
                src={img}
                alt={`Grid gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300
                         grayscale hover:grayscale-0 transform-gpu hover:rotate-3"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>


      <div id="media" className="min-h-screen sm:h-screen bg-gradient-to-b from-red-950 via-red-1000 to-black text-white overflow-scroll scroll-smooth">
        <div className="text-4xl   sm:text-7xl font-zenDots flex  pt-3 sm:pt-9 pb-9 justify-center">Media Coverage</div>

          <div className="flex md:flex-row flex-col items-center justify-center ">
          <div className=" p-2 md:p-8 ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VCa9h0X5KDc?si=4YzUt2p1vywAYzYp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[200px] w-[300px] md:h-[330px] md:w-[550px]  "referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="md:p-8  p-2 ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SLfs0he6we0?si=gKjCbQiQiC0f9rqV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[200px] w-[300px] md:h-[330px] md:w-[550px]  " referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

            
          </div>
          <div>
            <div className=" p-2 md:p-8 flex justify-center">
        <iframe width="900" height="420" src="https://www.youtube.com/embed/N_NSTtLch1I?si=Sv5zWi2HkalrT1RR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " className="h-[200px] w-[300px] md:h-[300px] md:w-[900px]  " referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
            </div>
          
          
        </div>
        <div className="h-screen w-full bg-gradient-to-b from-black to-red-700">
          <div className="text-5xl sm:text-6xl flex justify-center font-zenDots  pt-16 w-full  text-white pb-20">Articles</div>
          
        <div className="h-screen md:h-screen w-full md:pl-20 md:pr-20 pl-2 pr-2">
        <div className="sm:flex flex-col md:flex-row space-x-10 justify-center hidden rounded-sm  h-[420px] items-center ">
        
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/tni1.png" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100  h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> TNIE : </span>Yeti Racing team from Cusat’s School of Engineering with their prize-winning car at the International........</p>
    <div className="w-52">
      <img src="https://images-assettype-com.cdn.ampproject.org/ii/AW/s/images.assettype.com/newindianexpress/2024-01/513ad66b-9f6c-4c96-a3d5-ea0e785580a6/Long_Light_Mode_500_Height.png?w=600" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-newindianexpress-com.cdn.ampproject.org/v/s/www.newindianexpress.com/amp/story/states/kerala/2025/Jan/31/students-from-cusat-win-international-formula-race-car-making-competition?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.newindianexpress.com%2Fstates%2Fkerala%2F2025%2FJan%2F31%2Fstudents-from-cusat-win-international-formula-race-car-making-competition" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20250130034012_Yeti_Racing_Formula_Bharat.jpg&w=700&c=1" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> Autocar : </span><span>The ninth edition of Formula Bharat saw 51 teams battling it out for a shot at ultimate engineering glory.......</span></p>
    <div className="w-40">
      <img src="https://cdni.autocarindia.com/aci/prod-new/images/autocar-logo-v2.png" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www.autocarindia.com/motor-sports-news/formula-bharat-2025-yeti-racing-team-kratos-racing-electric-crowned-winners-434408" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/hindu.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> The Hindu :</span> <span className="">Young talents at the School of Engineering at CUSAT have made a mark at an all-India engineering.......</span></p>
    <div className="w-52">
      <img src="https://www-thehindu-com.cdn.ampproject.org/ii/w220/s/www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-thehindu-com.cdn.ampproject.org/v/s/www.thehindu.com/news/cities/Kochi/recognition-for-young-talents-at-cusat/article69151050.ece/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fcities%2FKochi%2Frecognition-for-young-talents-at-cusat%2Farticle69151050.ece" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/mat.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-1 font-medium text-justify"><span className="font-bold font-Rajdhani"> Mathrubhumi :</span> <span className="font-light">അന്താരാഷ്ട്ര ഫോർമുല ഭാരത് മത്സരം കുസാറ്റിന് കിരീടം<span className="font-medium">......</span></span></p>
    <div className="w-40 ">
      <img src="/assets/mat.png" alt="tnie"></img>
    </div>
  <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://newspaper.mathrubhumi.com/ernakulam/news/ernakulam-1.10293480" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>

</div>
<div className="sm:hidden p-custom !py-[1px] flex space-x-4 bg-white  rounded-xl flex-nowrap card-container !overflow-scroll md:!overflow-hidden">
  <div className="card-wrap ">
  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out ">
  <img src="/assets/tni1.png" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> TNIE : </span>Yeti Racing team from Cusat’s School of Engineering with their prize-winning car at the International........</p>
    <div className="w-52">
      <img src="https://images-assettype-com.cdn.ampproject.org/ii/AW/s/images.assettype.com/newindianexpress/2024-01/513ad66b-9f6c-4c96-a3d5-ea0e785580a6/Long_Light_Mode_500_Height.png?w=600" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-newindianexpress-com.cdn.ampproject.org/v/s/www.newindianexpress.com/amp/story/states/kerala/2025/Jan/31/students-from-cusat-win-international-formula-race-car-making-competition?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.newindianexpress.com%2Fstates%2Fkerala%2F2025%2FJan%2F31%2Fstudents-from-cusat-win-international-formula-race-car-making-competition" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20250130034012_Yeti_Racing_Formula_Bharat.jpg&w=700&c=1" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> Autocar : </span><span>The ninth edition of Formula Bharat saw 51 teams battling it out for a shot at ultimate engineering glory.......</span></p>
    <div className="w-40">
      <img src="https://cdni.autocarindia.com/aci/prod-new/images/autocar-logo-v2.png" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www.autocarindia.com/motor-sports-news/formula-bharat-2025-yeti-racing-team-kratos-racing-electric-crowned-winners-434408" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="/assets/hindu.jpg" className="rounded-t-xl card-img-top" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> The Hindu :</span> <span className="">Young talents at the School of Engineering at CUSAT have made a mark at an all-India engineering.......</span></p>
    <div className="w-52">
      <img src="https://www-thehindu-com.cdn.ampproject.org/ii/w220/s/www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="tnie" ></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-thehindu-com.cdn.ampproject.org/v/s/www.thehindu.com/news/cities/Kochi/recognition-for-young-talents-at-cusat/article69151050.ece/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fcities%2FKochi%2Frecognition-for-young-talents-at-cusat%2Farticle69151050.ece" 
       className="font-Orbitron text-white text-xl ">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="/assets/mat.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-1 font-medium text-justify"><span className="font-bold font-Rajdhani"> Mathrubhumi :</span> <span className="font-light">അന്താരാഷ്ട്ര ഫോർമുല ഭാരത് മത്സരം കുസാറ്റിന് കിരീടം<span className="font-medium">......</span></span></p>
    <div className="w-40 ">
      <img src="/assets/mat.png" alt="tnie"></img>
    </div>
  <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://newspaper.mathrubhumi.com/ernakulam/news/ernakulam-1.10293480" 
       className="font-Orbitron text-white text-xl ">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
</div>

</div>


        </div>
      
        


        <Car />
      

      <Footer />
    </div>
  );
};

export default Gallery;