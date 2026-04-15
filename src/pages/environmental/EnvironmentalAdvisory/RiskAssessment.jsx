import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const RiskAssessment = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Risk"
                    heroTitleSuffix="Assessment"
                    heroDescription="Risk assessment entails identifying and assessing the risks that people participating in the planned project and adjacent populations face due to hazard occurrence."
                    stats={[
                        { count: "43K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Risk Assessment —",
                        highlightTitle: "An Overview",
                        description: [
                            "Risk assessment entails identifying and assessing the risks that people participating in the planned project and adjacent populations face due to hazard occurrence.",
                            "This necessitates a detailed understanding of failure probability, believable accident scenarios, and population susceptibility.",
                            "When such situations occur, urgent action must be taken to control the situation to prevent loss of life and property damage. An assessment follows a comprehensive hazard analysis."
                        ]
                    }}

                    advantages={{
                        title: "Role of Risk Assessment",
                        subtitle: "Identifying Vulnerabilities",
                        list: [
                            {
                                title: "Identifying Threat Areas",
                                desc: "Identifying possible threat areas and representative failure instances within the operational capacity."
                            },
                            {
                                title: "Visualizing Scenarios",
                                desc: "Visualizing the subsequent scenarios in terms of fire, explosion, or other environmental disasters."
                            },
                            {
                                title: "Evaluating Damage",
                                desc: "Evaluating the total damage potential of the identified hazardous events and mapping impact zones."
                            },
                            {
                                title: "Mitigation Strategy",
                                desc: "Providing tangible ideas for mitigating worst-case accident scenarios and disaster management planning."
                            }
                        ]
                    }}

                    process={{
                        title: "Steps for Risk Assessment",
                        subtitle: "How is it done?",
                        steps: [
                            {
                                step: "01",
                                title: "Identify Hazards",
                                desc: "Identify potential dangers related to business practices and determine the frequency of tasks."
                            },
                            {
                                step: "02",
                                title: "Assess Likelihood",
                                desc: "Assess the likelihood and severity of harm, such as an accident or sickness, under both routine and unusual conditions."
                            },
                            {
                                step: "03",
                                title: "Examine Safety Information",
                                desc: "Compile all available health and safety information, Safety Data Sheets, and previous incident reports."
                            },
                            {
                                step: "04",
                                title: "Determine Control Actions",
                                desc: "Determine activities to remove or control the hazard, ensuring they comply with minimal legislative requirements."
                            }
                        ]
                    }}

                    features={{
                        title: "Requirement Section",
                        subtitle: "Key Elements Checked",
                        list: [
                            { title: "Product Information", desc: "Data from manufacturers including research papers and equipment safety data." },
                            { title: "Statutory Conditions", desc: "Understanding the industry best practices, required legislative norms, and jurisdictional rules." },
                            { title: "Previous Experience", desc: "Using knowledge from workers, reviewing near misses, illness reports, and incident logs." },
                            { title: "Testing Outcomes", desc: "Evaluating air workplace sampling, biological swabs, and overall working conditions like layout." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding Risk Assessment"
                    faqs={[
                        {
                            question: "How to identify if the hazard will cause harm?",
                            answer: "Investigate previous experience, manufacturer paperwork, industry best practices, and examine the work environment physically."
                        },
                        {
                            question: "Who should take up risk assessment?",
                            answer: "A competent individual or team with a solid working understanding of the operations, involving supervisors who are familiar with the workflow."
                        },
                        {
                            question: "What needs documentation?",
                            answer: "You are obligated to keep assessments of hazard types, risk levels, mitigation actions completed, and follow-up policies for a specified number of years."
                        },
                        {
                            question: "Why is an assessment necessary before a project?",
                            answer: "To anticipate plausible disaster scenarios, evaluate the susceptibility of workers and local populations, and draft Emergency Occupational Health Plans."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default RiskAssessment;

