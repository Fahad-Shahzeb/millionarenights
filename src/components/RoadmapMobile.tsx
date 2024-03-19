import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { BackIcon, FlagPNG, RoadMapDotsPNG } from "../assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { title } from "process";

interface AboutUsProps {
  description: React.ReactElement;
  title: string;
  hr?: boolean;
}

const details = [
  {
    title: "2018",
    desc: (
      <span>
        Brand established
        <br /> Beta version 1 launched
      </span>
    ),
  },
  {
    title: "2019",
    desc: (
      <span>
        Beta version 2
        <br /> New design
        <br /> Social media channels established
        <br /> Developments
      </span>
    ),
  },
  {
    title: "2021",
    desc: (
      <span>
        New design
        <br /> Final version launched
        <br /> PR & Marketing campaign
      </span>
    ),
  },
  {
    title: "2022",
    desc: (
      <span>
        Website development
        <br /> Corrections
        <br /> User number scaling
      </span>
    ),
  },
  {
    title: "Q2 - 2023",
    desc: <span>Pre-registration site development</span>,
  },
  {
    title: "Q3 - 2023",
    desc: (
      <span>
        Luxury Marketplace development
        <br /> Development of the ICO’s concept
      </span>
    ),
  },
  {
    title: "Q4 - 2023",
    desc: (
      <span>
        Project is put into a docker
        <br /> Server structure design
        <br /> ICO website development
      </span>
    ),
  },
  {
    title: "Q1 - 2024",
    desc: (
      <span>
        White Paper drafted
        <br /> Private Sale 1 started
        <br /> Recruitment of business partners
        <br /> PR & Marketing campaign
      </span>
    ),
  },
  {
    title: "Q2 - 2024",
    desc: (
      <span>
        Investment office establishment
        <br /> Launch dating site in England
        <br /> Raise awareness
        <br /> Luxury party in England
        <br /> Recruitment of additional business partners
        <br /> App development
      </span>
    ),
  },
  {
    title: "Q3 - 2024",
    desc: (
      <span>
        Luxury Marketplace beta version start
        <br /> Exciting new functions
        <br /> App beta version tests
        <br /> Luxury party in Monaco
      </span>
    ),
  },
  {
    title: "Q4 - 2024",
    desc: (
      <span>
        Luxury Marketplace improvement
        <br /> Launch dating site in the USA
      </span>
    ),
  },
  {
    title: "Q2 - 2025",
    desc: (
      <span>
        Marketing campaign
        <br /> Expansion in the USA
      </span>
    ),
  },
  {
    title: "Q3 - 2025",
    desc: <span>Launch Marketplace in the USA</span>,
  },
  {
    title: "Q1 - 2026",
    desc: (
      <span>
        Launch Marketplace and dating site in Australia
        <br /> Launch marketing campaigns
        <br /> Engagement of Australian influencers and business partners
      </span>
    ),
  },
];
const Flag = () => (
  <div
    className="relative inset-0 rounded-[100px] flex-none h-[80px] w-[80px] md:h-[50px] md:w-[50px] 2xl:w-[66px] 2xl:h-[66px] top-5 flex justify-center items-center bg-black z-50"
    style={{
      backgroundImage:
        "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)",
      // mixBlendMode: 'screen',
      // filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }}
  >
    <img src={FlagPNG} className="w-[40%]" alt="FlagPNG" />
  </div>
);

const Card = ({ title, description, hr = true }: AboutUsProps) => {
  const swiper = useSwiper();

  return (
    <div className="relative mt-16 flex justify-center items-center gap-4">
      <div className="mt-10  relative flex items-center justify-center ">
        <div className="absolute -mt-3 top-0  bg-[#5318D1] w-[80%] mx-auto h-full md:h-[25px] rounded-t-[15px] 2xl:rounded-t-[30px] z-[-10]" />
        <div className="absolute -mb-3  bottom-0  bg-[#5318D1] w-[80%] mx-auto h-full md:h-[25px] rounded-b-[15px] 2xl:rounded-b-[30px] z-[-10]" />
        <div
          className="p-4 2xl:p-[30px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] text-center rounded-[20px] 2xl:rounded-[20px] w-full
            lg:max-w-[334px] lg:h-[140px] md:h-40 h-44 xs2:h-40 
            md:max-w-[400px]
            sm:max-w-[350px]
            max-w-[300px]
            "
        >
          <p className="text-[#989898] w-full px-5  antialiased text-sm lg:text-base font-light">
            {description}
          </p>
        </div>

        <div className="absolute -bottom-16 hidden xs2:block">
          <div className="flex md:hidden  items-center justify-between ">
            <button
              className="w-24 flex"
              onClick={(event) => {
                swiper.slidePrev();
                event.preventDefault();
              }}
            >
              <img src={BackIcon} className="w-[100%]" alt="" />
            </button>
            <div className="w-full flex gap-2 justify-center">
              {details.map((item, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 ${
                    title.toString() === item.title.toString()
                      ? "bg-colorGradiant"
                      : "bg-[#5318D1]"
                  } rounded-full`}
                />
              ))}
            </div>
            <button
              className="rotate-180 w-24 "
              onClick={(event) => {
                swiper.slideNext();
                event.preventDefault();
              }}
            >
              <img src={BackIcon} className="w-[100%]" alt="" />
            </button>
          </div>{" "}
        </div>
      </div>
      {hr && (
        <div className="hidden 2xl:block absolute -right-28 mt-10 z-[-10]">
          <img src={RoadMapDotsPNG} className="" alt="" />
        </div>
      )}
    </div>
  );
};

const SwiperCard = () => {
  return (
    <Swiper
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper text-black h-full "
    >
      {details.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center flex-1 h-full">
              <p className="texttualgradient text-[28px] md:text-[42px] text-3xl xl:text-6xl font-semibold text-center">
                {item.title}
              </p>
              <Flag />
              <Card description={item.desc} title={item.title} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const RoadmapMobile = () => {
  return (
    <div className="w-full sm:mt-20 sm:mb-40">
      <p className="text-white text-[42px] mb-16 font-normal uppercase text-center">
        ROAD MAP
      </p>
      <div className="w-full text-white flex justify-center items-center">
        <div className="flex w-full max-w-[1920px] px-10 xl:px-32 mx-auto md:hidden items-end h-[450px]  ">
          <SwiperCard />
        </div>
      </div>
    </div>
  );
};

export { RoadmapMobile };
