import React from "react";
import FAQLayout from "../common/FAQLayout";

const LLPFAQ = () => {
    const faqs = [
        {
            question: "What is the difference between an LLP and a Partnership Firm?",
            answer: "In an LLP, partners have limited liability and the entity is a separate legal person distinct from its owners. In a traditional partnership, partners have unlimited liability."
        },
        {
            question: "Is audit mandatory for all LLPs?",
            answer: "No, audit is mandatory only if the annual turnover exceed ₹40 Lakhs or the contribution exceeds ₹25 Lakhs."
        },
        {
            question: "Can anyone become a partner in an LLP?",
            answer: "Yes, any individual or body corporate (including foreign nationals and foreign companies) can become a partner in an LLP."
        },
        {
            question: "Is it possible to convert a Partnership Firm into an LLP?",
            answer: "Yes, the LLP Act allows for the conversion of a partnership firm or a private limited company into an LLP."
        },
        {
            question: "What is the role of an LLP Agreement?",
            answer: "An LLP agreement is a legal document that defines the rights, duties, and obligations of the partners towards each other and the LLP."
        }
    ];

    return (
        <FAQLayout
            title="LLP FAQs"
            subtitle="Clear your doubts about Limited Liability Partnerships."
            faqs={faqs}
            contactTitle="Ready to set up your LLP?"
            contactText="Join thousands of professionals who have successfully built their brand with our effortless registration process."
        />
    );
};

export default LLPFAQ;
