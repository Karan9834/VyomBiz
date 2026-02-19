import React from 'react';
import AboutBanner from '../../components/AboutUs/AboutBanner';
import AboutIntro from '../../components/AboutUs/AboutIntro';
import ComplianceIllustration from '../../components/AboutUs/ComplianceIllustration';
import ContactBannerAbout from '../../components/AboutUs/ContactBannerAbout';
import ClientNetwork from '../../components/AboutUs/ClientNetwork';
import VisionMission from '../../components/AboutUs/VisionMission';
import OurJourney from '../../components/AboutUs/OurJourney';
import SuccessStory from '../../components/myHome/SuccessStory';
import WorkingProcess from '../../components/myHome/WorkingProcess';
import TrustedBrands from '../../components/myHome/TrustedBrands';

import IPLegalServices from '../../components/AboutUs/IPLegalServices';
import AboutFooterCTA from '../../components/AboutUs/AboutFooterCTA';

const About = () => {
  return (
    <div className="bg-white">
      <AboutBanner />
      <AboutIntro />
      <ComplianceIllustration />
      <ContactBannerAbout />
      <ClientNetwork />
      {/* <IPLegalServices /> */}
      <VisionMission />
      <OurJourney />
      <AboutFooterCTA />
    </div>
  );
};

export default About;
