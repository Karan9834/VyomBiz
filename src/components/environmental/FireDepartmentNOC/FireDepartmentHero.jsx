import React from "react";
import HeroLayout from "../../common/HeroLayout";

const FireDepartmentHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Fire Department NOC"
            heroTitleSuffix="- Apply in 5 Min"
            heroDescription="Do you wish to get a fire department NOC for your residential, educational, or high-risk building? Our experts ensure 100% compliance with fire safety standards. 1275+ businesses secured fire department NOC with our expert-led advisory services."
            stats={[
                { count: "43059 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "500+", label: "Compliance Experts" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default FireDepartmentHero;
