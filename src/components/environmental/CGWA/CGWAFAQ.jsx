import React from "react";
import FAQLayout from "../../common/FAQLayout";

const CGWAFAQ = () => {
    const faqs = [
        {
            question: "Why is NOC required from CGWA?",
            answer: "It is mandatory to obtain a CGWA NOC to prevent the over-exploitation of groundwater resources and to ensure the sustainability of water through regulatory compliances and artificial recharge mechanisms."
        },
        {
            question: "What is the timeline for Central Ground Water Authority NOC?",
            answer: "It generally takes around 90 days to process and approve the CGWA application, provided all documentation and hydrogeological reports conform to the guidelines."
        },
        {
            question: "What is the validity of the CGWA Borewell NOC?",
            answer: "The validity period ranges from 2 to 5 years depending on the assessment unit (Safe, Semi-Critical, Critical, Over-Exploited) that the industry or infrastructure project falls into."
        },
        {
            question: "Are there any exemptions to the CGWA NOC?",
            answer: "Some states have their own State Ground Water Authorities (SGWAs) and are not regulated by CGWA directly. Additionally, specific domestic/agricultural users might have different limits, but industrial extraction almost always requires clearance."
        },
        {
            question: "What are the essential post-NOC compliances?",
            answer: "You must install a digital water meter immediately, implement wastewater recycling, construct artificial recharge structures (if applicable), and submit regular groundwater quality monitoring reports."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Understand the legal and technical aspects of CGWA approvals."
            faqs={faqs}
            contactTitle="Need help with Groundwater Assessment?"
            contactText="Our environmental engineers and hydrogeologists can run a complete site analysis."
        />
    );
};

export default CGWAFAQ;
