import React from "react";
import SoleProprietorshipHero from "../../components/SoleProprietorship/SoleProprietorshipHero";
import SoleProprietorshipPricing from "../../components/SoleProprietorship/SoleProprietorshipPricing";
import SoleProprietorshipDetails from "../../components/SoleProprietorship/SoleProprietorshipDetails";
import SoleProprietorshipFAQ from "../../components/SoleProprietorship/SoleProprietorshipFAQ";

const SoleProprietorship = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SoleProprietorshipHero />
            <SoleProprietorshipPricing />
            <SoleProprietorshipDetails />
            <SoleProprietorshipFAQ />
        </div>
    );
};

export default SoleProprietorship;
