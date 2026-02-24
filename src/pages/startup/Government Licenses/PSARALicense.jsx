import React from 'react';
import { ShieldCheck, Anchor, Fingerprint } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const PSARAOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Legal Protection
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            PSARA License in India – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            PSARA License in India is a mandatory certification for private security agencies to operate legally within the country. The Private Security Agencies (Regulation) Act, 2005 governs private security agencies in India. PSARA registration is especially important for security agencies to maintain trustworthiness and reliability and run seamlessly within the legal framework without any operational hassles.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The PSARA Act was established in 2005 to regulate the functioning of private security agencies, ensuring that these agencies maintain professionalism, accountability, and quality in the services they provide. The Act came into force on 15 March 2006. The respective state governments issue the license, which involves a comprehensive application process that includes background checks, financial scrutiny, and compliance with prescribed training requirements for security personnel.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Private Security Agencies (Regulation) Act, 2005?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Private Security Agencies (Regulation) Act, 2005 is a central legislation in India that regulates the private security industry. Private security agencies are business institutions established to provide security services to businesses operating across various sectors, such as information technology, banking, finance, and industries. No security agency can operate without a valid PSARA license.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
                            alt="PSARA License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PSARAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Business Growth
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of PSARA Security License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        PSARA License is mandatory for running a private security agency in India. Necessary for legal compliance, it boosts credibility, allows companies to bid for government contracts, and helps expand networking opportunities.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&q=80"
                            alt="PSARA Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Regulation & Standardization", desc: "It facilitates the smooth functioning of private security agencies, regulating their operations per regulatory needs. It helps set a standardized template for the industry including background checks for security personnel." },
                        { title: "Credibility & Trust", desc: "A PSARA-licensed agency earns customer trust and credibility, boosting its reputation. This license ensures it follows compliances, which helps attract more clients and enables business expansion." },
                        { title: "Accountability", desc: "Private security agencies with a valid PSARA License are accountable to regulatory authorities, facilitating transparency. The accountability factor helps agencies maintain ethical standards." },
                        { title: "Market Access", desc: "PSARA registration opens up business opportunities for private security agencies to boost their client portfolios. Various government and corporate businesses mandate this." },
                        { title: "Insurance & Legal Protection", desc: "Agencies with PSARA licenses manage business insurance with ease. Insurance covers liabilities arising from security operations and offers legal protection in disputes." },
                        { title: "Growth & Expansion", desc: "A PSARA license is a gateway to growth and expansion. It's a stepping stone for a security agency to operate across different states in India, expanding its clientele." }
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

const PSARAEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Checklist for Security Guards under PSARA License Regulations
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for a single or multi-state PSARA License, ensure the active security personnel within your operation align with the mandated PSARA requirements:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        General Criteria
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>The applicant must necessarily hold an Indian citizenship.</li>
                        <li>The applicant must be an individual aged between 18 and 65 years.</li>
                        <li>The applicant must have undergone prior training as mandated.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Service & Background Requirements
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>The applicant must not be terminated from any government service.</li>
                        <li>The applicant must fulfil all the physical requirements necessary (Height, Weight, Health).</li>
                        <li>The applicant must submit a character certificate regarding their individual character.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Assess Applicant Eligibility
                    </button>
                </div>
            </div>
        </section>
    );
};

const PSARADocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Needed for PSARA Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Here is a list of documents required for PSARA registration, which an applicant must submit to completely register the private security agency:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">PAN & Incorporation</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">PAN Card & Certificate of Incorporation / LLP Agreement.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Promoter Details</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Two passport-size photos of the promoters, along with their PAN Cards.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Tax & Labour</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">GST number, Provident Fund Registration, ESIC Registration, and Labour Act Registration.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">S&E License</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Registration under the Shops and Commercial Establishments Act.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">ID & ITR</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Identity Proofs for Directors/Employees and Income Tax Returns Copies for the Directors.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Address Proof & Affidavits</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Address Proof of the Agency Office, Affidavit under Section 7 (2) of PSARA 2005.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">MoU for Training</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Affidavit for security training & MoU signed with an authorized training institute.</p>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <h4 className="text-[#072b47] font-semibold text-lg mb-1">Police Verification is Mandatory</h4>
                    <p className="text-sm text-slate-700">Police verification follows the application submission. If the agency is a partnership or a company, the respective directors or controlling partners of the business entities must also undertake police verification for antecedent clearance.</p>
                </div>
            </div>
        </section>
    );
};

