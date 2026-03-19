import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const NOCPollutionControlBoard = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Pollution Control"
                    heroTitleSuffix="Board NOC Registration"
                    heroDescription="Get Your Pollution Control Board NOC Without Hassle. Ensure your industrial or commercial activity remains legally compliant with environmental standards. From small setups to large manufacturing units, Vyombiz simplifies the entire application process."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is a",
                        highlightTitle: "Pollution Control Board NOC?",
                        description: [
                            "A Pollution Control Board NOC, also known as Environmental Consent, is an official authorization required to establish and operate an industry or business that may have an impact on the environment. The certificate is issued by the respective State Pollution Control Board (SPCB) or Pollution Control Committee (PCC).",
                            "The primary objective is to monitor and regulate industrial discharges, air emissions, and waste management. It ensures that businesses operate within the permissible environmental safety limits set by the government to prevent air and water pollution.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, entrepreneurs get seamless assistance in classification, documentation, and filing, ensuring a smooth path to obtaining their Pollution NOC."
                        ],
                        whyIdealTitle: "Businesses Requiring NOC",
                        whyIdealList: [
                            { title: "Manufacturing Industry", desc: "Chemical, textile, metal, and heavy engineering factories." },
                            { title: "Hospitality & Healthcare", desc: "Hotels, restaurants, hospitals, and diagnostic laboratories." },
                            { title: "Storage & Recycling", desc: "Warehouses, e-waste dismantlers, and waste recycling units." },
                            { title: "Processing Units", desc: "Food processing, mining activities, and specialized industrial projects." }
                        ]
                    }}

                    advantages={{
                        title: "Why Pollution NOC is Important",
                        subtitle: "Compliance ensures business longevity and environmental protection.",
                        list: [
                            { title: "Legal Safety", desc: "Adhering to environmental laws avoids legal notices and closure risks." },
                            { title: "Regulatory Gateway", desc: "Mandatory for obtaining trade licenses and factory registrations." },
                            { title: "Brand Credibility", desc: "Demonstrates environmental commitment to customers and investors." },
                            { title: "Public Health", desc: "Ensures the business does not cause health hazards to the local community." },
                            { title: "Sustainable Growth", desc: "Promotes resources efficiency and cleaner production processes." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of Pollution Board NOC",
                        subtitle: "Understanding the two main stages of environmental consent.",
                        list: [
                            { title: "Consent to Establish (CTE)", desc: "Obtained BEFORE setting up the business or starting construction." },
                            { title: "Consent to Operate (CTO)", desc: "Obtained AFTER establishment and BEFORE commencing commercial production." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Standard checklist for pollution consent applications.",
                        list: [
                            { title: "Business Proof", desc: "Certificate of Incorporation or Partnership Deed." },
                            { title: "ID & Address Proof", desc: "PAN and Aadhaar of the authorized signatory." },
                            { title: "Property Proof", desc: "Land documents or registered site lease agreement." },
                            { title: "Infrastructure Layout", desc: "Site plan and building layout highlighting emissions points." },
                            { title: "Process Details", desc: "Flowchart of manufacturing activities and raw material list." },
                            { title: "Pollution Control", desc: "Technical data of installed or proposed ETP/STP and air filters." }
                        ]
                    }}

                    process={{
                        title: "NOC Application Process",
                        subtitle: "A structured journey toward regulatory approval.",
                        steps: [
                            { step: "01", title: "Activity Classification", desc: "Identification of the industry category (Red, Orange, Green, White)." },
                            { step: "02", title: "Application Prep", desc: "Filling technical forms and gathering environmental compliance documents." },
                            { step: "03", title: "Online Filing", desc: "Submitting application and fees on the official SPCB regulatory portal." },
                            { step: "04", title: "Authority Review", desc: "Review of technical data and potential site inspection by officials." },
                            { step: "05", title: "Certificate Grant", desc: "Issuance of the official CTE or CTO certificate upon approval." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Your trusted partner for environmental clearancess.",
                        list: [
                            { title: "Expert Support", desc: "Experienced professionals to guide you through complex pollution norms." },
                            { title: "PAN India Service", desc: "Support for SPCB/PCC approvals across all Indian states and UTs." },
                            { title: "Accuracy Focused", desc: "Detailed technical verification to eliminate documentation errors." },
                            { title: "End-to-End Liaison", desc: "We manage everything from initial filing to coordination with officials." },
                            { title: "Timed Deliverables", desc: "Efficient handling to ensure your business stays on production schedules." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Which industries need a Pollution Board NOC?",
                            answer: "Most manufacturing units, hospitals, hotels, and large-scale commercial activities that may impact air or water quality need an NOC."
                        },
                        {
                            question: "What is the difference between CTE and CTO?",
                            answer: "CTE (Establish) is for the construction phase; CTO (Operate) is for starting actual production or operations."
                        },
                        {
                            question: "How are industries categorized for Pollution NOC?",
                            answer: "They are classified into Red, Orange, Green, and White categories based on their pollution load and index score."
                        },
                        {
                            question: "Do non-polluting industries need an NOC?",
                            answer: "White Category industries (non-polluting) are generally exempt but may need to submit a simple undertaking."
                        },
                        {
                            question: "What is the validity of a Pollution NOC?",
                            answer: "Validity varies per category (Red/Orange/Green) and usually ranges from 1 to 10 years, requiring timely renewals."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Simplifying Compliance for You"
                    subtitle="Focus on your business growth while we handle your environmental approvals. Get your Pollution NOC with Vyombiz."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We streamline the regulatory path for manufacturers and traders, ensuring zero legal hurdles in their operations."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default NOCPollutionControlBoard;
