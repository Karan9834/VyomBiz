import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationSouthAfrica Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-south-africa
 */

const CompanyRegistrationSouthAfricaOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            African Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in South Africa – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            South Africa is the most developed nation on the African continent, boasting advanced infrastructure and a strong economy, making it an excellent destination for international business expansion.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With a solid regulatory framework, attractive investment incentives, and established financial systems, South Africa offers a business-friendly environment for entrepreneurs.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why South Africa?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It serves as a strategic gateway to the African continent, offering immense potential in rapidly growing markets.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The government provides numerous incentives, including tax breaks and grants, to attract foreign investment in sectors like industry and tourism.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
                            alt="South Africa Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSouthAfricaAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Unlock opportunities in a diverse and resource-rich economy.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
                            alt="South Africa Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Government Incentives", desc: "Access to Employment Tax Incentives, foreign investment grants, and R&D subsidies." },
                        { title: "Tax Advantages", desc: "Benefit from over 100 double taxation treaties and 50 bilateral investment accords to reduce withholding taxes." },
                        { title: "Strategic Location", desc: "A gateway to the African continent with advanced infrastructure and ports." },
                        { title: "Skilled Workforce", desc: "Government initiatives promote skill development and worker training." },
                        { title: "Economic Stability", desc: "A well-developed business ecosystem with established financial systems." },
                        { title: "Market Potential", desc: "Immense potential in rapidly growing markets across various sectors." }
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

const SouthAfricaIncorporationEligibility = () => {
    const list = [
        { title: "Directors", desc: "Minimum one director for a private company; three for a public company." },
        { title: "Shareholders", desc: "At least one shareholder is required." },
        { title: "Bank Account", desc: "Every registered company must open a business bank account in South Africa." },
        { title: "Public Official", desc: "A resident public official must be appointed." },
        { title: "Annual Returns", desc: "Must file annual returns with the CIPC within 30 business days of establishment." },
        { title: "Registered Address", desc: "A physical office address in South Africa is mandatory." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in South Africa?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating a company in South Africa.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const SouthAfricaIncorporationDocumentsSection = () => {
    const list = [
        "Passport Copies of Directors & Investors",
        "Address Proof (Utility Bill/Financial Statement)",
        "Notice of Company Incorporation",
        "Memorandum of Incorporation (MOI)",
        "Application Form with Authorized Signature",
        "Financial Statement of the Firm",
        "Proposed Company Names",
        "Director Identification Details"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for South Africa Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents required for CIPC Registration.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const SouthAfricaIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Business Structure", desc: "Select the appropriate entity type (e.g., Pty Ltd, NPC)." },
        { title: "Document Preparation", desc: "Gather ID proofs, address proofs, and company details." },
        { title: "Name Reservation", desc: "Ensure your desired company name is unique and available." },
        { title: "Online Registration (CIPC)", desc: "File application and documents via the CIPC portal and pay fees." },
        { title: "Registration Certificate", desc: "Receive official CIPC registration certificate upon approval." },
        { title: "Tax Registration (SARS)", desc: "Register with SARS for Income Tax, VAT, PAYE, etc." },
        { title: "Open Bank Account", desc: "Set up a corporate bank account for business operations." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in South Africa?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to incorporating your business in South Africa.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80" alt="South Africa Company Registration Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SouthAfricaIncorporationFeaturesSection = () => {
    const features = [
        { title: "10+ Years Expertise", desc: "Deep experience in global compliance and company formation." },
        { title: "End-to-End Consulting", desc: "Comprehensive guidance from name reservation to tax registration." },
        { title: "Government Liaison", desc: "Strong innovation network for smoother regulatory approvals." },
        { title: "Expedited Process", desc: "Timely completion with minimized errors and delays." },
        { title: "Transparency", desc: "Clear guidance on timelines, costs, and compliance obligations." },
        { title: "24/7 Support", desc: "Dedicated assistance to resolve queries at every stage." },
        { title: "Documentation Help", desc: "Expert assistance in preparing and submitting all required docs." },
        { title: "Post-Registration", desc: "Ongoing support for annual returns and corporate compliance." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your expert partner for seamless South Africa company registration.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSouthAfrica = () => {

    const faqs = [
        {
            question: "What is the list of documents required for online company registration in South Africa?",
            answer: "The required documents include a copy of identity card or passport, address proof, company name, and company details."
        },
        {
            question: "What are the benefits of company registration in South Africa?",
            answer: "Benefits include tax incentives, subsidies, R&D refunds, access to over 100 tax treaties, government support for skill development, and it serves as a gateway to African markets."
        },
        {
            question: "What is the taxation structure for businesses in South Africa?",
            answer: "Companies must register with SARS. Taxes include Corporate Income Tax (28%), VAT, Skills Development Levy (SDL), Unemployment Insurance Fund (UIF), and Pay As You Earn (PAYE)."
        },
        {
            question: "Can a foreign national be a director of a South African company?",
            answer: "Yes, there are no residency requirements for directors of a Private Company (Pty Ltd). However, a company must appoint a public official who is a resident of South Africa."
        },
        {
            question: "How long does it take to register a company in South Africa?",
            answer: "With VyomBiz's assistance, the process is expedited. Once all documents are submitted, CIPC registration is typically completed swiftly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in South Africa"
                heroSubtitle="Launch Your Business in Africa's Most Developed Economy"
                heroDescription="Incorporate your company in South Africa with expert guidance. Access a resource-rich economy, strategic ports, and a gateway to the entire African continent."
                whatsIncludedList={[
                    "Business Consulting & Mentorship",
                    "Tax and Social Security Compliance",
                    "Lifetime Free Consulting",
                    "Compliance Management",
                    "Bank Account Opening Assistance"
                ]}
                stats={[
                    { count: "500+", label: "Registrations Completed", icon: <Building2 size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Users size={20} /> }, // Sourced from content
                    { count: "50+", label: "Branch Offices", icon: <Briefcase size={20} /> }     // Sourced from content
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationSouthAfricaOverview />}
                advantages={<CompanyRegistrationSouthAfricaAdvantages />}
                eligibility={<SouthAfricaIncorporationEligibility />}
                documents={<SouthAfricaIncorporationDocumentsSection />}
                process={<SouthAfricaIncorporationProcessSection />}
                features={<SouthAfricaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about South Africa Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSouthAfrica;
