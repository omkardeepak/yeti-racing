import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      photo: "https://ik.imagekit.io/r70knk9pu/tni1.png?updatedAt=1739076454315",
      content:
        "TNIE :Yeti Racing team from Cusat’s School of Engineering with their prize-winning car at the International........",
      logo: "https://images-assettype-com.cdn.ampproject.org/ii/AW/s/images.assettype.com/newindianexpress/2024-01/513ad66b-9f6c-4c96-a3d5-ea0e785580a6/Long_Light_Mode_500_Height.png?w=600",
      redirect:"https://www-newindianexpress-com.cdn.ampproject.org/v/s/www.newindianexpress.com/amp/story/states/kerala/2025/Jan/31/students-from-cusat-win-international-formula-race-car-making-competition?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.newindianexpress.com%2Fstates%2Fkerala%2F2025%2FJan%2F31%2Fstudents-from-cusat-win-international-formula-race-car-making-competition" 
    },
    {
      id: 2,
      photo: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20250130034012_Yeti_Racing_Formula_Bharat.jpg&w=700&c=1" ,
      content:
      "Autocar : The ninth edition of Formula Bharat saw 51 teams battling it out for a shot at ultimate engineering glory.......",
      logo: "https://cdni.autocarindia.com/aci/prod-new/images/autocar-logo-v2.png" ,
      redirect:"https://www.autocarindia.com/motor-sports-news/formula-bharat-2025-yeti-racing-team-kratos-racing-electric-crowned-winners-434408" 
    },
    {
        id: 3,
        photo: "/assets/hindu.jpg" ,
        content:
        " The Hindu :Young talents at the School of Engineering at CUSAT have made a mark at an all-India engineering.......",
        logo: "https://www-thehindu-com.cdn.ampproject.org/ii/w220/s/www.thehindu.com/theme/images/th-online/thehindu-logo.svg" ,
        redirect:"https://www-thehindu-com.cdn.ampproject.org/v/s/www.thehindu.com/news/cities/Kochi/recognition-for-young-talents-at-cusat/article69151050.ece/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fcities%2FKochi%2Frecognition-for-young-talents-at-cusat%2Farticle69151050.ece"
      },
      {
        id: 4,
        photo: "/assets/mat.jpg" ,
        content:"Mathrubhumi അന്താരാഷ്ട്ര ഫോർമുല ഭാരത് മത്സരം കുസാറ്റിന് കിരീടം......",
        logo: "/assets/mat.png" ,
        redirect:"https://newspaper.mathrubhumi.com/ernakulam/news/ernakulam-1.10293480"
      },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[400px] w-[350px] md:w-[1000px] mx-auto md:h-[500px]">
  {/* Carousel Wrapper */}
  <div className="overflow-hidden flex h-full w-full justify-center">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {items.map((item) => (
        <div key={item.id} className="min-w-full flex justify-center ">
          {/* Adjusting the size of the card based on the screen size */}
          <div className="card group hover:scale-105 rounded-xl transition-transform duration-500 ease-in-out drop-shadow-2xl w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px]">
            <img
              src={item.photo}
              className="card-img-top rounded-t-xl object-cover w-full h-2/3"
              alt="Fissure in Sandstone"
            />
            <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
              <p className="font-Rajdhani mb-2 md:mb-6 font-medium text-justify">
                {item.content}
              </p>
              <div className="md:w-52 w-40 ">
                <img src={item.logo} alt="tnie"></img>
              </div>
              <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                <a
                  href={item.redirect}
                  className="font-Orbitron text-white text-xl"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="currentColor"
      className="bi bi-caret-left"
      viewBox="0 0 16 16"
    >
      <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
    </svg>
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="currentColor"
      className="bi bi-caret-right"
      viewBox="0 0 16 16"
    >
      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
    </svg>
  </button>

  {/* Indicators */}
  <div className="flex justify-center space-x-2 mt-4">
    {items.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`w-3 h-3 rounded-full ${
          currentIndex === idx ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>
  )
};

export default Carousel;
