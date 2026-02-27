import React from "react";
import HeroLayout from "../common/HeroLayout";

const LLPHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
            announcementText="We are India's leading brand for LLP Registration."
            heroTitleMain="LLP Registration"
            heroSubtitle="Avail 50% Off – Professional Services"
            heroDescription="Facing a delay in the process of online LLP registration in India? Our consultants ensure hassle-free limited liability partnership registration within a short time."
            whatsIncludedList={[
                "10+ Years of Experience",
                "400 + In-House CAs, CS & Lawyers",
                "99% SLA Delivery",
                "10,000+ Pin codes Network in India"
            ]}
            successRateText="Successfully Registered 3,000+ LLPs, 99% Success Rate"
        />
        </div>
    );
};

export default LLPHero;
