import React from "react";
import FAQLayout from "../../common/FAQLayout";

const ConsentToEstablishFAQ = () => {
    const faqs = [
        {
            question: "What is consent to operate from pollution control board?",
            answer: "Consent to operate (CTO) is the sanction from the concerned authority for the discharge of an effluent or emission of air pollutants into the atmosphere. It comes after CTE."
        },
        {
            question: "Is consent to establish from pollution control board mandatory?",
            answer: "Yes, under the Water Act and Air Act, NO person shall establish or operate any industrial plant without the previous consent of the State Board."
        },
        {
            question: "What is the full form of PCB consent?",
            answer: "PCB Consent refers to Pollution Control Board Consent, consisting of Consent to Establish (CTE) and Consent to Operate (CTO)."
        },
        {
            question: "What is the validity of consent to establish?",
            answer: "The CTE is generally issued for 3 to 5 years. For micro and small-scale green category projects, the validity combined with CTO can be up to 15 years."
        },
        {
            question: "What is the difference between CTO and CTE?",
            answer: "CTE (Consent to Establish) is obtained before setting up the industry. CTO (Consent to Operate) is obtained once the plant is established, allowing them to start operations."
        },
        {
            question: "Which entities are involved in the overall consent management?",
            answer: "The State Pollution Control Board (SPCB) in states or the Pollution Control Committee (PCC) in Union Territories are responsible for granting these consents."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Learn more about CTE from SPCB."
            faqs={faqs}
            contactTitle="Not sure if you need a CTE?"
            contactText="Our experts can classify your industry and guide you."
        />
    );
};

export default ConsentToEstablishFAQ;
