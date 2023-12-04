import React from 'react'
import { Gradient_1, Gradient_2, Gradient_3, Gradient_4, Gradient_5 } from '../assets'


const ThemeGradient = () => {
    return (
        <div>
            <div className='hidden md:block'>
                {/* Right Side  */}
                <div className={`absolute  left-0  z-[-1]`}>
                    <img alt='' src={Gradient_1} className={`w-[90%]`} />
                </div>
                <div className={`absolute -top-[5rem] -right-[155rem]  z-[-1]`}>
                    <img alt='' src={Gradient_2} className={``} />
                </div>
                <div className={`absolute top-[220rem] -right-[170rem]  z-[-1]`}>
                    <img alt='' src={Gradient_3} className={``} />
                </div>
                <div className={`absolute top-[485rem] -right-[70rem]  z-[-1]`}>
                    <img alt='' src={Gradient_4} className={``} />
                </div>
                {/* Left Side */}
                <div className={`absolute top-[160rem] -left-[110rem]  z-[-1]`}>
                    <img alt='' src={Gradient_5} className={`w-[90%]`} />
                </div>
                <div className={`absolute top-[360rem] -left-[60rem]  z-[-1]`}>
                    <img alt='' src={Gradient_5} className={`w-[70%]`} />
                </div>
            </div>
            <div className='block md:hidden'>
                {/* Right Side  */}
                <div className={`absolute  -right-96 top-0 z-[-1]`}>
                    <img alt='' src={Gradient_1} className={`w-[120%]`} />
                </div>
                <div className={`absolute top-[130rem] -left-[30rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%]`} />
                </div>
                <div className={`absolute top-[280rem] -left-[35rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[300rem] -left-[35rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[410rem] -right-[30rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[490rem] -left-[35rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[550rem] -left-[35rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[570rem] -left-[35rem]  z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[740rem] -left-[35rem]    z-[-1] `}>
                    <img alt='' src={Gradient_5} className={`w-[100%] `} />
                </div>
            </div>
        </div>
    )
}

export { ThemeGradient }