const PSARAProcessSection = () => {
    const steps = [
        {
            title: "Prepare Necessary Documents",
            desc: "Applicants must keep all the necessary filing documents ready including promoters' details and other corporate registrations."
        },
        {
            title: "MOU with the Training Institute",
            desc: "Applicants seeking a PSARA License must apply for an MoU with a listed and recognized institute to train their deployed candidates."
        },
        {
            title: "Application Filing (Form-I)",
            desc: "Submit the application (Form-I) to the respective state authorities. Also enclose Form-II for verification and an affidavit in Form-III."
        },
        {
            title: "Police Verification",
            desc: "Mandatory police verification of antecedents via Form-I check is executed. Directors/owners are screened completely."
        },
        {
            title: "Obtaining PSARA License",
            desc: "After police verification and No Objection Certificate (NOC) is received, authorities review and physically issue the PSARA license."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step PSARA License Online Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure to obtain a PSARA License passes through several strict structural stages. Let us explore the step-by-step process below:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                            alt="PSARA Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>
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
                        <div className="border-t border-slate-200"></div>
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Let Experts Manage Your Filing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PSARAFeaturesSection = () => {
    const features = [
        {
            title: "State-specific License",
            desc: "Applicable only to security agencies that desire to operate their business solely within one single specific state."
        },
        {
            title: "Multi-state License",
            desc: "Designed for larger security agencies that plan to operate concurrently in five different states using a multi-state credential."
        },
        {
            title: "All-India License",
            desc: "Broadest level of PSARA License for highly extensive agencies aiming to function continuously across the entire nation."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Choosing the Right PSARA License Plan
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Security agencies can expand according to their service capacity. Various tiers exist based on geographical coverage required:
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
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

const PSARALicense = () => {
    const faqs = [
        {
            question: "Can anyone apply for a PSARA License?",
            answer: "Only Indian citizens of eligible age (clean criminal record, healthy financial position) can form an agency. Directors must possess valid ID/Address proof and clear all mandatory police verifications."
        },
        {
            question: "What are the features of the PSARA Act 2005 applicable to security agencies?",
            answer: "It establishes a central legal framework, mandates official registration before operations begin, forces police verification of all guards, requires MOU affiliations for training, and subjects agencies to regular operational audits."
        },
        {
            question: "What are the fitness requirements for becoming a private security guard?",
            answer: "Minimum Height: 160 cm, Chest Measurement: 80 cm, paired with satisfactory physical fitness levels and educational qualifications aligned with local state guidelines. Completing PSARA-mandated training is also strictly required."
        },
        {
            question: "What documents are required to renew the PSARA License?",
            answer: "Original PSARA License, PAN Card, Identity/Address proofs of key management, proof of existing business premise, and an updated Affidavit under section 7(2) of the PSARA Act, 2005."
        },
        {
            question: "What are the revenue streams for private security agencies having a PSARA license?",
            answer: "Key streams include hourly/contract-based billing for guard personnel, providing specialized security services (events, executive protection), tech integration (CCTVs/Alarms), along with consultation and corporate training services."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="PSARA License"
                heroTitleSuffix="in India"
                heroSubtitle="Ensure Professional Security Compliance"
                heroDescription="Apply for PSARA License with our Corporate Experts. Get End-to-end PSARA registration, police verification, and complete documentation support nationwide."
                whatsIncludedList={[
                    "Preparation of Affidavits",
                    "Training Institute MoU Execution",
                    "Police Verification Support",
                    "Complete Registration Filing"
                ]}
                stats={[
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> },
                    { count: "Nationwide", label: "Registration Access", icon: <Anchor size={20} /> },
                    { count: "Compliance", label: "Audits Handled", icon: <Fingerprint size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<PSARAOverview />}
                advantages={<PSARAAdvantages />}
                eligibility={<PSARAEligibility />}
                documents={<PSARADocumentsSection />}
                process={<PSARAProcessSection />}
                features={<PSARAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on PSARA License"
                subtitle="Understanding the core legal guidelines of private security agencies."
                faqs={faqs}
            />
        </div>
    );
};

export default PSARALicense;
