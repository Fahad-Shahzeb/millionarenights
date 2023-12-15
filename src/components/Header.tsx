import React from 'react';

import { AppLogo_PNG, BurgerMenu, ShadyDotsIcon } from '../assets';

const Header = ({ navBarHeadings, setshowMenu, scrollToSection }: any) => {
  return (
    <div className='absolute top-0 left-0 w-full z-50'>
      <div className='flex flex-1 py-5 pr-10 pl-8 lg:pl-24  justify-between items-center'>
        <img
          src={AppLogo_PNG}
          className='w-10 h-9  md:w-[53px] md:h-[45px] mr-12'
          style={{ objectFit: 'contain' }}
          alt=''
        />
        <div className='hidden lg2:flex justify-between w-full transition-all'>
          <div className='flex flex-row gap-[20px] ml-24'>
            {navBarHeadings.map((item: any, index: number) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className='gradient-hover-effect cursor-pointer border-[2px] border-[#B8A8D8] px-5 py-1 rounded-full text-white text-[16px] font-extralight text-center  h-[45px] flex justify-center items-center leading-normal'
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection(5)}
            className='gradient-hover-effect cursor-pointer hidden lg:flex border-[2px] border-[#B8A8D8] font-extralight px-5 py-1 rounded-full text-white text-[16px]  text-center w-[143px] z-50 h-[45px] justify-center items-center leading-normal'
          >
            {'Contact'}
          </button>
        </div>

        <button
          onClick={() => setshowMenu()}
          className=' flex lg2:hidden border-none'
        >
          <img
            src={BurgerMenu}
            alt=''
          />
        </button>
      </div>
      <div className='hidden lg2:block'>
        <ShadyDotsIcon />
      </div>
    </div>
  );
};

export { Header };
