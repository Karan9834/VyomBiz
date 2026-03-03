import React from "react";
import FAQLayout from "../common/FAQLayout";

const PartnershipFAQ = () => {
    const faqs = [
        {
            question: "Is registration of a Partnership Firm mandatory in India?",
            answer: "No, under the Indian Partnership Act, 1932, registration is optional. However, unregistered firms cannot sue third parties or other partners for enforcing rights arising from a contract."
        },
        {
            question: "What is a Partnership Deed?",
            answer: "It is a written legal document that outlines the rights, duties, and profit-sharing ratios of all partners. It must be signed by all partners and notarized or registered."
        },
        {
            question: "How many partners are allowed in a Partnership Firm?",
            answer: "A minimum of two partners are required. The maximum limit for a partnership firm is 50 partners, as per the Companies (Miscellaneous) Rules, 2014."
        },
        {
            question: "Can minor be a partner in a firm?",
            answer: "A minor can be admitted only to the benefits of a partnership with the consent of all other partners, but they cannot be made personally liable for the debts of the firm."
        },
        {
            question: "How is a Partnership Firm taxed?",
            answer: "The firm itself is taxed at a flat rate (typically 30% + surcharge & cess). Salaries and interest paid to partners are deductible for the firm but taxable in the hands of partners."
        }
    ];

    return (
        <FAQLayout
            title="Partnership FAQ"
            subtitle="Quick answers to common questions about partnership firms."
            faqs={faqs}
            contactTitle="Need a Specialized Partnership Deed?"
            contactText="Our legal experts tailor deeds to fit complex profit-sharing models and operation hierarchies. Get a deed that protects your interests."
        />
    );
};

export default PartnershipFAQ;
