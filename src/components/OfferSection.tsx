import React from "react";
import { OfferDotsIcon } from "../assets";

const OfferSection = () => {
    return (
        <section className='relative flex flex-col justify-center items-center' >
            <div className='absolute bg-[#5318D1] top-[65px]  w-full max-w-[550px] h-[300px] rounded-[50px] z-[-10]' />
            <div className='w-8/12 h-10/12 mx-auto my-20 grid grid-cols-7 bg-[#0f0f0f] px-5 rounded-[50px]'>
                <div className='col-span-3 py-auto text-[48px] text-white flex flex-col items-start justify-center mx-[20%]'>
                    <p className='-mb-4'>LIMITED</p>
                    <p className='texttualgradient'>
                        OFFER<span className='font-sans font-semibold'>!</span>
                    </p>
                </div>
                <div className='relative col-span-1 flex justify-center h-[270px] overflow-hidden'>
                    <OfferDotsIcon className='mt-16' />
                </div>
                <div className='col-span-3 flex flex-col items-end my-auto pr-5'>
                    <p className='text-right text-white font-light'>
                        The first 1000 token buyers will also benefit from <br /> the
                        profits of our LUXXDATING project
                        <span className='font-sans'>!</span>
                    </p>
                    <div className='flex mt-5 gap-3'>
                        <div className='text-center'>
                            <button className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black w-[180px]'>
                                Buy $MillionAire
                            </button>
                        </div>
                        <div className='text-center rounded-full bg-gradient-to-t from-[#775CF4] to-[#C85EF7] p-[2px]'>
                            <button className='px-5 rounded-full text-white w-full h-full bg-black'>
                                Read More
                            </button>
                        </div>
                        {/* <div className=' py-3  flex items-center px-4  plain_input w-full rounded-[30px]'>
              <p className=' text-base justify-center font-normal antialiased'>
                Read More
              </p>
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { OfferSection };