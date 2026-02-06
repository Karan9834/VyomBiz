import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * EightyTwenty Page (80G & 12A Registration)
 * Refactored to match TrustRegistration design.
 */

const EightyTwelve = () => {
    const faqs = [
        {
            question: "Are there any eligibility criteria for registration of 12A and 80G?",
            answer: "Yes, the NGO must be a registered entity (Trust, Society, or Section 8 Company), should not have income from commercial activities, and must maintain proper books of accounts."
        },
        {
            question: "What is the main benefit of 12A Registration?",
            answer: "12A Registration exempts the NGO's income from income tax. Without it, the NGO is liable to pay tax on its surplus income."
        },
        {
            question: "How does 80G Registration benefit donors?",
            answer: "80G Registration allows donors to claim a tax deduction (usually 50% of the donation amount) on their contributions to the NGO under Section 80G of the Income Tax Act."
        },
        {
            question: "Is the registration one-time or renewable?",
            answer: "Previously, it was a one-time registration. However, as per recent amendments (effective April 2021), registrations are now granted for a period of 5 years and must be renewed subsequently."
        },
        {
            question: "Can a private family trust apply for 12A?",
            answer: "No, private or family trusts are not eligible. 12A registration is reserved for organizations established for broader public charitable or religious purposes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="80G & 12A"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Tax Benefits for NGO"
                heroDescription="Unlock tax exemptions for your NGO and offer tax benefits to your donors. We assist Trusts, Societies, and Section 8 Companies in obtaining 12A and 80G certifications seamlessly."
                whatsIncludedList={[
                    "100% Tax Exemption for NGO (12A)",
                    "Tax Deductions for Donors (80G)",
                    "Expert CA Consultation",
                    "Complete Filing Assistance"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Tax Exemption",
                    title: "80G & 12A Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "In India, 80G and 12A registrations are crucial for Non-Profit Organizations seeking healthy tax benefits. Indian NGOs strive to register for both to maximize the advantages for themselves and their donors.",
                        "Without 12A, an NGO is treated like any other commercial entity and must pay tax on its income. 12A ensures that the income applied for charitable purposes is exempt from tax.",
                        <strong>Why are they Important?</strong>,
                        "12A Registration exempts an NGO from paying income tax on its surplus income. This is essential for the financial sustainability of non-profits.",
                        "80G Registration allows donors to claim tax deductions on the donations they make to the NGO, encouraging more philanthropic support and fundraising opportunities."
                    ],
                    whyIdealTitle: "Key Highlights",
                    whyIdealList: [
                        { title: "Income Tax Exemption", desc: "100% exemption on surplus income under Section 12A." },
                        { title: "Donor Benefits", desc: "Donors get 50% tax deduction on donations under Section 80G." },
                        { title: "Government Grants", desc: "Eligibility for government funding and schemes." },
                        { title: "Foreign Funding", desc: "Prerequisite for FCRA registration to receive foreign funds." }
                    ]
                }}
                advantages={{
                    title: "Benefits of 80G & 12A Registration",
                    subtitle: "Get recognized as a genuine charitable entity and unlock financial privileges.",
                    list: [
                        { title: "Income Tax Exemption", desc: "12A registration exempts the NGO from paying taxes on its surplus income." },
                        { title: "Attract Donors", desc: "Donors prefer 80G registered NGOs to avail tax deductions on their contributions." },
                        { title: "Government Grants", desc: "Makes the NGO eligible for various grants and funding schemes from the government." },
                        { title: "FCRA Eligibility", desc: "Prerequisite for FCRA registration, enabling the NGO to receive foreign funds." },
                        { title: "Credibility", desc: "Enhances the reputation and trustworthiness of the NGO in the eyes of the public." },
                        { title: "Wealth Accrual", desc: "Allows accumulation of up to 15% of income for future charitable application." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Mandatory criteria for NGOs to apply for 12A & 80G.",
                    list: [
                        { title: "Registered Entity", desc: "Must be a registered Trust, Society, or Section 8 Company." },
                        { title: "Charitable Object", desc: "Objectives must be charitable, religious, or for social welfare." },
                        { title: "No Commercial Income", desc: "Should not have income from commercial activities." },
                        { title: "Proper Accounts", desc: "Must maintain proper books of accounts and records." },
                        { title: "No Private Benefit", desc: "Funds should not benefit specific private religious groups." },
                        { title: "Regular Audit", desc: "Accounts must be audited if income exceeds the basic exemption limit." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Consolidated list of documents for 12A and 80G registration.",
                    list: [
                        "Registration Certificate of NGO (Trust Deed/MoA)",
                        "PAN Card of the NGO",
                        "Form 10A / 10AB (Application Form)",
                        "KYC of Trustees / Members (PAN & Aadhaar)",
                        "Latest Utility Bill of Registered Office",
                        "NOC from Landlord (if rented)",
                        "Bank Account Statement (Latest)",
                        "Projected or Audited Balance Sheet (Last 3 Years)",
                        "List of Donors (if applicable)",
                        "Report on Welfare Activities"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Procedure",
                    subtitle: "Step-by-step process for obtaining 12A & 80G.",
                    steps: [
                        { step: "01", title: "Application Filing", desc: "File Form 10A/10AB online via the Income Tax Portal." },
                        { step: "02", title: "Verification", desc: "Commissioner verifies details and objectives of the NGO." },
                        { step: "03", title: "Clarification", desc: "Submit additional documents or clarifications if requested." },
                        { step: "04", title: "Approval Order", desc: "Commissioner approves the application and issues the order." },
                        { step: "05", title: "Certificate Grant", desc: "Receive the 12A/80G Registration Certificate." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Expert assistance for your NGO's tax compliance.",
                    list: [
                        { title: "Expert CA Consultation", desc: "Guidance from experienced Chartered Accountants." },
                        { title: "Form 10A/10AB Filing", desc: "Accurate filing of application forms." },
                        { title: "Error-Free Docs", desc: "Meticulous documentation to avoid rejection." },
                        { title: "Department Liaison", desc: "Follow-up with the Income Tax Department." },
                        { title: "Timely Approval", desc: "Fast-tracking the registration process." },
                        { title: "Post-Reg Support", desc: "Guidance on annual returns and compliances." },
                        { title: "Audit Assistance", desc: "Help with financial audits and reporting." },
                        { title: "Provisional to Permanent", desc: "Assistance in converting provisional registration to permanent." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about 80G & 12A Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default EightyTwelve;
