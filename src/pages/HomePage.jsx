import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DestinationsSection from '@/components/sections/DestinationsSection';
import CtaSection from '@/components/sections/CtaSection';

const HomePage = ({ handleFeatureClick }) => {
  return (
    <>
      <Helmet>
        <title>DescontAR - Descuentos Exclusivos para Turistas en Argentina</title>
        <meta name="description" content="Descubre Argentina con descuentos exclusivos. La app premium para turistas que buscan experiencias únicas con los mejores precios en hoteles, restaurantes y actividades." />
        <link rel="icon" href="https://i.postimg.cc/SKXwKRhb/logo-solo.png" />
      </Helmet>
      
      <div className="overflow-hidden">
        <div className="relative">
          <HeroSection handleFeatureClick={handleFeatureClick} />
        </div>
        <FeaturesSection handleFeatureClick={handleFeatureClick} />
        <DestinationsSection handleFeatureClick={handleFeatureClick} />
        <CtaSection handleFeatureClick={handleFeatureClick} />
      </div>
    </>
  );
};

export default HomePage;