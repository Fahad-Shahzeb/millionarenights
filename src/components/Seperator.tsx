import React from "react";
import { HeartCoin_PNG, LogoCoin_PNG } from "../assets";

type version = "basic" | "withLeftImage" | "withRightImage" | "partial";
const Seperator = ({ version = "basic" }: { version?: version }) => {
    return (
        <div className='my-2'>
            {version === "basic" && (
                <div className='text-white'>
                    <hr className='line above bg-[#373639]' />
                </div>
            )}
            {version === "partial" && (
                <div className='text-white w-[70%] m-auto'>
                    <hr className='line above bg-[#373639]' />
                </div>
            )}
            {version === "withLeftImage" && (
                <div className='relative text-white'>
                    <img
                        src={HeartCoin_PNG}
                        className='hidden sm:block absolute -top-24 left-[15%] w-[183px] h-[194px]'
                        alt=''
                    />
                    <hr className='line above bg-[#373639]' />
                </div>
            )}
            {version === "withRightImage" && (
                <div className=' text-white '>
                    <div className='relative flex justify-center items-center'>
                        <img
                            src={LogoCoin_PNG}
                            className=' 
                        absolute overflow-hidden 
                        max-sm:left-5 right-0
                        sm:-right-20  xl:-right-28  2xl:-right-40
                        w-[100px] h-[100px]   
                        sm:w-[200px] sm:h-[200px]                         
                        lg:w-[200px] lg:h-[200px] 
                        xl:w-[280px] xl:h-[280px] 
                        2xl:w-[350px] 2xl:h-[350px]
                        '
                            alt=''
                        />
                        <hr className='line above bg-[#373639]' />
                    </div>
                </div>
            )}
        </div>
    );
};

export { Seperator };