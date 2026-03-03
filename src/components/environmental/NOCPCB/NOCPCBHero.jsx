import React from "react";
import HeroLayout from "../../common/HeroLayout";

const NOCPCBHero = () => {
    return (
        <HeroLayout
            heroTitleMain="NOC Pollution Control Board"
            heroTitleSuffix="- Apply in 5 Min"
            heroDescription="Have you implemented pollution prevention and control measures for your business? Secure NOC pollution control board with VyomBiz and stay compliant. 43055+ businesses secured their NOC with our expert-led advisory."
            stats={[
                { count: "43055 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "10k+", label: "Pin codes" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default NOCPCBHero;
