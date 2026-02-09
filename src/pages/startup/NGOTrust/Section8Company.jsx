import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Section8Company Page
 * Refactored to match TrustRegistration & SocietyRegistration design.
 */

const Section8Company = () => {
    const faqs = [
        {
            question: "What is a Section 8 Company?",
            answer: "A Section 8 Company is a Non-Profit Organization (NPO) registered under the Companies Act, 2013, established to promote commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of the environment."
        },
        {
            question: "Can a Section 8 Company distribute profits?",
            answer: "No, a Section 8 Company cannot distribute profits or dividends to its members. Any profit or income generated must be utilized solely for promoting the objectives of the company."
        },
        {
            question: "What are the tax benefits available?",
            answer: "Section 8 companies can avail tax exemptions under Section 12A and 80G of the Income Tax Act. Donors also get tax deductions for their contributions under Section 80G."
        },
        {
            question: "What is the minimum number of directors required?",
            answer: "A minimum of two directors are required to incorporate a Section 8 Company. At least one director must be a resident of India."
        },
        {
            question: "How can I check if my Section 8 Company is registered?",
            answer: "You can check the registration status by visiting the Ministry of Corporate Affairs (MCA) website and using the 'View Company Master Data' service with your Corporate Identification Number (CIN)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Section 8 Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Simplified Non-Profit Incorporation"
                heroDescription="Start your Non-Profit Organization with full legal recognition. We simplify the Section 8 incorporation process, ensuring compliance and helping you achieve your philanthropic goals effortlessly."
                whatsIncludedList={[
                    "Greater Credibility among Donors",
                    "Eligible for Tax Exemptions (80G & 12A)",
                    "Expert Legal Consultation",
                    "Complete Documentation Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= PRICING SECTION ================= */}
            <PricingSection />
            <TalkExpert expertise="Expertise in Section 8 Company Registration" />
            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Social Entrepreneurship",
                    title: "Section 8 Company Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Section 8 Company Registration is essential to encourage non-profitable goals. Donations made to Section 8 Companies are eligible for deductions under the rules of the Income Tax Act, and these companies enjoy tax exemptions.",
                        "The sole purpose of the establishment is to promote social entrepreneurship and charity in India to help the ones in need. Before applying for incorporation with the Registrar of Companies (ROC), the applicant must seek a license from the Central Government.",
                        <strong>What is a Section 8 Company?</strong>,
                        "A Section 8 Company is a Non-Profit Organization (NPO) created to advance commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or any other comparable goal.",
                        "In contrast to other businesses, it uses the money it makes to achieve its declared goals rather than dividing it up among its members. It holds significant credibility and is preferred by donors and government agencies."
                    ],
                    whyIdealTitle: "Purposes & Objectives",
                    whyIdealList: [
                        { title: "Social Welfare", desc: "Promotion of social welfare projects." },
                        { title: "Education & Research", desc: "Advancement of education and scientific research." },
                        { title: "Arts & Science", desc: "Support for arts, commerce, and science." },
                        { title: "Environment", desc: "Protection and improvement of the natural environment." },
                        { title: "Charity", desc: "Undertaking charitable activities for the needy." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Section 8 Incorporation",
                    subtitle: "Section 8 Companies enjoy distinct legal advantages and tax exemptions.",
                    list: [
                        { title: "Legal Recognition", desc: "Gets legal recognition and can accept donations from outside sources." },
                        { title: "Tax Exemptions", desc: "Eligible for 12A & 80G registration; donors get tax deductions." },
                        { title: "Limited Liability", desc: "Members/Directors have limited liability, protecting personal assets." },
                        { title: "Perpetual Existence", desc: "Continues to exist indefinitely until dissolved, regardless of member changes." },
                        { title: "Zero Stamp Duty", desc: "Exempted from paying stamp duty on Memorandum and Articles of Association." },
                        { title: "Credibility", desc: "Higher credibility compared to Societies and Trusts, easing grant approvals." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Mandatory requirements to incorporate a Section 8 Company.",
                    list: [
                        { title: "Min 2 Directors", desc: "Minimum two shareholders/directors are required." },
                        { title: "Resident Director", desc: "At least one director must be a resident of India." },
                        { title: "Non-profit Object", desc: "Must promote arts, science, charity, etc." },
                        { title: "No Dividends", desc: "Profits cannot be distributed as dividends to members." },
                        { title: "Reinvestment", desc: "Profits must be reinvested into the company outcomes." },
                        { title: "Action Plan", desc: "A detailed 3-year action plan is often required." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "List of KYC and office documents required for incorporation.",
                    list: [
                        "PAN Card of Directors/Shareholders",
                        "Aadhaar / Voter ID",
                        "Passport / Driving License",
                        "Passport Size Photographs",
                        "Rent Agreement (Registered Office)",
                        "Utility Bill (Electricity/Water, Latest)",
                        "NOC from Landlord",
                        "Digital Signature (DSC) & DIN"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Procedure",
                    subtitle: "Step-by-step process for Section 8 Company Incorporation.",
                    steps: [
                        { step: "01", title: "Name Approval", desc: "Apply for name reservation (Association, Foundation, etc.)." },
                        { step: "02", title: "DSC & DIN", desc: "Obtain Digital Signatures and Director Identification Numbers." },
                        { step: "03", title: "Drafting", desc: "Draft Memorandum (MoA) & Articles of Association (AoA)." },
                        { step: "04", title: "License (INC-12)", desc: "Apply for Section 8 License from the Central Government." },
                        { step: "05", title: "Incorporation", desc: "File SPICe+ (INC-32) form for final Certificate of Incorporation." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Comprehensive support for your NPO formation.",
                    list: [
                        { title: "Expert Licensing", desc: "Specialized support for Section 8 licensing." },
                        { title: "MoA Drafting", desc: "Legal drafting of MoA & AoA with non-profit clauses." },
                        { title: "Compliance", desc: "End-to-end compliance management post-incorporation." },
                        { title: "Tax Guidance", desc: "Assistance with 12A & 80G registrations." },
                        { title: "Fast Track", desc: "Expedited processing with correct documentation." },
                        { title: "Transparent", desc: "Clear pricing and process explanation." },
                        { title: "Dedicated Team", desc: "Professional support throughout the journey." },
                        { title: "Annual Filing", desc: "Support for annual maintenance and returns." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Section 8 Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8Company;
