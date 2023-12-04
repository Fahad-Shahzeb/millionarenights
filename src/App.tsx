import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  HeroSection,
  MainHeadingSection,
  EllipseSection,
  ThemeGradient,
  CardsSection,
  Seperator,
  MobileScreenComponent,
  OfferSection,
  AdvantagesSection,
  TokenDistribution,
  AboutUs,
  FAQ,
  GetInTouch,
  AffliateProgramSection,
  Footer,
  RoadmapSection,
  JoinUsSection,
  CircularAnimation,
} from "./components";
import { Gradient_1, RoadMapDotsPNG, ShadyDotsIcon } from "./assets";
import { useIsInViewport } from "./utils";

const navBarHeadings = ["Home", "About", "How to Buy", "Tokenomics", "Roadmap", 'Contact'];
const indexes = ["home", "aboutus", "howtobuy", "tokenomics", "roadmap", "contact"];

function App() {
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    window.onresize = function (event) {
      if (showMenu) {
        setshowMenu(false);
      }
    };
  });

  const scrollToSection = (index: number) => {
    var element = document.getElementById(indexes[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  return (
    <div className="relative overflow-hidden">
      <ThemeGradient />
      <div className='relative flex flex-1 flex-col z-50'>
        {showMenu && <div className={`absolute w-[140%] h-[80%] left-0  z-[10]`}>
          <img alt='' src={Gradient_1} className={`w-[100%] h-[100%]`} />
        </div>}
        <Header
          navBarHeadings={navBarHeadings.slice(0, 5)}
          setshowMenu={() => {
            setshowMenu(!showMenu)
          }}
          scrollToSection={scrollToSection}
        />
        {showMenu && (
          <div className='relative w-screen h-screen bg-[#000] flex flex-col justify-center items-center '>
            {navBarHeadings.map((item, index) => (
              <div className="w-[50%] cursor-pointer flex flex-col justify-center items-center z-40">
                <button onClick={() => { scrollToSection(index) }} className='cursor-pointer px-4 py-8 text-lg text-white text-center w-[143px]'>
                  <p className="text-base font-normal">{item}</p>
                </button>
                {index < 5 && <hr className='line  bg-[#fff]/[0.3]' />}
                {index == 5 &&
                  <div className="mt-10">
                    <img src={RoadMapDotsPNG} className="w-32 h-32 rotate-90" alt="" />
                  </div>
                }
              </div>
            ))}

          </div>
        )}
        {!showMenu && (
          <div className="relative">
            <div id="home">
              <HeroSection />
              <Seperator version='basic' />
            </div>

            <MainHeadingSection />
            <Seperator version='basic' />
            <EllipseSection />
            <CardsSection />
            <Seperator version='withLeftImage' />
            <MobileScreenComponent />
            <Seperator version='withRightImage' />
            <AdvantagesSection />
            <Seperator version='partial' />
            <AffliateProgramSection />

            <div id="howtobuy">
              <OfferSection />
              <Seperator version='basic' />
            </div>

            <div ref={ref1}>
              <JoinUsSection isInViewport1={isInViewport1} />
            </div>

            <div id="tokenomics">
              <TokenDistribution />
              <Seperator version='basic' />
            </div>

            <div id="roadmap">
              <RoadmapSection />
              <Seperator version='basic' />
            </div>

            <div id="aboutus">
              <AboutUs />
              <Seperator version='basic' />
            </div>

            <FAQ />
            <Seperator version='basic' />

            <div id="contact">
              <GetInTouch />
              <Seperator version='basic' />
            </div>

            <Footer />
          </div>
        )
        }
      </div >
    </div >
  );
}

export default App;