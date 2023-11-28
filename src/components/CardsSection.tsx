import React, { useEffect } from 'react'
import { CardsSection1, CardsSection2, DollarCoin_PNG, EllipseShaded, } from '../assets'

const CardsSection = () => {
    useEffect(() => {

    }, [])

    return (
        <div className='my-10 relative flex flex-col items-center justify-center'>
            <div className='flex relative items-center justify-center gap-20 flex-wrap w-full'>
                <div className='relative flex text-white bg-[#0F0F0F] w-[708px] justify-center items-center   h-[680px] rounded-[50px]'>
                    <div className='absolute  bg-[#C85EF7] w-full  max-w-[570px]  h-[722px] rounded-[50px] z-[-10]' />
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <img src={CardsSection1} className='self-center' alt="" />
                            <p className='text-[42px] font-bold uppercase m-0 '>
                                Millionaire
                                <span className='texttualgradient'>Nights</span><br />
                                <p className='mt-[-15px] font-light text-center uppercase'>Dating</p>
                            </p>
                            <p className='w-[80%] text-center text-[#989898] text-base font-light '>MillionaireNights isn<span className='font-sans'>'</span>t just a dating platform <span className='font-sans'>-</span> it<span className='font-sans'>'</span>s a revolutionary network for networking. With only verified, trusted members and a host of features to help you find your ideal partner.</p>
                        </div>
                        <div
                            className=' bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
                            <p className='text-base font-normal antialiased'>Buy <span className='font-sans'>$</span>Millionaire</p>
                        </div>
                    </div>
                </div>

                <div className='relative flex text-white bg-[#0F0F0F] w-[708px] justify-center items-center   h-[680px] rounded-[50px]'>
                    <div className='absolute  bg-[#5318D1] w-full  max-w-[570px]  h-[722px] rounded-[50px] z-[-10]' />
                    <span className='absolute right-5 top-5'>
                        <div className=" inset-0 rounded-[100px] w-20 h-20 top-10 flex justify-center items-center"
                            style={{
                                backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                                mixBlendMode: 'screen',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                            }}>
                            <p className='font-semibold text-sm text-[#5318D1] text-center'>Coming <br />Soon</p>
                        </div>
                    </span>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <img src={CardsSection2} className='self-center' alt="" />
                            <p className=' text-[42px] font-light text-center uppercase'>Luxury
                                <br />
                                <p className='mt-[-15px]'> Marketplace</p>
                            </p>
                            <p className='w-[80%] text-center text-[#989898] text-base font-light '>
                                For only authentic sellers and the most demanding buyers. Choose cryptocurrency or traditional payment methods and get the most desirable luxury cars, real estate, rare items and exclusive services.                                </p>
                        </div>
                        <div
                            className=' bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 self-center rounded-3xl py-2 text-black'>
                            <p className='text-base font-normal antialiased'>Buy <span className='font-sans'>$</span>Millionaire</p>
                        </div>
                    </div>
                    <div className='absolute -right-36 top-32'>
                        <img src={DollarCoin_PNG} className='w-[200px] h-[211px]' alt="" />
                    </div>
                </div>
            </div>

            <div className='absolute  -right-10 bottom-48 opacity-50 blur-[2px] rotate-90'>
                <img src={DollarCoin_PNG} className='  w-[110px]' alt="" />
            </div>
            <div className='relative'>
                <div className=' bottom-0 mt-32 w-full'>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export { CardsSection }