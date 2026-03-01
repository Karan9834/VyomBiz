import React from "react";
import HeroLayout from "../../common/HeroLayout";

const DPCCHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Delhi Pollution Control Committee"
            heroTitleSuffix="Authorization"
            heroDescription="Get Delhi Pollution Control Committee Authorization for your business with VyomBiz experts. Ensure 100% compliance with environmental and DPCC standards for all industry categories."
            stats={[
                { count: "43116 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "99%", label: "SLA Delivery" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default DPCCHero;
