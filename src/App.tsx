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

const navBarHeadings = ["Home", "About", "How to Buy", "Tokenomics", "Roadmap"];
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


  return (
    <div className="relative overflow-x-hidden">
      <ThemeGradient />
      <div className='relative flex flex-1 flex-col z-50'>
        <Header
          navBarHeadings={navBarHeadings}
          setshowMenu={() => {
            setshowMenu(!showMenu)
          }}
          scrollToSection={scrollToSection}
        />
        {showMenu && (
          <div className='w-screen h-screen bg-[#ccc] flex flex-col gap-4 justify-center items-center'>
            {navBarHeadings.map((item) => (
              <button className='cursor-pointer border-[1.5px] border-[#44444499] rounded-2xl px-4 py-2 text-lg text-black text-center w-[143px]'>
                {item}
              </button>
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

            <JoinUsSection />

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