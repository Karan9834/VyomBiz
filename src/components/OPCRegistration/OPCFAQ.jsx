import React from "react";
import FAQLayout from "../common/FAQLayout";

const OPCFAQ = () => {
    const faqs = [
        {
            question: "Who is eligible to open a One Person Company?",
            answer: "Only a natural person who is an Indian citizen and resident in India (stayed for at least 120 days in the previous year) is eligible to incorporate an OPC."
        },
        {
            question: "Is there any tax benefit for an OPC over a Sole Proprietorship?",
            answer: "Yes, an OPC can deduct several business expenses, including salary to the director, rent to the owner (if using their own property), and interests on loans, which reduces the taxable profit."
        },
        {
            question: "What is the role of a Nominee in an OPC?",
            answer: "The nominee is a person who, in the event of the death or incapacity of the sole member, takes charge of the company to ensure perpetual succession."
        },
        {
            question: "Can an OPC be converted into a Private Limited Company?",
            answer: "Yes, an OPC can voluntarily convert into a Private Limited Company at any time. Earlier, it was mandatory after reaching a certain turnover, but now it's optional."
        },
        {
            question: "What are the common annual compliances for an OPC?",
            answer: "Key compliances include filing Form AOC-4 (Financial Statements), MGT-7A (Annual Return), and DIR-3 KYC (Director's KYC) annually."
        }
    ];

    return (
        <FAQLayout
            title="OPC FAQs"
            subtitle="Clear your doubts about starting a One Person Company."
            faqs={faqs}
            contactTitle="Still Confused about OPC?"
            contactText="Our specialized business consultants are here to help you choose the right legal structure for your solo venture."
        />
    );
};

export default OPCFAQ;
