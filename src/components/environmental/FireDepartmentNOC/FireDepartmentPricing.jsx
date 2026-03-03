import React from "react";
import PricingLayout from "../../common/PricingLayout";

const FireDepartmentPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "2,999",
            tagline: "Essential for small premises",
            features: [
                "Fire Safety Assessment",
                "Basic Document Checklist",
                "Online Application Filing",
                "Email Support",
                "Expert Consultation"
            ]
        },
        {
            name: "Standard",
            price: "5,999",
            tagline: "Most popular for businesses",
            popular: true,
            badgeText: "Best Value",
            features: [
                "Everything in Basic",
                "Detailed Documentation Support",
                "Inspection Coordination",
                "Compliance Audit",
                "Priority Processing"
            ]
        },
        {
            name: "Premium",
            price: "12,999",
            tagline: "End-to-end liaison support",
            features: [
                "Everything in Standard",
                "On-site Inspection Support",
                "Statutory Annual Returns",
                "Renewal Management",
                "Dedicated Compliance Manager"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Fire NOC Service Packages"
            packages={packages}
        />
    );
};

export default FireDepartmentPricing;
