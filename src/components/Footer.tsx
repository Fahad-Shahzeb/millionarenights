import React from 'react'
import { Gradient_5 } from '../assets'

const Footer = () => {
    return (
        <div className='relative ' >
            <div className=' py-8'>
                <p className='text-white text-center text-sm font-light'>Millionairenights <span className='font-serif'>-</span> All rights reserved!</p>
            </div>
            <div className={`absolute -bottom-[40rem] -left-[70rem] z-[-1] `}>
                <img src={Gradient_5} className={`w-[70%]`} alt='' />
            </div>
        </div>
    )
}

export { Footer }