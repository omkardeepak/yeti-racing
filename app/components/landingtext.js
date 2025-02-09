import { useEffect, useState } from 'react';

const YetiRacing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This will trigger the animation when the component is loaded
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`mt-5 object-cover font-Inter font-extrabold text-[13rem] w-full h-full object-bottom absolute top-0 
      ${isLoaded ? 'right-0' : '-left-full'} z-30 flex flex-col leading-[160px] text-gray-400 transition-all duration-700 ease-in-out`}
    >
      YETI <span>RACING</span>
    </div>
  );
};

export default YetiRacing;
