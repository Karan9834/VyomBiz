import React from "react";
import HeroLayout from "../common/HeroLayout";

const PartnershipHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
            announcementText="We are India's leading brand for Partnership Firm Registration."
            heroTitleMain="Partnership Firm"
            heroTitleSuffix="Registration"
            heroSubtitle="Avail 50% Off – Professional Services"
            heroDescription="Easiest way for two or more people to start a business together. Get expert help in drafting your partnership deed and securing your registration smoothly."
            whatsIncludedList={[
                "10+ Years of Experience",
                "400 + In-House CAs, CS & Lawyers",
                "99% SLA Delivery",
                "10,000+ Pin codes Network in India"
            ]}
            successRateText="Successfully Registered 30,000+ Firms, 99% Success Rate"
        />
        </div>
    );
};

export default PartnershipHero;
