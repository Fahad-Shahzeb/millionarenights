import React from "react";
import { AppLogo_PNG, BurgerMenu, ShadyDotsIcon } from "../assets";

const Header = ({ navBarHeadings, setshowMenu, scrollToSection }: any) => {
    return (
        <div className='absolute top-0 left-0 w-full z-50'>
            <div className='flex flex-1 py-5 px-10 justify-between items-center'>
                <img
                    src={AppLogo_PNG}
                    className='w-14 h-w-14'
                    alt=''
                />
                <div className='hidden lg2:flex justify-between w-full gap-[20px] transition-all'>
                    <div className='flex flex-row gap-[20px] ml-20'>
                        {navBarHeadings.map((item: any, index: number) => (
                            <button
                                onClick={() => scrollToSection(index)}
                                key={index}
                                className='cursor-pointer border-[2px] border-[#B8A8D8] px-5 py-1 rounded-full text-white text-[16px] font-light h-full text-center w-[143px]'>
                                {item}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => scrollToSection(5)} className='cursor-pointer hidden lg:block border-[2px] border-[#B8A8D8] px-5 py-1 rounded-full text-white text-[16px] font-light h-full text-center w-[143px] z-50'>
                        {"Contact"}
                    </button>
                </div>
                <button
                    onClick={() => setshowMenu()}
                    className='flex lg2:hidden border-none'>
                    <img src={BurgerMenu} alt='' />
                </button>
            </div>
            <div className='hidden lg2:block'>
                <ShadyDotsIcon />
            </div>
        </div>
    );
};

export { Header };