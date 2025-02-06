"use client"
import { useState, useEffect, useRef } from "react";
import Car from "../components/3dcar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

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
      if (windowWidth < 1440) return 'w-64 h-40';
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
                className="md:text-9xl text-6xl mb-52 md:mb-0 z-10  bg-gradient-to-br to-pink-900 via-neutral-300 from-neutral-300  text-transparent bg-clip-text"
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
        <div id="media" className="min-h-screen sm:h-screen bg-gradient-to-b from-red-700 via-red-950 to-black text-white overflow-scroll scroll-smooth">
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

  {/* Car component takes all available space */}
<div>
  <Footer className=""></Footer> 
  {/* <Car />  Car should be rendered inside this div */}

  </div> {/* Footer sticks to the bottom */}
</div>

    )
}