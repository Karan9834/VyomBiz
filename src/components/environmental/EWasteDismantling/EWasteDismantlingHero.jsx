import React from "react";
import HeroLayout from "../../common/HeroLayout";

const EWasteDismantlingHero = () => {
    return (
        <HeroLayout
            heroTitleMain="E-waste License for Dismantling"
            heroTitleSuffix="- Get Free 30-Min Expert Guidance"
            heroDescription="Do you wish to start Dismantling E-Waste but are not sure about the licensing requirements? Connect with VyomBiz to obtain an E-waste License for Dismantling. 199 out of 200 dismantlers are successfully running their businesses after securing the license with us."
            stats={[
                { count: "43771 +", label: "Happy Clients" },
                { count: "3500 +", label: "Expert Advisors" },
                { count: "50 +", label: "Branch Offices" },
                { count: "99.5%", label: "Success Rate" }
            ]}
            formTitle="Get Free Expert Consultation"
        />
    );
};

export default EWasteDismantlingHero;
