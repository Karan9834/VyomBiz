import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * 80G Registration Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const Registration80G = () => {

    const faqs = [
        {
            question: "What are the benefits of an 80G certificate?",
            answer: "An 80G certificate allows donors to claim tax deductions (50% or 100%) on their donations. it also enhances the credibility of the NGO, attracts more donors, and opens doors to government grants and CSR funding."
        },
        {
            question: "Who is eligible for 80G Registration?",
            answer: "NGOs registered as Trusts, Societies, or Section 8 Companies that are created for charitable purposes and do not have any business income (unless incidental) are eligible."
        },
        {
            question: "Is 12A registration mandatory for 80G?",
            answer: "Yes, typically 12A registration (for tax exemption on NGO's income) is a prerequisite or is applied for simultaneously with 80G registration."
        },
        {
            question: "What is the validity of 80G Registration?",
            answer: "Under the new regime, provisional registration is valid for 3 years, and regular registration is valid for 5 years, renewable thereafter."
        },
        {
            question: "Can an NGO with 80G registration accept foreign contributions?",
            answer: "No, 80G is for tax benefits for Indian donors. To accept foreign contributions, an NGO must obtain FCRA registration separately."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="80G Registration"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Unlock Tax Benefits & Donor Trust"
                heroDescription="Get hassle-free 80G registration for your NGO. Enable your donors to claim tax deductions and boost your fundraising credibility with expert guidance."
                whatsIncludedList={[
                    "Tax Exemption Benefits for Donors",
                    "Enhanced NGO Credibility",
                    "Expert Legal Documentation",
                    "End-to-End Application Support"
                ]}
                stats={[
                    { count: "10,000+", label: "80G Certificates", icon: <Users size={20} /> },
                    { count: "5000+", label: "NGOs Assisted", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Approval Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Tax Exemption",
                    title: "80G Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "An 80G registration is a certificate issued by the Income Tax Department that aims at encouraging donors to claim tax deductions on contributions made to eligible NGOs and charitable institutions.",
                        "It provides a pathway allowing donors to receive financial relief by claiming a deduction for the amount donated from their taxable income, thereby incentivizing philanthropy.",
                        <strong>What is Section 80G?</strong>,
                        "Section 80G of the Income Tax Act, 1961, enables individuals and organizations to claim tax deductions on donations made to eligible charitable organizations.",
                        "This registration is vital for any NGO looking to raise funds from the public or corporate sector, as it offers a direct financial benefit to the donor."
                    ],
                    whyIdealTitle: "Deduction Categories",
                    whyIdealList: [
                        { title: "100% Deduction", desc: "Donations to specific eligible funds (like PM Relief Fund) get 100% tax deduction." },
                        { title: "50% Deduction", desc: "Most private charitable trusts and NGOs fall under the 50% deduction category for donors." },
                        { title: "With Limit", desc: "Deductions are often subject to a qualifying limit of 10% of the donor's adjusted gross total income." },
                        { title: "Without Limit", desc: "Certain funds eligible for 100% deduction do not have a qualifying limit constraint." }
                    ]
                }}
                advantages={{
                    title: "Benefits of 80G Registration",
                    subtitle: "Securing 80G registration offers multiple advantages for both the NGO and its supporters.",
                    list: [
                        { title: "Tax Deduction for Donors", desc: "Donors can claim a tax deduction of 50% or 100% of the donated amount, incentivizing larger donations." },
                        { title: "Enhanced Credibility", desc: "Possessing an 80G certificate serves as a badge of trust and transparency for potential donors." },
                        { title: "Wider Donor Reach", desc: "Helps non-profit entities reach a wider pool of corporate and individual donors seeking tax benefits." },
                        { title: "Government Grants", desc: "Essential for applying to various government schemes, grants, and CSR funding opportunities." },
                        { title: "Legal Compliance", desc: "Ensures the NGO is legally recognized and operating in compliance with Indian tax laws." },
                        { title: "Financial Stability", desc: "Increases the ability to expand operations due to better inflow of funds and long-term financial stability." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Checklist to determine if your NGO is eligible for Section 80G Certificate.",
                    list: [
                        { title: "Registered NGO", desc: "Must be a Trust, Society, or Section 8 Company registered under relevant acts." },
                        { title: "Charitable Purpose", desc: "Assets and income must be utilized strictly for charitable or religious purposes." },
                        { title: "No Business Income", desc: "Should not have significant business income; any business must be incidental to objectives." },
                        { title: "NGO Darpan", desc: "Registration on the Niti Aayog's NGO Darpan portal is often required." },
                        { title: "Proper Accounts", desc: "Must maintain impeccable accounting records and have annual audits conducted." },
                        { title: "No Religious Bias", desc: "Should not be formed for the benefit of any specific religious community or caste." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for the 80G Registration application.",
                    list: [
                        "Copy of Registration Certificate (Trust Deed/MOA)",
                        "PAN Card of the NGO/Trust/Society",
                        "Proof of Registered Office (Utility Bill/Rent Agreement)",
                        "NOC from Landlord (if office is rented)",
                        "KYC of Trustees/Members (PAN, Aadhaar)",
                        "Activity Report of the past 3 years",
                        "Audited Financial Statements (Last 3 years)",
                        "Details of Board of Trustees/Members"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-98322665e909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to obtaining your 80G Certificate.",
                    steps: [
                        { step: "01", title: "Documentation", desc: "Gather all necessary legal and financial documents of the NGO." },
                        { step: "02", title: "Form 10A/10AB", desc: "File the application online via Form 10A (Provisional) or 10AB (Regular)." },
                        { step: "03", title: "Verification", desc: "The Income Tax Commissioner verifies the application and documents." },
                        { step: "04", title: "Clarifications", desc: "Respond to any queries or additional information sought by the department." },
                        { step: "05", title: "Approval", desc: "Upon satisfaction, the 80G Registration Order is issued." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "We simplify the legalities so you can focus on your cause.",
                    list: [
                        { title: "Expert Guidance", desc: "Experienced CAs and legal experts to handle your application." },
                        { title: "Error-Free Filing", desc: "Meticulous verification to ensure zero rejection chances." },
                        { title: "End-to-End Support", desc: "From documentation to final approval, we manage it all." },
                        { title: "Compliance Mgmt", desc: "Assistance with annual compliances and renewals." },
                        { title: "CSR Advisory", desc: "Guidance on attracting and managing CSR funds." },
                        { title: "Dedicated Support", desc: "Quick resolution of queries by a dedicated relationship manager." },
                        { title: "Affordable", desc: "Transparent pricing with no hidden costs." },
                        { title: "Fast Processing", desc: "Expedited application filing for quicker turnarounds." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding 80G Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration80G;
