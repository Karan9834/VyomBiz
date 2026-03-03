import React from "react";
import PublicHero from "../../components/PublicLimited/PublicHero";
import PublicPricing from "../../components/PublicLimited/PublicPricing";
import PublicDetails from "../../components/PublicLimited/PublicDetails";
import PublicFAQ from "../../components/PublicLimited/PublicFAQ";

const PublicLimitedRegistration = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PublicHero />
            <PublicPricing />
            <PublicDetails />
            <PublicFAQ />
        </div>
    );
};

export default PublicLimitedRegistration;
