import React from "react";
import PartnershipHero from "../../components/PartnershipRegistration/PartnershipHero";
import PartnershipPricing from "../../components/PartnershipRegistration/PartnershipPricing";
import PartnershipDetails from "../../components/PartnershipRegistration/PartnershipDetails";
import PartnershipFAQ from "../../components/PartnershipRegistration/PartnershipFAQ";

const PartnershipRegistration = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PartnershipHero />
            <PartnershipPricing />
            <PartnershipDetails />
            <PartnershipFAQ />
        </div>
    );
};

export default PartnershipRegistration;
