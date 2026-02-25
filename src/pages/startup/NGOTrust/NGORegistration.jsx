import React from "react";
import { Users, Briefcase, Building2, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";


/**
 * NGORegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-registration
 */

const NGOOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Social Impact
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Non-Governmental Organizations (NGOs) play a critical role in advocating the cause of society and the underprivileged. However, fostering change involves a legal framework that begins with registration at its core. NGO Registration is the first step in the journey to make a societal impact through philanthropy.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is an NGO?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An NGO is a non-profit organisation founded by a group of people with a shared goal in philanthropy and social service. It covers a wide gamut of charitable services across art, science, sports, education, research, social welfare, religion, charity, environment, sustainability, etc. An NGO uses all its earnings and funds to fulfil its non-profitable objectives.
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                            alt="NGO Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const NGORegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Social Impact
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of NGO Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering an NGO builds value and enhances credibility.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="NGO Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>


                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Recognition", desc: "Validates existence and boosts identity as a separate entity, strengthening legitimacy for stakeholders." },
                        { title: "Tax Exemptions", desc: "Eligible for tax-free framework and exemptions under Section 12A & 80G." },
                        { title: "Funding Opportunities", desc: "Easier access to government grants, CSR funds, and donations from individuals and corporates." },
                        { title: "Asset Procurement", desc: "Facilitates real estate buying, selling and retaining fixed assets in the NGO's name." },
                        { title: "Perpetual Succession", desc: "An NGO functions indefinitely, unaffected by the death or resignation of members (especially Section 8)." },
                        { title: "Limited Liability", desc: "Protection against personal liability for members, safeguarding personal assets." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const NGOEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for NGO Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To start and run a NGO successfully in India, it’s essential to understand the eligibility criteria first.
                    The eligibility criteria for NGO registration in India are mentioned below-
                </p>

                {/* Age and Nationality */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Age and Nationality of Members
                    </h3>

                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Indian Citizenship –
                            </span>{" "}
                            Even though foreigners can be part of a form of NGO, i.e., societies,
                            some members in executive roles must be Indian.
                        </li>

                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Age –
                            </span>{" "}
                            The age of directors or members must be 18.
                            In addition, Trustees must be 21+ years old in some cases.
                        </li>
                    </ul>
                </div>

                {/* Minimum Members */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Minimum Number of Founding Members
                    </h3>

                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust – </span>
                            At least two Trustees are required (a Founder along with one or more members).
                        </li>

                        <li>
                            <span className="font-semibold text-[#072b47]">Section 8 Company – </span>
                            Minimum 2 directors are required (3 directors for a public company).
                            Directors must be individuals; shareholders can be individuals or organizations.
                        </li>

                        <li>
                            <span className="font-semibold text-[#072b47]">Society – </span>
                            Minimum 7 founding members are required.
                            These founding members can be foreigners or Indian nationals.
                        </li>
                    </ul>
                </div>

                {/* Purpose */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Purpose of the Organization
                    </h3>

                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Healthcare</li>
                        <li>Education</li>
                        <li>Poverty Control</li>
                        <li>Promotion of Art, Science, or Social Welfare</li>
                        <li>Environmental Conservation</li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Registered Address – </span>
                        It’s mandatory for NGOs to have a registered address in India.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Non-profit Motive – </span>
                        NGOs must operate with a non-profit objective. Any income generated by charitable
                        or social welfare activities must be reinvested for charitable, social,
                        or educational purposes.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Financial Transparency and Audit – </span>
                        Maintaining financial transparency is crucial. NGOs must conduct timely audits.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Adhering to Regulatory Requirements – </span>
                        NGOs must comply with requirements such as the Income Tax Act and FCRA compliance.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Complying with State-specific Requirements – </span>
                        NGOs must adhere to state-specific regulations for registration and operations.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Launch Your NGO with Experts
                    </button>
                </div>

            </div>
        </section>
    );
};

const NGODocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of NGO Registrations in India
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Non-government organizations can be registered through three legal routes.
                    The three significant types of NGO registration in India are as follows:
                </p>

                {/* Trust */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Trust
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        The process of legally establishing a trust is known as Trust Registration.
                        Trust is one of the three types of non-profit organisations (NPO) created
                        to serve specific causes like healthcare, community development and education.
                        Trust registration is regulated by the Indian Trusts Act, 1882, and legal experts
                        and professionals manage the process.
                    </p>
                </div>

                {/* Society */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Society
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Society registration is the process of founding a society under the
                        Societies Registration Act, 1860. A society is a group of people united
                        by a shared purpose. Societies advocate and promote charity, religion,
                        education, science, literature, and social service.
                    </p>
                </div>

                {/* Section 8 */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Section 8 Company
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Section 8 Company is another type of non-profit organisation registered
                        under Section 8 of the Companies Act, 2013. The Company’s goal is to
                        promote commerce, art, science, religion, charity or any other objective
                        for the greater good of society. A Section 8 Company, under no circumstances,
                        functions with the aim of earning profits.
                    </p>
                </div>

                {/* Classifications */}
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6">
                    Classifications of NGOs for NGO Registration in India
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    NGOs are generally organizations that function independently. In India,
                    NGOs can be classified on the basis of their orientation and level of operation
                    for NGO registration in India:
                </p>

                {/* Orientation */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        1- By the Level of Orientation
                    </h3>

                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>Orientation towards Charity</li>
                        <li>Orientation towards Service</li>
                        <li>Orientation towards Participation</li>
                        <li>Empowering Orientation</li>
                    </ul>
                </div>

                {/* Operation */}
                <div>
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        2- By the Level of Operation
                    </h3>

                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>Community-based operations</li>
                        <li>City-Wide operations</li>
                        <li>National NGOs</li>
                        <li>International NGOs</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const NGOProcessSection = () => {
    const steps = [
        {
            title: "Identify the Type",
            desc: "Based on its goals and objectives, identify the NGO type and choose one of the following: trust, society, or section 8 company."
        },
        {
            title: "Pick an Exclusive Name",
            desc: "Pick an exclusive name (not similar to any existing NGO) for your NGO reflecting its mission, goals and existence."
        },
        {
            title: "Draft the Memorandum of Association (MoA) & Articles of Association (AoA)",
            desc: "Draft the MoA and AoA outlining its goals, guidelines, regulations and policies to govern its operations and management. File form DIR-3 with ROC to obtain DIN."
        },
        {
            title: "Form the Governing Body",
            desc: "Form a governing body or managing committee consisting of people responsible for the organization's operations and decision-making processes."
        },
        {
            title: "Furnish a Registered Office Address",
            desc: "Furnish a registered office address for official communication and delivery of legal documents and paperwork."
        },
        {
            title: "Compile Necessary Documentation",
            desc: "Compile important documents, including identity proofs, address proofs, and photographs of all members of the governing council."
        },
        {
            title: "Submit the Registration Application",
            desc: "Submit the registration application with attached documents, to the relevant authority depending on the type of the NGO - Registrar of Societies, Registrar of Trusts, or Registrar of Companies."
        },
        {
            title: "Review and Approval",
            desc: "The registration authority will assess the application and all supporting documents. You may be asked to provide additional information or clarification, depending on the review."
        },
        {
            title: "Acquire the Registration Certificate",
            desc: "After successfully reviewing the application and supporting documents, the registration authority will issue a certificate validating the NGO's legal status."
        },
        {
            title: "Request for Tax Exemptions",
            desc: "Once the registration certificate is acquired, the NGO is eligible to apply for tax exemptions under the Income Tax Act. However, it must have obtained certifications such as 12A and 80G prior to the steps mentioned above."
        },
        {
            title: "Adhere to Compliance and Reporting",
            desc: "Compliance with legal requirements is a must, and it includes filing yearly returns, maintaining accounts, and presenting audited financial statements."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for NGO Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for NGO registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="NGO Registration Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200"
                            >
                                {/* Step Number */}
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Bottom border */}
                        <div className="border-t border-slate-200"></div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Secure Your NGO License Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const NGOFeaturesSection = () => {
    const features = [
        {
            title: "100% Legal & Transparent Process",
            desc: "Complete compliance with Indian laws including Trust Act, Societies Act, and Companies Act with full transparency at every stage."
        },
        {
            title: "Expert Consultation Support",
            desc: "Dedicated NGO registration experts guide you in selecting the right structure — Trust, Society, or Section 8 Company."
        },
        {
            title: "End-to-End Documentation Assistance",
            desc: "We help draft Trust Deed, MoA, AoA, and prepare all required documents for smooth approval."
        },
        {
            title: "Fast & Hassle-Free Registration",
            desc: "Quick application filing and follow-ups with authorities to ensure timely approval of your NGO."
        },
        {
            title: "Tax Exemption Guidance (12A & 80G)",
            desc: "Professional assistance in obtaining tax exemptions to help your NGO receive donations efficiently."
        },
        {
            title: "Post-Registration Compliance Support",
            desc: "Support for annual filings, audits, compliance reporting, and maintaining regulatory standards."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Registration in India
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        NGO registration provides a structured legal identity, regulatory compliance framework,
                        and eligibility for various statutory benefits in India.
                    </p>
                </div>

                {/* Features Rows */}
                <div>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300"
                        >
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

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
                overview={<NGOOverview />}
                advantages={<NGORegistrationAdvantages />}
                eligibility={<NGOEligibility />}
                documents={<NGODocumentsSection />}
                process={<NGOProcessSection />}
                features={<NGOFeaturesSection />}
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