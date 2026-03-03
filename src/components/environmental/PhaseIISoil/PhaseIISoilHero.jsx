import React from "react";
import HeroLayout from "../../common/HeroLayout";

const PhaseIISoilHero = () => {
    return (
        <HeroLayout
            heroTitleMain="Phase II Soil & Groundwater"
            heroTitleSuffix="- Up to 50% OFF on Professional Fees"
            heroDescription="Are you concerned about contamination risks in Phase II Soil and Groundwater Investigations? VyomBiz delivers 99% report acceptance, 7–14-day assessments, expert sampling, lab analysis, and end-to-end compliance support."
            stats={[
                { count: "43468 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "99.5%", label: "Acceptance Rate" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default PhaseIISoilHero;
