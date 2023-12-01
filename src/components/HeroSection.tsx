import React from 'react'
import { ETHIcon, SocialIcons, USDTIcon } from '../assets'
type mode = 'facebook' | 'instagram' | 'twitter' | 'vimeo'

const HeroSection = () => {
    const socialIcons: mode[] = ['facebook', 'instagram', 'twitter', 'vimeo']

    return (
        <div className='py-4 px-8 my-16 w-screen'>
            <div className='flex flex-col  lg2:flex-row items-center justify-center gap-5 w-full text-white '>

                {/* div1 */}
                <div className='flex basis-[60%] shrink-[1] flex-col  items-center  justify-center '>
                    <div className='flex flex-col items-center lg2:items-start  gap-3'>
                        <p className='text-[28px] sm:text-4xl lg2:text-5xl 2xl:text-6xl text-center font-bold uppercase m-0 '>
                            Millionaire
                            <span className='texttualgradient'>Nights</span>
                        </p>
                        <p className='text-[86px] sm:text-[110px] text-center xl:text-[150px] leading-none 2xl:text-[180px] w-[full] uppercase font-bold'>token</p>
                        <p className='text-[14px] xl:text-lg text-center lg2:text-left 2xl:text-2xl break-words font-semibold uppercase w-[330px] px-4 sm:w-[400px] lg2:w-[626px]'>BENEFIT FROM THE EXPANSION OF OUR  LUXURY MARKETPLACE AND DATING NETWORK<span className='font-sans'>!</span></p>

                        <p className='text-xs sm:text-lg font-light px-4 text-center w-[330px] lg2:text-left break-words sm:w-[400px] lg2:w-[626px]'>Conquer the world with us and benefit from the profits<span className='font-sans'>!</span></p>

                        <div className='flex justify-center flex-col sm:flex-row lg2:justify-start items-center lg2:text-left w-full gap-7 mt-[32px]'>
                            <div
                                className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black'>
                                <p className='text-base font-normal antialiased'>White Paper</p>
                            </div>
                            <div className='flex gap-3 '>
                                {socialIcons.map((item, index) => (
                                    <button key={index} className="cursor-pointer inset-0 rounded-[100px] w-12 h-12 top-10 flex justify-center items-center"
                                        style={{
                                            backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                                        }}>
                                        <SocialIcons mode={item} size={1} />

                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* div 2 */}
                <div className='flex basis-[35%] shrink-[.5]  flex-col items-start '>
                    <div
                        style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                        className='flex border-2 border-white rounded-3xl items-center flex-col gap-3'>
                        <p className='pt-6 font-light antialiased'>
                            <span className='font-semibold text-sm md:text-base 2xl:text-lg'>Ethereum </span>
                            <span className='text-[#775cf4] text-xs md:text-[13px] 2xl:text-sm'>Click here </span>
                            to switch network
                        </p>
                        <div className='flex px-6 pb-16 pt-2 items-center flex-col gap-3'>
                            <p className='text-sm md:text-base 2xl:text-lg font-normal text-center'>BUY IN BEFORE PRICE INCREASES<span className='font-sans'>!</span> <br />Stage 2</p>
                            <div className='flex w-[280px] sm:w-full justify-center items-center '>
                                {/* <progress className='h-10 w-full bg-slate-300 rounded-3xl  overflow-hidden ' id="reviews" value="5" max="5" />
                                <p className='absolute text-black text-sm font-semibold w-full text-center'>UNTIL NEXT PRICE <span className='font-sans'>$</span>0.07</p> */}
                                <div className='bg-[#141414] w-full h-10 flex justify-start items-center rounded-3xl '>
                                    <div className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] w-[85%] h-10 flex justify-center items-center rounded-3xl '>
                                        <p className='text-black text-sm font-semibold w-[full] text-center'>UNTIL NEXT PRICE <span className='font-sans'>$</span>0.07</p>
                                    </div>
                                </div>
                            </div>
                            <div className='opacity-60'>
                                <p className='text-xs font-normal'>931 123 VLT <span className='font-sans'>/</span> 1 000 000 VLT</p>
                                <p className='text-xs font-normal'>CEX LISTING PRICE: <span className='font-sans'>$</span>0.16</p>
                                <p className='text-xs font-normal'>Any unsold tokens will be burnt</p>
                            </div>
                            <div className='bg-[#fff]/[0.07] plain_input w-[280px] sm:w-full py-2 md:py-3 rounded-[30px]'>
                                {/* <input className=' bg-transparent px-4 text-white   ' placeholder='' /> */}
                                <p className='text-[20px] md:text-[30px] text-center font-semibold text-white'>1 VLT <span className='font-sans'>= $</span>0.06</p>
                            </div>
                            <div className='flex justify-between flex-1  w-[280px] sm:w-full gap-3'>
                                <div className='flex gap-3 items-center justify-center bg-[#fff]/[0.07] plain_input w-full py-2 md:py-3 rounded-[30px]'>
                                    <ETHIcon size={2} />
                                    <p className='text-sm font-normal antialiased'>ETH</p>
                                </div>
                                <div className=' flex gap-3 items-center justify-center bg-[#fff]/[0.07] plain_input w-full py-2 md:py-3 rounded-[30px]'>
                                    <USDTIcon size={2} />
                                    <p className='text-sm font-normal antialiased'>USDT</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center flex-1  w-[280px] sm:w-full gap-3'>
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
                            <div className='mt-4 flex justify-between items-center flex-1  w-[280px] md:w-full gap-2 sm:gap-3'>
                                <button
                                    style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                    className='cursor-pointer py-3  flex items-center justify-center px-1 md:px-4   w-[133px] sm:w-full rounded-[30px]'>
                                    <p className='text-sm 2xl:text-base text-center font-normal antialiased '>Connect wallet</p>
                                </button>
                                <button className='cursor-pointer py-3 bg-gradient-to-t from-[#775CF4] to-[#C85EF7] flex items-center justify-center px-1  md:px-4 bg-[#fff]/[0.07]  w-[133px] sm:w-full  rounded-[30px]'>
                                    <p className=' text-sm 2xl:text-base text-center font-normal antialiased w-full'>Buy Crypto</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { HeroSection }