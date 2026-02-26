import React from "react";
import PricingLayout from "../common/PricingLayout";

const PublicPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "19,999",
            tagline: "Foundation for large scale",
            features: [
                "7 Digital Signatures (DSC)",
                "3 Director Identification (DIN)",
                "Public Name Approval",
                "Certificate of Incorporation",
                "MoA & AoA Drafting",
                "PF/ESI Registration",
                "PAN & TAN Allotment"
            ]
        },
        {
            name: "Standard",
            price: "34,999",
            tagline: "Comprehensive corporate setup",
            popular: true,
            badgeText: "Recommended",
            features: [
                "Everything in Basic",
                "GST Registration",
                "MSME/Udyam Registration",
                "Share Certificate Issuance",
                "Commencement of Business (INC-20A)",
                "Statutory Book Setup",
                "First Board Meeting Support"
            ]
        },
        {
            name: "Premium",
            price: "59,999",
            tagline: "End-to-end listing ready",
            features: [
                "Everything in Standard",
                "Trademark Registration (1 Class)",
                "Startup India Recognition",
                "1 Year Compliance Support",
                "ISO Certification Support",
                "Legal & Financial Strategy",
                "Dedicated Relationship Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Public Limited Company Packages"
            packages={packages}
        />
    );
};

export default PublicPricing;
