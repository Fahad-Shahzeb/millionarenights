import React from 'react'
import { AffliateProgramEllipsePNG, CircleGradient, Globe_PNG } from '../assets'



const AffliateProgramSection = () => {

    const AdvantageBubble = (): JSX.Element => {
        return (<div className='flex gap-10 z-40'>
            <div className=" inset-0 rounded-full w-[200px] h-[200px]   md:w-[230px] md:h-[230px]  lg:w-[260px] lg:h-[260px]  xl:w-[311px] xl:h-[311px] flex justify-center items-center"
                style={{
                    backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                }}>
                <p className='text-center font-semibold w-[60%] text-sm md:text-base lg:text-lg xl:text-xl antialiased leading-5 '>Get a 20<span className='font-sans'>%</span> bonus and an additional 10<span className='font-sans'>%</span> ongoing passive income after every referred investor<span className='font-sans'>!</span> </p>
            </div>
        </div>
        )
    }

    return (
        <div className='my-16'>

            <div className='text-white mb-[-8px] hidden md:flex justify-start items-center mx-auto pr-5'>
                <div className='relative hidden md:block'>
                    <img src={AffliateProgramEllipsePNG} className='hidden md:block w-[60%] md:w-[90%]  lg:w-[80%] xl:w-[80%] 2xl:w-[90%] h-auto' />
                    <div className='absolute top-[20%] md:top-[17%] lg:top-[20%] xl:top-[20%] 2xl:top-[30%] left-[30%] md:left-[17%] lg:left-[20%] xl:left-[20%] 2xl:left-[30%] '>
                        <AdvantageBubble />
                    </div>
                </div>
                <div className='w-full max-w-[40%]'>
                    <div className='flex flex-col items-end '>
                        <p className='font-bold text-2xl  lg:text-4xl xl:text-6xl 2xl:text-7xl text-center md:text-right  uppercase'>Millionaire
                            <span className='texttualgradient'>Nights</span> <br />
                            <span className='font-normal uppercase'> affiliate <br />
                                program</span>
                        </p>
                        <p className='text:xl hidden md:block lg:text-2xl font-light leading-7 text-right w-[80%]'>Share your personalised link with your friends, family and network to be rewarded.</p>
                        <div className='w-full hidden md:block'>
                            <div className='mt-4 flex justify-end items-center flex-1  w-full gap-3'>
                                <div className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 flex justify-center  rounded-3xl py-3 text-black '>
                                    <p className=' text-base justify-center text-center font-normal  antialiased'>Buy  <span className='font-sans'> $</span>MillionAire</p>
                                </div>
                                <div
                                    style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                    className=' py-3 flex items-center justify-center px-4   rounded-[30px]'>
                                    <p className=' text-base text-center font-normal antialiased'>Read more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white  mb-[-8px] flex md:hidden  justify-start items-center mx-auto'>
                <div className='w-full '>
                    <div className='relative overflow-hidden flex flex-col items-center justify-center '>
                        <p className='font-bold text-2xl  text-center   uppercase'>Millionaire
                            <span className='texttualgradient'>Nights</span> <br />
                            <span className='font-normal uppercase'> affiliate <br />
                                program</span>
                        </p>
                        <div className=''>
                            <div className='absolute top-[50%] left-[-20%] overflow-hidden justify-center items-center w-[140%] -z-20'>
                                <img src={CircleGradient} className='w-full' />
                            </div>
                        </div>
                        <div className='my-10'>
                            <AdvantageBubble />
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <p className='text:xl  font-light leading-7 text-center w-[80%]'>Share your personalised link with your friends, family and network to be rewarded.</p>
                            <div className=' w-[80%] flex items-center justify-center'>
                                <div className='mt-4 flex justify-center items-center flex-1  w-full gap-3'>
                                    <div className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 flex justify-center  rounded-3xl py-3 text-black '>
                                        <p className=' text-sm  text-center font-normal  antialiased'>Buy  <span className='font-sans'> $</span>MillionAire</p>
                                    </div>
                                    <div
                                        style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                        className=' py-3 flex items-center justify-center px-4   rounded-[30px]'>
                                        <p className=' text-sm text-center font-normal antialiased'>Read more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-white w-[70%] m-auto hidden md:block'>
                <hr className="line above bg-[#373639]" />
            </div>
        </div>
    )
}

export { AffliateProgramSection }