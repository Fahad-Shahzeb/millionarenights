import React from 'react';
import { cryptonews, coincierge, coinspeaker, cointelegraph } from '../assets/pngs';

const MainHeadingSection = () => {
    const renderPNG = (src: string, key: number) => (
        <img key={key} src={src} alt={`PNG ${key}`} style={{ width: '200px', height: '47px' }} />
    );

    const allPNGS = [cryptonews, coincierge, coinspeaker, cointelegraph];

    return (
        <div className='w-full lg:mt-[50px] 2xl:mt-[100px]'>
            <hr className="line above bg-[#373639]" />
            <div className='container mx-auto my-8'>
                <div className='flex flex-col gap-8 md:flex-row md:gap-16'>
                    {allPNGS.map((src, index) => renderPNG(src, index))}
                </div>
            </div>
            <hr className="line above bg-[#373639]" />
        </div>
    );
};

export { MainHeadingSection };
