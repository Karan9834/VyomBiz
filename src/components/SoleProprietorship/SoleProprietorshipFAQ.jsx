import React from "react";
import FAQLayout from "../common/FAQLayout";

const SoleProprietorshipFAQ = () => {
    const faqs = [
        {
            question: "What are some important features of a sole proprietorship?",
            answer: "A sole proprietorship is owned and managed by one person. Key features include unlimited liability (no legal distinction between owner and business), total control over decisions, simplified tax filing under personal income tax, and minimal regulatory requirements."
        },
        {
            question: "What are the documents required to register a sole proprietorship in India?",
            answer: "Essential documents include your Aadhaar Card, PAN Card, registered office address proof (Utility bill or Sale Deed), Rental Agreement (if applicable) with an NOC from the landlord, and your MSME/Udyam certificate."
        },
        {
            question: "What are some key benefits of sole proprietorship?",
            answer: "The primary benefits are low cost of setup, complete business control, ease of dissolution, lower compliance burden compared to companies, and the ability to retain 100% of the profits."
        },
        {
            question: "Is GST registration mandatory for a Sole Proprietorship?",
            answer: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for services) or if you are involved in inter-state trade. However, it's often recommended to get it early for business credibility and input tax credits."
        },
        {
            question: "Can I convert a Sole Proprietorship into a Private Limited Company later?",
            answer: "Yes, as your business grows, you can easily convert your proprietorship into a Partnership, LLP, or a Private Limited Company. We provide full legal support for such conversions."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about starting your sole proprietorship business in India."
            faqs={faqs}
            contactTitle="Still have questions about Proprietorship?"
        />
    );
};

export default SoleProprietorshipFAQ;
