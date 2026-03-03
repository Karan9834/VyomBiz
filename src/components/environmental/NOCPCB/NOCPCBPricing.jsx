import React from "react";
import PricingLayout from "../../common/PricingLayout";

const NOCPCBPricing = () => {
    const packages = [
        {
            name: "Consent to Establish",
            price: "5,999",
            tagline: "Before starting your industry",
            features: [
                "Technical Site Report",
                "Document Verification",
                "Application Filing (CTE)",
                "Liaison with SPCB",
                "Expert Consultation"
            ]
        },
        {
            name: "Consent to Operate",
            price: "9,999",
            tagline: "Before starting production",
            popular: true,
            badgeText: "Best Value",
            features: [
                "Everything in CTE",
                "CTO Application Filing",
                "Pollution Control Audit",
                "Emission Standards Review",
                "Priority Support"
            ]
        },
        {
            name: "Full Compliance",
            price: "19,999",
            tagline: "End-to-end management",
            features: [
                "Annual Returns Filing",
                "ETP/STP Design Review",
                "Hazardous Waste Mgmt",
                "Site Inspection Support",
                "Dedicated Legal Advisor"
            ]
        }
    ];

    return (
        <PricingLayout
            title="NOC Pollution Control Board Packages"
            packages={packages}
        />
    );
};

export default NOCPCBPricing;
