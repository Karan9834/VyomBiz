import React from 'react';
import PricingLayout from '../../common/PricingLayout';

const UPPCBPricing = () => {
    const packages = [
        {
            name: "Consultation & Preparation",
            price: "2,999",
            tagline: "Expert guidance and consultation",
            features: [
                "Full Initial Consultation",
                "Guidance on UPPCB Requirements",
                "Application Document Prep",
                "Pre-application Audit Checks",
                "Basic Liaison with Officials"
            ]
        },
        {
            name: "Filing & Follow-up",
            price: "4,999",
            tagline: "Complete Turnkey Submissions",
            popular: true,
            badgeText: "Most Popular",
            features: [
                "End-to-end Application Filing",
                "Regular Liaison and Follow-up",
                "Resolving Objections",
                "Final Certificate Delivery",
                "Post-compliance Briefing"
            ]
        },
        {
            name: "Audit & Returns",
            price: "5,999",
            tagline: "For operational units",
            features: [
                "Detailed Compliance Audit",
                "Annual Returns Filing",
                "Renewal Submissions Alerts",
                "Priority Dedicated Manager",
                "Real-time Tracking Updates"
            ]
        }
    ];

    return (
        <PricingLayout
            title="UP Pollution Control Board Services"
            packages={packages}
        />
    );
};

export default UPPCBPricing;
