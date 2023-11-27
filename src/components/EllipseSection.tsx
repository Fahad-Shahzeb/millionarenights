import React from 'react';
import { Ellipse30, Logo, Ellipse28 } from '../assets/pngs';
import { ShadyDotsIcon2 } from '../assets';

const EllipseSection = () => {
    const ellipseStyle = (url: string) => ({
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    });

    return (
        <div className='flex flex-col gap-4 md:flex-row'>
            <div className='w-full md:w-1/3 mr-4 flex flex-col' style={ellipseStyle(Ellipse30)}>
                <div className='h-1/4'></div>
                <div className='h-1/2'>
                    <div className='flex justify-center item-center' style={ellipseStyle(Ellipse28)}>
                        <div className='m-[4rem]'>
                            <img src={Logo} alt="Ellipse28" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex ml-10'>
                    <div className='w-1/4 mr-2 flex flex-col'>
                        <div className='h-1/2 '> </div>
                        <div className='h-1/2'>
                            <img src={ShadyDotsIcon2} alt="shadyDotsIcons2" style={{ width: '50%', height: '100%' }} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center item-center'>
                        <div className='mb-4 text-white text-[42px] w-[500px] text-center uppercase'><h1>Discover the Millionaire<span className="text-[#46225C]">Nights</span> Token!</h1></div>
                        <div className='mb-4 text-white w-[500px]'><p>MillionaireNights is using the power of blockchain technology to offer a unique opportunity to get involved in a dynamic and growing industry. Enjoy a combination of dating, luxury marketplace, special party series, and take a profit from them.</p></div>
                        <div className='text-center'>
                            <button className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black w-[180px]'>
                                Buy $MillionAire
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { EllipseSection };
