import React from "react";
import FAQLayout from "../../common/FAQLayout";

const DPCCFAQ = () => {
    const faqs = [
        {
            question: "What is Delhi Pollution Control Committee Authorization?",
            answer: "It is a legal permit (Consent to Establish/Operate) issued by DPCC to ensure that industrial or trade activities do not cause harm to the environment in Delhi."
        },
        {
            question: "How has DPCC classified industrial activities?",
            answer: "Industries are classified into White, Green, Orange, and Red categories based on their pollution potential index."
        },
        {
            question: "Does the White Category require consent?",
            answer: "No, industries in the White category do not require a consent certificate, but they must submit an undertaking to DPCC."
        },
        {
            question: "What is the validity of Consent to Operate (CTO)?",
            answer: "Generally, CTO is granted for 10 years to Green category industries and 5 years to Orange category industries."
        },
        {
            question: "How long does the DPCC authorization process take?",
            answer: "The time varies based on the category and completeness of documents, but typically it takes 30-60 days for a decision on consent applications."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Understand the legal requirements of DPCC Authorization."
            faqs={faqs}
            contactTitle="Need more clarity?"
            contactText="Our environmental compliance experts are available to guide you through the DPCC categorization and filing process."
        />
    );
};

export default DPCCFAQ;
