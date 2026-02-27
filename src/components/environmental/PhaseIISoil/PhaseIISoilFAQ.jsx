import React from "react";
import FAQLayout from "../../common/FAQLayout";

const PhaseIISoilFAQ = () => {
    const faqs = [
        {
            question: "What is the structure of a phase II soil and groundwater investigations?",
            answer: "It generally includes a geophysical survey, fieldwork coordination, drilling and sampling, laboratory analysis, technical risk assessment, and the preparation of a final report by a certified geologist."
        },
        {
            question: "Do You Need an Environmental Site Assessment before Phase II?",
            answer: "Yes, a Phase I ESA is mostly required first, as it identifies the Recognized Environmental Conditions (RECs) that the Phase II ESA must then address and quantify."
        },
        {
            question: "What triggers a Phase II Environmental Site Assessment?",
            answer: "It is triggered when previous Phase I records, historical maps, or inspections show potential contamination like underground storage tanks, chemical spills, or past industrial use."
        },
        {
            question: "Is soil gas sampling using vapor pins an effective method?",
            answer: "Yes, it is highly effective for identifying volatile organic compounds (VOCs) that may migrate into a building's foundations or indoor air, a critical part of Phase II risk assessment."
        },
        {
            question: "What is the timeline of Phase II Groundwater and Soil Investigations?",
            answer: "Sample collection typically occurs within 14 days, lab analysis takes about 7 days, and the final certified report is prepared within 4 weeks from project start."
        }
    ];

    return (
        <FAQLayout
            title="Frequently Asked Questions"
            subtitle="Learn more about Phase II Site Assessments."
            faqs={faqs}
            contactTitle="Need clarity on RECs and Contamination Risks?"
            contactText="Our geologists and environmental pros can evaluate your site."
        />
    );
};

export default PhaseIISoilFAQ;
