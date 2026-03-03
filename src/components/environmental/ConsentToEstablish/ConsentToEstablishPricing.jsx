import React from "react";
import PricingLayout from "../../common/PricingLayout";

const ConsentToEstablishPricing = () => {
    const packages = [
        {
            name: "Green Category",
            price: "25,000",
            tagline: "Low pollution industries",
            features: [
                "Eligibility & Project Assessment",
                "Basic Layout Preparation",
                "Application Submission",
                "Regulatory Liaison Setup",
                "Provisional CTE Tracking"
            ]
        },
        {
            name: "Orange Category",
            price: "50,000",
            tagline: "Moderate pollution industries",
            popular: true,
            badgeText: "Most Requested",
            features: [
                "Detailed Water/Air Load Check",
                "Pollution Control Measures Setup",
                "Full Document Assembly",
                "Environmental Clearance Liaison",
                "Priority SPCB Follow-ups"
            ]
        },
        {
            name: "Red Category",
            price: "Custom",
            tagline: "High pollution / Heavy machinery",
            features: [
                "Complex Project Assessment",
                "High-Risk Layout Strategy",
                "Strict EIA & Site Validation",
                "Direct Competent Authority Liaison",
                "Dedicated Compliance Architect"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Consent to Establish CTE Packages"
            packages={packages}
        />
    );
};

export default ConsentToEstablishPricing;
