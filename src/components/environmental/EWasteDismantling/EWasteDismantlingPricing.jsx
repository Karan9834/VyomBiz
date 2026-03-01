import React from "react";
import PricingLayout from "../../common/PricingLayout";

const EWasteDismantlingPricing = () => {
    const packages = [
        {
            name: "Basic Setup",
            price: "25,000",
            tagline: "For small-scale dismantlers",
            features: [
                "Form IV Filing",
                "Application Preparation",
                "Basic Layout Advice",
                "Documentation Support",
                "Dismantling Roadmap"
            ]
        },
        {
            name: "Full Compliance",
            price: "45,000",
            tagline: "End-to-End Registration",
            popular: true,
            badgeText: "Most Preferred",
            features: [
                "Consent to Establish (CTE)",
                "Consent to Operate (CTO)",
                "Hazardous Waste Authorization",
                "E-waste Licensing",
                "Priority SPCB Liaison"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            tagline: "For large dismantling units",
            features: [
                "Complete Setup Management",
                "EPR Target Registration",
                "De-dusting Implementation Plan",
                "On-site Inspection Support",
                "Dedicated Compliance Account Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="E-Waste Dismantling Packages"
            packages={packages}
        />
    );
};

export default EWasteDismantlingPricing;
