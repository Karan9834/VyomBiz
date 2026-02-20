import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrustRegistration Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrustOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Legally Compliant
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trust Registration in India – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Indian Trusts Act of 1882 governs trust registration in India. A trust is a legal entity founded to oversee assets for charitable, religious, or private purposes. It mandates a Trust Deed to outline the trust's purpose, trustees, beneficiaries and the authority given to each trustee.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trust Registration grants legal status to the trust and makes it eligible to seek tax exemptions under section 12A and 80G.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Trust?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trust is a legal agreement between two parties, wherein one party, known as the trustee, manages and oversees assets or property for the benefit of another party, called the beneficiary. Trusts offer an organized form to manage and distribute assets within the legal framework, ensuring protection and operational accountability.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                            alt="Trust Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrustRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Legally Compliant
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trust Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering a trust provides legal structure, financial benefits, and long-term credibility.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Trust Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Exemptions", desc: "Eligible for 12A & 80G registration, providing tax relief on income and donations." },
                        { title: "Legal Recognition", desc: "A registered trust is a legal entity that can sue, be sued, and hold property in its name." },
                        { title: "Social Welfare", desc: "Provides a structured platform to carry out charitable activities like education and medical relief." },
                        { title: "Assets Protection", desc: "Helps in safeguarding assets and wealth for future generations through specific clauses." },
                        { title: "Avoid Probate", desc: "Trust assets can be transferred to beneficiaries without the complex probate process." },
                        { title: "Credibility", desc: "Enhances credibility among donors, government bodies, and the public for fundraising." }
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

const TrustEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Trust Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To register a Trust in India, it's essential to understand the eligibility criteria first.
                    Essential criteria and inclusions for a valid Trust Deed are mentioned below-
                </p>

                {/* Minimum Trustees */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Minimum Number of Trustees
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Minimum 2 Trustees –
                            </span>{" "}
                            At least two trustees are required to register a trust.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Settlor Present –
                            </span>{" "}
                            The author/founder of the trust must be defined.
                        </li>
                    </ul>
                </div>

                {/* Trust Name and Objectives */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Trust Name and Objectives
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Unique Name – </span>
                            The trust must have a unique name not infringing on others.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Objectives – </span>
                            Clear charitable, religious, or private objectives defined.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Registered Office – </span>
                        A physical address in India for official communication.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Trust Deed – </span>
                        Drafted on stamp paper mentioning all terms, parties, and assets.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Trust Registration Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const TrustDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Trust Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register a Trust in India, you need to submit the following documents.
                    Complete list of documents required for Trustees, Settlors, and the Registered Office:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Passport Size Photographs – </span>
                            Photographs of all Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card Copy – </span>
                            PAN Card copies of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Aadhaar / Voter ID – </span>
                            Identity proof of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Latest Bank Statement – </span>
                            Bank statements of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Electricity / Water Bill – </span>
                            Utility bill for the registered office address.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Rent Agreement – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Property Owner – </span>
                            No Objection Certificate from the property owner.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Ownership Proof – </span>
                            Required if the office is owned.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const TrustProcessSection = () => {
    const steps = [
        {
            title: "Trust Name Selection",
            desc: "Choose a unique and compliant trust name that reflects the trust's objectives and is not similar to existing trusts."
        },
        {
            title: "Draft Trust Deed",
            desc: "Prepare legally structured trust deed with all clauses including objectives, trustees, beneficiaries, and asset management."
        },
        {
            title: "Documentation",
            desc: "Collect KYC and address proofs of all parties including trustees, settlor, and registered office."
        },
        {
            title: "Registrar Filing",
            desc: "Submit deed to Sub-Registrar office with applicable stamp duty and registration fees."
        },
        {
            title: "Certificate Issue",
            desc: "Receive registered Trust Deed (Certificate) upon successful verification and approval."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Trust Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for Trust registration in India involves structured documentation,
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
                            alt="Trust Registration Process"
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
                                Start Your Trust Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const TrustFeaturesSection = () => {
    const features = [
        {
            title: "Expert Consultation",
            desc: "Legal guidance on trust structure and objectives from experienced professionals."
        },
        {
            title: "Deed Drafting",
            desc: "Professional drafting of Trust Deed to avoid legal loopholes and ensure compliance."
        },
        {
            title: "Name Check",
            desc: "Ensuring the selected name is available and compliant with legal requirements."
        },
        {
            title: "Fast Filing",
            desc: "Expedited filing process with the Registrar for quicker approval."
        },
        {
            title: "Online Documentation",
            desc: "Hassle-free online documentation support for all required documents."
        },
        {
            title: "12A & 80G Support",
            desc: "Assistance in obtaining tax exemption registrations after trust registration."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Trust Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Trust registration provides legal structure, financial benefits, and long-term credibility
                        for your charitable or religious objectives.
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

const TrustRegistration = () => {
    const faqs = [
        {
            question: "What is the time frame for Trust Registration?",
            answer: "The entire process typically takes about 6 to 8 weeks, depending on document verification and processing by the local registrar office."
        },
        {
            question: "Is it mandatory to register a Trust Deed?",
            answer: "Yes, for a trust to be legally valid and eligible for tax exemptions under sections 12A and 80G, the trust deed must be registered with the appropriate authority."
        },
        {
            question: "Can a Trust operate in multiple states?",
            answer: "Yes, a registered trust can operate across India. However, the trust deed should clearly mention the scope of its activities."
        },
        {
            question: "What is the difference between a Trustee and a Beneficiary?",
            answer: "A Trustee manages the trust and its assets, while a Beneficiary is the person or group for whose benefit the trust is created."
        },
        {
            question: "Can an NRI be a trustee in an Indian Trust?",
            answer: "Yes, an NRI can be a trustee, but certain conditions and RBI guidelines regarding foreign contributions (FCRA) may apply."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trust Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Hassle-free Trust Registration Services"
                heroDescription="Is your mind full of noble thoughts to support literature, science, and other causes of public interest? Talk to our experts for hassle-free trust registration in India."
                whatsIncludedList={[
                    "Successfully Assisted in 1000+ Trust Registration in India",
                    "Assets Worth Rs 2500 Crore are Managed by Trusts Registered with Us",
                    "Expert Legal Consultation",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42810+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<TrustOverview />}
                advantages={<TrustRegistrationAdvantages />}
                eligibility={<TrustEligibility />}
                documents={<TrustDocumentsSection />}
                process={<TrustProcessSection />}
                features={<TrustFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Trust Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default TrustRegistration;
