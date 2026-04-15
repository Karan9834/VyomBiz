import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const StatePollutionControlBoardPCBOC = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="State Pollution Control Board"
                    heroTitleSuffix="(SPCB) - NOC"
                    heroDescription="Industries are required to obtain the NOC from the Pollution control department before starting their business. Contact Corpbiz and get assistance in obtaining the NOC from the pollution control board."
                    stats={[
                        { count: "1 Lakh+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "SPCB NOC —",
                        highlightTitle: "An Overview",
                        description: [
                            "Every individual who wants to operate or set up an industrial plant/or any project needs to acquire Consent to operate (CTO) from the State Pollution control board. To set up an outlet one should comply with the provision enumerated under section 25 of the water prevention and control act, 1974. If anyone wants to operate an industrial plant, he needs to comply with the rules mentioned U/s 21 of the Air prevention and control of pollution act, 1981.",
                            "Consent to establish is the form of Consent required by the Authority to set up or run any manufacturing industry. This is considered the primary authority to set up any air/water or noise pollution industry.",
                            "Consent to operate is required to ensure that the industry should be maintained or maintains the standards related to operations. All the industries need to form this type of Consent to operate."
                        ]
                    }}
                    advantages={{
                        title: "Types & Benefits",
                        subtitle: "Understanding NOC Categories",
                        list: [
                            { title: "Consent to Establish (CTE)", desc: "Required to set up or run any manufacturing industry, acting as the primary authority for air, water, or noise pollution." },
                            { title: "Consent to Operate (CTO)", desc: "Required to ensure the industry maintains operational standards. Crucial even for trail production." },
                            { title: "Red Category", desc: "For highly polluting industries, with a validity period of 5 years." },
                            { title: "Orange Category", desc: "For moderately polluting industries, with a validity period of 10 years." },
                            { title: "Green & White Categories", desc: "For less polluting industries, requiring less rigorous compliance." }
                        ]
                    }}
                    eligibility={{
                        title: "Eligibility Criteria",
                        subtitle: "Who can obtain the NOC?",
                        list: [
                            { title: "Demarcated areas", desc: "Industries must be set up in properly demarcated areas." },
                            { title: "Plant & Machinery limits", desc: "The Industries should not exceed specific plant and machinery limits as per the board (e.g., Rs. 1 crore for certain plants)." },
                            { title: "No toxic discharge", desc: "No toxic and hazardous waste should be unsafely discharged from the industry." },
                            { title: "Eligible Sectors", desc: "Battery waste, Manufacturing, Health care, Solid waste, Plastic waste, E-waste, Recyclers, Hotel Industry." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "To obtain NOC from SPCB",
                        list: [
                            { title: "Layout Plan", desc: "Layout design, industry or manufacturer's layout plan including effluent sewage treatment and emissions sources." },
                            { title: "Equipment Info", desc: "Information on the DG set, including capacity, and instruments used for pollution control." },
                            { title: "Process Flow", desc: "Information about the process flow displayed on a sheet." },
                            { title: "Analysis Reports", desc: "Solid waste, effluent, hazardous wastes, fuel gases analysis report, and quality report of Air effluents." },
                            { title: "Fee & Diagrams", desc: "Demand draft for the fee, budgeting for water calculations, and the monitoring facility in diagrammatic form." }
                        ]
                    }}
                    process={{
                        title: "Procedure to Obtain NOC",
                        subtitle: "Step-by-step workflow",
                        steps: [
                            { step: "1", title: "Online Application", desc: "Filing through the online consent management and monitoring system with relevant permits, fees, and the CTO/CTE forms." },
                            { step: "2", title: "Documentation Submission", desc: "Uploading the complete paperwork, test reports, and required compliance documents." },
                            { step: "3", title: "Inspection by Officer", desc: "An officer will inspect the industrial unit before awarding the NOC to verify structural adequacy and pollution control measures." },
                            { step: "4", title: "Sample Inspection", desc: "After the initial CTO, a sample will be inspected within three months to verify compliance with Air and Water Pollution rules." },
                            { step: "5", title: "Grant or Revocation", desc: "If compliant, the license remains valid. If non-compliant, the license will be revoked and cancelled." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about SPCB NOC"
                    faqs={[
                        {
                            question: "What do you understand by Consent to Operate?",
                            answer: "The ability to operate is an essential prerequisite for any manufacturing organization. Such permission would be required to carry out any manufacturing-related activity or production."
                        },
                        {
                            question: "What is the meaning of Consent to establish?",
                            answer: "Consent to establish is the primary authority or permission required before setting up any industry, plant, or process that has the potential to cause air, water, or noise pollution."
                        },
                        {
                            question: "What is the difference between CTE and CTO?",
                            answer: "CTE (Consent to Establish) is obtained before starting the construction of an industry, whereas CTO (Consent to Operate) is obtained before the actual commencement of production or operations."
                        },
                        {
                            question: "How do I apply for pollution NOC?",
                            answer: "You can apply through the respective State Pollution Control Board's online consent management and monitoring system by submitting the required application forms, documents, and fees."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default StatePollutionControlBoardPCBOC;

