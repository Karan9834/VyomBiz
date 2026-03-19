import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EWasteLicenseForDismantling = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="E-waste License"
                    heroTitleSuffix="for Dismantling"
                    heroDescription="Get Authorized to Handle & Process E-Waste Legally in India. Ensure your e-waste dismantling business complies with CPCB and SPCB regulations. Secure your license quickly with expert documentation and filing support from Vyombiz."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "99.5%", label: "Success Rate" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is an",
                        highlightTitle: "E-Waste Dismantling License?",
                        description: [
                            "An E-Waste Dismantling License is a mandatory legal authorization required by businesses involved in collecting and manually or mechanically dismantling electronic waste. This license is issued by the State Pollution Control Board (SPCB) or Pollution Control Committee (PCC).",
                            "The primary objective is to ensure that hazardous components of electronic waste are separated and handled in an environmentally safe manner. Unauthorized dismantling often leads to soil and water contamination, posing significant risks to health and ecology.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, dismantlers receive comprehensive support to set up their facility as per regulatory standards and obtain their valid license with zero hassle."
                        ],
                        whyIdealTitle: "Who Needs This License?",
                        whyIdealList: [
                            { title: "Independent Dismantlers", desc: "Small to medium units focused on manual segregation of electronic parts." },
                            { title: "Waste Management Firms", desc: "Commercial entities handling large-scale urban or industrial waste." },
                            { title: "Collection Centers", desc: "Facilities that collect and perform preliminary dismantling of e-waste." },
                            { title: "E-Waste Startups", desc: "New businesses entering the circular economy and green recycling sector." }
                        ]
                    }}

                    advantages={{
                        title: "Why is E-Waste License Important?",
                        subtitle: "Safe handling of electronic waste is essential for sustainable growth.",
                        list: [
                            { title: "Regulatory Compliance", desc: "Mandatory under E-Waste Management Rules, preventing legal notices." },
                            { title: "Environmental Protection", desc: "Controls the release of toxic substances like lead, mercury, and cadmium." },
                            { title: "Access to Supply", desc: "Allows units to legally buy e-waste from government and corporate auctions." },
                            { title: "Waste Traceability", desc: "Builds a transparent supply chain for hazardous components." },
                            { title: "Eco-Brand Recognition", desc: "Positions your company as a responsible part of the green economy." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria",
                        subtitle: "Key requirements to qualify for a dismantling license.",
                        list: [
                            { title: "Unit Capacity", desc: "Infrastructure and manpower capability to handle daily waste intake." },
                            { title: "Space Requirement", desc: "Adequate space for storage, processing, and office setup (typically 300+ sq. m for 1T/day)." },
                            { title: "Technical Equipment", desc: "Must specify tools for dismantling and pollution control (like de-dusting systems)." },
                            { title: "Safety Gear", desc: "Provision of PPE and safety training for all technicians and laborers." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Required checklist for e-waste dismantling authorization.",
                        list: [
                            { title: "Entity Proof", desc: "Company Incorporation Certificate or Partnership Deed." },
                            { title: "Identity Documentation", desc: "PAN and Aadhaar of the authorized person/applicant." },
                            { title: "Land Documents", desc: "Property ownership papers or a registered rent/lease agreement." },
                            { title: "Infrastructure Layout", desc: "Detailed site plan highlighting dismantling tables and storage zones." },
                            { title: "Technical Flow", desc: "Detailed process flow of activities (collection, segregation, storage)." },
                            { title: "Authorized Dispatch", desc: "MoU or agreement with authorized e-waste recyclers for waste disposal." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Selection Process",
                        subtitle: "Clear procedure from facility setup to regulatory approval.",
                        steps: [
                            { step: "01", title: "Infrastructure Check", desc: "Ensuring the site meets the specific space and equipment standards." },
                            { step: "02", title: "Documentation", desc: "Gathering technical, land, and legal documents for application filing." },
                            { step: "03", title: "OCMMS Submission", desc: "Online submission of application on the respective SPCB regulatory portal." },
                            { step: "04", title: "Authority Review", desc: "State board officials review technical data and conduct a site inspection." },
                            { step: "05", title: "License Issuance", desc: "Official grant of the E-waste Dismantling License upon verification." }
                        ]
                    }}

                    postCompliance={{
                        title: "Compliance & Timelines",
                        subtitle: "Critical insights on approval periods and non-compliance risks.",
                        list: [
                            { title: "Approval Timeline", desc: "The license is typically issued within 30 to 60 days following successful inspection." },
                            { title: "Non-Compliance Risks", desc: "Operating without a license can lead to heavy fines, unit sealing, or imprisonment." },
                            { title: "Annual Reporting", desc: "Licensed units must maintain Form-2 (Waste Ledger) and file Annual Returns (Form-3)." },
                            { title: "Renewal Phase", desc: "Renewals must be sought before the expiry of the existing dismantling certificate." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Us?",
                        subtitle: "Specialized support for the waste management industry.",
                        list: [
                            { title: "Industrial Expertise", desc: "Decades of experience in environmental and e-waste regulatory framework." },
                            { title: "SOP Development", desc: "Guidance on developing Standard Operating Procedures for facility operations." },
                            { title: "Quick Processing", desc: "Efficient handling of documents to minimize approval delays." },
                            { title: "Post-License Support", desc: "Assistance with annual return filing and maintenance of waste logs." },
                            { title: "Strategic Liaison", desc: "Effective coordination with pollution control boards for site inspections." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is the primary role of a dismantler in e-waste management?",
                            answer: "A dismantler is responsible for separating electronic waste into various parts like plastics, metals, and circuit boards before sending them to specialized recyclers."
                        },
                        {
                            question: "Is it possible to operate without an E-waste License?",
                            answer: "No. Handling or dismantling electronic waste without a legal license is a punishable offense under Indian environmental laws."
                        },
                        {
                            question: "What is the minimum area required for a dismantling unit?",
                            answer: "As per current guidelines, a minimum of 300 square meters is generally required for a capacity of 1 ton per day."
                        },
                        {
                            question: "How long is the license valid?",
                            answer: "The validity of the E-waste license depends on the state board and is usually issued for 5 to 10 years, requiring timely renewals."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Empowering Circular Economy"
                    subtitle="Grow your e-waste business with 100% legal compliance. Secure your dismantling license with Vyombiz."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We provide specialized support to dismantlers, helping them establish professional facilities that meet all CPCB and SPCB norms."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default EWasteLicenseForDismantling;
