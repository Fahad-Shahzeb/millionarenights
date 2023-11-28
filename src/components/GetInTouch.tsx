import React from 'react';
import { DotsShades } from '../assets/svgs/DotsShades';

function GetInTouch() {
  return (
    <div className=' my-36 mx-5 relative flex items-center justify-center'>
      <div className='absolute -mt-6  top-0  bg-[#5318D1] w-full max-w-[300px] sm:max-w-3400px] md:max-w-[570px] h-full md:h-[20px] rounded-t-[30px] z-[-10]' />
      <div className='absolute -bottom-[10px]  bg-[#5318D1] w-full  max-w-[300px] sm:max-w-[400px] md:max-w-[570px] h-full md:h-[20px] rounded-b-[30px] z-[-10]' />
      <div className='px-[10px] py-[30px] sm:p-[30px] lg:px-[50px] lg:py-[100px] bg-[#0F0F0F] w-full grid grid-cols-1 lg:grid-cols-2 rounded-[50px] lg:max-w-[1100px] xl:max-w-[1200px] 2xl:max-w-[1440px]'>
        <div className='w-full lg:w-[60%] flex  flex-col'>
          <p className='texttualgradient leading-[40px] sm:leading-[80px] xl:leading-[70px]  text-[40px] text-center lg:text-[50px] xl:text-[60px]'>
            GET IN <br className='sm:hidden' /> TOUCH <span className='font-sans'>!</span>
          </p>
          <p className=' font-[300] text-white text-[20px] w-[70%] self-center mb-3 text-center'>
            If you<span className='font-sans'>'</span>re stuck or have a
            question, feel free to contact us using one of the contact details
            below.
          </p>
          <div className='hidden lg:flex gap-10 mt-5 w-[400px]'>
            <DotsShades />
            <DotsShades />
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center mb-4 w-[100%]'>
            <div className='hidden sm:block w-[200px] '>
              <p className='text-lg text-white mr-5 font-normal text-right uppercase'>NAME:</p>
            </div>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[30px]'>
              <input
                className=' bg-transparent placeholder-[#fff] sm:placeholder-[#202020] w-full px-4 text-white   '
                placeholder='NAME'
              />
            </div>
          </div>
          <div className='flex items-center mb-4'>
            <div className='hidden sm:block w-[200px]'>
              <p className='text-lg text-white mr-5 font-normal text-right uppercase'>Email:</p>
            </div>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[30px]'>
              <input
                className=' bg-transparent placeholder-[#fff] sm:placeholder-[#202020] w-full px-4 text-white   '
                placeholder='EMAIL'
              />
            </div>
          </div>
          <div className='flex items-center mb-4'>
            <div className='hidden sm:block w-[200px]'>
              <p className='text-lg text-white mr-5 font-normal text-right uppercase'>Message:</p>
            </div>
            <div className='bg-[#202020] plain_input w-full py-4 rounded-[30px]'>
              <textarea
                rows={10}
                className='resize-none w-full py-2 placeholder-[#fff] sm:placeholder-[#202020] bg-transparent px-4 text-white  placeholder-shown:visible '
                placeholder='MESSAGE'
              />
            </div>
          </div>
          <div className='flex justify-center md:justify-start sm:ml-[150px]'>
            <button className='bg-gradient-to-t  from-[#5318D1] to-[#C85EF7] px-5 rounded-3xl py-[14px] text-white '>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GetInTouch };
