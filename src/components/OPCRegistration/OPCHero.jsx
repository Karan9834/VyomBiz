import React from "react";
import HeroLayout from "../common/HeroLayout";

const OPCHero = () => {
    return (
        <HeroLayout
            announcementText="We are India's leading brand for One Person Company Registration."
            heroTitleMain="OPC Registration"
            heroSubtitle="Avail 50% Off – Professional Services"
            heroDescription="Enjoy the benefits of a private limited company while maintaining 100% control as a solo founder. Start your professional business journey with VyomBiz."
            whatsIncludedList={[
                "10+ Years of Experience",
                "400 + In-House CAs, CS & Lawyers",
                "99% SLA Delivery",
                "10,000+ Pin codes Network in India"
            ]}
            successRateText="Successfully Registered 12,000+ OPCs, 99% Success Rate"
        />
    );
};

export default OPCHero;
