import React from "react";
import PricingLayout from "../../common/PricingLayout";

const DPCCPricing = () => {
    const packages = [
        {
            name: "White Category",
            price: "4,999",
            tagline: "For least polluting industries",
            features: [
                "DPCC Undertaking Generation",
                "Document Verification",
                "Online Submission Support",
                "Email & Chat Support",
                "Compliance Advisory"
            ]
        },
        {
            name: "Green/Orange",
            price: "9,999",
            tagline: "Most popular for SMEs",
            popular: true,
            badgeText: "Best Value",
            features: [
                "Consent to Establish (CTE)",
                "Consent to Operate (CTO)",
                "Detailed Documentation",
                "Pollution Control Guidance",
                "Priority Liaison"
            ]
        },
        {
            name: "Red Category",
            price: "19,999",
            tagline: "Full compliance & liaison",
            features: [
                "End-to-End CTE/CTO Support",
                "ETP/STP Compliance Audit",
                "Noise & Emission Monitoring",
                "Hard Copy Submission",
                "Dedicated Compliance Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="DPCC Authorization Service Packages"
            packages={packages}
        />
    );
};

export default DPCCPricing;
