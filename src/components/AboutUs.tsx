import React from 'react';

import { RoadMapLeftPNG, RoadMapRightPNG, SocialIcons, User2 } from '../assets';
import { motion } from 'framer-motion';

type mode = 'facebook' | 'instagram' | 'twitter' | 'vimeo';

const AboutUs = () => {
  const socialIcons: mode[] = ['facebook', 'instagram', 'twitter'];

  return (
    <div className='relative px-30'>
      <div className='absolute hidden md:block left-16 top-28  xl:left-20 2xl:left-80  z-40'>
        <img
          src={RoadMapRightPNG}
          className='w-32'
          alt=''
        />
      </div>
      <div className='absolute hidden md:block bottom-1 lg:bottom-32 -right-3 xl:-right-3 2xl:right-32 z-40'>
        <img
          src={RoadMapLeftPNG}
          className='w-60 lg:w-60 xl:w-72 2xl:w-80'
          alt=''
        />
      </div>
      <div className='sm:mt-24 px-3 sm:mb-36 xs:mt-10 xs:mb-14 flex items-center gap-4 mx-auto flex-col'>
        <h1 className='text-white text-[32px] lg:text-[42px]'>ABOUT US</h1>
        <div className=' md:hidden flex flex-row-reverse items-end justify-between'>
          <div className='   ml-10 z-40'>
            <img
              src={RoadMapRightPNG}
              className='w-20'
              alt=''
            />
          </div>
          <div className=' block bottom-1  z-40'>
            <img
              src={RoadMapLeftPNG}
              className='w-44 '
              alt=''
            />
          </div>
        </div>
        <div className='mt-10 relative flex items-center justify-center'>
          <div className='absolute -mt-4  top-0  bg-[#5318D1] w-full max-w-[274px] sm:max-w-[570px] h-full md:h-[25px] rounded-t-[30px] z-[-10]' />
          <div className='absolute -mb-1 -bottom-[10px]  bg-[#5318D1] w-full max-w-[274px] sm:max-w-[570px] h-full md:h-[25px] rounded-b-[30px] z-[-10]' />
          <div className='px-[20px] py-10 md:py-[80px] sm:px-[30px] md:px-[50px] lg:px-[70px] lg:py-[100px]  flex items-center justify-center gap-4 flex-col bg-[#0F0F0F]  text-center  rounded-[50px] max-w-[720px]'>
            <div
              className=' inset-0 w-[180px]  h-[180px] p-5 rounded-full top-10 flex justify-center items-center'
              style={{
                backgroundImage:
                  'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 80.35%, #5318D1 100%)',
              }}
            >
              <img
                src={User2}
                className='object-cover w-full  h-full '
                alt=''
              />
            </div>
            <div className='text-white'>
              <p className='antialiased text-base font-light'>Renato Bandli</p>
              <p className='antialiased text-base font-light'>
                CEO and Date Guru
              </p>
            </div>
            <p className='text-[#989898] tracking-tight w-full antialiased text-base font-light'>
              I've spent my last few years building a global dating network. I
              consider the industry as a real value creator, because people are
              social beings, they will always need love. It may not be well
              known, but it's a fast growing segment, exceeding $6 billion in
              net revenue per year worldwide.
            </p>
            <div className=' mb-8 lg:mb-0 flex gap-2 lg:gap-3  justify-center items-center '>
              {socialIcons.map((item, index) => (
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  key={index}
                  className=' gradient-hover-effect cursor-pointer inset-0 rounded-[100px] p-3 flex justify-center items-center w-[44px] h-[44px]'
                  style={{
                    backgroundImage:
                      'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                  }}
                >
                  <SocialIcons
                    mode={item}
                    size={1.3}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
