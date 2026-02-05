import React from "react";
import HeroLayout from "../common/HeroLayout";

const PublicHero = () => {
    return (
        <HeroLayout
            announcementText="We are India's leading brand for Public Limited Registration."
            heroTitleMain="Public Limited"
            heroTitleSuffix="Registration"
            heroSubtitle="Avail 50% Off – Professional Services"
            heroDescription="Step into the big league. Raise capital from the public and enjoy the highest level of business credibility with VyomBiz's expert conversion and registration services."
            whatsIncludedList={[
                "10+ Years of Experience",
                "400 + In-House CAs, CS & Lawyers",
                "99% SLA Delivery",
                "10,000+ Pin codes Network in India"
            ]}
            successRateText="Successfully Registered 500+ Public Entities, 99% Success Rate"
        />
    );
};

export default PublicHero;
