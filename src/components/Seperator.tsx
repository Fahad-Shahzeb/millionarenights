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
                    <div className="hidden sm:block">
                        <img
                            src={HeartCoin_PNG}
                            className='hidden sm:block absolute -top-24 left-[15%] w-[183px] h-[194px]'
                            alt=''
                        />
                        <hr className='line above bg-[#373639]' />
                    </div>
                    <div className="flex relative mt-10 sm:hidden ">
                        <hr className='line above bg-[#373639]' />
                        <div
                            className='absolute z-50 bg-black inset-0 rounded-[100px] sm:w-20 sm:h-20 w-14 h-14 -top-7 left-[43%] sm:left-[45%] flex justify-center items-center'
                            style={{
                                backgroundImage:
                                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)",
                            }}>
                            <p className='font-semibold sm:text-sm xs:text-[9px] text-[#5318D1] text-center'>
                                Coming Soon
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {version === "withRightImage" && (
                <div className=' text-white '>
                    <div className='relative flex justify-center items-center'>
                        <img
                            src={LogoCoin_PNG}
                            className=' 
                        absolute overflow-hidden 
                        max-sm:-left-5 
                        
                        sm:-right-20  xl:-right-28  2xl:-right-40


                        w-[90px] h-[90px]   
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