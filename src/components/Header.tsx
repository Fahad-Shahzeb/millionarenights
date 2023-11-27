import React from 'react'
import { ThemeGradient } from './ThemeGradient'
import { AppLogo_PNG, ShadyDotsIcon } from '../assets'

const Header = () => {

    const navBarHeadings = ['Home', 'About', 'How to Buy', 'Tokenomics', 'Roadmap']

    return (
        <div className='relative'>
            <div className='hidden 600:flex flex-1 py-5 px-10  justify-between items-center'>
                <div className='flex items-center'>
                    <img src={AppLogo_PNG} className='w-14 h-w-14' />
                    <div >
                        <ul className=' flex  flex-row gap-8 ml-20'>
                            {navBarHeadings.map((item, index) => (
                                <li key={index} className=' flex flex-row border-[2px] border-[#B8A8D8] px-5 py-1 rounded-full items-center gap-1 text-white'>
                                    <p className='text-lg font-light '>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className=' flex  flex-row gap-8'>
                        <li className=' flex flex-row border-[2px] border-[#B8A8D8]  px-5 py-1 rounded-full items-center gap-1 text-white'>
                            <p className='text-lg font-light '>{'Contact'}</p>
                        </li>
                    </ul>
                    <ShadyDotsIcon />
                </div>
            </div>

        </div>
    )
}

export { Header }