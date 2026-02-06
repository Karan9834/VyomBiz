import React from "react";
import {
    Stethoscope,
    Briefcase,
    Building2,
    ShieldCheck,
    CheckCircle2,
    ClipboardCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ClinicalEstablishment = () => {
    const faqs = [
        {
            question: "How to secure clinic establishment act registration online?",
            answer: "The process involves checking eligibility, gathering documents (Trade license, Pollution clearance, ID proof, etc.), submitting an online application to the state health department, paying fees, and undergoing verification and inspection."
        },
        {
            question: "What is the objective of the Clinic Establishment Act Registration?",
            answer: "The primary objectives are to ensure mandatory registration of healthcare facilities, establish uniform standards for infrastructure and human resources, provide transparent information on services and costs, and enhance the accountability of healthcare providers."
        },
        {
            question: "Who needs a Clinical Establishment Certificate?",
            answer: "It is required for government and private hospitals, multi-specialty clinics, nursing homes, imaging centers, blood testing labs, dental clinics, and alternative medicine centers (Ayurvedic/Homoeopathic)."
        },
        {
            question: "What are the common legal liabilities in clinical establishments?",
            answer: "Common liabilities include medical negligence, diagnostic errors, patient dissatisfaction due to service quality, operational challenges like resource shortages, and malpractice claims."
        },
        {
            question: "Is clinical establishment registration mandatory for single-doctor clinics?",
            answer: "Yes, the Clinical Establishments Act applies to all clinical establishments, including those owned and managed by a single doctor."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Clinical Establishment"
                heroTitleSuffix="Registration"
                heroSubtitle="Standardizing Healthcare Excellence"
                heroDescription="Ensure your healthcare facility operates within the legal framework and meets national standards. We provide end-to-end assistance for Clinical Establishment Act registration across India."
                whatsIncludedList={[
                    "Eligibility Verification",
                    "Document Preparation (Pollution, Trade, etc.)",
                    "Online Application Filing",
                    "Health Department Liaison",
                    "Inspection Support",
                    "Certificate Acquisition"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Stethoscope size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Regulatory Compliance",
                    title: "Clinical Establishment Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Clinical establishment registration is regulated under the Clinical Establishments (Registration & Regulation) Act, 2010. It is a mandatory process for all public and private healthcare facilities, including hospitals, clinics, dispensaries, and diagnostic centers.",
                        "The goal is to create a digital registry at national, state, and district levels while ensuring that healthcare providers enhance their credibility and patient trust by operating within a standardized legal framework.",
                        <strong>Key Objective:</strong>,
                        "To establish uniform standards for infrastructure, equipment, and human resources across India, ensuring quality care and transparency for every patient."
                    ],
                    whyIdealTitle: "Who Needs This?",
                    whyIdealList: [
                        { title: "Hospitals", desc: "Multi-specialty, government, and private nursing homes." },
                        { title: "Diagnostic Centers", desc: "Imaging centers, radiology facilities, and blood testing labs." },
                        { title: "Specialized Clinics", desc: "Dental, physiotherapy, and maternity clinics." },
                        { title: "Alternative Medicine", desc: "Ayurvedic, Homoeopathic, and traditional medical centers." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Registration",
                    subtitle: "Enhance your facility's reputation and ensure operational safety.",
                    list: [
                        { title: "Legal Compliance", desc: "Ensures you operate within the legal framework, protecting against penalties." },
                        { title: "Enhanced Credibility", desc: "Builds trust in the community, leading to increased patient volume." },
                        { title: "Access to Resources", desc: "Facilitates access to government support and healthcare data resources." },
                        { title: "Uniform Standards", desc: "Promotes consistency and quality in healthcare services across regions." },
                        { title: "Better Management", desc: "Enables better allocation of resources through government-collected data." },
                        { title: "Prevents Quackery", desc: "Protects patients from unqualified practitioners and harmful treatments." }
                    ]
                }}
                eligibility={{
                    title: "Registration Requirements",
                    subtitle: "Core standards to be maintained by the establishment.",
                    list: [
                        { title: "Facility Standards", desc: "Maintain the minimum prescribed facilities and service quality." },
                        { title: "Personnel Criteria", desc: "Ensure the presence of qualified staff as per medical guidelines." },
                        { title: "Record Keeping", desc: "Maintain and provide electronic medical records (EMR) for every patient." },
                        { title: "Treatment Guidelines", desc: "Compliance with Standard Treatment Guidelines issued by the government." },
                        { title: "Transparency", desc: "Display the registration certificate and service costs clearly." },
                        { title: "Resource Alignment", desc: "Maintain records and reporting requirements as per the Act." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential paperwork for a successful application.",
                    list: [
                        "Trade License Certificate",
                        "Pollution Clearance Certificate",
                        "Identity and Address Proof of the Owner",
                        "Qualification Certificate of the Person-in-Charge",
                        "Bio-medical Waste Disposal Agreement",
                        "Property Tax Receipt / Rent Agreement",
                        "Fire Department NOC",
                        "Partnership Deed / Society Registration (if applicable)",
                        "Proof of Registration Fee Payment"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Roadmap",
                    subtitle: "Our simplified 6-step approach to compliance.",
                    steps: [
                        { step: "01", title: "Eligibility Check", desc: "Verifying meeting all relevant state laws and criteria." },
                        { step: "02", title: "Document Gathering", desc: "Collecting ID, property, and qualification documents." },
                        { step: "03", title: "Online Submission", desc: "Filing the application on the State Health Department portal." },
                        { step: "04", title: "Fee Payment", desc: "Paying the applicable fees based on establishment size." },
                        { step: "05", title: "Verification", desc: "Facilitating document verification and physical inspection." },
                        { step: "06", title: "Certification", desc: "Obtaining the final Clinical Establishment Certificate." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your partner in healthcare compliance.",
                    list: [
                        { title: "Documentation Support", desc: "End-to-end help with complex documents like Pollution and Fire NOCs." },
                        { title: "Expert Assistance", desc: "Guidance from professionals with deep regulatory knowledge." },
                        { title: "Hassle-Free Filing", desc: "We handle the entire application process on your behalf." },
                        { title: "Ongoing Compliance", desc: "Support for renewals and post-registration statutory requirements." },
                        { title: "PAN India Service", desc: "Expertise in state-specific regulations across the country." },
                        { title: "Fast Response", desc: "Timely updates and quick resolution of queries." },
                        { title: "Proven Track Record", desc: "Successfully handled thousands of medical registration projects." },
                        { title: "Patient Safety Focus", desc: "Helping you align with standards that prioritize patient care." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Clinical Establishment Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default ClinicalEstablishment;
