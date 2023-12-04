import React, { useEffect, useState } from 'react';
import { coincierge, coinspeaker, cointelegraph, cryptonews } from '../assets';
import Marquee from "react-marquee-slider";

const MainHeadingSection = () => {
    return (
        <div className='w-full '>
            <div className='flex px-8 flex-row gap-2 justify-between h-full py-8'>
                <Marquee velocity={130} direction='rtl' onFinish={() => { }} onInit={() => { }} resetAfterTries={200} scatterRandomly={false}>
                    <img src={cryptonews} alt={`PNG`} className='h-[35px] sm:h-[47px] w-[140px] sm:w-[200px] mx-12 sm:mx-32 ' />
                    <img src={coincierge} alt={`PNG`} className='h-[35px] sm:h-[47px] w-[140px] sm:w-[200px] mx-12 sm:mx-32' />
                    <img src={coinspeaker} alt={`PNG`} className='h-[35px] sm:h-[47px] w-[140px] sm:w-[200px] mx-12 sm:mx-32' />
                    <img src={cointelegraph} alt={`PNG`} className='h-[35px] sm:h-[47px] w-[140px] sm:w-[200px] mx-12 sm:mx-32' />
                </Marquee>
            </div>
        </div>
    );
};

export { MainHeadingSection };
