import React, { useEffect, useState } from 'react';
import { coincierge, coinspeaker, cointelegraph, cryptonews } from '../assets';

const MainHeadingSection = () => {
    const renderPNG = (src: string, key: number) => (
        <img key={key} src={src} alt={`PNG ${key}`} className='h-[35px] sm:h-[47px] w-[140px] sm:w-[200px]' />
    );
    const [tabs, setTabs] = useState([cryptonews, coincierge, coinspeaker, cointelegraph]);

    useEffect(() => {
        if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
            setTabs(tabs.slice(0, 3));
        }
        else if (window.innerWidth <= 768) {
            setTabs(tabs.slice(0, 2));
        } else {

        }
    });

    return (
        <div className='w-full '>
            <div className='container mx-auto my-8'>
                <div className='flex px-8 flex-row gap-2 justify-between '>
                    {tabs.map((src, index) => renderPNG(src, index))}
                </div>
            </div>
        </div>
    );
};

export { MainHeadingSection };
