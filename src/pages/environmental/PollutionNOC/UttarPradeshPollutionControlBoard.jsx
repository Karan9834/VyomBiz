import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const UttarPradeshPollutionControlBoard = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Uttar Pradesh"
                    heroTitleSuffix="Pollution Control Board (UPPCB)"
                    heroDescription="Get UPPCB Consent Without Delays. Ensure your business complies with environmental regulations in Uttar Pradesh with expert assistance. From documentation to approval, Vyombiz managed by Clink Consultancy Services Private Limited simplifies the entire UPPCB NOC process so you can focus on building your business."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "500+", label: "Compliance Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is the",
                        highlightTitle: "UP Pollution Control Board?",
                        description: [
                            "The Uttar Pradesh Pollution Control Board (UPPCB) is the state regulatory authority responsible for controlling and preventing pollution in Uttar Pradesh. It functions under the framework of the Central Pollution Control Board (CPCB) and implements environmental regulations related to air, water, and waste management.",
                            "Businesses operating in manufacturing, processing, or industrial activities must obtain environmental consent from UPPCB before starting operations. This approval confirms that the company follows environmental standards and pollution control norms established by the government.",
                            "Through professional compliance support, Vyombiz managed by Clink Consultancy Services Private Limited helps businesses obtain UPPCB approvals quickly and accurately while ensuring adherence to environmental laws."
                        ],
                        whyIdealTitle: "Who Needs Consent?",
                        whyIdealList: [
                            { title: "Manufacturing units", desc: "Factories involved in production and industrial activities." },
                            { title: "Chemical & Pharma", desc: "Plants handling chemical processing and pharmaceutical products." },
                            { title: "Food Processing", desc: "Slaughterhouses, dairy plants, and food packaging units." },
                            { title: "Textile & Metal", desc: "Textile industries and specialized metal processing units." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of UPPCB Registration",
                        subtitle: "Essential for legal compliance and long-term business sustainability.",
                        list: [
                            { title: "Legal Authorization", desc: "Provides the legal authority to establish and operate industries without regulatory risks." },
                            { title: "Regulatory Compliance", desc: "Ensures full compliance with the latest environmental laws in Uttar Pradesh." },
                            { title: "Penalty Mitigation", desc: "Significantly reduces the risk of government penalties, fines, or operational shutdowns." },
                            { title: "Operational Credibility", desc: "Improves your business credibility with investors, partners, and financial institutions." },
                            { title: "Sustainable Operations", desc: "Promotes environmentally responsible and sustainable business practices." }
                        ]
                    }}

                    eligibility={{
                        title: "Industry Categories",
                        subtitle: "The UPPCB classifies industries based on their pollution potential.",
                        list: [
                            { title: "Red Category", desc: "Highest pollution potential requiring strict monitoring (e.g., Heavy manufacturing, Mining)." },
                            { title: "Orange Category", desc: "Moderate pollution levels with comparatively fewer compliance requirements." },
                            { title: "Green Category", desc: "Low pollution generating units with simplified approvals and faster processing." },
                            { title: "White Category", desc: "Non-polluting industries that may not require extensive clearances." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Organization and verification of paperwork ensures faster processing.",
                        list: [
                            { title: "Business Registration", desc: "Official certificate of registration for your business entity." },
                            { title: "PAN Card", desc: "PAN card details of the company or authorized applicant." },
                            { title: "Project Report", desc: "Detailed business activity description and project report." },
                            { title: "Property Proof", desc: "Land ownership documents or a valid lease agreement." },
                            { title: "Unit Layout", desc: "Layout plan of the industrial unit or manufacturing facility." },
                            { title: "Process Details", desc: "Comprehensive details of the manufacturing process." },
                            { title: "Machinery List", desc: "List of all machinery and their installed capacity." },
                            { title: "Pollution Controls", desc: "Details of water/air pollution control measures in place." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of UPPCB Consents",
                        subtitle: "Approvals required depending on the stage of your business operation.",
                        list: [
                            { title: "Consent to Establish (CTE)", desc: "Required BEFORE setting up any industrial unit. Verifies that the proposed activity follows environmental norms." },
                            { title: "Consent to Operate (CTO)", desc: "Required AFTER establishment but BEFORE commercial operations. Confirms installed pollution control systems." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Selection Process",
                        subtitle: "A structured procedural approach ensures smooth UPPCB clearance.",
                        steps: [
                            { step: "01", title: "Categorization", desc: "Analyzing business activity to categorize it into Red, Orange, Green, or White." },
                            { step: "02", title: "Documentation", desc: "All required documents and technical environmental data are verified." },
                            { step: "03", title: "Application Filing", desc: "The application for CTE or CTO is submitted through the official UPPCB portal." },
                            { step: "04", title: "Site Inspection", desc: "Authorities may conduct field inspections to verify pollution control systems." },
                            { step: "05", title: "Certification", desc: "Upon successful review, the UPPCB issues the official environmental consent." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "End-to-end guidance for environmental registrations in Uttar Pradesh.",
                        list: [
                            { title: "Compliance Mastery", desc: "Expert guidance on environmental regulations and SPCB liaison." },
                            { title: "Verification Ready", desc: "We pre-screen all documents to ensure they are audit-ready for inspections." },
                            { title: "Faster Approvals", desc: "Efficient application handling to minimize delays and avoid rejections." },
                            { title: "Dedicated Support", desc: "Compliance specialists who handle the complex technical paperwork for you." },
                            { title: "Transparent Service", desc: "Transparent processing with reliable updates at every stage of the journey." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is UPPCB consent mandatory for all industries?",
                            answer: "Yes, any business involved in activities that may generate air pollution, water discharge, or industrial waste must obtain approval."
                        },
                        {
                            question: "What is the difference between CTE and CTO?",
                            answer: "CTE (Consent to Establish) is obtained before setting up the unit, while CTO (Consent to Operate) is required before starting production."
                        },
                        {
                            question: "How does categorization affect the process?",
                            answer: "Industries are categorized (Red/Orange/Green/White) based on pollution levels, which determines the complexity and monitoring requirements."
                        },
                        {
                            question: "Does Vyombiz assist in on-site inspections?",
                            answer: "Yes, our experts provide end-to-end support, including preparation for inspections and coordination with fire/pollution authorities."
                        },
                        {
                            question: "What happens if a business operates without CTO?",
                            answer: "Operating without a valid CTO is illegal and can lead to heavy penalties, closure notices, or disconnection of utilities."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Start Your UPPCB Registration Today"
                    subtitle="Setting up a compliant business is essential for success. Secure your UPPCB approval smoothly with Vyombiz."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "Securing your UPPCB environmental consent is made simple with our expert guidance and structured compliance approach."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default UttarPradeshPollutionControlBoard;

