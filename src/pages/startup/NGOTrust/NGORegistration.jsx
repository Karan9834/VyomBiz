import React from "react";
import { Users, Briefcase, Building2, TrendingUp, BookOpen, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";


/**
 * NGORegistration Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/ngo-registration
 */

const NGORegistration = () => {

    const faqs = [
        {
            question: "What is an NGO?",
            answer: "An NGO (Non-Governmental Organization) is a non-profit group that functions independently of any government. They are organized on community, national, and international levels to serve specific social or political purposes and are active in humanitarian, educational, healthcare, public policy, social, human rights, environmental, and other areas to effect changes according to their objectives."
        },
        {
            question: "What are the types of NGO registration available in India?",
            answer: "In India, an NGO can be registered as a Trust (under Indian Trusts Act, 1882), a Society (under Societies Registration Act, 1860), or a Section 8 Company (under Companies Act, 2013)."
        },
        {
            question: "Can an NGO be registered online?",
            answer: "Yes, the process for registering an NGO, especially as a Section 8 Company, is primarily online. Trust and Society registrations may require physical visits to the local registrar depending on the state, but the documentation preparation can be done online."
        },
        {
            question: "What is the minimum number of members required?",
            answer: "For a Trust, minimum 2 trustees. For a Society, minimum 7 members. For a Section 8 Company, minimum 2 directors."
        },
        {
            question: "Is income of an NGO taxable?",
            answer: "NGOs can avail tax exemptions on their income if they are registered under Section 12A and 80G of the Income Tax Act. Without these registrations, their surplus income may be taxable."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Registration"
                heroTitleSuffix="Online in India"
                heroSubtitle="Start your social journey with 50% off on Professional Services"
                heroDescription="Apply for NGO registration in India with Vyombiz expert support. Get end-to-end assistance with eligibility, documents, and the entire registration process for Trusts, Societies, and Section 8 Companies."
                whatsIncludedList={[
                    "Assisted in Successful Registration of 1000+ NGOs",
                    "Network of 200+ Experienced NGO Consultants",
                    "End-to-end Assistance in NGO Registration",
                    "Guidance on 12A & 80G Tax Exemptions"
                ]}
                stats={[
                    { count: "1000+", label: "NGOs Registered", icon: <Users size={20} /> },
                    { count: "500Cr+", label: "Funding Secured", icon: <TrendingUp size={20} /> },
                    { count: "99%", label: "Client Retention", icon: <Briefcase size={20} /> }
                ]}
            />
            <PricingSection />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Social Impact",
                    title: "NGO Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Non-Governmental Organizations (NGOs) play a critical role in advocating the cause of society and the underprivileged. However, fostering change involves a legal framework that begins with registration at its core.",
                        "NGO Registration is the first step in the journey to make a societal impact through philanthropy. It enables credibility, encourages transparency, and facilitates various benefits, including tax exemptions.",
                        <strong>What is an NGO?</strong>,
                        "An NGO is a non-profit organisation founded by a group of people with a shared goal in philanthropy and social service.",
                        "It covers a wide gamut of charitable services across art, science, sports, education, research, social welfare, religion, charity, environment, sustainability, etc. An NGO uses all its earnings and funds to fulfil its non-profitable objectives."
                    ],
                    whyIdealTitle: "Types of NGO Registrations",
                    whyIdealList: [
                        { title: "Trust Registration", desc: "Regulated by Indian Trusts Act, 1882. Ideal for charitable/religious purposes with at least 2 trustees." },
                        { title: "Society Registration", desc: "Regulated by Societies Registration Act, 1860. Best for democratic groups with at least 7 members." },
                        { title: "Section 8 Company", desc: "Regulated by Companies Act, 2013. Offers more credibility and is preferred for larger scale operations." }
                    ]
                }}
                advantages={{
                    title: "Benefits of NGO Registration",
                    subtitle: "Registering an NGO builds value and enhances credibility.",
                    list: [
                        { title: "Legal Recognition", desc: "Validates existence and boosts identity as a separate entity, strengthening legitimacy for stakeholders." },
                        { title: "Tax Exemptions", desc: "Eligible for tax-free framework and exemptions under Section 12A & 80G." },
                        { title: "Funding Opportunities", desc: "Easier access to government grants, CSR funds, and donations from individuals and corporates." },
                        { title: "Asset Procurement", desc: "Facilitates real estate buying, selling and retaining fixed assets in the NGO's name." },
                        { title: "Perpetual Succession", desc: "An NGO functions indefinitely, unaffected by the death or resignation of members (especially Section 8)." },
                        { title: "Limited Liability", desc: "Protection against personal liability for members, safeguarding personal assets." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Essential requirements to start an NGO in India.",
                    list: [
                        { title: "Non-profit Motive", desc: "Must operate with a non-profit objective. Income must be reinvested for charitable purposes." },
                        { title: "Minimum Members", desc: "Trust: 2 Trustees; Society: 7 Members; Section 8: 2 Directors." },
                        { title: "Age & Citizenship", desc: "Members must be 18+ (Trustees 21+ in some cases). At least one Indian resident director for Section 8." },
                        { title: "Registered Address", desc: "Mandatory to have a registered office address in India for official communication." },
                        { title: "Valid Objectives", desc: "Must focus on Healthcare, Education, Poverty Control, Environment, Arts, Science, etc." },
                        { title: "Financial Transparency", desc: "Must be willing to maintain proper accounts and conduct timely audits." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Common documents required for NGO registration (Trust, Society, or Section 8).",
                    list: [
                        "PAN Card Copy of all Members/Trustees/Directors",
                        "Aadhaar / Voter ID / Passport of all Members",
                        "Passport Size Photographs of all Members",
                        "Latest Bank Statement / Utility Bill (Residence Proof of Members)",
                        "Electricity / Water Bill of Registered Office",
                        "Rent Agreement (if office is rented)",
                        "NOC from Property Owner",
                        "Digital Signature Certificate (DSC) for Directors (Section 8)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1593113598340-089ade0af13d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Simplified steps to register your NGO with Vyombiz.",
                    steps: [
                        { step: "01", title: "Select NGO Type", desc: "Choose between Trust, Society, or Section 8 Company based on your goals." },
                        { step: "02", title: "Name Reservation", desc: "Select a unique name and apply for reservation (RUN/Spice+ for Section 8)." },
                        { step: "03", title: "Documentation", desc: "Draft Deed/MoA & AoA and collect KYC documents of members." },
                        { step: "04", title: "Application Filing", desc: "Submit application to relevant authority (Registrar/ROC) with fees." },
                        { step: "05", title: "Certificate Issuance", desc: "Receive Registration Certificate after successful verification." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "We are the first choice of socialpreneurs for NGO registration.",
                    list: [
                        { title: "Expert Consultation", desc: "Network of experienced NGO registration consultants." },
                        { title: "High Success Rate", desc: "Assisted in successful registration of 1000+ NGOs." },
                        { title: "Funding Support", desc: "Helped NGOs secure funding worth Rs 500 Crore+." },
                        { title: "Tax Exemption Guidance", desc: "End-to-end support for 12A & 80G registrations." },
                        { title: "Pan-India Service", desc: "Ensuring NGO registration across 10,000+ pin codes." },
                        { title: "Dedicated Support", desc: "Dedicated relationship manager for your application." },
                        { title: "Transparent Pricing", desc: "No hidden charges, honest and affordable pricing." },
                        { title: "Compliance Management", desc: "Post-registration support for annual compliances." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about NGO Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default NGORegistration;
