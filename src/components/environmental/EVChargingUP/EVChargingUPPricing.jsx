import React from "react";
import PricingLayout from "../../common/PricingLayout";

const EVChargingUPPricing = () => {
    const packages = [
        {
            name: "Level 1 Setup",
            price: "15,000",
            tagline: "Slow AC Charging",
            features: [
                "Site Feasibility check",
                "Legal Compliance Setup",
                "Basic Infrastructure Setup",
                "Application Submission",
                "Local Grid Approval"
            ]
        },
        {
            name: "Level 2 Setup",
            price: "35,000",
            tagline: "Standard AC Charging",
            popular: true,
            badgeText: "Recommended",
            features: [
                "Subsidy Assistance",
                "Commercial Billing Setup",
                "Operational Setup Guidance",
                "Full Legal Compliance",
                "240V Support Registration"
            ]
        },
        {
            name: "Level 3 / Rapid",
            price: "Custom",
            tagline: "480V DC Fast Charging",
            features: [
                "Comprehensive Feasibility Study",
                "Partnership Setup (NSP)",
                "Battery Switching Configuration",
                "Transformers & Cable Setup",
                "Priority Central Grid Approval"
            ]
        }
    ];

    return (
        <PricingLayout
            title="EV Charging UP Licensing Packages"
            packages={packages}
        />
    );
};

export default EVChargingUPPricing;
