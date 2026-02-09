import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * NGOIncomeTaxAdvisory Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/ngo-income-tax-advisory
 */

const NGOIncomeTaxAdvisory = () => {

    const faqs = [
        {
            question: "What is the NGO's income tax regulation?",
            answer: "NGOs registered under Section 12A are eligible for a complete exemption from income tax. Without this registration, they are liable to pay tax at normal rates."
        },
        {
            question: "How can an NGO file its income tax return?",
            answer: "NGOs must file income returns using Form No. ITR-7 electronically with a digital signature within the timeframe specified under Section 139(1)."
        },
        {
            question: "What is the maximum tax exemption for donors?",
            answer: "Donors contributing to eligible NGOs under Section 80G can claim a deduction of either 50% or 100% of the donation amount from their taxable income."
        },
        {
            question: "Can NGOs be subject to a tax audit?",
            answer: "Yes, if the total income of an NGO exceeds the basic exemption limit (before claiming exemptions under 11 and 12), it must undergo a tax audit and submit Form 10B."
        },
        {
            question: "What distinguishes Form 80G from Form 12A?",
            answer: "Section 12A exemption applies to the NGO's own income, making it tax-free. Section 80G provides tax benefits to the donors making contributions to the NGO."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Income Tax Advisory"
                heroTitleSuffix="Services"
                heroSubtitle="Optimize Tax Liabilities & Ensure Compliance for NGOs"
                heroDescription="Maximize your NGO's benefits with Vyombiz's expert income tax advisory. We help you navigate complex tax structures, secure exemptions, and maintain compliance with Government of India regulations."
                whatsIncludedList={[
                    "Strategic Tax Planning & Advisory",
                    "Assistance with 12A & 80G Registrations",
                    "Tax Return Filing (ITR-7) Support",
                    "Compliance Monitoring & Audit Support"
                ]}
                stats={[
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "400+", label: "Tax Experts", icon: <Users size={20} /> },
                    { count: "99%", label: "SLA Delivery", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert expertise="Expertise in NGO Income Tax Advisory" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Tax Compliance",
                    title: "NGO Income Tax Advisory –",
                    highlightTitle: "Navigate with Experts",
                    description: [
                        "Managing tax compliance is critical for the sustainability of any NGO. Vyombiz offers expert advisory services to help non-governmental organizations navigate the intricate terrain of Income Tax laws in India.",
                        "Our bespoke solutions focus on your NGO's unique needs, ensuring you obtain necessary registrations like 12A and 80G efficiently. We assist in enhancing tax compliance, preventing penalties, and optimizing available exemptions.",
                        <strong>Why Advisory is Important?</strong>,
                        "Proper tax planning not only safeguards the NGO's tax-exempt status but also builds credibility with donors and stakeholders, ensuring transparency in financial reporting."
                    ],
                    whyIdealTitle: "Challenges We Address",
                    whyIdealList: [
                        { title: "Complex Regulations", desc: "Navigating the intricate interaction of multiple tax laws and state legislations." },
                        { title: "Compliance Burden", desc: "Meeting strict deadlines for returns, audits, and renewal of registrations." },
                        { title: "Documentation Issues", desc: "Maintaining accurate records and organizing paperwork for regulatory scrutiny." },
                        { title: "Registration Hurdles", desc: "Overcoming difficulties in obtaining and renewing 12A and 80G certificates." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Our Advisory",
                    subtitle: "How we add value to your NGO operations.",
                    list: [
                        { title: "Tax Efficiency", desc: "Maximize exemptions and reduce tax liabilities through strategic planning." },
                        { title: "Full Compliance", desc: "Ensure adherence to all latest provisions to avoid fines and loss of status." },
                        { title: "Admin Relief", desc: "Reduce the administrative burden of tax filings and documentation." },
                        { title: "Time Saving", desc: "Free up valuable time to focus on your core social mission." },
                        { title: "Risk Mitigation", desc: "Proactively identify and address potential compliance risks." },
                        { title: "Expert Support", desc: "Access to a dedicated team of CAs and tax professionals." }
                    ]
                }}
                eligibility={{
                    title: "Key Registrations",
                    subtitle: "Essential for Tax Exemptions.",
                    list: [
                        { title: "12A Registration", desc: "Exempts the NGO's surplus income from income tax. Fundamental for any NGO." },
                        { title: "80G Registration", desc: "Allows donors to claim tax deductions, encouraging philanthropic contributions." },
                        { title: "Form 10A/10AB", desc: "Required for registration and renewal of the above exemptions." },
                        { title: "Tax Audit (Form 10B)", desc: "Mandatory if total income exceeds the exemption limit." }
                    ]
                }}
                documents={{
                    title: "Service Scope",
                    description: "Our comprehensive advisory covers:",
                    list: [
                        "Eligibility Assessment for Exemptions",
                        "Preparation & Filing of ITR-7",
                        "Assistance with Form 10A/10BD Filing",
                        "Representation before Tax Authorities",
                        "Guidance on Foreign Contributions (FCRA)",
                        "Maintenance of Books of Accounts",
                        "Periodic Compliance Reviews",
                        "Advisory on Recent Amendments (e.g., Finance Act 2020)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How We Assist",
                    subtitle: "Our approach to Tax Advisory.",
                    steps: [
                        { step: "01", title: "Assessment", desc: "Analyze your NGO's current status and compliance gaps." },
                        { step: "02", title: "Strategy", desc: "Develop a tailored tax planning and compliance strategy." },
                        { step: "03", title: "Execution", desc: "Assist with registrations, filings, and documentation." },
                        { step: "04", title: "Monitoring", desc: "Continuous monitoring of changes in tax laws affecting NGOs." },
                        { step: "05", title: "Reporting", desc: "Ensure timely submission of audit reports and returns." },
                        { step: "06", title: "Support", desc: "Ongoing support for notices or queries from the tax department." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "India's trusted platform for NGO consultancy.",
                    list: [
                        { title: "Tailored Solutions", desc: "Advisory services customized to the specific nature and size of your NGO." },
                        { title: "Technological Edge", desc: "Use of modern tools for efficient tracking and compliance management." },
                        { title: "Proven Expertise", desc: "Years of experience in handling complex NGO tax matters." },
                        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden charges." },
                        { title: "Timely Updates", desc: "Keep you informed about the latest regulatory changes." },
                        { title: "Dedicated Staff", desc: "Personalized attention from our team of tax experts." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries on NGO Income Tax"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOIncomeTaxAdvisory;
