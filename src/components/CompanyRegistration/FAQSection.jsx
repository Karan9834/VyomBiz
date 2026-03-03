import React from "react";
import FAQLayout from "../common/FAQLayout";

const FAQSection = () => {
    const faqs = [
        {
            question: "How long does it take to register a Private Limited Company?",
            answer: "Typically, it takes 7 to 10 working days to get the Certificate of Incorporation, depending on the ROC processing time and name availability."
        },
        {
            question: "Can one person start a Private Limited Company?",
            answer: "No, a Private Limited Company requires at least two directors and two shareholders. If you want to start alone, you can opt for a One Person Company (OPC)."
        },
        {
            question: "Is it mandatory to have a commercial office address?",
            answer: "No, you can register your company using a residential address as its registered office. You just need a utility bill and an NOC from the owner."
        },
        {
            question: "What are the compliance requirements after incorporation?",
            answer: "Major post-incorporation compliances include appointing an auditor, filing INC-20A (Commencement of Business), and maintaining statutory registers."
        },
        {
            question: "Can a foreign national be a director in an Indian company?",
            answer: "Yes, a foreign national can be a director. However, at least one director on the board must be a resident of India (stayed in India for 182+ days)."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about starting your Pvt. Ltd. company in India."
            faqs={faqs}
            contactTitle="Still have questions about Pvt Ltd?"
            contactText="Our legal experts are ready to help you navigate the complexities of business registration and compliance."
        />
    );
};

export default FAQSection;
