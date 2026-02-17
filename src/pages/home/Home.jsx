import React from "react";
import Hero from "../../components/myHome/Hero";
import BrandLogos from "../../components/myHome/BrandLogos";
import PremiumPlatform from "../../components/myHome/PremiumPlatform";
import WorkingProcess from "../../components/myHome/WorkingProcess";
import StartCompliance from "../../components/myHome/StartCompliance";
import LegalServices from "../../components/myHome/LegalServices";
import WhoWeAre from "../../components/myHome/WhoWeAre";
import LegalFeatures from "../../components/myHome/LegalFeatures";
import TrustedBrands from "../../components/myHome/TrustedBrands";
import OldVsNewWay from "../../components/myHome/OldVsNewWay";
// import AppDownload from "../../components/myHome/AppDownload";
import Testimonials from "../../components/myHome/Testimonials";
import SuccessStory from "../../components/myHome/SuccessStory";

import SuccessMantra from "../../components/myHome/SuccessMantra";

const Home = () => {
    return (
        <>
            <Hero />
            <BrandLogos />
            <SuccessMantra />
            <PremiumPlatform />
            <StartCompliance />
            <WorkingProcess />
            <LegalServices />
            <OldVsNewWay />
            <WhoWeAre />
            <LegalFeatures />
            <TrustedBrands />
            {/* <AppDownload /> */}
            <Testimonials />
            {/* <SuccessStory /> */}
        </>
    );
};

export default Home;
