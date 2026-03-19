import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LicenseForChargingStationInUP = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="License for EV Charging"
                    heroTitleSuffix="Station in Uttar Pradesh"
                    heroDescription="Get Your EV Charging Station License in Uttar Pradesh — Fast & Hassle-Free. Planning to start an EV Charging Station in UP? Ensure full regulatory compliance with the required Pollution NOC and environmental approvals with expert guidance from Vyombiz."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "714+", label: "Stations Registered" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "License for EV Charging",
                        highlightTitle: "Stations in Uttar Pradesh",
                        description: [
                            "With the rapid growth of electric mobility in India, setting up EV charging infrastructure has become a major opportunity for businesses and investors. However, before installing and operating a charging station in Uttar Pradesh, businesses must obtain the necessary environmental clearances and regulatory approvals.",
                            "A License for EV Charging Station in UP ensures that the charging facility complies with environmental safety norms, pollution control regulations, and operational guidelines set by the state authorities (UPPCB).",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses receive structured support for documentation, regulatory approvals, and coordination with relevant authorities to simplify the licensing process."
                        ],
                        whyIdealTitle: "Who Needs a License?",
                        whyIdealList: [
                            { title: "Infrastructure Operators", desc: "Private companies and public entities setting up charging networks." },
                            { title: "Commercial Owners", desc: "Parking facility owners, real estate developers, and mall managements." },
                            { title: "Fuel Stations", desc: "Existing fuel station operators adding electric charging points." },
                            { title: "Fleet Operators", desc: "Logistics and transport companies with dedicated charging hubs." }
                        ]
                    }}

                    advantages={{
                        title: "Why EV License is Important",
                        subtitle: "Ensuring smooth and legally compliant charging operations.",
                        list: [
                            { title: "Environmental Compliance", desc: "Ensures the station meets state pollution control standards and safety norms." },
                            { title: "Legal Authorization", desc: "Official permission to operate commercial charging infrastructure in Uttar Pradesh." },
                            { title: "Risk Prevention", desc: "Mitigates environmental risks and safety hazards from electrical installations." },
                            { title: "Government Incentives", desc: "Eligibility for state and central government EV infrastructure subsidies." },
                            { title: "Business Credibility", desc: "Demonstrates environmental responsibility and compliance to stakeholders." }
                        ]
                    }}

                    eligibility={{
                        title: "Authorities Involved",
                        subtitle: "Coordination with multiple departments is often required.",
                        list: [
                            { title: "UPPCB", desc: "Uttar Pradesh Pollution Control Board for environmental clearances." },
                            { title: "Local Municipal", desc: "Municipal authorities for land usage and commercial permissions." },
                            { title: "Electricity DISCOMs", desc: "Power distribution companies for load and grid connectivity." },
                            { title: "Development Bodies", desc: "Industrial or urban development authorities for site plan approvals." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "Required paperwork for a successful UP license application.",
                        list: [
                            { title: "Business Registration", desc: "Official certificate of incorporation or business entity proof." },
                            { title: "Identity Proof", desc: "PAN and Aadhaar card of the applicant or authorized person." },
                            { title: "Property Proof", desc: "Land ownership documents or a valid registered lease agreement." },
                            { title: "Site Layout", desc: "Detailed site plan highlighting charging kiosks and exit points." },
                            { title: "Load Details", desc: "Electrical infrastructure specifications and load requirements." },
                            { title: "Grid Consent", desc: "No Objection Certificate from the local electricity DISCOM." },
                            { title: "Environmental Declaration", desc: "Compliance declarations for pollution and environmental safety." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Approval Process",
                        subtitle: "Ensuring a structured path from evaluation to issuance.",
                        steps: [
                            { step: "01", title: "Project Evaluation", desc: "Analyzing charging infrastructure type and specific compliance mandates." },
                            { step: "02", title: "Documentation Prep", desc: "Collecting and verifying all technical and legal documents for filing." },
                            { step: "03", title: "Pollution NOC filing", desc: "Submission of application for environmental clearance to the UPPCB." },
                            { step: "04", title: "Technical Review", desc: "Authorities review physical infrastructure and environmental safety specs." },
                            { step: "05", title: "License Issuance", desc: "Grant of official permission to operate the EV charging station in UP." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Expert guidance for EV infrastructure licensing.",
                        list: [
                            { title: "Expert Guidance", desc: "In-depth understanding of environmental regulations and EV infrastructure norms." },
                            { title: "Documentation Support", desc: "End-to-end preparation and screening of all required license paperwork." },
                            { title: "Timeline Expediting", desc: "Efficient application handling to minimize delays and avoid rejections." },
                            { title: "Transparent Support", desc: "Clear communication and tracking across all regulatory departments." },
                            { title: "Compliance Stability", desc: "Ensuring long-term adherence to environmental and power regulations." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is a license required to start an EV charging station in Uttar Pradesh?",
                            answer: "Yes. Depending on the infrastructure and commercial usage, businesses may need environmental approvals and regulatory permissions before operating a charging station."
                        },
                        {
                            question: "Which authority issues the Pollution NOC in Uttar Pradesh?",
                            answer: "The Uttar Pradesh Pollution Control Board (UPPCB) is responsible for issuing environmental clearances and pollution control approvals."
                        },
                        {
                            question: "Can commercial properties install EV charging stations?",
                            answer: "Yes. Shopping malls, office complexes, residential societies, and parking facilities can install EV charging stations, provided they comply with regulatory and environmental norms."
                        },
                        {
                            question: "How long does the approval process take?",
                            answer: "Approval timelines may vary depending on project scale, documentation accuracy, and authority verification procedures."
                        },
                        {
                            question: "Can consultants help in obtaining the EV charging station license?",
                            answer: "Yes. Professional compliance consultants (like VyomBiz) can manage documentation, application submission, and coordination with authorities to simplify the approval process."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Setting Up an EV Station in UP"
                    subtitle="Empowering your journey into the electric mobility sector with expert compliance support."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We streamline the complex environmental and electrical licensing process, allowing you to focus on building your EV infrastructure."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default LicenseForChargingStationInUP;
