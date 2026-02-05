import React from "react";
import PricingLayout from "../common/PricingLayout";

const LLPPricing = () => {
    const packages = [
        {
            name: "Basic",
            price: "2,499",
            tagline: "Standard setup for partners",
            features: [
                "2 Digital Signatures (DSC)",
                "2 Designated Partner ID (DPIN)",
                "LLP Name Reservation",
                "Verification of Documents",
                "Filing of Incorporation Forms",
                "Certificate of Incorporation",
                "Zero Balance Current Account"
            ]
        },
        {
            name: "Standard",
            price: "5,999",
            tagline: "Most chosen by professionals",
            popular: true,
            badgeText: "Recommended",
            features: [
                "Everything in Basic",
                "Drafting of LLP Agreement",
                "Filing of LLP Form 3",
                "LLP PAN & TAN Card",
                "GST Registration",
                "MSME/Udyam Registration",
                "Professional Tax Reg (Selected States)"
            ]
        },
        {
            name: "Premium",
            price: "15,999",
            tagline: "Total protection for your LLP",
            features: [
                "Everything in Standard",
                "Trademark Registration (1 Class)",
                "1 Year LLP Annual Filing",
                "Income Tax Return Filing (1 Year)",
                "Legal Consultation (3 Sessions)",
                "Dedicated Relationship Manager",
                "Startup India Recognition"
            ]
        }
    ];

    return (
        <PricingLayout
            title="Unbeatable LLP Packages"
            packages={packages}
        />
    );
};

export default LLPPricing;
