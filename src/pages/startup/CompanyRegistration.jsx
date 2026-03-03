import React from "react";
import RegistrationHero from "../../components/CompanyRegistration/RegistrationHero";
import PricingSection from "../../components/CompanyRegistration/PricingSection";
import RegistrationDetails from "../../components/CompanyRegistration/RegistrationDetails";
import FAQSection from "../../components/CompanyRegistration/FAQSection";

const CompanyRegistration = () => {
    return (
        <div className="bg-dot-pattern bg-[#f8f9fa] min-h-screen relative">
            <div className="relative z-10 space-y-6">
                <RegistrationHero />
                <PricingSection />
                <RegistrationDetails />
                <FAQSection />
            </div>
            {/* Gradient fade to footer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default CompanyRegistration;
