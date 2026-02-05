import React from "react";
import RegistrationHero from "../../components/CompanyRegistration/RegistrationHero";
import PricingSection from "../../components/CompanyRegistration/PricingSection";
import RegistrationDetails from "../../components/CompanyRegistration/RegistrationDetails";
import FAQSection from "../../components/CompanyRegistration/FAQSection";

const CompanyRegistration = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <RegistrationHero />
            <PricingSection />
            <RegistrationDetails />
            <FAQSection />
        </div>
    );
};

export default CompanyRegistration;
