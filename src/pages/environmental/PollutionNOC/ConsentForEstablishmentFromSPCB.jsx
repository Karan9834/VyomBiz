import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ConsentForEstablishmentFromSPCB = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Consent for Establishment"
                    heroTitleSuffix="(CFE) from SPCB"
                    heroDescription="Start your factory, manufacturing unit, or industrial project legally with SPCB Consent for Establishment (CFE). Avoid regulatory penalties and ensure environmental compliance from day one with expert assistance from Vyombiz."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "98%", label: "Approval Ratio" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is",
                        highlightTitle: "Consent for Establishment (CFE)?",
                        description: [
                            "Consent for Establishment (CFE), also known as NOC from the State Pollution Control Board, is mandatory approval required before setting up any industrial unit, manufacturing facility, or project that may impact the environment.",
                            "The permission is granted by the respective State Pollution Control Board (SPCB) under environmental regulations governing pollution control in India. This approval ensures that the proposed industry follows proper environmental safeguards before starting construction or installation of machinery.",
                            "Without obtaining CFE, businesses may face legal notices, operational delays, heavy penalties, or project rejection. Vyombiz managed by Clink Consultancy Services Private Limited assists companies in obtaining CFE through proper documentation and environmental assessment."
                        ],
                        whyIdealTitle: "Who Needs SPCB Consent?",
                        whyIdealList: [
                            { title: "New Industrial Units", desc: "Mandatory for anyone planning to start a new manufacturing or production plant." },
                            { title: "Facility Expansion", desc: "Required for existing units planning to expand production or add new assembly lines." },
                            { title: "Machinery Upgrades", desc: "Necessary when installing new machinery that significantly impacts emissions or discharge." },
                            { title: "Waste Treatment", desc: "Critical for establishing specific waste treatment or processing infrastructure." }
                        ]
                    }}

                    advantages={{
                        title: "Importance of SPCB Consent",
                        subtitle: "Ensures responsible and sustainable business operations from the establishment phase.",
                        list: [
                            { title: "Legal Compliance", desc: "Ensures your project complies with environmental laws before construction begins." },
                            { title: "Smooth Approvals", desc: "A prerequisite for many factory registrations, utility approvals, and trade licenses." },
                            { title: "Pollution Regulation", desc: "Helps regulate and minimize emissions and waste discharge from industrial activities." },
                            { title: "Business Credibility", desc: "Demonstrates your business commitment to environmental responsibility to stakeholders." },
                            { title: "Operational Security", desc: "Protects the business from future legal risks, fines, or regulatory shutdown orders." }
                        ]
                    }}

                    eligibility={{
                        title: "Industries Requiring Consent",
                        subtitle: "Classification based on pollution potential (Red, Orange, Green, White).",
                        list: [
                            { title: "Manufacturing & Chemicals", desc: "Chemical industries, pharma plants, and heavy manufacturing units." },
                            { title: "Food & Textile", desc: "Food processing units, textile manufacturing, and dyeing facilities." },
                            { title: "Metal & Polymers", desc: "Metal processing, plastic industries, and polymer manufacturing plants." },
                            { title: "Power & Auto", desc: "Automobile manufacturing units and various power generation facilities." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Detailed documentation is crucial for quick environmental approval.",
                        list: [
                            { title: "Entity Proof", desc: "PAN Card of the business entity and Certificate of Incorporation." },
                            { title: "Constitutional Docs", desc: "Memorandum of Association (MOA) or valid Partnership Deed." },
                            { title: "Project Blueprint", desc: "Detailed Project Report, Business Plan, and site layout plan." },
                            { title: "Possession Proof", desc: "Land ownership documents or a registered site lease agreement." },
                            { title: "Process Flow", desc: "Comprehensive manufacturing process details and flowcharts." },
                            { title: "Resource Usage", desc: "Water consumption, discharge details, and power requirement plans." },
                            { title: "Pollution Control", desc: "Proposed pollution control measures and equipment design plans." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Selection Process",
                        subtitle: "From initial assessment to the issuance of the CFE certificate.",
                        steps: [
                            { step: "01", title: "Project Assessment", desc: "Evaluating industry type, pollution category, and specific SPCB mandates." },
                            { step: "02", title: "Documentation", desc: "Preparation of environmental compliance documents and technical application forms." },
                            { step: "03", title: "Portal Submission", desc: "Online submission of the application to the respective SPCB portal." },
                            { step: "04", title: "Technical Scrutiny", desc: "Authorities verify documents and may request technical clarifications." },
                            { step: "05", title: "Site Inspection", desc: "Pollution control officials may conduct a site visit to verify location suitability." },
                            { step: "06", title: "Consent Issuance", desc: "Issuance of the official Consent for Establishment certificate upon approval." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Simplifying SPCB approvals through expert regulatory guidance.",
                        list: [
                            { title: "Regulatory Expertise", desc: "Deep understanding of multi-state SPCB norms and environmental acts." },
                            { title: "End-to-End Support", desc: "Comprehensive assistance from documentation to final certificate issuance." },
                            { title: "Accurate Filing", desc: "Rigorous verification of technical data to prevent application rejections." },
                            { title: "Faster Timelines", desc: "Efficient handling and follow-ups to speed up the approval process." },
                            { title: "Affordable Solutions", desc: "Cost-effective compliance management for startups and MSMEs." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is SPCB Consent mandatory for all industries?",
                            answer: "Industries that may cause environmental pollution must obtain Consent for Establishment before starting construction or installing machinery."
                        },
                        {
                            question: "What happens if a business operates without SPCB consent?",
                            answer: "Operating without consent can lead to heavy penalties, legal action, or closure orders from pollution control authorities."
                        },
                        {
                            question: "How long does it take to obtain CFE approval?",
                            answer: "Approval timelines depend on the industry category and documentation accuracy. Proper application preparation significantly speeds up the process."
                        },
                        {
                            question: "Is Consent for Establishment required before construction?",
                            answer: "Yes. Industries must obtain CFE before construction or installation of equipment begins."
                        },
                        {
                            question: "Can consultants help with SPCB approval?",
                            answer: "Yes. Professional consultants (like VyomBiz) streamline documentation and application procedures, increasing approval success rates."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Start Your Project Legally"
                    subtitle="Environmental compliance is the foundation of a successful industrial venture. Secure your SPCB CFE with Vyombiz."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We provide high-level technical and regulatory support to ensure your industry establishes itself with 100% compliance."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ConsentForEstablishmentFromSPCB;
