import React from "react";
import {
  Gradient_1,
  Gradient_2,
  Gradient_2_1,
  Gradient_2__1,
  Gradient_3,
  Gradient_3_1,
  Gradient_4,
  Gradient_4_1,
  Gradient_5,
  Mobile_Gradient_1,
  Mobile_Gradient_2,
  Mobile_Gradient_3,
  Mobile_Gradient_4,
  Mobile_Gradient_5,
  Mobile_Gradient_6,
} from "../assets";

const ThemeGradient = () => {
  return (
    <div>
      {/* DESKTOP GRADIENTS */}
      <div className='hidden md:block'>
        {/* Right Side  */}
        <div className={`absolute -left-20 -top-32 z-[-1]`}>
          <img
            alt=''
            src={Gradient_1}
            className={`w-[90%]`}
          />
        </div>
        <div className={`absolute top-[56rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_2_1}
            className={`w-[90%]`}
          />
        </div>
        <div className={`absolute top-96 -right-[165rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_2__1}
            className={`hidden sm:block`}
          />
        </div>
        <div className={`absolute top-[250rem] -right-[170rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_3}
            className={``}
          />
        </div>
        <div className={`absolute top-[490rem] -right-[105rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_4_1}
            className={``}
          />
        </div>
        {/* Left Side */}
        <div className={`absolute top-[170rem] -left-[70rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_3_1}
            className={`w-[90%]`}
          />
        </div>
        <div className={`absolute top-[380rem] -left-[65rem] z-[-1]`}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[70%]`}
          />
        </div>
      </div>
      {/* MOBILE GRADIENTS */}
      <div className='block sm:hidden'>
        {/* Right Side  */}
        <div className={`absolute sm:-right-96 sm:top-0 z-[-1]`}>
          <img
            alt=''
            src={Mobile_Gradient_1}
            className={`w-[100%] xs1:w-[200%] xs1:h-[680px] imgGrads block sm:hidden`}
          />
        </div>
        <div className={`absolute top-[107rem] z-[-1] `}>
          <img
            alt=''
            src={Mobile_Gradient_2}
            className={`w-[100%] xs1:w-[200%] imgGrads`}
          />
        </div>
        <div className={`absolute top-[122rem] -left-[15rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%]`}
          />
        </div>
        <div className={`absolute top-[125rem] -left-[25rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%]`}
          />
        </div>
        <div className={`absolute top-[145rem] -left-[20rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%]`}
          />
        </div>
        <div className={`absolute top-[155rem] -left-[35rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%]`}
          />
        </div>
        <div className={`absolute top-[265rem] -left-[35rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%] `}
          />
        </div>
        <div className={`absolute top-[285rem] -left-[35rem]  z-[-1] `}>
          <img
            alt=''
            src={Gradient_5}
            className={`w-[100%] `}
          />
        </div>
        <div className={`absolute top-[352rem]  z-[-1] `}>
          <img
            alt=''
            className={`w-[100%] xs1:w-[200%] imgGrads`}
            src={Mobile_Gradient_3}
          />
        </div>
        <div className={`absolute top-[420rem] z-[-1] `}>
          <img
            alt=''
            src={Mobile_Gradient_4}
            className={`w-[100%] `}
          />
        </div>
        <div className={`absolute top-[518rem] xs1:top-[480rem]  z-[-1] `}>
          <img
            alt=''
            src={Mobile_Gradient_5}
            className={`w-[100%] xs1:w-[200%] imgGrads`}
          />
        </div>
        <div className={`absolute top-[630rem] z-[-1] `}>
          <img
            alt=''
            src={Mobile_Gradient_6}
            className={`w-[100%] `}
          />
        </div>
      </div>
    </div>
  );
};

export { ThemeGradient };
