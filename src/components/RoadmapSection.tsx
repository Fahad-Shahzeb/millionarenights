import React from 'react'
import { BackIcon, FlagIcon, FlagPNG, LeftRightIcon, RoadMapDotsPNG, ShadedFlag } from '../assets'

interface AboutUsProps {
    year?: string
    description?: string
    hr?: boolean
}

const Flag = () => (
    <div className="relative inset-0 rounded-[100px] flex-none h-[50px] w-[50px] 2xl:w-[66px] 2xl:h-[66px] top-10 flex justify-center items-center bg-black"
        style={{
            backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
        }}>
        <img src={FlagPNG} className='w-[40%]' alt="" />
    </div>
)

const Card = ({ hr = true }: any) => (
    <div className='relative mt-8 flex justify-center items-center gap-4'>
        <div className='mt-10 relative flex items-center justify-center'>
            <div className='absolute -mt-2 2xl:-mt-4 top-0  bg-[#5318D1] w-[90%] mx-auto h-full md:h-[25px] rounded-t-[15px] 2xl:rounded-t-[30px] z-[-10]' />
            <div className='absolute -mb-1 -bottom-1 2xl:-bottom-[10px]  bg-[#5318D1] w-[90%] mx-auto h-full md:h-[25px] rounded-b-[15px] 2xl:rounded-b-[30px] z-[-10]' />
            <div className='p-4 2xl:p-[30px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] text-center rounded-[30px] 2xl:rounded-[50px] w-full max-w-[330px]'>
                <p className='text-[#989898] w-full antialiased text-base font-light'>
                    Creation of the Brand Launch of beta version 1
                </p>
            </div>
        </div>
        {hr && (
            <div className='hidden 2xl:block absolute -right-28 mt-10'>
                <img src={RoadMapDotsPNG} className='' alt="" />
            </div>
        )}
    </div>
)



const RoadmapSection = () => {

    const RoadmapBubble = ({ year, description, hr = true }: AboutUsProps): JSX.Element => {
        return (
            <div className='relative w-full flex flex-col gap-2'>
                <div className='relative z-10 w-full flex flex-row items-center justify-between gap-2 2xl:gap-4'>
                    <div className='flex flex-col items-center'>
                        <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>2018</p>
                        <Flag />
                        <Card />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>2019</p>
                        <Flag />
                        <Card />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>2020</p>
                        <Flag />
                        <Card hr={false} />
                    </div>
                </div>
                <hr className='absolute top-[45%] left-[15%] 2xl:left-[10%] h-1 w-[70%] 2xl:w-[80%] mx-auto' />
                {/* <div className='flex flex-row items-center justify-between'>
                    
                    <Card />
                    
                </div> */}
            </div>
        )
        // return (<div className='w-full'>
        //     <div className='w-full flex flex-col items-center justify-center'>
        //         <p className='mb-5 texttualgradient text-6xl font-semibold text-center'>2018</p>
        //         <div className='flex w-full items-center justify-center'>
        //             <div className="relative inset-0 rounded-[100px] flex-none w-[66px] h-[66px] top-10 flex justify-center items-center"
        //                 style={{
        //                     backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
        //                     mixBlendMode: 'screen',
        //                     filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
        //                 }}>
        //                 <img src={FlagPNG} className='w-[40%]' alt="" />
        //             </div>
        //             {hr && <hr className='w-full h-1' />}
        //         </div>
        //     </div>
        //     {/* <div className='mt-8 flex justify-center items-center gap-4'>
        //         <div className='mt-10 relative flex items-center justify-center'>
        //             <div className='absolute -mt-4  top-0  bg-[#5318D1] w-full  max-w-[270px] h-full md:h-[25px] rounded-t-[30px] z-[-10]' />
        //             <div className='absolute -mb-1 -bottom-[10px]  bg-[#5318D1] w-full  max-w-[270px] h-full md:h-[25px] rounded-b-[30px] z-[-10]' />
        //             <div className=' lg:p-[30px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] h-[140px] text-center  rounded-[50px] max-w-[330px]'>
        //                 <p className='text-[#989898] w-full antialiased text-base font-light'>
        //                     Creation of the Brand Launch of beta version 1
        //                 </p>
        //             </div>
        //         </div>
        //         <div className='mt-10'>
        //             <img src={RoadMapDotsPNG} className='' alt="" />
        //         </div>
        //     </div> */}
        // </div>
        // )
    }

    return (
        <div className='w-full mt-20 mb-28'>
            <p className='text-white text-[42px] mb-12 font-normal uppercase text-center'>ROAD MAP</p>
            <div className='w-full text-white flex justify-center items-center'>
                <div className='w-full max-w-[1920px] mx-auto flex items-end gap-32' >
                    <div className='mb-12'><img src={BackIcon} alt="" /></div>
                    <div className='w-full flex items-center justify-between gap-3'>
                        <RoadmapBubble />
                    </div>
                    <div className='rotate-180 mb-12'><img src={BackIcon} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export { RoadmapSection }