import React from "react";
import OPCHero from "../../components/OPCRegistration/OPCHero";
import OPCPricing from "../../components/OPCRegistration/OPCPricing";
import OPCDetails from "../../components/OPCRegistration/OPCDetails";
import OPCFAQ from "../../components/OPCRegistration/OPCFAQ";

const OPCRegistration = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <OPCHero />
            <OPCPricing />
            <OPCDetails />
            <OPCFAQ />
        </div>
    );
};

export default OPCRegistration;
