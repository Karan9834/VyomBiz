import React from "react";
import PricingLayout from "../common/PricingLayout";

const OPCPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "2,499",
            tagline: "Essential for solo owners",
            features: [
                "1 Digital Signature (DSC)",
                "1 Director Identification (DIN)",
                "OPC Name Approval",
                "Certificate of Incorporation",
                "MoA & AoA for OPC",
                "PF/ESI Registration",
                "Zero Balance Current Account"
            ]
        },
        {
            name: "Standard",
            price: "5,999",
            tagline: "Most chosen by professionals",
            popular: true,
            badgeText: "Best Value",
            features: [
                "Everything in Basic",
                "Company PAN & TAN",
                "GST Registration",
                "MSME/Udyam Registration",
                "Nominee Consent Filing",
                "First Board Meeting Minutes",
                "GST Software (1 Month Free)"
            ]
        },
        {
            name: "Premium",
            price: "15,999",
            tagline: "Full compliance for solo startups",
            features: [
                "Everything in Standard",
                "Trademark Registration (1 Class)",
                "Startup India Recognition",
                "1 Year Compliance Support",
                "ISO Certification Support",
                "Nominee Legal Agreements",
                "Dedicated Relationship Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="OPC Registration Packages"
            packages={packages}
        />
    );
};

export default OPCPricing;
