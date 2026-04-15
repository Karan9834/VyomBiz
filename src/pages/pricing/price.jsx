import React, { useEffect } from "react";
import PricingLayout from "../../components/common/PricingLayout";

const Price = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allPricingPackages = [
        {
            name: "Basic Registration",
            price: "1,999",
            originalPrice: "3,999",
            tagline: "For starting out",
            features: [
                "Name Approval",
                "Incorporation Certificate",
                "PAN and TAN",
                "Basic Support"
            ],
            buttonText: "Select Plan"
        },
        {
            name: "Standard Package",
            price: "4,999",
            originalPrice: "8,999",
            tagline: "Most Popular",
            popular: true,
            features: [
                "Everything in Basic",
                "GST Registration",
                "MSME Certificate",
                "1 Year Free Compliance Consulting"
            ],
            buttonText: "Select Plan"
        },
        {
            name: "Premium Corporate",
            price: "9,999",
            originalPrice: "15,999",
            tagline: "Complete Solution",
            features: [
                "Everything in Standard",
                "Trademark Registration",
                "Priority Support",
                "Dedicated Account Manager"
            ],
            buttonText: "Contact Us"
        }
    ];

    return (
        <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mb-8 text-center">
                <h1 className="text-4xl lg:text-5xl font-black text-[#072b47] tracking-tight">Our Pricing Plans</h1>
                <p className="mt-4 text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                    Transparent, competitive, and tailored to your business needs with absolutely no hidden charges.
                </p>
            </div>

            <PricingLayout
                title=""
                subtitle="All prices listed are subject to 18% GST and government fees as applicable."
                packages={allPricingPackages}
            />
        </div>
    );
};

export default Price;

