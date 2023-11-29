import React from 'react';
import {
    CarImageIphone,
    IPhoneBG,
    Iphone_PNG,
    ShadyDotsIcon,
    ShadyDotsIcon2,
} from '../assets';

const MobileScreenComponent = () => {
    return (
        <div className='my-24  text-white overflow-x-hidden'>
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <p className='text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold uppercase m-0 '>
                        Millionaire
                        <span className='texttualgradient'>Nights</span>
                        <br />
                        <p className=' font-light text-center uppercase'>Party</p>
                    </p>
                </div>
                <div className='flex  justify-center items-center gap-36'>
                    <img
                        src={ShadyDotsIcon2}
                        className='hidden max-w-[100%] xl:block rotate-90'
                        alt=''
                    />
                    <img
                        src={IPhoneBG}
                        className='px-8 pb-3 md:pb-0 md:px-0 max-w-[400px] xl:max-w-[500px] 2xl:max-w-[850px] 3xl:max-w-full'
                        alt=''
                    />
                    <img
                        src={ShadyDotsIcon2}
                        className='hidden max-w-[100%] xl:block -rotate-90'
                        alt=''
                    />
                </div>
                <div className='w-full px-8 md:px-0 md:w-[45%]'>
                    <p className='text-[#989898] text-base text-center font-light'>
                        Premium events in the world's most exclusive locations. Stunning
                        cars, glamorous company and unforgettable moments. Only for the
                        privileged. 2024, Monaco - Tickets available soon!
                    </p>
                </div>
                <div className='mt-6 md:my-10 bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
                    <p className='text-lg font-semibold antialiased'>
                        Buy <span className='font-sans'>$</span>Millionaire
                    </p>
                </div>
            </div>
        </div>
    );
};

export { MobileScreenComponent };