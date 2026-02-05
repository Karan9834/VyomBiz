import React from "react";
import FAQLayout from "../common/FAQLayout";

const PublicFAQ = () => {
    const faqs = [
        {
            question: "How many directors are needed for a Public Limited Company?",
            answer: "A minimum of three directors are required for a Public Limited Company. There is no maximum limit, although the Articles of Association (AoA) may specify one."
        },
        {
            question: "Is there a minimum paid-up capital requirement?",
            answer: "As per the latest Companies Act amendments, there is no specific minimum paid-up capital requirement to start a Public Company. However, substantial capital is usually recommended for business operations."
        },
        {
            question: "Can a Private Limited Company be converted into a Public Limited Company?",
            answer: "Yes, a Private Limited Company can be converted into a Public Limited Company by altering its MoA and AoA and following the procedures prescribed under the Companies Act."
        },
        {
            question: "What is the difference between a 'Listed' and 'Unlisted' Public Company?",
            answer: "A listed public company has its shares traded on a recognized stock exchange (like NSE or BSE). An unlisted public company is not listed on an exchange but still has the structure of a public company."
        },
        {
            question: "What are the annual compliance requirements?",
            answer: "Public companies have strict compliance needs, including annual board meetings, AGM, filing of annual returns (MGT-7), financial statements (AOC-4), and internal audits."
        }
    ];

    return (
        <FAQLayout
            title="Enterprise FAQ"
            subtitle="Get clear answers to complex corporate questions."
            faqs={faqs}
            contactTitle="Need Specialized Corporate Structuring?"
            contactText="Our corporate lawyers and CAs specialize in complex public setups and IPO readiness. Let's build your enterprise legacy together."
        />
    );
};

export default PublicFAQ;
