import React from "react";
import PricingLayout from "../../common/PricingLayout";

const PhaseIISoilPricing = () => {
    const packages = [
        {
            name: "Limited Scope ESA",
            price: "40,000",
            tagline: "For minor localized RECs",
            features: [
                "Site Investigation Planning",
                "Basic Soil Sampling",
                "Recognized Env Condition (REC) Assessment",
                "Vapour Intrusion Check",
                "Standard Final Report"
            ]
        },
        {
            name: "Comprehensive Phase II",
            price: "85,000",
            tagline: "Full Soil & Water Investigation",
            popular: true,
            badgeText: "Most Preferred",
            features: [
                "Deep Soil & Groundwater Sampling",
                "Geophysical Survey & Utility Clearance",
                "Hydrogeological Risk Assessment",
                "NABL Lab Coordination Support",
                "Priority End-to-End Compliance"
            ]
        },
        {
            name: "Remediation & Monitoring",
            price: "Custom",
            tagline: "For heavily contaminated sites",
            features: [
                "Detailed Remediation Strategy",
                "Continuous Monitoring Program",
                "Regulatory Body Liaison",
                "Complex Drilling & Testing",
                "Zero-Notice Strategy Setup"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Phase II Investigation Fees"
            packages={packages}
        />
    );
};

export default PhaseIISoilPricing;
