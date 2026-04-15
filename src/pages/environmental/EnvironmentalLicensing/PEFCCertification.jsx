import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PEFCCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="PEFC"
                    heroTitleSuffix="Certification"
                    heroDescription="Is your business involved in the supply chain of forest-based products? Let VyomBiz consultants guide you through the PEFC certification process for sustainable forest management."
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
                        title: "PEFC Certification in India —",
                        highlightTitle: "An Overview",
                        description: [
                            "The Network for Certification and Conservation of Forests (NCCF) is the body that governs PEFC (Programme for Endorsement of Forest Certification) in India. PEFC crucially gives evidence of sustainable forest management, enabling forest owners and managers to demonstrate the practices they apply.",
                            "PEFC certification also demonstrates compliance with legislative requirements, including the EU Timber Regulation (EUTR), the US Lacey Act, and the Australian Illegal Logging Prohibition Regulation.",
                            "PEFC is a voluntary, market-based instrument implemented through two separate processes — Sustainable Forest Management (SFM) certification and Chain of Custody (CoC) certification — making it highly versatile for different supply chain participants."
                        ]
                    }}

                    advantages={{
                        title: "Types of PEFC Certification",
                        subtitle: "Choose the right certification for your business",
                        list: [
                            {
                                title: "PEFC Forest Management Certification (FMC)",
                                desc: "A long-term process providing independent recognition of responsible forest management practices, covering biodiversity conservation, soil and water protection, and community respect."
                            },
                            {
                                title: "PEFC Chain of Custody Certification (CoC)",
                                desc: "Enables tracking of forest-based products throughout the supply chain — covering purchasing, manufacturing, sale, and record-keeping of certified materials."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "PEFC vs FSC",
                        subtitle: "Understanding the key differences",
                        list: [
                            {
                                title: "Scale",
                                desc: "PEFC covers around 260 million hectares of certified forests while FSC covers approximately 230 million hectares globally."
                            },
                            {
                                title: "Approach",
                                desc: "PEFC follows a bottom-up approach with national bodies setting standards, while FSC uses a top-down approach with globally developed standards."
                            },
                            {
                                title: "Certification Type",
                                desc: "PEFC issues Forest Management, Chain of Custody, and Project certificates; FSC issues Forest Management, Chain of Custody, and Controlled Goods certificates."
                            },
                            {
                                title: "Certification Party",
                                desc: "PEFC is a third-party certification, while FSC is considered a second-party certification scheme."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Who Can Apply?",
                        subtitle: "Eligible entities for PEFC certification",
                        list: [
                            { title: "Forest Owners & Managers", desc: "Those who manage forests and wish to demonstrate responsible forest management practices." },
                            { title: "Manufacturers & Suppliers", desc: "Companies sourcing and using forest-based raw materials in their production processes." },
                            { title: "Retailers & Traders", desc: "Businesses dealing in the sale and distribution of certified forest products." },
                            { title: "Forest-Related Industries", desc: "Wood procurement organizations, distributors, and other forest-related supply chain participants." }
                        ]
                    }}

                    process={{
                        title: "How to Apply",
                        subtitle: "Step-by-step PEFC registration process",
                        steps: [
                            {
                                step: "01",
                                title: "Comply with Requirements & Contact NCCF",
                                desc: "Review PEFC certification standards and contact the NCCF (Network for Certification and Conservation of Forests) or an accredited international body for guidance."
                            },
                            {
                                step: "02",
                                title: "Submit Application & Pre-Assessment",
                                desc: "Submit the completed application form and required documents to NCCF. The body will then conduct a pre-assessment of your forest management practices."
                            },
                            {
                                step: "03",
                                title: "Internal Audit, Certification Audit & Grant",
                                desc: "Conduct an internal audit to close gaps. After the certification audit by NCCF, sign a logo usage contract and receive your PEFC certification to display on certified products."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits of PEFC",
                        subtitle: "Why pursue PEFC certification in India?",
                        list: [
                            {
                                title: "Meet Customer Expectations",
                                desc: "Provides tangible evidence to customers validating your sustainability claims and meeting growing eco-conscious demand."
                            },
                            {
                                title: "Promotes Responsible Business",
                                desc: "Ensures promotion of responsible forest practices contributing towards economic development within the region."
                            },
                            {
                                title: "Global Forest Product Recognition",
                                desc: "PEFC guarantees recognition of global forest products, letting buyers source confidently from independently verified sustainable sources."
                            },
                            {
                                title: "Legal Compliance",
                                desc: "Demonstrates compliance with EUTR, the US Lacey Act, and other international timber legislation, reducing regulatory risk."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="PEFC Certification Queries"
                    faqs={[
                        {
                            question: "What is PEFC certification?",
                            answer: "PEFC is a voluntary, market-based instrument implemented through two separate processes — Sustainable Forest Management (SFM) certification and Chain of Custody (CoC) certification — to promote responsible forest management."
                        },
                        {
                            question: "What does PEFC stand for?",
                            answer: "PEFC stands for Programme for Endorsement of Forest Certification — a global alliance of national forest certification established in 1999 to promote sustainable forest management."
                        },
                        {
                            question: "What is the validity of PEFC certification?",
                            answer: "PEFC certification is valid for up to 5 years, subject to annual surveillance audits. Renewal requires a re-certification audit upon expiry."
                        },
                        {
                            question: "What does 70% PEFC certified mean?",
                            answer: "It means that at least 70% of the raw materials used in a product originate from PEFC-certified or controlled sources as per the chain of custody requirements."
                        },
                        {
                            question: "What is the difference between FSC and PEFC?",
                            answer: "FSC is a second-party certification with a top-down global approach focused on environmental aspects, while PEFC is a third-party certification with a bottom-up approach that endorses national certification schemes and covers a larger area of certified forest."
                        },
                        {
                            question: "How much does PEFC certification cost in India?",
                            answer: "The cost of PEFC certification in India typically ranges from ₹60,000 to ₹1,20,000, depending on the certification body, organization size, and complexity of the supply chain."
                        },
                        {
                            question: "How long does it take to get PEFC certified?",
                            answer: "On average, the PEFC certification process takes around 1 week for completion after successful submission of all documents, audit, and compliance checks."
                        },
                        {
                            question: "Who governs PEFC certification in India?",
                            answer: "The Network for Certification and Conservation of Forests (NCCF) is the accredited body governing PEFC certification in India."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default PEFCCertification;

