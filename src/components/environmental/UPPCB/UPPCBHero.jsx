import React from "react";
import HeroLayout from "../../common/HeroLayout";

const UPPCBHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Uttar Pradesh"
            heroTitleSuffix="Pollution Control Board"
            heroDescription="Looking for easy Uttar Pradesh Pollution Control Board approval? Get expert support to ensure compliance with Uttar Pradesh environmental regulations."
            stats={[
                { count: "43838 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "99%", label: "SLA Delivery" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default UPPCBHero;
