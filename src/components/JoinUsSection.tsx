import CountUp from 'react-countup';

import { HorizontalLinesPNG, LogoCoin_PNG } from '../assets';

const JoinUsSection = ({ isInViewport1 }: { isInViewport1: boolean }) => {
  return (
    <section
      id='contai'
      className='mt-10 overflow-x-hidden'
    >
      <div className='text-white '>
        <p className='text-center text-[24px] md:text-[42px] lg:text-[72px] text-white font-normal uppercase'>
          Join Us Now!
        </p>
        <div className='mt-4 flex flex-col items-center justify-center gap-1 lg:gap-5'>
          <img
            src={HorizontalLinesPNG}
            className='mt-[1px] mx-auto w-[40%] '
            alt=''
          />
          <div className='flex items-center justify-center flex-col gap-1 lg:flex-row lg:gap-5'>
            <p
              className='text-sm overflow-wrap px-3 md:text-xl lg:text-2xl font-normal text-center'
              style={{ overflowWrap: 'anywhere' }}
            >
              The future starts today. Dont miss out.
            </p>
          </div>
          <img
            src={HorizontalLinesPNG}
            className='w-[40%] '
            alt=''
          />
        </div>
      </div>

      {/* Sections */}
      <div className='grid grid-cols-1 md:grid-cols-4 text-center px-16 sm:px-60  xl:px-60 my-16'>
        <div className='flex items-center flex-col py-6'>
          <p className='texttualgradient font-semibold text-[42px] md:text-3xl lg:text-4xl 2xl:text-6xl '>
            ${isInViewport1 && <CountUp end={6} />}B
          </p>
          <p className='text-white font-light text-lg lg:text-xl xl:text-2xl'>
            Online dating market
          </p>
        </div>
        <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
          <p className='texttualgradient font-semibold text-[42px] md:text-3xl lg:text-4xl 2xl:text-6xl '>
            {isInViewport1 && <CountUp end={430} />}M +
          </p>
          <p className='text-white font-light text-lg lg:text-xl xl:text-2xl'>
            dating users in the world
          </p>
        </div>
        <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
          <p className='texttualgradient font-semibold text-[42px] md:text-3xl lg:text-4xl 2xl:text-6xl '>
            {isInViewport1 && <CountUp end={50} />}%
          </p>
          <p className='text-white font-light text-lg lg:text-xl xl:text-2xl'>
            Growth by 2025
          </p>
        </div>
        <div className='flex items-center px-1 flex-col py-6 border-t-[1px] md:border-l-[1px] md:border-t-0 border-neutral-500 '>
          <p className='texttualgradient font-semibold text-[42px] md:text-3xl lg:text-4xl 2xl:text-6xl '>
            ${isInViewport1 && <CountUp end={23} />}B
          </p>
          <p className='text-white font-light text-lg lg:text-xl xl:text-2xl'>
            NFT Market
          </p>
        </div>
      </div>

      {/* Coin Images */}
      <div className='flex h-32 my-10 justify-center gap-20 sm:gap-24'>
        <img
          src={LogoCoin_PNG}
          className='w-[110px] h-[110px] '
          alt=''
        />
        <img
          src={LogoCoin_PNG}
          className='w-[70px] h-[70px] transform rotate-[105deg] self-start'
          style={{ filter: 'blur(1px)' }}
          alt=''
        />
        <img
          src={LogoCoin_PNG}
          className='w-[70px] h-[70px] transform -rotate-[75deg] self-end'
          alt=''
        />
        <img
          src={LogoCoin_PNG}
          className='hidden sm:block w-[50px] h-[50px]'
          style={{ filter: ' blur(1px)' }}
          alt=''
        />
      </div>
    </section>
  );
};

export { JoinUsSection };
