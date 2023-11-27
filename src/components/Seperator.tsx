import React from 'react'
import { HeartCoin_PNG, LogoCoin_PNG } from '../assets'

type version = 'basic' | 'withLeftImage' | 'withRightImage' | 'partial'
const Seperator = ({ version = 'basic' }: { version?: version }) => {
    return (
        <div className='my-2'>
            {version === 'basic' &&
                <div className='text-white'>
                    <hr className="line above bg-[#373639]" />
                </div>}
            {version === 'partial' &&
                <div className='text-white w-[70%] m-auto'>
                    <hr className="line above bg-[#373639]" />
                </div>}
            {version === 'withLeftImage' &&
                <div className='relative text-white'>
                    <img src={HeartCoin_PNG} className=' absolute -top-24 left-[15%] w-[183px] h-[194px]' alt="" />
                    <hr className="line above bg-[#373639]" />
                </div>
            }
            {version === 'withRightImage' &&
                <div className='relative text-white '>
                    <div className='relative '>
                        <img src={LogoCoin_PNG} className=' absolute  -top-52 -right-48 w-[400px] h-[400px]' alt="" />
                    </div>
                    <hr className="line above bg-[#373639]" />
                </div>
            }
        </div>
    )
}

export { Seperator }