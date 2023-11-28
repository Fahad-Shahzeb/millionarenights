import React from 'react'
import { AffliateProgramEllipsePNG } from '../assets'



const AffliateProgramSection = () => {

    const AdvantageBubble = (): JSX.Element => {
        return (<div className='flex gap-10'>
            <div className=" inset-0 rounded-full w-[311px] h-[311px]  flex justify-center items-center"
                style={{
                    backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                    mixBlendMode: 'screen',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                }}>
                <p className='text-center font-semibold w-[60%] text-2xl antialiased leading-7'>Get a 20<span className='font-sans'>%</span> bonus and an additional 10<span className='font-sans'>%</span> ongoing passive income after every referred investor<span className='font-sans'>!</span> </p>
            </div>
        </div>
        )
    }

    return (
        <div className='my-16'>
            <div className='text-white mb-[-8px] flex justify-start items-center'>
                <div className='relative '>
                    <img src={AffliateProgramEllipsePNG} className='w-[100%] h-auto' />
                    <div className='absolute top-[30%] left-[30%] '>
                        <AdvantageBubble />
                    </div>
                </div>
                <div className='w-full max-w-[40%]'>
                    <div className='flex flex-col items-end '>
                        <p className='font-bold text-7xl text-right uppercase'>Millionaire
                            <span className='texttualgradient'>Nights</span> <br />
                            <span className='font-normal uppercase'> affiliate <br />
                                program</span>
                        </p>
                        <p className='text-2xl font-light leading-7 text-right w-[80%]'>Share your personalised link with your friends, family and network to be rewarded.</p>
                        <div>
                            <div className='mt-4 flex justify-between items-center flex-1  w-full gap-3'>
                                <div className='text-center'>
                                    <button className='bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black w-[180px]'>
                                        Buy <span className='font-sans'>$</span>MillionAire
                                    </button>
                                </div>
                                <div
                                    style={{ border: '1.5px solid var(--GRAD_01, #775CF4)' }}
                                    className=' py-3  flex items-center px-4  plain_input w-full rounded-[30px]'>
                                    <p className=' text-base justify-center font-normal antialiased'>Read more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white w-[70%] m-auto'>
                <hr className="line above bg-[#373639]" />
            </div>
        </div>
    )
}

export { AffliateProgramSection }