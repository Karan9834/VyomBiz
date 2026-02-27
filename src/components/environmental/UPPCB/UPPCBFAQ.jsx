import React from 'react';
import FAQLayout from '../../common/FAQLayout';

const UPPCBFAQ = () => {
    const faqs = [
        {
            question: "What is the purpose of the Uttar Pradesh Pollution Control Board?",
            answer: "The UPPCB is a legal organization that ensures the implementation of environmental laws and regulations within Uttar Pradesh. Its objective is to manage and reduce air and water pollution, acting as an enlightening tool for factories and industries."
        },
        {
            question: "How do I complain about the air pollution?",
            answer: "Individuals or organizations can file complaints regarding air or water pollution through the UPPCB's official online grievance portal, by visiting one of their 25 regional offices, or via designated helpline numbers and email addresses provided by the UP Government."
        },
        {
            question: "Who needs the UPPCB consent certificate?",
            answer: "Any business entity ranging from manufacturing units, health care establishments, traders, to e-waste and solid waste management entities operating in UP needs to obtain Consent to Establish (CTE) and Consent to Operate (CTO) depending on their pollution index."
        },
        {
            question: "How does UPPCB keep a check on the level of air and water pollution?",
            answer: "The UPPCB establishes research centres for testing air and water toxicity, continuously monitors emissions, conducts field inspections, and strictly regulates industries contributing pollution to vital resources like the Ganga stream under the Ganga Activity Plan."
        },
        {
            question: "What are the regulations associated with UPPCB working for the welfare of Nature?",
            answer: "The Board operates and enforces key environmental acts including the Water (Prevention and Control of Pollution) Act 1974, Air (Prevention and Control of Pollution) Act 1981, and the overall Environmental Protection Act, ensuring strict compliance across industries."
        },
        {
            question: "Where is the headquarters of the Uttar Pradesh Pollution Control Board?",
            answer: "The headquarters of the Uttar Pradesh Pollution Control Board (UPPCB) is located in Lucknow, the capital city of Uttar Pradesh."
        },
        {
            question: "What are the categorizations of Industrial Sectors under the Uttar Pradesh Pollution Control Board?",
            answer: "Industries are categorized based on their Pollution Index Scores: White (0-20, least polluting), Green (21-40, moderate), Orange (41-59, high), and Red (Above 60, excessively polluting and highly restricted)."
        },
        {
            question: "What are the Benefits of UPPCB Authorization/NOC?",
            answer: "The primary benefits include promoting sustainable development, conserving natural resources, ensuring efficient waste management, raising consumer eco-awareness, and fostering a legally compliant, eco-friendly work environment."
        },
        {
            question: "How do you get a pollution control board certificate in Uttar Pradesh?",
            answer: "The process involves five steps: 1) Filling out the common application form online. 2) Submitting requisite documents. 3) Paying the consolidated fee. 4) Undergoing field verification and inspection. 5) Grant of the NOC/CTE within approximately 90 days."
        },
        {
            question: "What is the validity of the Uttar Pradesh Pollution Control Board Certificate?",
            answer: "The Uttar Pradesh Pollution Control Board authorization (including CTE/NOC) is typically valid for a period of five (5) to ten (10) years from the date of its issuance, depending upon the category of the industry."
        },
        {
            question: "Who is the pollution control officer?",
            answer: "A Pollution Control Officer is an authorized administrative official appointed by the UPPCB. They are responsible for conducting field inspections, verifying compliance reports, enforcing environmental regulations, and ensuring industries adhere to emission norms."
        }
    ];

    return (
        <FAQLayout
            faqs={faqs}
            title="UPPCB Consent Frequently Asked Questions"
            subtitle="Get quick answers regarding UP Pollution Control Board approvals"
        />
    );
};

export default UPPCBFAQ;
