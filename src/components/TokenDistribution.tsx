import React from 'react'
import { AppLogo_PNG, FlowChartPNG, HorizontalLinesPNG } from '../assets'

interface TokenDistributionProps {
    icon: string;
    title: string;
    subtitle: string;
}
const TokenDistribution = () => {

    const SingleCard = ({ icon, title, subtitle }: TokenDistributionProps): JSX.Element => {
        return (
            <div className='relative  flex flex-col text-white bg-[#0F0F0F] w-[320px] justify-center items-center   h-[320px] rounded-[50px] gap-8'>
                <div className='absolute  bg-[#C85EF7] w-full  max-w-[200px]  h-[40px] -top-3 rounded-[50px] z-[-10]' />
                <div className=" inset-0 rounded-[100px] p-6 w-24 h-24 top-10 flex justify-center items-center"
                    style={{
                        backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
                        mixBlendMode: 'screen',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                    }}>
                    <img src={icon} className='w-[100%] h-[100%]' alt="" />
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <p className={`texttualgradient text-[${title.includes('MillionaireNights') ? '28px' : '42px'}] font-semibold antialiased`}>{title}</p>
                    <p className='text-2xl font-light text-[#fff]'>{subtitle}</p>
                </div>
            </div>
        )
    }

    const details = [
        {
            icon: AppLogo_PNG,
            title: 'BEP - 20',
            subtitle: 'BSC token'
        },
        {
            icon: AppLogo_PNG,
            title: '20 MILLION',
            subtitle: 'Total supply'
        },
        {
            icon: AppLogo_PNG,
            title: '1 token = ',
            subtitle: '1 USD'
        },
        {
            icon: AppLogo_PNG,
            title: 'MillionaireNights',
            subtitle: 'Stock token'
        }
    ]


    return (
        <div className='my-16 '>
            <div className='text-white flex flex-col justify-center items-center'>
                <div>
                    <p className='text-center text-[42px] font-normal uppercase'>TOKEN DISTRIBUTION</p>
                    <div className=' flex items-center justify-center gap-5'>
                        <img src={HorizontalLinesPNG} className='mt-[1px]' alt="" />
                        <img src={HorizontalLinesPNG} className='rotate-180' />
                        <p className='absolute text-base flex font-light gap-10'>
                            Contract:
                            <span className='font-semibold'>  0x5e9b7100ef06d4d1f1f187c7c6b169e376044307BEP20  </span>
                            (BSC Smart Chain)
                        </p>
                    </div>
                </div>
                <div className='mt-16 flex gap-8'>
                    {details.map((item, index) => <SingleCard key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
                </div>
            </div>
            <div className='text-white mt-28 mb-16 flex items-center justify-center'>
                <img src={FlowChartPNG} className='
                w-[218px]
                sm:w-[420px]
                md:w-[627px] 
               
                ' alt="" />
            </div>
        </div>
    )
}

export { TokenDistribution }