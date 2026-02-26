import React from "react";
import PricingLayout from "../common/PricingLayout";

const PricingSection = () => {
    const packages = [
        {
            name: "Basic",
            price: "2,499",
            tagline: "Essential for small startups",
            features: [
                "2 Digital Signatures (DSC)",
                "2 Director Identification (DIN)",
                "Company Name Approval",
                "Certificate of Incorporation",
                "Company Constitution (MoA & AoA)",
                "PF/ESI Registration",
                "Zero Balance Bank Account"
            ]
        },
        {
            name: "Standard",
            price: "5,999",
            tagline: "Most popular for growing brands",
            popular: true,
            badgeText: "Best Value",
            features: [
                "Everything in Basic",
                "Company PAN & TAN",
                "GST Registration",
                "MSME/Udyam Registration",
                "Share Certificate Drafts",
                "First Board Meeting Minutes",
                "GST Software (1 Month Free)"
            ]
        },
        {
            name: "Premium",
            price: "15,999",
            tagline: "Comprehensive business setup",
            features: [
                "Everything in Standard",
                "Trademark Registration (1 Class)",
                "Startup India Recognition",
                "1 Year Compliance Support",
                "ISO Certification (9001:2015)",
                "Legal Agreement Drafts",
                "Dedicated Relationship Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Choose Your Best Package"
            packages={packages}
        />
    );
};

export default PricingSection;
