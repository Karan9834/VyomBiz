import React from "react";
import FAQLayout from "../../common/FAQLayout";

const NOCPCBFAQ = () => {
    const faqs = [
        {
            question: "What is NOC Pollution Control Board?",
            answer: "It is a mandatory legal consent (CTE/CTO) issued by the State Pollution Control Board before an industry can establish or operate, ensuring it meets environmental safety standards."
        },
        {
            question: "What are the common industrial categorizations?",
            answer: "CPCB classifies industries into Red, Orange, Green, and White categories based on their pollution index and environmental impact."
        },
        {
            question: "When should I apply for renewal of the Pollution Board certificate?",
            answer: "Ideally, you should apply for renewal at least 60-90 days before the expiry of your existing 'Consent to Operate'."
        },
        {
            question: "Is there any provision for exemption?",
            answer: "Only industries falling under the 'White Category' (Pollution Index 0-20) are generally exempt from the requirement of obtaining a consent certificate, though an undertaking may still be required."
        },
        {
            question: "What is the validity of the Pollution Control Board NOC?",
            answer: "Validity varies by state and industry category, typically ranging from 3 years for Red category to 10 years for Green category industries."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Learn about the essential compliances for SPCB/CPCB NOC."
            faqs={faqs}
            contactTitle="Have specific state queries?"
            contactText="Environmental laws differ by state. Contact our regional compliance experts for state-specific guidance."
        />
    );
};

export default NOCPCBFAQ;
