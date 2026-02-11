import React from "react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "./ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ISO37001Registration = () => {
    const faqs = [
        {
            question: "What is ISO 37001:2016?",
            answer: "ISO 37001:2016 is an international standard for Anti-Bribery Management Systems (ABMS). It provides requirements and guidance for establishing, implementing, maintaining, reviewing and improving an anti-bribery management system."
        },
        {
            question: "Who can get ISO 37001 certification?",
            answer: "Any organization, regardless of size, type, or sector, can implement ISO 37001. It is applicable to public, private, and non-profit organizations."
        },
        {
            question: "How long does ISO 37001 certification take?",
            answer: "The certification process typically takes 3-6 months, depending on the organization's size, complexity, and readiness."
        },
        {
            question: "What are the benefits of ISO 37001?",
            answer: "Benefits include enhanced reputation, reduced risk of bribery, improved stakeholder confidence, and demonstration of commitment to ethical business practices."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitlePrefix="ISO 37001:2016"
                heroTitleMain="Anti-Bribery"
                heroTitleSuffix="Certification"
                heroSubtitle="Anti-Bribery Management System"
                heroDescription="Attain ISO 37001:2016 Certification for robust anti-bribery systems. Elevate trust, compliance, and ethics in your organization with our accreditation expertise."
                formTitle="Book a Free Consultation"
                whatsIncludedList={[
                    "Anti-Bribery Policy Documentation",
                    "Risk Assessment & Prevention",
                    "Due Diligence Procedures",
                    "Training & Awareness Programs",
                    "Monitoring & Review Systems",
                    "Compliance Certification Support"
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Overview of ISO 37001:2016",
                    description: [
                        "ISO 37001 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing and improving an anti-bribery management system. The system can be standalone or integrated into an overall management system. ISO 37001 addresses bribery only. It is generic and applicable to all organizations (or parts of an organization), regardless of type, size and nature of activity, and whether in the public, private or not-for-profit sectors.",
                        "The scope of ISO 37001:2016 covers bribery in the public, private and not-for-profit sectors. It addresses bribery by the organization, by the organization's personnel acting on the organization's behalf or for its benefit, by business associates acting on the organization's behalf or for its benefit, and bribery of the organization, of the organization's personnel in relation to the organization's business, and of the organization's business associates in relation to the organization's business."
                    ],
                    imageUrl: "/ISO-overview.jpg"
                }}
                eligibility={{
                    title: "Scope of ISO 37001:2016 Certification",
                    subtitle: "What Does This Certification Cover?",
                    list: [
                        "Bribery in Public Sector - Preventing corruption in government dealings",
                        "Bribery in Private Sector - Ensuring ethical business-to-business transactions",
                        "Bribery in Not-for-Profit Sector - Maintaining integrity in charitable organizations",
                        "Organizational Bribery - Preventing bribery by the organization itself",
                        "Personnel Bribery - Addressing bribery by employees and representatives",
                        "Business Associate Bribery - Managing third-party corruption risks"
                    ],
                    ctaText: "Check Your Eligibility"
                }}
                advantages={{
                    title: "Benefits of ISO 37001 Certification",
                    subtitle: "Why Get Certified?",
                    description: "ISO 37001 certification provides numerous advantages:",
                    list: [
                        "Benchmarking - Helps benchmark anti-bribery systems against international standards",
                        "Stakeholder Confirmation - Confirms to stakeholders that the organization has implemented internationally recognized best practices",
                        "Legal Proof - Can serve as evidence of good faith efforts to prevent bribery in legal proceedings",
                        "Risk Reduction - Significantly reduces the risk of bribery occurring in the organization",
                        "Enhanced Reputation - Demonstrates commitment to ethical business practices",
                        "Competitive Advantage - Provides an edge in tenders and business opportunities"
                    ]
                }}
                documents={{
                    title: "Essential Compliance Measures & Documents Required",
                    description: "To achieve ISO 37001:2016 certification, organizations must implement the following:",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Anti-Bribery Policy - Comprehensive policy prohibiting bribery",
                        "Leadership Commitment - Top management's active involvement and support",
                        "Risk Assessment - Systematic evaluation of bribery risks",
                        "Due Diligence - Procedures for vetting business associates",
                        "Financial Controls - Robust financial and commercial controls",
                        "Training Programs - Regular anti-bribery training for personnel",
                        "Reporting Mechanisms - Confidential channels for reporting concerns",
                        "Investigation Procedures - Processes for investigating suspected bribery",
                        "Anti-Bribery Manual - Documented management system procedures",
                        "System Procedures - Detailed operational procedures",
                        "Process Approach - Process-based implementation documentation",
                        "Compliance Records - Evidence of ongoing compliance activities"
                    ]
                }}
                process={{
                    title: "Certification Procedure",
                    subtitle: "Four-Step Process",
                    steps: [
                        {
                            step: "Step 1",
                            title: "Optional Preliminary Audit",
                            desc: "An initial assessment to identify gaps and areas for improvement before the formal certification audit."
                        },
                        {
                            step: "Step 2",
                            title: "Audit Stage I - Documentation Review",
                            desc: "Review of the anti-bribery management system documentation to ensure all required elements are in place."
                        },
                        {
                            step: "Step 3",
                            title: "Audit Stage II - Implementation Assessment",
                            desc: "On-site evaluation of the implementation and effectiveness of the anti-bribery management system."
                        },
                        {
                            step: "Step 4",
                            title: "Grant of Certificate",
                            desc: "Upon successful completion of all audit stages, the ISO 37001:2016 certificate is issued, valid for three years with annual surveillance audits."
                        }
                    ]
                }}
                whyUs={{
                    title: "How can VyomBiz Help You?",
                    subtitle: "Our Comprehensive Support",
                    list: [
                        {
                            title: "Seamless Interaction",
                            desc: "We ensure seamless interaction with our experts throughout the certification process, providing guidance at every step."
                        },
                        {
                            title: "Purchase Plan",
                            desc: "Select and purchase a suitable service plan tailored to your organization's needs."
                        },
                        {
                            title: "Add Queries",
                            desc: "Submit your questions and concerns regarding ISO 37001 certification."
                        },
                        {
                            title: "Provide Documents",
                            desc: "Share the required documents with our expert team for review and processing."
                        },
                        {
                            title: "Complete Screening",
                            desc: "We help you complete all admissibility criteria for preliminary screening."
                        },
                        {
                            title: "Procedural Actions",
                            desc: "Our team assists in completing all procedural actions required for certification."
                        },
                        {
                            title: "Get Certified",
                            desc: "Achieve your ISO 37001:2016 certification with our comprehensive support!"
                        }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ISO37001Registration;
