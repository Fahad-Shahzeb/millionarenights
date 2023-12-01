import React from 'react'
import { IncomePNG, InvestmentPNG, LogoCoin_PNG, TransparencyPNG, ValuePNG } from '../assets'

interface AdvantageBubbleProps {
    icon: string;
    title: string;
    subtitle: string;
}

const AdvantagesSection = () => {

    const AdvantageBubble = ({ icon, title, subtitle }: AdvantageBubbleProps): JSX.Element => {
        return (
            <div className='flex  gap-6 flex-col 2xl:flex-row justify-center items-center'>
                <div className=" inset-0 rounded-full  p-3 w-[150px] h-[150px]   flex justify-center items-center"
                    style={{
                        backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                    }}>
                    <img src={icon} className='w-fit  h-fit' alt="" />
                </div>
                <div className='flex flex-1 justify-center flex-col w-full'>
                    <p className='text-[18px] sm:text-[24px] xl:text-[28px] text-center 2xl:text-left font-normal antialiased uppercase'>{title}</p>
                    <p className='text-[16px] sm:text-[24px] font-light text-center 2xl:text-left text-[#989898]'>{subtitle}</p>
                </div>
            </div>
        )
    }

    const details = [
        {
            icon: TransparencyPNG,
            title: 'Full Transparency',
            subtitle: 'The blockchain technology and our internal advanced policies ensure complete transparency.'
        },
        {
            icon: IncomePNG,
            title: 'Continuous income from your share',
            subtitle: 'From the 6th month of the launch, payments will be made in monthly cycles.'
        },
        {
            icon: ValuePNG,
            title: 'True Value',
            subtitle: 'Our continuously operating dating system and the built-up brand is the value behind the token.'
        },
        {
            icon: InvestmentPNG,
            title: 'Investment Office',
            subtitle: 'You can track your revenue, your share and other important information.'
        }
    ]

    return (
        <div className='mx-auto'>
            <div className='my-16 px-16 text-white flex  gap-4 justify-center flex-col 2xl:flex-row bg-slate-0'>
                <div className='flex flex-1 justify-center items-center'>
                    <div className='relative flex  text-white bg-[#0F0F0F] w-[300px] h-[350px] sm:w-[520px] sm:h-[700px] md:w-[628px] md:h-[856px]  justify-center items-center  rounded-[50px]'>
                        <div className='absolute  bg-[#5318D1] w-full -right-5  max-w-[40px] h-[250px] sm:h-[550px] md:h-[746px] rounded-[50px] z-[-10]' />
                        <div className='flex flex-col gap-5'>
                            <div className='hidden md:block absolute -left-[10%] rotate-[70deg] blur-[2px]'>
                                <img src={LogoCoin_PNG} className='w-[130px] h-[130px] ' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2 sm:gap-10'>
                                <p className='text-[28px] sm:text-[42px]  font-normal uppercase antialiased m-0 text-center texttualgradient'>
                                    ADVANTAGES
                                </p>
                                <p className='text-[22px] sm:text-[42px] leading-7 sm:leading-10 font-light uppercase m-0 text-center'>
                                    Steady<br />income simply<br />with the<br />
                                    <span className='font-bold '>
                                        Millionaire
                                        <span className='texttualgradient'>Nights</span>
                                    </span>
                                    <br />
                                    Token<span className='font-sans'>!</span>
                                </p>
                                <p className='w-[70%] text-base sm:text-2xl font-light  m-0 text-center'>
                                    Token holders get their share from the profits of the company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-col gap-10 self-center justify-between w-[70%] lg:w-full '>
                    {details.map((item, index) => <AdvantageBubble key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
                </div>
            </div>
        </div >
    )
}

export { AdvantagesSection }