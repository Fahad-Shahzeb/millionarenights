import React from 'react'
import { IncomePNG, InvestmentPNG, LogoCoin_PNG, TransparencyPNG, ValuePNG } from '../assets'
import { Seperator } from './Seperator';

interface AdvantageBubbleProps {
    icon: string;
    title: string;
    subtitle: string;
}

const AdvantagesSection = () => {

    const AdvantageBubble = ({ icon, title, subtitle }: AdvantageBubbleProps): JSX.Element => {
        return (<div className='flex  gap-10'>
            <div className=" inset-0 rounded-[100px] w-36 h-36 top-10 flex justify-center items-center"
                style={{
                    backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                    mixBlendMode: 'screen',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                }}>
                <img src={icon} alt="" />

            </div>
            <div className='flex justify-center flex-col'>
                <p className='text-[28px] font-normal antialiased uppercase'>{title}</p>
                <p className='text-base font-light text-[#989898]'>{subtitle}</p>
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
        <div className=''>
            <div className='my-16  text-white flex flex-1 gap-24 justify-center '>
                <div className='relative flex text-white bg-[#0F0F0F] w-[628px] justify-center items-center  h-[856px] rounded-[50px]'>
                    <div className='absolute  bg-[#5318D1] w-full -right-5  max-w-[40px]  h-[746px] rounded-[50px] z-[-10]' />
                    <div className='flex flex-col gap-5'>
                        <div className='absolute -left-[10%] rotate-[70deg] blur-[2px]'>
                            <img src={LogoCoin_PNG} className='w-[130px] h-[130px] ' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-10'>
                            <p className='text-[42px] font-normal uppercase antialiased m-0 text-center texttualgradient'>
                                ADVANTAGES
                            </p>
                            <p className='text-[42px] leading-10 font-light uppercase m-0 text-center'>
                                Steady<br />income simply<br />with the<br />
                                <p className='font-bold '>
                                    Millionaire
                                    <span className='texttualgradient'>Nights</span>
                                </p>
                                Token<span className='font-sans'>!</span>
                            </p>
                            <p className='w-[70%] text-2xl font-light  m-0 text-center'>
                                Token holders get their share from the profits of the company.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  justify-between'>
                    {details.map((item, index) => <AdvantageBubble key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
                </div>
            </div>
        </div >
    )
}

export { AdvantagesSection }