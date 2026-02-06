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

const About = () => {
  return (
    <div className="bg-white">
      {/* New Sections based on user images */}
      <AboutBanner />
      <AboutIntro />
      <ComplianceIllustration />
      <ContactBannerAbout />
      <ClientNetwork />

      {/* Existing Core Content */}
      <SuccessStory />
      <WorkingProcess />
      <TrustedBrands />
      <VisionMission />
      <OurJourney />
    </div>
  );
};

export default About;
