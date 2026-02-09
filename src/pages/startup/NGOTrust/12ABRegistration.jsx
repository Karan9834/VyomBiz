import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * 12ABRegistration Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/12ab-registration
 */

const Registration12AB = () => {

    const faqs = [
        {
            question: "What is 12AB Registration?",
            answer: "Section 12AB is the new provision under the Income Tax Act, 1961, replacing Section 12AA. It mandates that all existing charitable trusts and institutions registered under 12A/12AA must re-register under 12AB to continue availing tax exemptions."
        },
        {
            question: "Who needs to apply for 12AB Registration?",
            answer: "All charitable and religious trusts, societies, and Section 8 companies that were previously registered under Section 12A or 12AA, as well as new applicants seeking tax exemption, must apply for 12AB registration."
        },
        {
            question: "What is the validity of 12AB Registration?",
            answer: "For existing trusts re-registering, the validity is 5 years. For new provisional registrations, it is 3 years, after which it must be converted to normal registration."
        },
        {
            question: "Is it mandatory to switch from 12AA to 12AB?",
            answer: "Yes, it is mandatory. The Finance Act 2020 requires all existing trusts to migrate to the new Section 12AB to retain their tax-exempt status."
        },
        {
            question: "What form is used for 12AB Registration?",
            answer: "Form 10A is used for applying for registration under Section 12AB online through the income tax e-filing portal."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="12AB Registration"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Ensure Tax Exemption Compliance with New Provisions"
                heroDescription="Secure your NGO's future by re-registering under Section 12AB. Vyombiz provides expert assistance to help existing and new trusts navigate the new registration process smoothly and maintain tax-exempt status."
                whatsIncludedList={[
                    "Migration from 12A/12AA to 12AB",
                    "New Provisional Registration Support",
                    "Documentation & Form 10A Filing",
                    "Compliance Advisory for NGOs"
                ]}
                stats={[
                    { count: "5000+", label: "Trusts Migrated", icon: <Users size={20} /> },
                    { count: "100%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Briefcase size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "New Provision",
                    title: "12AB Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "The Finance Act, 2020 introduced Section 12AB, replacing the earlier Section 12AA process. It mandates a new registration regime for all charitable and religious trusts to ensure better monitoring and compliance.",
                        "Under this new scheme, all existing trusts registered under Section 12A or 12AA must re-register under Section 12AB to continue availing tax exemptions under Sections 11 and 12 of the Income Tax Act.",
                        <strong>Key Change:</strong>,
                        "Unlike the perpetual validity of the old 12AA registration, the 12AB registration is valid for a fixed period of 5 years and must be renewed subsequently."
                    ],
                    whyIdealTitle: "Categories of Registration",
                    whyIdealList: [
                        { title: "Re-registration", desc: "For existing trusts holding 12A/12AA certificates. Valid for 5 years." },
                        { title: "Provisional Registration", desc: "For new trusts not yet started activities. Valid for 3 years." },
                        { title: "Conversion", desc: "Converting provisional to normal registration after activities commence." },
                        { title: "Renewal", desc: "Renewal of 12AB registration after the 5-year period expires." }
                    ]
                }}
                advantages={{
                    title: "Benefits of 12AB Registration",
                    subtitle: "Why compliance with 12AB is crucial for your NGO.",
                    list: [
                        { title: "Electronic Database", desc: "Creates a centralized digital record of all NGOs, removing issues of lost files or missing records." },
                        { title: "Tax Exemption Continuity", desc: "Ensures the NGO continues to enjoy tax exemptions on its surplus income." },
                        { title: "80G Approval", desc: "Mandatory for obtaining or renewing 80G approval, which encourages donor contributions." },
                        { title: "Legal Compliance", desc: "Adherence to the latest Finance Act amendments prevents penalties and loss of status." },
                        { title: "Transparency", desc: "Enhances trust with donors and government authorities through a transparent digital process." },
                        { title: "Systematic Verification", desc: "Streamlines the verification process for genuine charitable activities." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who must apply under Section 12AB?",
                    list: [
                        { title: "Existing Trusts", desc: "Trusts/Societies already registered under Section 12A or 12AA." },
                        { title: "New Applicants", desc: "Newly formed NGOs seeking tax exemption for the first time." },
                        { title: "Section 8 Companies", desc: "Non-profit companies registered under the Companies Act seeking tax benefits." },
                        { title: "80G Holders", desc: "Institutions holding 80G certificates must also align with 12AB provisions." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Checklist for 12AB Registration (Form 10A).",
                    list: [
                        "Trust Deed / Memorandum of Association (MoA)",
                        "Certificate of Incorporation / Registration Certificate",
                        "Copy of Old 12A/12AA Registration Certificate",
                        "PAN Card of the NGO/Trust",
                        "PAN and Aadhaar of Trustees/Members",
                        "Utility Bill (Electricity/Water) for Address Proof",
                        "NOC from Landlord (if rented)",
                        "Activity Report (Past 3 Years or since inception)",
                        "Audited Accounts & ITR (Past 3 Years)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "How to obtain 12AB Registration.",
                    steps: [
                        { step: "01", title: "Login", desc: "Access the income tax e-filing portal with NGO credentials." },
                        { step: "02", title: "Form Selection", desc: "Select Form 10A for registration under Section 12AB." },
                        { step: "03", title: "Fill Details", desc: "Enter details of the trust, trustees, and past registration." },
                        { step: "04", title: "Upload Docs", desc: "Upload self-attested copies of required documents." },
                        { step: "05", title: "Verification", desc: "Verify using Digital Signature Certificate (DSC) or EVC." },
                        { step: "06", title: "Approval", desc: "Receive the 12AB Order/Certificate after processing." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Expert support for seamless NGO compliance.",
                    list: [
                        { title: "Expert Guidance", desc: "Navigate new tax laws with ease using our professional support." },
                        { title: "Timely Filing", desc: "Ensure your application is filed within the deadline to avoid lapse." },
                        { title: "Documentation Help", desc: "We assist in collating and verifying all necessary documents." },
                        { title: "Provisional to Permanent", desc: "Assistance in converting provisional registration to permanent." },
                        { title: "Comprehensive Support", desc: "Handling queries and clarifications from the IT department." },
                        { title: "Cost Effective", desc: "Affordable packages tailored for NGOs and charitable trusts." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about 12AB Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration12AB;
