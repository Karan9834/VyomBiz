import React from "react";
import HeroLayout from "../common/HeroLayout";

const SoleProprietorshipHero = () => {
    return (
        <div id="registration-hero">
            <HeroLayout
            announcementText="We are India's leading brand for Sole Proprietorship Registration."
            heroTitleMain="Sole Proprietorship"
            heroTitleSuffix="Registration"
            heroSubtitle="Get Professional Services at 50% Off – Start Today!"
            heroDescription="Facing delays in sole proprietorship registration? Let our expert consultants provide end-to-end support. We have successfully registered 2,00,000+ proprietorship firms."
            whatsIncludedList={[
                "Expert-led Registration Process",
                "GST TRN & ARN Generation",
                "GST Registration",
                "MSME Registration (Udyam)",
                "GST Filing for 1 Financial Yr",
                "ITR Filing Support"
            ]}
            successRateText="Successfully Registered 2,00,000+ Proprietorships, 99% Success Rate"
        />
        </div>
    );
};

export default SoleProprietorshipHero;
