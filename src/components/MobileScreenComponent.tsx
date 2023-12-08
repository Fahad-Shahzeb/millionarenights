import React from 'react';
import {
    IPhoneBG,
    Iphone_PNG,
    ShadyDotsIcon2,
} from '../assets';

const MobileScreenComponent = () => {
    return (
        <div className='mt-10 sm:mt-24 mb-16  text-white overflow-x-hidden'>
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
                    <img
                        src={Iphone_PNG}
                        className='px-4 sm:px-8 pb-3 md:pb-0 md:px-0 w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[1100px] '
                        alt=''
                    />
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
                        Buy <span className='font-serif'>$</span>Millionaire
                    </p>
                </button>
            </div>
        </div>
    );
};

export { MobileScreenComponent };