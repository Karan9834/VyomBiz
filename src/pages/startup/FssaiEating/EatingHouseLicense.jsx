import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Coffee,
    Users
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const EatingHouseLicense = () => {
    const faqs = [
        {
            question: "What is an Eating House License?",
            answer: "An Eating House License is a legal permit required to operate any business where food or beverages are supplied for consumption, such as restaurants, cafes, and food trucks. In cities like Delhi, it is issued by the Police Licensing department."
        },
        {
            question: "Is it mandatory to have an FSSAI license for an Eating House?",
            answer: "Yes, an FSSAI food license is a fundamental prerequisite. You must have a valid FSSAI certificate before applying for the Eating House License."
        },
        {
            question: "How long does it take to get the license?",
            answer: "Usually, it takes about 30 to 60 days to obtain an Eating House License. The timeline depends on the verification of documents and physical inspection by the police authorities."
        },
        {
            question: "What is the validity of an Eating House License?",
            answer: "The validity period is specified by the Registering Authority at the time of issuance. It is often linked to the validity of other documents like the Fire NOC or Trade License."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Eating House"
                heroTitleSuffix="License"
                heroSubtitle="Legal Authorization for Food Service Outlets"
                heroDescription="Setting up a restaurant or cafe? An Eating House License is a mandatory legal permit from the Police Department. We handle the entire documentation and verification process to ensure a smooth setup for your outlet."
                whatsIncludedList={[
                    "Police Department Liaisoning",
                    "Mandatory Licensing Audit",
                    "Online Application Processing",
                    "Safety Certificate Validation",
                    "Document Verification Support",
                    "Inspection Coordination Services"
                ]}
                stats={[
                    { count: "10K+", label: "Outlets Licensed", icon: <Coffee size={20} /> },
                    { count: "30-60 Days", label: "Grant Period", icon: <ShieldCheck size={20} /> },
                    { count: "50+", label: "Required Docs", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Police Department",
                    title: "Eating House Permit –",
                    highlightTitle: "Legal Consent",
                    description: [
                        "An Eating House License is legal consent required for undertaking any business where food or beverages are supplied for public consumption. This is a mandatory prerequisite along with FSSAI and Health Trade licenses.",
                        "The license is governed by the City Police Act (e.g., Delhi Police Act) and must be applied for under the City Police Headquarters or Police Commissioner. Authorities grant the license after a rigorous inspection of the premises and documentation.",
                        <strong>Applicable Establishments:</strong>,
                        "This encompasses all retail outlets, dhabas, restaurants, cafes, eateries, food trucks, and any other establishments providing food and drink to the masses."
                    ],
                    whyIdealTitle: "Essential Pre-requisites",
                    whyIdealList: [
                        { title: "Business Registration", desc: "Your entity must be legally incorporated (Pvt Ltd, Firm, etc.)." },
                        { title: "FSSAI Certificate", desc: "Mandatory food safety certification must be secured first." },
                        { title: "Fire & Health NOC", desc: "Clearance from the Fire Department and Local Health Authority is vital." }
                    ]
                }}
                advantages={{
                    title: "Why It Is Vital",
                    subtitle: "Benefits and legal importance of the Eating House License.",
                    list: [
                        { title: "Full Legal Compliance", desc: "Operating without this license is a punishable offense under police regulations." },
                        { title: "Operational Security", desc: "Ensures your business can run without fear of sudden police shutdowns." },
                        { title: "Public Safety Assurance", desc: "Validates that your premises meet building and electrical safety standards." },
                        { title: "Staff Credibility", desc: "Includes police verification of employees for enhanced security." },
                        { title: "Hygienic Environment", desc: "Requirement for medical certificates ensures high staff hygiene." },
                        { title: "Brand Reputation", desc: "Proper licensing reflects a professional and trustworthy establishment." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who can apply for an Eating House License?",
                    list: [
                        { title: "Owner Integrity", desc: "The applicant must have no criminal record related to food safety or public order." },
                        { title: "Premises Suitability", desc: "The location must be in a commercial zone with approved building plans." },
                        { title: "Safety Compliant", desc: "Must have valid Fire Safety and Health Trade certificates." },
                        { title: "Mandatory FSSAI", desc: "A valid FSSAI license is a non-negotiable prerequisite." },
                        { title: "Citizen Identity", desc: "Open to Indian citizens and companies registered in India." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Key papers required for police verification.",
                    list: [
                        "Identity and Address Proof of the Applicant",
                        "Proof of Possession (Ownership/Lease/Rent Agreement)",
                        "FSSAI License Certificate",
                        "Fire Department No Objection Certificate (NOC)",
                        "Health Trade License from Municipality",
                        "Site Plan/Blueprint of the eating house",
                        "Logo and Passport size photographs of the applicant",
                        "Pollution NOC from State Board"
                    ]
                }}
                process={{
                    title: "The Licensing Flow",
                    subtitle: "Step-by-step procedure to secure the Eating House License.",
                    steps: [
                        { step: "01", title: "Registration", desc: "Register on the Police Licensing portal and obtain unique login IDs." },
                        { step: "02", title: "Online Application", desc: "Fill out the comprehensive application form with all business details." },
                        { step: "03", title: "Document Upload", desc: "Upload clear, scanned copies of all safety and legal documents." },
                        { step: "04", title: "Physical Verification", desc: "Visit the licensing unit for original document verification if summoned." },
                        { step: "05", title: "Inspector Visit", desc: "Premises inspection by a police officer to check safety and layout." },
                        { step: "06", title: "Grant", desc: "The license is issued via the online portal after final approval." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "How we assist with Eating House Permits.",
                    list: [
                        { title: "End-to-End Assistance", desc: "From police portal registration to the final license grant." },
                        { title: "NOC Coordination", desc: "We help you obtain Fire and Health NOCs required for this permit." },
                        { title: "Staff Verification", desc: "Assistance in employee police verification forms and filings." },
                        { title: "Compliance Reminders", desc: "Timely alerts for license renewals to avoid illegal operations." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Operate your eating house legally and safely.",
                    list: [
                        "Display of license at a prominent place in the outlet",
                        "Ensuring CCTV cameras are operational as per police norms",
                        "Renewal of the license before its expiration date",
                        "Updating the authority about changes in management/ownership",
                        "Maintaining medical fitness records for all food handlers",
                        "Adhering to closing time regulations set by city police"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default EatingHouseLicense;
