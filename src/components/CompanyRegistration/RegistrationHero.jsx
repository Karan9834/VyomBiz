import React from "react";
import HeroLayout from "../common/HeroLayout";

const RegistrationHero = () => {
    return (
        <HeroLayout
            announcementText="We are India's leading brand for Private Limited Registration."
            heroTitleMain="Pvt. Ltd. Registration"
            heroSubtitle="Avail 50% Off – Professional Services"
            heroDescription="Simplify your business journey with VyomBiz. Start your Private Limited company with expert legal assistance and 100% money-back guarantee."
            whatsIncludedList={[
                "10+ Years of Experience",
                "400 + In-House CAs, CS & Lawyers",
                "99% SLA Delivery",
                "10,000+ Pin codes Network in India"
            ]}
            successRateText="Successfully Registered 50k+ Companies, 99% Success Rate"
        />
    );
};

export default RegistrationHero;
