import React from "react";
import { BackIcon, FlagPNG, RoadMapDotsPNG } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface AboutUsProps {
    description: string;
    hr?: boolean;
    slideClass?: string;
}

const Flag = () => (
    <div
        className="relative inset-0 rounded-[100px] flex-none h-[80px] w-[80px] md:h-[50px] md:w-[50px] 2xl:w-[66px] 2xl:h-[66px] -top-10 flex justify-center items-center bg-black z-50"
        style={{
            backgroundImage:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)",
            // mixBlendMode: 'screen',
            // filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
        }}
    >
        <img src={FlagPNG} className="w-[40%]" alt="" />
    </div>
);

const Card = ({ description, hr = true, slideClass }: AboutUsProps) => (
    <div
        className={`relative mb-4 flex justify-center items-center  `}
        style={{ flex: "0 0 33.333%" }}
    >
        <div className={`w-[100%] flex justify-center ${slideClass}`}>
            <div
                className={`mt-10 relative flex items-center max-w-[334px] justify-center`}
            >
                <div className="absolute -mt-3 top-0 left-auto right-auto bg-[#5318D1] w-[80%]  h-full md:h-[25px] rounded-t-[15px] 2xl:rounded-t-[30px] z-10" />
                <div className="absolute -mb-3  bottom-0 left-auto right-auto bg-[#5318D1] w-[80%]  h-full md:h-[25px] rounded-b-[15px] 2xl:rounded-b-[30px] z-10" />
                <div
                    className=" z-50 p-4 2xl:p-[30px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] text-center rounded-[20px] 2xl:rounded-[20px] w-full
            max-w-[334px]
            lg:max-w-[334px] xl:h-24 lg:h-32 md:h-40 h-32 
            md:max-w-[400px]
            sm:max-w-[350px]
            "
                >
                    <p className="max-w-[235px] text-[#989898] w-full antialiased text-sm lg:text-base font-light">
                        {description}
                    </p>
                </div>
            </div>
        </div>
        {hr && (
            <div className="hidden 2xl:block absolute -right-8 mt-10 z-[-10]">
                <img src={RoadMapDotsPNG} className="" alt="" />
            </div>
        )}
    </div>
);

const SwiperCard = () => (
    <Swiper
        cssMode={true}
        // navigation={{

        // }}
        pagination={{}}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper text-black h-full "
    >
        <SwiperSlide>
            <div className="flex flex-col items-center flex-1 h-full">
                <p className="texttualgradient text-[28px] md:text-[42px] text-3xl xl:text-6xl font-semibold text-center">
                    2018
                </p>
                <Flag />
                <Card
                    slideClass="custom_slide"
                    description="Creation of the Brand Launch of beta version 1"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center flex-1">
                <p className="texttualgradient text-3xl xl:text-6xl font-semibold text-center">
                    2019
                </p>
                <Flag />
                <Card
                    slideClass="custom_slide"
                    description="New Design Creation of the social channels Developments"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center flex-1">
                <p className="texttualgradient text-3xl xl:text-6xl font-semibold text-center">
                    2021
                </p>
                <Flag />
                <Card
                    slideClass="custom_slide"
                    hr={false}
                    description="New Design Release of final version Pr-marketing campaign"
                />
            </div>
        </SwiperSlide>
    </Swiper>
);

