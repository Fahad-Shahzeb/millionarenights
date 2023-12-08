import React from 'react';
import {
    Ellipse30,
    Logo,
    Ellipse28,
    Globe_PNG,
    ShadyDotsIcon2,
    Ellipse,
} from '../assets/pngs';
import { CircularAnimation } from './CircularAnimation';
// import { millionairenight2nd } from "../assets/pngs";
const EllipseSection = () => {
    return (
        <div className='flex flex-col items-center lg:items-left lg:flex-row gap-0 lg:gap-6 py-12'>
            <div className='relative flex-none w-full lg:w-1/2'>
                <img alt='' src={Ellipse} className='w-[80%] lg:w-full' />
                <img
                    alt=''
                    src={Globe_PNG}
                    className='w-[35%] absolute right-[10%] lg:right-0 top-0'
                />
            </div>
            <img alt='' src={ShadyDotsIcon2} className='hidden lg:block mt-[20%]' />
            <div className='flex flex-col xl:flex-row container '>
                <div className='flex-1 xl:mt-0'>
                    <div className='flex justify-center lg:justify-start lg:ml-[10%]'>
                        <div className='flex flex-col justify-center item-center'>
                            <div className='mb-4 leading-10 text-white text-[24px] md:text-[42px] max-w-[500px] text-center uppercase font-light'>
                                <h1 className='antialiased'>
                                    Discover the <br />
                                    <span className='font-bold'>
                                        Millionaire <span className='texttualgradient'>Nights</span>
                                    </span>
                                    <br />
                                    Token!
                                </h1>
                            </div>
                            <div className='mb-4 text-white max-w-[500px]'>
                                <p className='text-center text-[#989898] text-[14px] md:text-[16px] font-light'>
                                    MillionaireNights is using the power of blockchain technology
                                    to offer a unique opportunity to get involved in a dynamic and
                                    growing industry. Enjoy a combination of dating, luxury
                                    marketplace, special party series, and take a profit from
                                    them.
                                </p>
                            </div>
                            <div className='text-center'>
                                <button className='cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black '>
                                    <p className='text-lg text-center font-semibold'>
                                        Buy $MillionAire
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { EllipseSection };