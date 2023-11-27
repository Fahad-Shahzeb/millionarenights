import React from 'react'
import { ETHIcon, SocialIcons, USDTIcon } from '../assets'
type mode = 'facebook' | 'instagram' | 'twitter' | 'vimeo'

const HeroSection = () => {
    const socialIcons: mode[] = ['facebook', 'instagram', 'twitter', 'vimeo']

    return (
        <div className='container mx-auto my-16'>
            <div >
                <div className='grid grid-cols-2 text-white'>
                    <div className='flex flex-col gap-4 mt-16'>
                        <div>
                            <p className='text-6xl font-bold uppercase m-0 '>
                                Millionaire
                                <span className='texttualgradient'>Nights</span>
                            </p>
                            <p style={{ lineHeight: 1 }} className=' text-[180px] uppercase font-bold'>token</p>
                            <p className='text-2xl font-semibold uppercase'>BENEFIT FROM THE EXPANSION OF OUR LUXURY MARKETPLACE AND DATING NETWORK<span className='font-sans'>!</span></p>
                            <p className='text-lg font-light '>Conquer the world with us and benefit from the profits<span className='font-sans'>!</span></p>
                        </div>
                        <div className='flex items-center gap-7'>
                            <div
                                className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black'>
                                <p className='text-base font-normal antialiased'>White Paper</p>
                            </div>
                            <div className='flex gap-3'>
                                {socialIcons.map((item, index) => (
                                    <div key={index} className='p-3 border-2 rounded-full flex items-center justify-center'>
                                        <SocialIcons mode={item} size={1} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex  flex-col items-center  gap-3'>
                        <div
                            style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                            className='flex border-2 border-white px-8 py-16 rounded-3xl items-center flex-col gap-3'>
                            <p className='text-lg font-normal text-center'>BUY IN BEFORE PRICE INCREASES<span className='font-sans'>!</span> <br />Stage 2</p>
                            <progress className='h-10 w-full rounded-3xl overflow-hidden ' id="reviews" value="5" max="5" />
                            <div className='opacity-60'>
                                <p className='text-xs font-normal'>931 123 VLT <span className='font-sans'>/</span> 1 000 000 VLT</p>
                                <p className='text-xs font-normal'>CEX LISTING PRICE: <span className='font-sans'>$</span>0.16</p>
                                <p className='text-xs font-normal'>Any unsold tokens will be burnt</p>
                            </div>
                            <div className='bg-[#fff]/[0.07] plain_input w-full py-4 rounded-[30px]'>
                                <input className=' bg-transparent px-4 text-white   ' placeholder='' />
                            </div>
                            <div className='flex justify-between flex-1  w-full gap-3'>
                                <div className='flex gap-3 items-center justify-center bg-[#fff]/[0.07] plain_input w-full py-4 rounded-[30px]'>
                                    <ETHIcon size={2} />
                                    <p className='text-sm font-normal antialiased'>ETH</p>
                                </div>
                                <div className=' flex gap-3 items-center justify-center bg-[#fff]/[0.07] plain_input w-full py-4 rounded-[30px]'>
                                    <USDTIcon size={2} />
                                    <p className='text-sm font-normal antialiased'>USDT</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center flex-1  w-full gap-3'>
                                <div className='w-full '>
                                    <p className='mb-1 text-sm font-normal text-[#fff]/[0.6] text-center'>ETH you pay</p>
                                    <div className='py-3  flex items-center px-4 bg-[#fff]/[0.07] plain_input w-full  rounded-[30px]'>
                                        <p className='text-[#AD87FF] text-lg  font-normal antialiased'>0.0</p>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='mb-1  text-sm font-normal text-[#fff]/[0.6] text-center'>USDT you receive</p>
                                    <div className='py-3  flex items-center px-4 bg-[#fff]/[0.07] plain_input w-full rounded-[30px]'>
                                        <p className='text-[#AD87FF] text-lg  font-normal antialiased'>0.0</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 flex justify-between items-center flex-1  w-full gap-3'>
                                <div
                                    style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                    className=' py-3  flex items-center px-4  plain_input w-full rounded-[30px]'>
                                    <p className=' text-base justify-center font-normal antialiased'>Connect wallet</p>
                                </div>
                                <div className='py-3 bg-gradient-to-t from-[#775CF4] to-[#C85EF7] flex items-center justify-center px-4 bg-[#fff]/[0.07] plain_input w-full  rounded-[30px]'>
                                    <p className=' text-base font-normal antialiased'>Buy Crypto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HeroSection }