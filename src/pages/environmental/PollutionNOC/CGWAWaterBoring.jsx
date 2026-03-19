import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CGWAWaterBoring = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Central Ground Water"
                    heroTitleSuffix="Authority (CGWA) Permission"
                    heroDescription="Get Legal Permission for Borewell & Groundwater Extraction. Planning to install a borewell for industrial, commercial, or infrastructure projects? Approval from the CGWA is mandatory in many areas across India. Avoid penalties, project delays, and compliance risks with our expert assistance."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "100%", label: "Accuracy" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is",
                        highlightTitle: "CGWA Water Boring Permission?",
                        description: [
                            "CGWA Water Boring Permission is an official approval required before extracting groundwater through borewells, tube wells, or other groundwater abstraction structures. The regulation is governed by the Central Ground Water Authority, which works under the Ministry of Jal Shakti.",
                            "This approval ensures that groundwater is used responsibly, over-exploitation of water resources is prevented, and environmental sustainability is maintained. It is a critical legal mandate for industrial and commercial projects to remain compliant.",
                            "Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in obtaining CGWA permissions by handling documentation, application filing, and regulatory coordination."
                        ],
                        whyIdealTitle: "Who Needs CGWA Permission?",
                        whyIdealList: [
                            { title: "Manufacturing units", desc: "Factories and industrial plants using groundwater for operations." },
                            { title: "Infrastructure Projects", desc: "Construction companies requiring water for project execution." },
                            { title: "Commercial Sites", desc: "Hotels, malls, hospitals, and institutional establishments." },
                            { title: "Mining Operations", desc: "Mining companies requiring dewatering and aquifer management." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of CGWA Compliance",
                        subtitle: "Obtaining proper approval provides several advantages to businesses.",
                        list: [
                            { title: "Legal Protection", desc: "Ensures compliance with groundwater regulations and avoids heavy penalties." },
                            { title: "Business Continuity", desc: "Prevents operational disruption due to regulatory violations or sealing." },
                            { title: "Environmental Responsibility", desc: "Promotes sustainable water management and prevents resource depletion." },
                            { title: "Project Credibility", desc: "Improves your business credibility with regulatory authorities and stakeholders." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of Groundwater Permissions",
                        subtitle: "Different approvals apply depending on the purpose and scale of water extraction.",
                        list: [
                            { title: "Industrial Permission", desc: "For manufacturing units using groundwater for production, cooling, or processing." },
                            { title: "Infrastructure Permission", desc: "For large construction or development projects requiring execution water." },
                            { title: "Commercial Permission", desc: "For service sectors like hotels, malls, hospitals, and private institutions." },
                            { title: "Mining Activities", desc: "Critical for preventing groundwater damage during mining and extraction." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Proper documentation plays a crucial role in the approval process.",
                        list: [
                            { title: "Direct Records", desc: "Company Incorporation Certificate, PAN, and GST details." },
                            { title: "Property Proof", desc: "Land ownership documents or a registered lease agreement." },
                            { title: "Project Report", desc: "Detailed project report or industrial activity description." },
                            { title: "Requirement Plan", desc: "Water requirement calculations and site layout plan." },
                            { title: "Borewell Data", desc: "Borewell location map with precise geo-coordinates." },
                            { title: "Environmental Docs", desc: "Groundwater impact assessment and environmental clearance." },
                            { title: "Board Consents", desc: "Valid Consent from the state Pollution Control Board." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Selection Process",
                        subtitle: "Obtaining a groundwater extraction NOC involves multiple compliance stages.",
                        steps: [
                            { step: "01", title: "Eligibility Assessment", desc: "Reviewing the groundwater category of the project location for compliance." },
                            { step: "02", title: "Documentation Prep", desc: "Technical and legal documents are prepared as per CGWA guidelines." },
                            { step: "03", title: "Online Application", desc: "The application is submitted through the official groundwater portal." },
                            { step: "04", title: "Authority Evaluation", desc: "The regulatory authority evaluates the project's groundwater impact data." },
                            { step: "05", title: "NOC Issuance", desc: "Upon approval, permission is issued with specific sustainability conditions." }
                        ]
                    }}

                    postCompliance={{
                        title: "Penalties for Illegal Extraction",
                        subtitle: "Extracting groundwater without permission leads to serious legal consequences.",
                        list: [
                            { title: "Environmental Penalties", desc: "Authorities impose heavy environmental compensation and fines." },
                            { title: "Borewell Sealing", desc: "Unauthorized borewells are sealed and utilities disconnected." },
                            { title: "Legal Action", desc: "Violation notices and formal legal proceedings against the entity." },
                            { title: "Project Suspension", desc: "Operations or building projects may be suspended in severe cases." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Simplifying environmental permissions through expert compliance assistance.",
                        list: [
                            { title: "Compliance Mastery", desc: "Professional guidance for complex environmental and regulatory approvals." },
                            { title: "Documentation Support", desc: "End-to-end preparation and verification of all required paperwork." },
                            { title: "Faster Application", desc: "Efficient filing and rigorous follow-ups with authorities to ensure speed." },
                            { title: "Transparent Service", desc: "Clear communication and constant tracking throughout the approval process." },
                            { title: "Technical Expertise", desc: "In-house specialists for hydrogeological reports and impact assessments." }
                        ]
                    }}
                    navLabels={{
                        postCompliance: "Penalties"
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is CGWA permission mandatory for borewells?",
                            answer: "Yes, many commercial and industrial establishments must obtain approval before installing a borewell and extracting water."
                        },
                        {
                            question: "How long does CGWA approval take?",
                            answer: "Timeline varies depending on project category, documentation quality, and the regulatory review process."
                        },
                        {
                            question: "Can industries operate without CGWA approval?",
                            answer: "No, operating without approval may lead to heavy penalties, borewell closure, and legal action."
                        },
                        {
                            question: "Is groundwater permission required for construction projects?",
                            answer: "Yes, large construction projects often require CGWA permission if groundwater extraction is involved during project execution."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Start Your Compliance Process"
                    subtitle="Ensure your business remains environmentally compliant and legally protected. Get professional assistance for CGWA."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "Securing your CGWA groundwater NOC is made simple with our expert guidance and end-to-end support services."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CGWAWaterBoring;
