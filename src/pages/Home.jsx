import React from "react";
import Hero from "../components/Hero";
import PremiumPlatform from "../components/PremiumPlatform";
import WorkingProcess from "../components/WorkingProcess";
import StartCompliance from "../components/StartCompliance";
import LegalServices from "../components/LegalServices";
import WhoWeAre from "../components/WhoWeAre";
import LegalFeatures from "../components/LegalFeatures";
import TrustedBrands from "../components/TrustedBrands";
import AppDownload from "../components/AppDownload";
import Testimonials from "../components/Testimonials";
import SuccessStory from "../components/SuccessStory";

const Home = () => {
  return (
    <>
      <Hero />
        <PremiumPlatform />
        <StartCompliance/>
        <WorkingProcess/>
        <LegalServices/>
        <WhoWeAre/>
        <LegalFeatures/>
        <TrustedBrands/>
        <AppDownload/>
        <Testimonials/>
        <SuccessStory/>
    </>
  );
};

export default Home;
