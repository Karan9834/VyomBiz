import React from "react";
import FAQLayout from "../../common/FAQLayout";

const EWasteDismantlingFAQ = () => {
    const faqs = [
        {
            question: "What is the dismantling of e-waste?",
            answer: "An E-waste dismantling license is an authorization that allows a business to manually or mechanically dismantle electronic waste into parts like printed circuit boards, plastics, and batteries."
        },
        {
            question: "Why is an e-waste license for dismantling crucial?",
            answer: "It authorizes you to legally separate hazardous components and ensures your activity protects the environment from toxic spills or incorrect management."
        },
        {
            question: "What is manual dismantling?",
            answer: "The first step of the dismantling operation is opening electrical equipment manually with tools like screwdrivers and wire cutters for physical segregation of each part."
        },
        {
            question: "How do we separate e-waste from waste after getting the license?",
            answer: "Parts with no hazardous material (like aluminium/steel) are sent to recyclers, while hazardous elements (PCBs, batteries) go to authorized e-waste recyclers."
        },
        {
            question: "Is dismantling of e-waste mandatory before recycling?",
            answer: "Yes, it is practically mandatory because mixed e-waste cannot directly go to a recycler without separating non-recyclable or highly toxic components first."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Learn more about E-Waste Dismantling authorization."
            faqs={faqs}
            contactTitle="Have questions about E-Waste Licensing?"
            contactText="Our experts can assist you with your queries."
        />
    );
};

export default EWasteDismantlingFAQ;
