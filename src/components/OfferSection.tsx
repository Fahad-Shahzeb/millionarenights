import React from "react";
import { OfferDotsIcon } from "../assets";

const OfferSection = () => {
    return (
        <section className='relative flex items-center justify-center'>
            <div className='absolute bg-[#5318D1]  md:w-2/6  h-4/5 sm:h-4/6 rounded-[60px] sm:rounded-[50px] z-[-10]' />
            <div className='w-11/12  md:w-[85%] lg:w-[70%] h-10/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-7  bg-[#0f0f0f] px-5 rounded-[50px] py-10 md:py-0'>
                <div className='col-span-3 py-auto text-5xl md:text-4xl lg:text-5xl text-white flex flex-col items-start xs:items-center justify-center mx-[20%]'>
                    <p className=''>LIMITED</p>
                    <p className='texttualgradient ml-3 sm:ml-0'>
                        OFFER<span className='font-sans font-semibold'>!</span>
                    </p>
                </div>
                <div className='relative col-span-1 flex justify-center transform -rotate-90 md:rotate-0'>
                    <OfferDotsIcon className='mt-0 sm:mt-16 ' size={8} />
                </div>
                <div className='col-span-3 flex flex-col items-center md:items-end my-auto pr-5'>
                    <p className='text-center md:text-right text-white font-light ml-0 xs:text-sm sm:ml-2 px-3 sm:px-0'>
                        The first 1000 token buyers will also benefit from the profits of
                        our LUXXDATING project
                        <span className='font-sans'>!</span>
                    </p>
                    <div className='flex mt-5 gap-3 '>
                        <div className='text-center flex '>
                            <button className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-2 rounded-full py-2 antialiased  text-sm md:text-[16px] xl:text-[18px]  font-semibold text-black'>
                                Buy <span className='font-sans'>$</span>MillionAire
                            </button>
                        </div>
                        <div className='text-center flex  rounded-full p-[2px] bg-gradient-to-t from-[#775CF4] to-[#C85EF7]  '>
                            <button className='px-2 rounded-full text-white  w-full h-full bg-black antialiased  text-sm md:text-[16px] xl:text-[18px] font-semibold'>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { OfferSection };