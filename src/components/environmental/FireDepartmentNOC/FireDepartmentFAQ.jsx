import React from "react";
import FAQLayout from "../../common/FAQLayout";

const FireDepartmentFAQ = () => {
    const faqs = [
        {
            question: "Is it necessary to obtain Fire Department NOC?",
            answer: "Yes, for high-rise buildings (above 15m), commercial units, and educational institutions, it is mandatory under state fire safety acts."
        },
        {
            question: "How long is the Fire Department NOC valid?",
            answer: "Generally, it is valid for 3 years for commercial buildings and 5 years for residential buildings, after which it must be renewed."
        },
        {
            question: "What is the difference between Provisional and Final NOC?",
            answer: "Provisional NOC is issued during the plan approval stage, while Final NOC is issued after the completion of the building and fire safety installation verification."
        },
        {
            question: "What are the penalties for non-compliance?",
            answer: "Non-compliance can lead to heavy fines, sealing of the premises, and cancellation of business/trade licenses."
        },
        {
            question: "Can VyomBiz help with inspection coordination?",
            answer: "Yes, our experts coordinate with the fire department for on-site inspections and ensure all equipment is functionally compliant before the visit."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Fire Department NOC."
            faqs={faqs}
            contactTitle="Still have questions?"
            contactText="Our fire safety experts are ready to help you navigate the complexities of NOC procurement."
        />
    );
};

export default FireDepartmentFAQ;
