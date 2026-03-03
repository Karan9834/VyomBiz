import React from "react";
import PricingLayout from "../../common/PricingLayout";

const CGWAPricing = () => {
    const packages = [
        {
            name: "Renewal/Extension",
            price: "5,000",
            tagline: "Official fee for existing NOCs",
            features: [
                "Govt Fee Component",
                "Compliance Report Submission",
                "Digital Meter Logs Checks",
                "Online Renewal Filing",
                "Liaison with CGWA"
            ]
        },
        {
            name: "Fresh NOC",
            price: "10,000",
            tagline: "Official fee for new extraction",
            popular: true,
            badgeText: "Most Requested",
            features: [
                "Govt Fee Component",
                "Groundwater Assessment",
                "MoEF&CC/SPCB Approvals Help",
                "Hydrogeological Report Preparation",
                "Priority End-to-End Filing"
            ]
        },
        {
            name: "Infrastructure & Mining",
            price: "Custom",
            tagline: "For large-scale projects",
            features: [
                "Large Scale Recharge Planning",
                "Core/Buffer Zone Analysis",
                "Geo-tagged Mapping",
                "Complex Clearance Handling",
                "Dedicated Environmental Expert"
            ]
        }
    ];

    return (
        <PricingLayout
            title="CGWA NOC Fees & Packages"
            packages={packages}
        />
    );
};

export default CGWAPricing;
