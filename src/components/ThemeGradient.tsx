import React from 'react'
import { Gradient_1, Gradient_2, Gradient_3, Gradient_4, Gradient_5 } from '../assets'


const ThemeGradient = () => {
    return (
        <div>
            <div className='hidden md:block'>
                {/* Right Side  */}
                <div className={`absolute  left-0  z-[-1]`}>
                    <img src={Gradient_1} className={`w-[90%]`} />
                </div>
                <div className={`absolute -top-[20rem] -right-[155rem]  z-[-1]`}>
                    <img src={Gradient_2} className={``} />
                </div>
                <div className={`absolute top-[190rem] -right-[160rem]  z-[-1]`}>
                    <img src={Gradient_3} className={``} />
                </div>
                <div className={`absolute top-[440rem] -right-[70rem]  z-[-1]`}>
                    <img src={Gradient_4} className={``} />
                </div>
                {/* Left Side */}
                <div className={`absolute top-[150rem] -left-[100rem]  z-[-1]`}>
                    <img src={Gradient_5} className={`w-[90%]`} />
                </div>
                <div className={`absolute top-[330rem] -left-[60rem]  z-[-1]`}>
                    <img src={Gradient_5} className={`w-[70%]`} />
                </div>
            </div>
            <div className='block md:hidden'>
                {/* Right Side  */}
                <div className={`absolute  -right-96 top-0 z-[-1]`}>
                    <img src={Gradient_1} className={`w-[120%]`} />
                </div>
                <div className={`absolute top-[130rem] -left-[30rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%]`} />
                </div>
                <div className={`absolute top-[280rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[300rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[410rem] -right-[30rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[490rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[550rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[570rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
                <div className={`absolute top-[720rem] -left-[35rem]  z-[-1] `}>
                    <img src={Gradient_5} className={`w-[100%] `} />
                </div>
            </div>
        </div>
    )
}

export { ThemeGradient }