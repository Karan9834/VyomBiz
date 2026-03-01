import React from "react";
import HeroLayout from "../../common/HeroLayout";

const ConsentToEstablishHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Consent to Establish from Pollution Control Board"
            heroTitleSuffix="- Get CTE Now"
            heroDescription="Are you working on new industrial and development projects? Secure your Consent to Establish from the Pollution Control Board with VyomBiz. We've successfully maintained a 98% first-time approval ratio and secured CTE for 500+ projects across PAN India."
            stats={[
                { count: "43289 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "98%", label: "Approval Ratio" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default ConsentToEstablishHero;
