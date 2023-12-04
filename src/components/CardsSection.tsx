import React, { } from "react";
import {
    CardsSection1,
    CardsSection2,
    DollarCoin_PNG,
    HeartCoin_PNG,
} from "../assets";

const CardsSection = () => {

    return (
        <div className='py-10 relative flex flex-col items-center justify-center overflow-hidden'>
            <div className='flex relative items-center justify-center gap-20 flex-wrap w-full '>
                <div className='relative flex text-white bg-[#0F0F0F] w-11/12 sm:w-[708px] justify-center items-center h-[555px] 2xl:h-[680px] rounded-[50px]'>
                    <div className='absolute bg-[#C85EF7] w-11/12 2xl:w-full max-w-[570px] h-[575px] 2xl:h-[722px] rounded-[50px] z-[-10]' />
                    <div className='flex flex-col gap-5 px-4'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='sm:hidden xs:block absolute xs:-left-12 xs:top-16'>
                                <img
                                    src={HeartCoin_PNG}
                                    className='w-[200px] xs:w-[90px] h-[211px] xs:h-[95.41px]'
                                    alt=''
                                />
                            </div>
                            <img
                                src={CardsSection1}
                                className='self-center xs:-mt-20'
                                // className='self-center xs:w-[320px]'
                                alt=''
                            />
                            <p className='md:text-[42px] leading-10 text-2xl font-bold uppercase m-0 w-full text-center'>
                                Millionaire
                                <span className='texttualgradient'>Nights</span>
                                <br />
                                <span className=' font-light text-center uppercase'>
                                    Dating
                                </span>
                            </p>
                            <p className='w-[80%] px-0 xs:w-full xs:px-2 text-center text-[#989898] text-base font-light '>
                                MillionaireNights isn<span className='font-sans'>'</span>t just
                                a dating platform <span className='font-sans'>-</span> it
                                <span className='font-sans'>'</span>s a revolutionary network
                                for networking. With only verified, trusted members and a host
                                of features to help you find your ideal partner.
                            </p>
                        </div>
                        <button className='cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
                            <p className='text-base font-normal antialiased'>
                                Buy <span className='font-sans'>$</span>Millionaire
                            </p>
                        </button>
                    </div>
                </div>

                <div className='relative flex text-white bg-[#0F0F0F] w-11/12 sm:w-[708px] justify-center items-center h-[555px] 2xl:h-[680px] rounded-[50px]'>
                    <div className='absolute bg-[#5318D1] w-11/12 2xl:w-full max-w-[570px] h-[575px] 2xl:h-[722px] rounded-[50px] z-[-10]' />
                    <span className='absolute right-5 top-5'>
                        <div
                            className=' inset-0 rounded-[100px] sm:w-20 sm:h-20 xs:w-14 xs:h-14 top-10 flex justify-center items-center'
                            style={{
                                backgroundImage:
                                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)",
                            }}>
                            <p className='font-semibold sm:text-sm xs:text-[9px] text-[#5318D1] text-center'>
                                Coming Soon
                            </p>
                        </div>
                    </span>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <img
                                src={CardsSection2}
                                className='self-center xs:-mt-20'
                                alt=''
                            />
                            <p className='leading-10 md:text-[42px] text-2xl font-light text-center uppercase'>
                                Luxury
                                <br />
                                <span className='mt-[-15px] xs:mt-0'> Marketplace</span>
                            </p>
                            <p className='w-[80%] text-center text-[#989898] text-base font-light '>
                                For only authentic sellers and the most demanding buyers. Choose
                                cryptocurrency or traditional payment methods and get the most
                                desirable luxury cars, real estate, rare items and exclusive
                                services.{" "}
                            </p>
                        </div>
                        <button className='cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
                            <p className='text-base font-normal antialiased'>
                                Buy <span className='font-sans'>$</span>Millionaire
                            </p>
                        </button>
                    </div>
                    <div className='absolute -right-10 top-40  '>
                        <img
                            src={DollarCoin_PNG}
                            className='w-[200px] xs:w-[90px] h-[211px] xs:h-[94.7px]'
                            alt=''
                        />
                    </div>
                </div>
            </div>

            <div className='absolute hidden sm:block  -right-10 bottom-48 opacity-50 blur-[2px] rotate-90'>
                <img
                    src={DollarCoin_PNG}
                    className='w-[110px]'
                    alt=''
                />
            </div>
            <div className='relative'>
                <div className=' bottom-0 mt-32 w-full'>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export { CardsSection };