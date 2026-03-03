import React from "react";
import LLPHero from "../../components/LLPRegistration/LLPHero";
import LLPPricing from "../../components/LLPRegistration/LLPPricing";
import LLPDetails from "../../components/LLPRegistration/LLPDetails";
import LLPFAQ from "../../components/LLPRegistration/LLPFAQ";

const LLPRegistration = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <LLPHero />
            <LLPPricing />
            <LLPDetails />
            <LLPFAQ />
        </div>
    );
};

export default LLPRegistration;
