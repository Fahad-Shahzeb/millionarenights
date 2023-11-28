import React from "react";
import { HorizontalLinesPNG, LogoCoin_PNG } from "../assets";

const JoinUsSection = () => {
    return (
        <section className='mt-10'>
            <div className='text-white flex items-center flex-col'>
                <h2 className='text-6xl uppercase text-center'>
                    Join Us Now<span className='font-sans'>!</span>
                </h2>
                {/* <div className=' flex items-center justify-center gap-5 mt-8'>
                    <img
                        src={HorizontalLinesPNG}
                        className='mt-[1px]'
                        alt=''
                    />
                    <img
                        src={HorizontalLinesPNG}
                        className='rotate-180'
                    />
                    <p className='absolute flex text-white text-lg gap-10'>
                        The future starts today. Dont miss out.
                    </p>
                </div> */}
            </div>

            {/* Sections */}
            <div className='grid grid-cols-1 md:grid-cols-4 text-center px-20 md:px-40 lg:px-60 my-16'>
                <div className='flex items-center flex-col py-6'>
                    <p className='texttualgradient font-semibold text-4xl '>
                        <span className='font-sans'>$</span>6B
                    </p>
                    <p className='text-white font-normal text-lg'>Online dating market</p>
                </div>
                <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
                    <p className='texttualgradient font-semibold text-4xl'>
                        <span className='font-sans'>4</span>30M
                        <span className='font-sans'>+</span>
                    </p>
                    <p className='text-white font-normal text-lg'>
                        Dating users in the world
                    </p>
                </div>
                <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
                    <p className='texttualgradient font-semibold text-4xl'>
                        50<span className='font-sans'>%</span>
                    </p>
                    <p className='text-white font-normal text-lg'>Growth by 2025</p>
                </div>
                <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
                    <p className='texttualgradient font-semibold text-4xl'>
                        <span className='font-sans'>$</span>23B
                    </p>
                    <p className='text-white font-normal text-lg'>NFT Market</p>
                </div>
            </div>

            {/* Coin Images */}
            <div className='flex h-32 my-10 justify-center gap-20 sm:gap-24'>
                <img
                    src={LogoCoin_PNG}
                    className='w-[110px] h-[110px] '
                    alt=''
                />
                <img
                    src={LogoCoin_PNG}
                    className='w-[70px] h-[70px] transform rotate-[105deg] self-start'
                    style={{ filter: "blur(1px)" }}
                    alt=''
                />
                <img
                    src={LogoCoin_PNG}
                    className='w-[70px] h-[70px] transform -rotate-[75deg] self-end'
                    alt=''
                />
                <img
                    src={LogoCoin_PNG}
                    className='hidden sm:block w-[50px] h-[50px]'
                    style={{ filter: " blur(1px)" }}
                    alt=''
                />
            </div>
        </section>
    );
};

export { JoinUsSection };