const RoadmapWeb = () => {
    const RoadmapBubble = (): JSX.Element => {
        return (
            <div className="relative w-full flex flex-col ">
                <div className="w-full flex-col mx-auto ">
                    <div className="flex flex-row flex-nowrap justify-between overflow-hidden">
                        <p
                            className="custom_text_slide texttualgradient text-3xl xl:text-6xl font-semibold text-center"
                            style={{ flex: "0 0 33.333%" }}
                        >
                            2018
                        </p>
                        <p
                            className="custom_text_slide texttualgradient text-3xl xl:text-6xl font-semibold text-center"
                            style={{ flex: "0 0 33.333%" }}
                        >
                            2019
                        </p>
                        <p
                            className="custom_text_slide texttualgradient text-3xl xl:text-6xl font-semibold text-center"
                            style={{ flex: "0 0 33.333%" }}
                        >
                            2021
                        </p>
                        <p
                            className="custom_text_slide texttualgradient text-3xl xl:text-6xl font-semibold text-center"
                            style={{ flex: "0 0 33.333%" }}
                        >
                            2023
                        </p>
                    </div>
                    <div className="relative w-[80%] mt-14 mx-auto flex flex-row justify-between px-16 ">
                        <hr className="
                        absolute left-auto right-auto -top-[22%] 2xl:top-0 ml-1 max-w-[85%] w-[68%] md:w-[69%] lg:w-[78%] xl:w-[80%] 2xl:w-[85%] h-1 z-[-10]"
                        />
                        <Flag />
                        <Flag />
                        <Flag />
                    </div>
                    <div className="mx-auto px-10">
                        <div className="flex slides_container flex-row justify-between overflow-hidden ">
                            <Card
                                slideClass="custom_slide"
                                description="Creation of the Brand Launch of beta version 1"
                            />
                            <Card
                                slideClass="custom_slide"
                                description="New Design Creation of the social channels Developments"
                            />
                            <Card
                                slideClass="custom_slide"
                                hr={false}
                                description="New Design Release of final version Pr-marketing campaign"
                            />
                            <Card
                                slideClass="custom_slide"
                                hr={false}
                                description="New Design Release of final version Pr-marketing campaign"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // let currentPosition = 0; // Initialize the current position

    // const handleLeftSlide = () => {
    //   const mySlides: any = document.querySelectorAll(".custom_slide");
    //   const slideWidth = mySlides[0].getBoundingClientRect().width;
    //   currentPosition -= slideWidth ;

    //   mySlides.forEach((slide: any) => {
    //     slide.style.transform = `translateX(${currentPosition}px)`;
    //   });
    // };

    // const handleRightSlide = () => {
    //   const mySlides = document.querySelectorAll(".custom_slide");
    //   const slideWidth = mySlides[0].getBoundingClientRect().width;

    //   currentPosition += slideWidth+142 + 142;

    //   mySlides.forEach((slide: any) => {
    //     slide.style.transform = `translateX(${currentPosition}px)`;
    //   });
    // };
    let currentPosition = 0; // Initialize the current position
    let textSlidePosition = 0;

    const handleLeftSlide = () => {
        const mySlides = document.querySelectorAll(".custom_slide");
        const slideWidth = mySlides[0]?.getBoundingClientRect().width;
        const totalSlidesWidth = slideWidth * mySlides.length;
        const containerWidthElem: any = document.querySelector(".slides_container");
        const containerWidth = containerWidthElem.getBoundingClientRect().width;

        // text slides
        const myTextSlides = document.querySelectorAll(".custom_text_slide");
        const textSlideWidth = myTextSlides[0].getBoundingClientRect().width;

        if (currentPosition < 0) {
            currentPosition += slideWidth;
            textSlidePosition += textSlideWidth;

            if (currentPosition > 0) {
                currentPosition = 0;
                textSlidePosition = 0;
            }

            mySlides.forEach((slide: any) => {
                slide.style.transform = `translateX(${currentPosition}px)`;
            });

            myTextSlides.forEach((slide: any) => {
                slide.style.transform = `translateX(${textSlidePosition}px)`;
            });
        }
    };

    const handleRightSlide = () => {
        const mySlides = document.querySelectorAll(".custom_slide");
        const slideWidth = mySlides[0]?.getBoundingClientRect().width;
        const totalSlidesWidth = slideWidth * 4;
        const containerWidthElem: any = document.querySelector(".slides_container");
        const containerWidth = containerWidthElem.getBoundingClientRect().width;

        // text slides
        const myTextSlides = document.querySelectorAll(".custom_text_slide");
        const textSlideWidth = myTextSlides[0].getBoundingClientRect().width;

        if (totalSlidesWidth + currentPosition > containerWidth) {
            currentPosition -= slideWidth;
            textSlidePosition -= textSlideWidth;

            if (totalSlidesWidth + currentPosition < containerWidth) {
                currentPosition = containerWidth - totalSlidesWidth;
            }

            mySlides.forEach((slide: any) => {
                slide.style.transform = `translateX(${currentPosition}px)`;
            });
            myTextSlides.forEach((slide: any) => {
                slide.style.transform = `translateX(${textSlidePosition}px)`;
            });
        }
    };

    return (
        <div className="w-full sm:mt-20 sm:mb-40">
            <p className="text-white text-[42px] mb-16 font-normal uppercase text-center">
                ROAD MAP
            </p>
            <div className="w-full text-white flex justify-center items-center">
                <div className="hidden w-full max-w-[1920px] px-10 xl:px-32 mx-auto md:flex items-end ">
                    <div className="mb-12">
                        <img
                            src={BackIcon}
                            alt=""
                            className="cursor-pointer"
                            onClick={() => {
                                handleLeftSlide();
                            }}
                        />
                    </div>
                    <div className="w-full flex items-center justify-between mx-[59.64px] gap-2 lg:gap-[14px]">
                        <RoadmapBubble />
                    </div>
                    <div className="rotate-180 mb-12 ">
                        <img
                            src={BackIcon}
                            className="cursor-pointer"
                            alt=""
                            onClick={() => {
                                handleRightSlide();
                            }}
                        />
                    </div>
                </div>
                <div className="flex w-full max-w-[1920px] px-10 xl:px-32 mx-auto md:hidden items-end h-[400px]  ">
                    <SwiperCard />
                </div>
            </div>
        </div>
    );
};

export { RoadmapWeb };