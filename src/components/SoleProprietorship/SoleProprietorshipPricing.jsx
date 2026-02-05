import React from "react";
import PricingLayout from "../common/PricingLayout";

const SoleProprietorshipPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "999",
            originalPrice: "1,999",
            tagline: "Standard setup for solo founders",
            features: [
                "MSME Registration (Udyam)",
                "PAN Card Assistance",
                "Aadhar Linking Support",
                "1-year GST Registration",
                "Expert Consultation"
            ],
            popular: false
        },
        {
            name: "Standard",
            price: "3,599",
            originalPrice: "7,199",
            tagline: "Most chosen by professionals",
            popular: true,
            badgeText: "Most Popular",
            features: [
                "Everything in Basic",
                "Shop & Establishment License",
                "Current Bank Account Opening",
                "Trade License Mapping",
                "GST TRN & ARN Support"
            ]
        },
        {
            name: "Premium",
            price: "5,999",
            originalPrice: "11,999",
            tagline: "Total protection for your firm",
            features: [
                "Everything in Standard",
                "GST Filing for 1 Year",
                "ITR Filing Support",
                "Professional Tax Guidance",
                "Lifetime Dedicated Expert"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Choose the Best Proprietorship Firm Package"
            subtitle="Transparent pricing with no hidden costs. 100% Money-Back Guarantee."
            packages={packages}
        />
    );
};

export default SoleProprietorshipPricing;
