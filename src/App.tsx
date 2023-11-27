import React from 'react';
import { Header, HeroSection, MainHeadingSection, EllipseSection, ThemeGradient, CardsSection, Seperator, MobileScreenComponent, OfferSection, AdvantagesSection, TokenDistribution, AboutUs, FAQ, GetInTouch } from './components';

function App() {
  return (
    <div>
      <div className=' flex flex-1 flex-col'>
        <Header />
        <ThemeGradient
          version='1'
          containerClass=''
          imageClass='w-[90%]'
        />
        <HeroSection />
        <MainHeadingSection />
        <EllipseSection />
        <CardsSection />
        <Seperator version='withLeftImage' />
        <MobileScreenComponent />
        <Seperator version='withRightImage' />
        <AdvantagesSection />
        <Seperator version='partial' />
        <TokenDistribution />
        <Seperator version='basic' />
        <AboutUs />
        <FAQ />
        <GetInTouch />

        {/* <OfferSection /> */}
      </div>
    </div>
  );
}

export default App;
