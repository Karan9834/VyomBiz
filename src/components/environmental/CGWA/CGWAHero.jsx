import React from "react";
import HeroLayout from "../../common/HeroLayout";

const CGWAHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Central Ground Water Authority NOC"
            heroTitleSuffix="- Apply in 2 Min"
            heroDescription="Ignoring CGWA NOC requirements could cost you more than you think! Get your CGWA NOC for water boring with VyomBiz’s expert guidance. We've helped 500+ businesses secure their NOC with a 100% proven track record."
            stats={[
                { count: "43312 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "100%", label: "Accuracy" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default CGWAHero;
