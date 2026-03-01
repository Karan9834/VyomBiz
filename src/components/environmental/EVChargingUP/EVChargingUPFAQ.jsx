import React from "react";
import FAQLayout from "../../common/FAQLayout";

const EVChargingUPFAQ = () => {
    const faqs = [
        {
            question: "How do I get permission for an EV charging station license in UP?",
            answer: "You must initially submit an online application on the Ministry of Power, Uttar Pradesh portal, undergo land inspection, pay the fees, and receive the license from the nodal authority."
        },
        {
            question: "What is the minimum investment to qualify for a capital subsidy for EV charging stations?",
            answer: "The infrastructure cost typically ranges between Rs. 6,00,000 to 15,00,000. Subsidy qualifications depend on state-level FAME-II criteria and public accessibility."
        },
        {
            question: "Is there any subsidy on EV for those who have an EV charging station license in UP?",
            answer: "The government announced the grant of Rs. 8000 crores under FAME Phase II to support public fast charging. UP policies offer distinct tariff exemptions."
        },
        {
            question: "How much land is required for an EV charging station?",
            answer: "Typically, 1 to 2 standard parking spots for Level 2 setups. But a comprehensive station with rapid chargers requires more space for transformers and cabling."
        },
        {
            question: "What is the difference between a charging station and a swapping station?",
            answer: "Charging stations charge the battery while in the vehicle (takes 30 mins to hours), while swapping stations exchange the battery for a fully charged one (takes 3 to 5 minutes)."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Understand EV Charging Licensing in UP."
            faqs={faqs}
            contactTitle="Thinking of starting an EV Station?"
            contactText="Get in touch to learn about subsidies and setup."
        />
    );
};

export default EVChargingUPFAQ;
