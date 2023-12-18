import React, { useEffect, useRef } from 'react';

import { ShadyDotsIcon2, Iphone } from '../assets';

const MobileScreenComponent = () => {
  const videoRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = videoRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isInViewNow = rect.top >= 0 && rect.bottom <= window.innerHeight;
      console.log('IS In View Now', isInViewNow);
      if (isInViewNow) {
        element.play().catch((error: Error) => {
          console.error('Error playing video:', error);
        });
      } else {
        element.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='mt-10 sm:mt-24 mb-16 text-white overflow-x-hidden'>
      <div className='flex justify-center items-center flex-col'>
        <div>
          <p className='text-2xl text-center md:text-4xl xl:text-5xl 2xl:text-7xl font-bold uppercase m-0 leading-[120%]'>
            Millionaire
            <span className='texttualgradient'>Nights</span>
            <br />
            <span className=' font-light text-center uppercase'>Party</span>
          </p>
        </div>
        <div className='flex  justify-center items-center gap-36'>
          <img
            src={ShadyDotsIcon2}
            className='hidden max-w-[100%] xl:block rotate-90'
            alt=''
          />
          <div className='w-[330px] my-3 sm:my-8 sm:w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[1100px] relative'>
            <img
              src={Iphone}
              className='w-full h-full'
              alt=''
            />
            <video
              loop
              muted
              autoPlay
              controls
              playsInline
              ref={(el) => {
                videoRef.current = el;
              }}
              className='absolute   xl:max-w-[77%] h-[89%] top-[5%] left-[12%]'
              src='https://business.milliomosok.com/wp-content/uploads/2023/09/Monaco-v3.mp4'
            />
          </div>
          <img
            src={ShadyDotsIcon2}
            className='hidden max-w-[100%] xl:block -rotate-90'
            alt=''
          />
        </div>
        <div className='w-full px-8 md:px-0 md:w-[45%]'>
          <p className='text-[#989898] text-base text-center font-light leading-[150%]'>
            Premium events in the world's most exclusive locations. Stunning
            cars, glamorous company and unforgettable moments. Only for the
            privileged. 2024, Monaco - Tickets available soon!
          </p>
        </div>
        <button className='cursor-pointer mt-6 md:my-10 bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
          <p className='text-lg font-semibold antialiased'>
            Buy <span className=' '>$</span>Millionaire
          </p>
        </button>
      </div>
    </div>
  );
};

export { MobileScreenComponent };
