import React, { useEffect, useState } from "react";
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
} from "./components";

const navBarHeadings = ["Home", "About", "How to Buy", "Tokenomics", "Roadmap"];

function App() {
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    window.onresize = function (event) {
      if (showMenu) {
        setshowMenu(false);
      }
    };
  });

  return (
    <div className="relative overflow-hidden">
      <ThemeGradient />
      <div className='relative flex flex-1 flex-col z-50'>
        <Header
          navBarHeadings={navBarHeadings}
          setshowMenu={() => {
            setshowMenu(!showMenu)
          }}
        />
        {showMenu && (
          <div className='w-screen h-screen bg-[#ccc] flex flex-col gap-4 justify-center items-center'>
            {navBarHeadings.map((item) => (
              <button className='border-[1.5px] border-[#44444499] rounded-2xl px-4 py-2 text-lg text-black text-center w-[143px]'>
                {item}
              </button>
            ))}
          </div>
        )}
        {!showMenu && (
          <div className="relative">
            <HeroSection />
            <Seperator version='basic' />
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
            <OfferSection />
            <Seperator version='basic' />
            <JoinUsSection />
            <TokenDistribution />
            <Seperator version='basic' />
            <RoadmapSection />
            <Seperator version='basic' />
            <AboutUs />
            <Seperator version='basic' />
            <FAQ />
            <Seperator version='basic' />
            <GetInTouch />
            <Seperator version='basic' />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;