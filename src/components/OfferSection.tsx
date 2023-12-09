import React from "react";
import { OfferDotsIcon } from "../assets";

const OfferSection = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='absolute bg-[#5318D1] w-[270px]  md:w-[470px] lg:w-[570px] h-[87%] md:h-[70%]  rounded-[40px] sm:rounded-[50px] z-[-10]' />
      <div className='w-11/12  md:w-[85%] lg:w-[75%] h-10/12 mx-auto my-10 md:my-20 grid place-items-center grid-cols-1 md:grid-cols-8  bg-[#0f0f0f] px-5 rounded-[40px] sm:rounded-[50px] py-10 md:py-12'>
        <div className='md:col-span-3 py-auto text-2xl md:text-5xl  lg:text-6xl xl:text-[72px] leading-[120%] text-white  flex flex-col items-start xs:items-center justify-center mx-[20%]'>
          <p className='leading-[120%] font-normal'>
            LIMITED <br />
            <span className='texttualgradient ml-3 xs:ml-1'>OFFER!</span>
          </p>
        </div>
        <div className='relative  md:col-span-1 flex items-center justify-center transform -rotate-90 md:rotate-0'>
          <OfferDotsIcon
            className='mt-0  '
            size={8}
          />
        </div>
        <div className='md:col-span-4 flex flex-col items-center justify-center  md:items-end my-auto md:pr-5'>
          <p className=' text-center md:text-right text-white font-light leading-[120%] text-sm md:text-xl lg:text-2xl sm:ml-2 px-3 md:px-0'>
            The first 1000 token buyers will also benefit from the profits of
            our LUXXDATING project
            <span className='font-serif'>!</span>
          </p>
          <div className='w-full block mt-3 md:mt-0'>
            <div className='mt-4 flex justify-center md:justify-end items-center flex-1  w-full gap-3'>
              <button className='cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 flex justify-center  rounded-3xl py-2 md:py-3 text-black '>
                <p className='text-sm lg:text-lg justify-center text-center font-semibold  antialiased'>
                  Buy <span className='font-serif'> $</span>MillionAire
                </p>
              </button>
              <button
                style={{ border: "1.5px solid var(--GRAD_01, #775CF4)" }}
                className='gradient-hover-effect cursor-pointer py-2 md:py-3 flex items-center justify-center px-4  rounded-[30px]'>
                <p className=' text-sm lg:text-lg text-center font-semibold antialiased'>
                  Read more
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OfferSection };
