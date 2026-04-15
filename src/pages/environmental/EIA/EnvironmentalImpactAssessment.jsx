import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EnvironmentalImpactAssessment = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental Impact"
                    heroTitleSuffix="Assessment (EIA)"
                    heroDescription="Is your project ready for a sustainable future? Start your Environmental Impact Assessment today with Corpbiz and ensure your impact on the environment is positive!"
                    stats={[
                        { count: "43K+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Environmental Impact Assessment —",
                        highlightTitle: "An Overview",
                        description: [
                            "Environmental Impact Assessment (EIA) is a tool used to assess the potential impact of a project or development proposal. These regulations ensure that decision-makers evaluate environmental consequences before starting the project.",
                            "The EIA evaluates the potential ecological impacts, aiming to avoid, reduce, or offset negative effects. To obtain Environmental Clearance (EC), you must submit a detailed EIA report along with an Environmental Management Plan (EMP).",
                            "Under the Ministry of Environment, Forest, and Climate Change, acquiring environmental clearance is mandatory for the establishment of a new industry or expansion of an existing one."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of EIA",
                        subtitle: "Why conducting an EIA is critical",
                        list: [
                            { title: "Ensures Compliance", desc: "Conducting an EIA ensures compliance with environmental regulations, significantly reducing legal and regulatory risks." },
                            { title: "Risk Identification", desc: "It identifies potential risks and liabilities, helping organizations take necessary steps to minimize negative impacts." },
                            { title: "Fosters Transparency", desc: "EIA fosters transparency and trust among stakeholders, encouraging active participation and building confidence." },
                            { title: "Resource Protection", desc: "Helps protect and preserve natural resources, ecosystems, and promotes sustainable development." },
                            { title: "Community Engagement", desc: "Encourages community engagement, factoring in diverse perspectives to improve project decision-making." }
                        ]
                    }}
                    eligibility={{
                        title: "Participants in EIA",
                        subtitle: "Key stakeholders",
                        list: [
                            { title: "Project Proponent", desc: "The government or private agency initiating the proposed project." },
                            { title: "Decision Maker", desc: "The designated individual or authoritative group that decides on the proposed project." },
                            { title: "Assessor Agency", desc: "The agency responsible for preparing the Environmental Impact Statement (EIS)." },
                            { title: "Reviewer", desc: "Individuals, agencies, or boards tasked with reviewing and monitoring the project." },
                            { title: "Expert Consultants", desc: "Professionals who assist in establishing environmental measures, preparing the EMP, and creating summaries." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "For Environmental Impact Assessment",
                        list: [
                            { title: "Project Information", desc: "Project name, location, and site details including proposed area breakup and water requirements." },
                            { title: "Resource & Hazards Info", desc: "Details of natural resources to be utilized, waste generation estimates, and harmful substances." },
                            { title: "Pollution Details", desc: "Types of pollution released (air, water, ground), noise, vibration, light, heat emissions, and mitigation measures." },
                            { title: "Risk & Sensitive Areas", desc: "Analysis of potential accident risks, cumulative effects, and details of nearby sensitive zones." },
                            { title: "Supporting Proof", desc: "Site/Layout plan, proof of land ownership, proof of electricity/water connection, and existing machinery." }
                        ]
                    }}
                    process={{
                        title: "Procedure for EIA",
                        subtitle: "How to Apply and Conduct EIA",
                        steps: [
                            { step: "1", title: "Screening & Scoping", desc: "Screening determines if a full assessment is needed. Scoping identifies impacts to be assessed considering legal requirements and expert input." },
                            { step: "2", title: "Assessment & Evaluation", desc: "Analyzes environmental impacts and recommends alternative solutions to mitigate adverse effects." },
                            { step: "3", title: "Reporting the EIS", desc: "Prepares the Environmental Impact Statement (EIS), including an Environmental Management Plan (EMP) and a non-technical summary." },
                            { step: "4", title: "Review & Decision", desc: "Reviews the EIS based on the terms of reference and feedback from public participation, leading to the final approval decision." },
                            { step: "5", title: "Monitoring & Compliance", desc: "After approval, continuous monitoring of project implementation and mitigation measures as outlined in the EMP." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about EIA"
                    faqs={[
                        {
                            question: "Is EIA Environmental Impact Assessment Mandatory in India?",
                            answer: "Yes, under the Environmental Protection Act, 1986, conducting an EIA is mandatory for 29 categories of developmental activities involving investments of ₹50 crores or more."
                        },
                        {
                            question: "What do you mean by Environmental Social Impact Assessment (ESIA)?",
                            answer: "ESIA evaluates the potential environmental and social impacts of a proposed project. It predicts how the project might affect the environment and local communities before implementation."
                        },
                        {
                            question: "What is the main purpose of environmental impact assessment?",
                            answer: "The primary purpose is to balance industrial growth with environmental preservation by evaluating and mitigating negative ecological consequences prior to project initiation."
                        },
                        {
                            question: "Who is responsible for environmental impact assessment in India?",
                            answer: "The Ministry of Environment, Forest and Climate Change (MoEFCC) governs EIA at the central level, working along with State Environment Impact Assessment Authorities (SEIAA) at the state level."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default EnvironmentalImpactAssessment;

