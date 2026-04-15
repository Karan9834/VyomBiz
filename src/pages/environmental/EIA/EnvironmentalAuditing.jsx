import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EnvironmentalAuditing = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental"
                    heroTitleSuffix="Auditing"
                    heroDescription="Embrace sustainability to reduce carbon footprints with hassle-free & seamless environmental auditing services from Corpbiz. We have successfully conducted environmental auditing for 2500+ Projects."
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
                        title: "Environmental Auditing —",
                        highlightTitle: "An Overview",
                        description: [
                            "Environmental auditing is a systematic assessment conducted by an environmental audit company to facilitate compliance with environmental policies.",
                            "It helps evaluate risks and identify sources of pollution processes and activities. As a management tool, environmental auditing enables industries to address possible dangers.",
                            "A sustainability audit also evaluates raw material usage, monitors environmental performance, identifies areas for improvement, and implements sustainable practices."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of Sustainability Audit",
                        subtitle: "Why environmental auditing matters",
                        list: [
                            { title: "Compliance Assurance", desc: "Helps businesses meet their sustainability goals and comply with legal standards, lowering risks of fines." },
                            { title: "Cost Savings", desc: "Discovers incompetencies in energy consumption and waste management, minimizing utility bills and material consumption costs." },
                            { title: "Risk Management", desc: "Identifies potential environmental risks, including contamination or inappropriate waste removal, to implement preventive steps." },
                            { title: "Resource Optimization", desc: "Indicates spots that help use resources like water, energy, and raw materials efficiently to improve functional effectiveness." },
                            { title: "Enhanced Stature", desc: "Demonstrates a proactive approach towards sustainability, boosting business credibility and trust with stakeholders." }
                        ]
                    }}
                    eligibility={{
                        title: "Eligibility Criteria",
                        subtitle: "For Environmental Auditing in India",
                        list: [
                            { title: "Organizational Readiness", desc: "Must have necessary environmental permits, licenses, and compliance records updated." },
                            { title: "Management Systems", desc: "Implementation of Environmental Management System (EMS), such as ISO 14001, and pollution control equipment." },
                            { title: "Auditor Qualifications", desc: "Auditors need a degree in environmental science, relevant certification (ISO 14001 Lead Auditor), and 3-5 years of experience." },
                            { title: "Data Availability", desc: "Records related to waste disposal, recycling, water/energy consumption, and emission levels must be present." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "For the auditing process",
                        list: [
                            { title: "Permits & Licenses", desc: "Copies of mandatory environmental permits, licenses, and compliance records of environmental regulations." },
                            { title: "EMS Details", desc: "Environmental Management System details, including ISO 14001 certification." },
                            { title: "Site Plans & Records", desc: "Site plans, layout blueprints, and operational records on energy and water consumption." },
                            { title: "Monitoring Data", desc: "Data on air quality, emission levels, water quality reports, and past data on accidents or spills." },
                            { title: "Reports & Logs", desc: "Report on sustainability practices, chemical inventory list, internal audit reports, and equipment maintenance logs." }
                        ]
                    }}
                    process={{
                        title: "How to Conduct a Green Audit?",
                        subtitle: "Step-by-step procedure",
                        steps: [
                            { step: "1", title: "Developing an Audit Plan", desc: "Outlining the activities, responsibilities, and timelines for the audit to ensure an organized approach." },
                            { step: "2", title: "Examining Policies and Regulations", desc: "Evaluation of the business's Environmental Protection Policy and other relevant state and national laws." },
                            { step: "3", title: "Collecting Information and Data", desc: "Gathering relevant data on environmental practices, resource utilization, and compliance metrics." },
                            { step: "4", title: "Performance Assessment", desc: "Examining compliance with environmental standards and analyzing data to define strengths and improvement areas." },
                            { step: "5", title: "Audit Report Finding", desc: "Submitting findings and recommendations to the management, offering actionable insights for improved adherence." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about Environmental Auditing"
                    faqs={[
                        {
                            question: "What is Environmental Auditing?",
                            answer: "Environmental auditing is an in-depth evaluation process to determine a business's sustainability practices in compliance with the relevant laws and guidelines. It investigates resource management, waste disposal, and operational practices' overall impact on the environment."
                        },
                        {
                            question: "Are there any penalties for non-compliance with environmental regulations?",
                            answer: "Yes, non-compliance can result in heavy fines, suspension or revocation of operational permits, legal actions, damaged goodwill, and further mandatory audits."
                        },
                        {
                            question: "How many types of environmental audits are available in India?",
                            answer: "The three main types are Compliance Audits (legal adherence), Management Audits (efficacy of EMS), and Functional Audits (specific operational areas like waste management)."
                        },
                        {
                            question: "Why is environmental auditing necessary?",
                            answer: "It is essential for ensuring regulatory compliance, identifying and mitigating environmental risks, optimizing resource use, saving costs, and achieving long-term sustainability goals."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default EnvironmentalAuditing;

