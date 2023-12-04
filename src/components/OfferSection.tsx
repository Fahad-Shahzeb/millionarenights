import React from "react";
import { OfferDotsIcon } from "../assets";

const OfferSection = () => {
    return (
        <section className='relative flex items-center justify-center'>
            <div className='absolute bg-[#5318D1] w-[270px]  md:w-[570px]  h-4/5  rounded-[60px] sm:rounded-[50px] z-[-10]' />
            <div className='w-11/12  md:w-[85%] lg:w-[75%] h-10/12 mx-auto my-20 py-10 grid place-items-center grid-cols-1 md:grid-cols-8  bg-[#0f0f0f] px-5 rounded-[50px] py-0 md:py-6'>
                <div className='md:col-span-3 py-auto text-5xl md:text-4xl lg:text-5xl text-white flex flex-col items-start xs:items-center justify-center mx-[20%]'>
                    <p className=''>LIMITED</p>
                    <p className='texttualgradient ml-3 sm:ml-0'>
                        OFFER<span className='font-sans font-semibold'>!</span>
                    </p>
                </div>
                <div className='relative  md:col-span-1 flex items-center justify-center transform -rotate-90 md:rotate-0'>
                    <OfferDotsIcon className='mt-0  ' size={8} />
                </div>
                <div className='md:col-span-4 flex flex-col items-center justify-center  md:items-end my-auto md:pr-5'>
                    <p className=' text-center md:text-right text-white font-light  text-sm md:text-2xl sm:ml-2 '>
                        The first 1000 token buyers will also benefit from the profits of
                        our LUXXDATING project
                        <span className='font-sans'>!</span>
                    </p>
                    <div className='flex mt-5 gap-3 w-full justify-center items-center'>
                        <div className='mt-4 flex justify-center md:justify-end items-center flex-1  w-full gap-3'>
                            <button className='w-[30%] md:w-[40%] cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-1 flex justify-center self-center rounded-3xl py-3 text-black '>
                                <p className=' text-base justify-center text-center font-normal  antialiased'>Buy  <span className='font-sans'> $</span>MillionAire</p>
                            </button>
                            <button
                                style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                className='gradient-hover-effect w-[30%] md:w-[40%] cursor-pointer py-3 flex items-center justify-center px-1  text-white rounded-[30px]'>
                                <p className=' text-base text-center font-normal antialiased'>Read more</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { OfferSection };