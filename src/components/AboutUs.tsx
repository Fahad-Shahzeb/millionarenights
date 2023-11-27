import React from 'react';
import { SocialIcons, User2 } from '../assets';

function AboutUs() {
  return (
    <div className='my-12 flex items-center gap-4 flex-col'>
      <h1 className='text-white text-[32px] lg:text-[42px]'>ABOUT US</h1>
      <div className='mt-10 relative flex items-center justify-center'>
        <div className='absolute -mt-4  top-0  bg-[#5318D1] w-full  max-w-[570px] h-full md:h-[25px] rounded-t-[30px] z-[-10]' />
        <div className='absolute -mb-1 -bottom-[10px]  bg-[#5318D1] w-full  max-w-[570px] h-full md:h-[25px] rounded-b-[30px] z-[-10]' />
        <div className=' lg:p-[110px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] h-[650px] text-center  rounded-[50px] max-w-[720px]'>
          <div className='text-white'>
            <p>Renato Bandli</p>
            <p>CEO and Date Guru</p>
          </div>
          <div className='border_gradient my-2 rounded-full flex items-center justify-center w-[271px] h-[271px]  min-w-[271px] min-h-[271px]'>
            <img src={User2} className='object-cover' />
          </div>
          <p className='text-[#989898] w-full'>
            I've spent my last few years building a global dating network. I
            consider the industry as a real value creator, because people are
            social beings, they will always need love. It may not be well known,
            but it's a fast growing segment, exceeding $6 billion in net revenue
            per year worldwide.
          </p>
          <div className='flex justify-center  gap-4'>
            <div className='p-2 flex items-center justify-center h-[44px] w-[44px] rounded-[100px] border_gradient'>
              <SocialIcons size={1} mode='facebook' />
            </div>
            <div className='p-2 flex items-center justify-center h-[44px] w-[44px] rounded-[100px] border_gradient'>
              <SocialIcons size={1} mode='instagram' />
            </div>
            <div className='p-2 flex items-center justify-center h-[44px] w-[44px] rounded-[100px] border_gradient'>
              <SocialIcons size={1} mode='twitter' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
