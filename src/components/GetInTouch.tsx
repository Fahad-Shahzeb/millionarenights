import React from 'react';
import { DotsShades } from '../assets/svgs/DotsShades';

function GetInTouch() {
  return (
    <div className='mt-10 my-12 relative flex items-center justify-center'>
      <div className='absolute -mt-6  top-0  bg-[#5318D1] w-full  max-w-[570px] h-full md:h-[20px] rounded-t-[30px] z-[-10]' />
      <div className='absolute -bottom-[10px]  bg-[#5318D1] w-full  max-w-[570px] h-full md:h-[20px] rounded-b-[30px] z-[-10]' />
      <div className='p-[55px] lg:p-[110px] bg-[#0F0F0F] w-full grid grid-cols-1 lg:grid-cols-2 rounded-[50px]  2xl:max-w-[1440px]'>
        <div className='w-full lg:w-[60%] flex  flex-col'>
          <p className='texttualgradient leading-[80px] text-[20px] lg:text-[50px] xl:text-[72px]'>
            GET IN TOUCH <span className='font-sans'>!</span>
          </p>
          <p className='text-[24px] font-[300] text-white'>
            If you<span className='font-sans'>'</span>re stuck or have a
            question, feel free to contact us using one of the contact details
            below.
          </p>
          <div className='hidden lg:flex gap-10 mt-5 w-[400px]'>
            <DotsShades />
            <DotsShades />
          </div>
        </div>
        <div className='flex items-center justify-center flex-col gap-4'>
          <div className='flex flex-col w-full lg:flex-row text-white text-right items-start lg:text-center lg:items-center gap-4 lg:gap-6'>
            <p>NAME:</p>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[30px]'>
              <input
                className=' bg-transparent w-full px-4 text-white   '
                placeholder=''
              />
            </div>
          </div>
          <div className='flex flex-col w-full lg:flex-row text-white items-start lg:text-center lg:items-center gap-4  lg:gap-6'>
            <p>EMAIL:</p>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[30px]'>
              <input
                className=' bg-transparent px-4 text-white   '
                placeholder=''
              />
            </div>
          </div>
          <div className='flex flex-col lg:items-center w-full lg:flex-row -ml-7 text-white text-center items-start gap-4  lg:gap-6'>
            <p className=''>MESSAGE:</p>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[50px]'>
              <textarea
                rows={10}
                className='resize-none w-full py-2 bg-transparent px-4 text-white   '
                placeholder=''
              />
            </div>
          </div>
          <button className='bg-gradient-to-t  ml-[100px] from-[#5318D1] to-[#C85EF7] px-5 rounded-3xl py-[14px] text-white w-[180px]'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export { GetInTouch };
