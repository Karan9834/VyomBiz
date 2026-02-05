import React from "react";
import PricingLayout from "../common/PricingLayout";

const PartnershipPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "1,999",
            tagline: "Essential for starting firms",
            features: [
                "Partnership Deed Drafting",
                "Registration Advice",
                "PAN Card Assistance",
                "Aadhar Linking Support",
                "Bank Account Opening Support"
            ]
        },
        {
            name: "Standard",
            price: "4,999",
            tagline: "Most chosen by partners",
            popular: true,
            badgeText: "Recommended",
            features: [
                "Everything in Basic",
                "Notarized Partnership Deed",
                "GST Registration",
                "MSME/Udyam Registration",
                "Professional Tax Guidance",
                "Shop & Establishment License"
            ]
        },
        {
            name: "Premium",
            price: "9,999",
            tagline: "Comprehensive legal setup",
            features: [
                "Everything in Standard",
                "Certified Copy from Registrar",
                "Trademark Search & Filing",
                "Drafting of HR Documents",
                "1 Year GST Filing Support",
                "Dedicated Compliance Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Partnership Firm Packages"
            packages={packages}
        />
    );
};

export default PartnershipPricing;
