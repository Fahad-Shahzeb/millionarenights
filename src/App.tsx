import React from 'react';
import { Header, HeroSection, MainHeadingSection, EllipseSection, ThemeGradient, CardsSection, Seperator, MobileScreenComponent, OfferSection, AdvantagesSection, TokenDistribution, AboutUs, FAQ, GetInTouch, AffliateProgramSection, Footer, RoadmapSection, JoinUsSection } from './components';

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

    </div>
  );
}

export default App;
