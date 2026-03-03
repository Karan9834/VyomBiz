import React from "react";
import HeroLayout from "../../common/HeroLayout";

const EVChargingUPHero = () => {
    return (
        <HeroLayout
            heroTitleMain="EV Charging Station License in UP"
            heroTitleSuffix="- Get Connection in 1 Week"
            heroDescription="Are you all set to obtain an EV charging station license in UP? Get VyomBiz’s 360° expert support and experience stress-free licensing. We are India’s most trusted EV licensing and sustainability advisory company, ensuring 100% success rate."
            stats={[
                { count: "43420 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "714+", label: "Stations Registered" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default EVChargingUPHero;
