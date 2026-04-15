import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CPCBCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="CPCB"
                    heroTitleSuffix="Certification"
                    heroDescription="Looking to enhance your business credibility while ensuring environmental compliance? Connect with VyomBiz to simplify your CPCB certification."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "CPCB Certification —",
                        highlightTitle: "An Overview",
                        description: [
                            "CPCB certification, issued under the guidelines of the Central Pollution Control Board, is an official certification that verifies an industry or business complies with applicable environmental laws and pollution control norms.",
                            "It is an essential approval for businesses whose operations may impact air, water, or soil quality.",
                            "The CPCB license issued by the Ministry of Environment, Forest and Climate Change (MoEFCC) ensures that businesses operate responsibly and adhere to sustainable practices with minimal environmental impact."
                        ]
                    }}

                    advantages={{
                        title: "Types of CPCB Certificates",
                        subtitle: "Various Approvals in India",
                        list: [
                            {
                                title: "CTE and CTO",
                                desc: "Consent to Establish (before setup) and Consent to Operate (before commencing operations)."
                            },
                            {
                                title: "EPR Authorization",
                                desc: "Extended Producer Responsibility for safe collection and recycling of e-waste and plastics."
                            },
                            {
                                title: "Hazardous Waste Management",
                                desc: "Required for collection, storage, transport, and disposal of hazardous/biomedical waste."
                            },
                            {
                                title: "Compostable Plastic Manufacturer",
                                desc: "Confirms that products meet prescribed biodegradability and compostable standards."
                            }
                        ]
                    }}

                    process={{
                        title: "Registration Process",
                        subtitle: "Step-by-Step Guide",
                        steps: [
                            {
                                step: "01",
                                title: "Identify Requirements & Prepare Docs",
                                desc: "Identify the industry category and prepare site plans, waste management strategies, and DPR."
                            },
                            {
                                step: "02",
                                title: "Portal Registration & Fee Payment",
                                desc: "Submit the comprehensive plan and partner agreements online, then pay prescribed portal fees."
                            },
                            {
                                step: "03",
                                title: "Inspection & Final Grant",
                                desc: "CPCB/SPCB conducts physical inspection and technical scrutiny. Upon verification, the certificate is granted."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits of CPCB License",
                        subtitle: "Securing environmental compliance",
                        list: [
                            { title: "Enhances Operational Efficiency", desc: "Adopt proper waste management, pollution control systems, and resource-efficient processes." },
                            { title: "Legal Compliance", desc: "Reduces the risk of penalties, legal action, or operational shutdowns by following the law." },
                            { title: "Improves Business Reputation", desc: "Demonstrates accountability to customers, investors, and regulatory authorities." },
                            { title: "New Business Opportunities", desc: "Gains access to government tenders and large corporate vendor networks demanding compliance." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Needs It?",
                        subtitle: "Industries that require CPCB License",
                        list: [
                            { title: "Manufacturing & Processing", desc: "Chemical, pharmacological, and food packaging units." },
                            { title: "Construction & Infrastructure", desc: "Power generation, textile dyeing, and large-scale structures." },
                            { title: "Waste Processors", desc: "E-waste dismantlers, plastic processors, and brand owners." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding CPCB"
                    faqs={[
                        {
                            question: "What is CPCB certification?",
                            answer: "It's an official document verifying an industry's compliance with national environmental laws regarding sustainable operations and pollution control."
                        },
                        {
                            question: "What does CPCB stand for?",
                            answer: "Central Pollution Control Board. It functions under the Ministry of Environment, Forest and Climate Change."
                        },
                        {
                            question: "Is CPCB certification mandatory in India?",
                            answer: "Yes, for any industry whose activities generate effluents, emissions, or hazardous wastes impacting the environment."
                        },
                        {
                            question: "Can it be applied online?",
                            answer: "Yes, the registration and documentation process can primarily be handled via the official CPCB online portals."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default CPCBCertification;

