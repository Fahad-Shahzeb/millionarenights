import React from "react";
import { Ellipse30, Logo, Ellipse28, Globe_PNG, ShadyDotsIcon2 } from "../assets/pngs";
import { CircularAnimation } from "./CircularAnimation";
// import { millionairenight2nd } from "../assets/pngs";
const EllipseSection = () => {

    return (
        <div className="h-[650px] sm:h-[950px] md:h-[1400px] lg:h-[1000px] flex xl:items-center  flex-row xl:flex-column ">
            <div className=" absolute">
                <div className="max-w-[80%]">
                    <img alt='' src={Ellipse30} />
                </div>

                <div>
                    <div className="w-[45%] absolute  right-[35%] top-[20%] flex justify-center items-center">
                        <div className="w-[20%] absolute">
                            <img alt='' className="" src={Logo} />
                        </div>
                        <div className="">
                            <img alt='' className="" src={Ellipse28} />
                        </div>
                    </div>
                    <div className="absolute top-0 right-[10%] max-w-[40%]">
                        <img alt='' className="w-full" src={Globe_PNG} />
                    </div>

                    <div className="w-[3%]  absolute top-[1.5%] left-[40%]">
                        <img alt='' src={Ellipse28} />
                    </div>
                    <div className="w-[10%]  absolute bottom-[25%] right-[20%]">
                        <img alt='' src={Ellipse28} />
                    </div>
                    <div className="w-[5%] absolute bottom-[-1.5%] right-[60%]">
                        <img alt='' src={Ellipse28} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row container mx-auto px-5">
                <div className="flex-1" />
                <div className="hidden xl:block">
                    <p className="text-white">
                        <img alt='' src={ShadyDotsIcon2} />
                    </p>
                </div>
                <div className="flex-1 mt-[40%] xl:mt-0">
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center item-center">
                            <div className="mb-4 leading-10 text-white text-[24px] md:text-[42px] max-w-[500px] text-center uppercase font-light">
                                <h1>
                                    Discover the <br />
                                    <span className="font-bold">Millionaire  <span className='texttualgradient'>Nights</span></span>
                                    <br />
                                    Token!
                                </h1>
                            </div>
                            <div className="mb-4 text-white max-w-[500px]">
                                <p className="text-center text-[#989898] text-[14px] md:text-[16px] font-light">
                                    MillionaireNights is using the power of blockchain technology
                                    to offer a unique opportunity to get involved in a dynamic and
                                    growing industry. Enjoy a combination of dating, luxury
                                    marketplace, special party series, and take a profit from
                                    them.
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="cursor-pointer bg-gradient-to-t from-[#CDB8FB] to-[#FFF] px-5 rounded-3xl py-2 text-black ">
                                    <p className="text-lg text-center font-semibold">Buy $MillionAire</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { EllipseSection };