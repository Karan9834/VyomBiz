import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const DelhiPollutionControlCommittee = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Delhi Pollution Control"
                    heroTitleSuffix="Committee (DPCC) NOC"
                    heroDescription="Start or expand your business in Delhi with complete environmental compliance. Get your DPCC Consent / Pollution NOC quickly with expert assistance, accurate documentation, and hassle-free approval support from Vyombiz."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "99%", label: "SLA Delivery" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is",
                        highlightTitle: "Delhi Pollution Control Committee?",
                        description: [
                            "The Delhi Pollution Control Committee (DPCC) is the regulatory authority responsible for monitoring and controlling environmental pollution across Delhi. It functions under the guidelines of the Central Pollution Control Board (CPCB) and the Government of Delhi.",
                            "Businesses operating in manufacturing, processing, or service sectors that may impact the environment must obtain DPCC Consent or Pollution NOC before starting operations. This approval ensures adherence to standards for air emissions, wastewater discharge, and waste disposal.",
                            "At Vyombiz managed by Clink Consultancy Services Private Limited, we simplify the entire approval process by handling documentation, application filing, and regulatory coordination, ensuring businesses remain compliant with environmental laws."
                        ],
                        whyIdealTitle: "Who Should Apply?",
                        whyIdealList: [
                            { title: "Manufacturing", desc: "Factories and industrial units operating within Delhi jurisdiction." },
                            { title: "Healthcare", desc: "Hospitals, diagnostic centers, and clinics generating bio-waste." },
                            { title: "Food Service", desc: "Restaurants with large kitchens and food processing businesses." },
                            { title: "Industrial Projects", desc: "Construction, warehousing, and large-scale infrastructure projects." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of DPCC NOC",
                        subtitle: "Environmental approvals are critical for lawful operations in the capital.",
                        list: [
                            { title: "Legal Compliance", desc: "Ensures full adherence to environmental regulations and avoids legal notices." },
                            { title: "Penalty Avoidance", desc: "Protects your business from heavy fines, closure notices, or utility disconnection." },
                            { title: "Operational Continuity", desc: "A mandatory prerequisite for factory licenses and other industrial approvals." },
                            { title: "Enhanced Credibility", desc: "Builds an environmentally responsible brand reputation with consumers and partners." },
                            { title: "Eco-Friendly Operations", desc: "Ensures your business adopts modern pollution control and waste management tools." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of DPCC Consent",
                        subtitle: "Approvals are issued in two major stages depending on project status.",
                        list: [
                            { title: "Consent to Establish (CTE)", desc: "Required BEFORE setting up the unit. Ensures activity meets standards before construction." },
                            { title: "Consent to Operate (CTO)", desc: "Required BEFORE starting commercial operations. Confirms installed control systems are adequate." }
                        ]
                    }}

                    eligibility={{
                        title: "Industry Categorization",
                        subtitle: "DPCC classifies industries based on their pollution index scores.",
                        list: [
                            { title: "Red Category", desc: "High pollution potential (e.g., chemical plants, heavy manufacturing units)." },
                            { title: "Orange Category", desc: "Moderate environmental impact (e.g., food processing, textile manufacturing)." },
                            { title: "Green Category", desc: "Relatively low impact (e.g., small manufacturing, packaging units)." },
                            { title: "White Category", desc: "Non-polluting industries (require minimal regulation or only an undertaking)." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Preparation of accurate documentation prevents application rejection.",
                        list: [
                            { title: "Registration", desc: "Business registration certificate and Entity PAN card." },
                            { title: "Infrastructure", desc: "Site layout plan, building plan, and manufacturing process description." },
                            { title: "Resource Details", desc: "Water consumption details and wastewater discharge information." },
                            { title: "Pollution Control", desc: "Technical specifications of air/water pollution control systems." },
                            { title: "Property Proof", desc: "Land ownership documents or valid registered lease agreement." },
                            { title: "Environmental Plan", desc: "Comprehensive environmental management and waste disposal plan." }
                        ]
                    }}

                    process={{
                        title: "DPCC Application Process",
                        subtitle: "Ensuring smooth coordination throughout the regulatory journey.",
                        steps: [
                            { step: "01", title: "Compliance Assessment", desc: "Analyzing business activity to determine the correct consent category." },
                            { step: "02", title: "Documentation Prep", desc: "Preparation of technical details and forms as per current DPCC guidelines." },
                            { step: "03", title: "Online Filing", desc: "Submission of application through the official DPCC regulatory portal." },
                            { step: "04", title: "Authority Review", desc: "DPCC officials review the data and may conduct field inspections if needed." },
                            { step: "05", title: "NOC Issuance", desc: "Issuance of the official DPCC NOC certificate upon successful verification." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Complete compliance support for businesses in Delhi.",
                        list: [
                            { title: "Expert Consultants", desc: "Specialists with deep understanding of DPCC framework and regulations." },
                            { title: "Fast Documentation", desc: "Streamlined processes to minimize turn-around time for filings." },
                            { title: "End-to-End Support", desc: "Comprehensive management from initial assessment to certificate approval." },
                            { title: "Regulatory Liaison", desc: "Effective coordination with environmental authorities for smoother processing." },
                            { title: "Transparent Guidance", desc: "Clear and honest advice regarding your environmental and legal obligations." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is DPCC NOC mandatory for all businesses in Delhi?",
                            answer: "No. Only businesses that fall under pollution-regulated categories require DPCC approval. The requirement depends on the nature of industrial activity."
                        },
                        {
                            question: "How long does it take to obtain DPCC approval?",
                            answer: "The approval timeline varies depending on the category of the industry and document verification. Typically, it may take 15 to 45 days."
                        },
                        {
                            question: "Can a business operate without DPCC NOC?",
                            answer: "Operating without DPCC approval may lead to penalties, closure orders, or legal action from environmental authorities."
                        },
                        {
                            question: "What is the validity of DPCC Consent to Operate?",
                            answer: "The validity varies depending on the industry category (typically 5-10 years) and must be renewed periodically."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Ensuring Delhi’s Green Compliance"
                    subtitle="Secure your DPCC Consent efficiently with Vyombiz and grow your business sustainably."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We bridge the gap between complex environmental regulations and industrial growth in the capital region."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default DelhiPollutionControlCommittee;

