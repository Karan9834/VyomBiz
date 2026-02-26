import React from "react";
import { ShieldCheck, Anchor, TrendingUp, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const IECOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Trade
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            IEC Code Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            If you are an entrepreneur or a business looking to expand your venture beyond Indian territory, an IEC number is mandatory. An Import Export Code (IEC) is a unique 10-digit number assigned by the Directorate General of Foreign Trade (DGFT) under India's Ministry of Commerce and Industry. It is required to engage legally in the import and export business.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The gateway to exploring business beyond borders was made available after India brought economic reforms and adopted the liberalization policy in 1991. Since then, Indian citizens and companies have made profitable investments outside the country. The DGFT manages this code to simplify import-export procedures.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why is the IEC Important?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An IEC code is pivotal in tracking and maintaining import and export records. It is also important in maintaining compliance and facilitating hassle-free customs clearance. The IEC code facilitates smooth bank transactions for international trade and leverages benefits to promote exports. Once issued, the IEC code is valid for a lifetime.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                            alt="IEC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const IECAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Trade Expansion
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of IEC Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Businesses that have obtained import-export code registration can access global markets and engage in export-import activities hassle-free.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80"
                            alt="IEC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Lifetime Validity", desc: "One of the most important benefits. The IEC code is valid for the company's lifetime and requires no renewal." },
                        { title: "Global Market Access", desc: "Facilitates Indian businesses in expanding their operations across borders and penetrating international markets with ease." },
                        { title: "Zero Annual Maintenance", desc: "A simple process that does not demand adherence to complex regulations. No return filings required specifically for the IEC Code." },
                        { title: "Reduces Risk of Illegal Trade", desc: "Furnishing updated information limits the trading of illegal goods and paves the way for legal international trade." },
                        { title: "Tax Refunds", desc: "Eligible to claim refunds on taxes paid during the export procedure, helping to bring down operational expenses and improve cash flow." },
                        { title: "Simplified Bank Transactions", desc: "Allows businesses to engage in foreign exchange transactions easily for international payments according to bank requirements." }
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

const IECEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Checklist for Businesses for IEC Code Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Various business entities are eligible to apply for an Import Export License in India. Ensure you strictly meet the following criteria:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Entity Types Allowed
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Sole Proprietorships</li>
                        <li>Partnership Firms</li>
                        <li>Limited Liability Partnerships (LLPs)</li>
                        <li>Private & Public Limited Companies</li>
                        <li>Hindu Undivided Family (HUF)</li>
                        <li>Trusts and Societies</li>
                        <li>Government Entities</li>
                        <li>Non-Governmental Organizations (NGOs)</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Basic Pre-Requisites
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Active PAN Card:</span> Business must have a valid PAN card registered under its name (or individual's name for sole proprietors).</li>
                        <li><span className="font-semibold text-[#072b47]">Current Bank Account:</span> Business must have opened an active current bank account in its exact name.</li>
                        <li><span className="font-semibold text-[#072b47]">Registered Address Proof:</span> An entity must provide proof of its valid registered business location.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Verify Your Target Market Today
                    </button>
                </div>
            </div>
        </section>
    );
};

const IECDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Needed for IEC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Anyone filing an application for import export code registration is required to submit various distinct documents targeting identity and location specifics:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Identity Proof</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">A valid PAN card (Proprietorship or Entity), Voter ID, Aadhaar card, Driving license or Passport. Digital photographs (3x3 cm) of the applicants are required.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Bank Details</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">A cancelled cheque of a valid current bank account matching the exact applicant or business name.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Address Proof</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Proof of address for the business like sale deed, rent agreement, lease deed, or latest utility bills.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Proof of Establishment</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Proof of entity incorporation, MSME certificate, or business statutory registration indicating firm existence.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Technical Verification</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">A valid Digital Signature Certificate (DSC) mapped against the authorized signatory handling the application process.</p>
                </div>
            </div>
        </section>
    );
};

const IECProcessSection = () => {
    const steps = [
        {
            title: "Complete Necessary Paperwork",
            desc: "The first step requires you to ensure that your paperwork is physically collected including your PAN card, identity proof, address proof and bank certificates."
        },
        {
            title: "DGFT Portal Sign Up",
            desc: "Visit the official website of the Directorate General of Foreign Trade (DGFT) and create an active user account associating a valid mobile number and email ID."
        },
        {
            title: "Complete the Application Form",
            desc: "Log in to carefully complete the IEC application form (ANF-2A) mapping out your intended banking relationships and registered trade headquarters accurately."
        },
        {
            title: "Upload Documents and Pay Fees",
            desc: "Upload the verified scanned documents in the exact DGFT specified format. Next, pay the official processing fee online through the integrated portal gateway."
        },
        {
            title: "Submit and Track Application",
            desc: "Post payment, sign and submit your application digitally. Once physically evaluated and approved by external regulators, you receive an email confirmation containing your certificate."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for an Import Export License?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The DGFT has standardized the complete journey targeting remote access making global setups remarkably fast. Here is the operational workflow:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1587293852726-70cd59c7ce00?auto=format&fit=crop&q=80"
                            alt="IEC Registration Process"
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
                                Let Experts Process Your Filing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IECFeaturesSection = () => {
    const features = [
        {
            title: "10+ Years of Experience",
            desc: "Expertly handling DGFT interfaces scaling 10+ years driving secure, worry-free structural compliance globally."
        },
        {
            title: "100% Error-Free Documentation",
            desc: "Advanced multi-stage dossier review preventing common input faults minimizing processing rejection drastically."
        },
        {
            title: "Application Tracking",
            desc: "End-to-end follow-up actively monitoring DGFT dashboards capturing issues rapidly leading to smooth clearance."
        },
        {
            title: "Timely Certificate Delivery",
            desc: "Guaranteed instantaneous delivery of issued digital documents enabling businesses prompt custom execution instantly."
        },
        {
            title: "Compliance Support",
            desc: "Addressing profound post-allocation questions detailing annual updates assisting safe adherence preventing legal frictions natively."
        },
        {
            title: "Quick Response",
            desc: "Trained advisors actively guiding founders keeping teams informed effectively throughout complex procedural intervals easily."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For IEC Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale across borders seamlessly backed by heavily proficient consultants navigating dynamic regulatory constraints globally.
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

const IECRegistration = () => {
    const faqs = [
        {
            question: "Is IEC mandatory for importing personal goods?",
            answer: "No, if the import or export of goods is strictly for personal use and not meant for trade, manufacture, or agriculture, an IEC code is generally not required according to customs exemptions."
        },
        {
            question: "Do I need to renew my IEC every year?",
            answer: "No, an IEC code issued is valid for a lifetime. However, recent DGFT mandates suggest entities must electronically update their IEC details annually (often between April to June) even if there are no data changes."
        },
        {
            question: "Can an individual person apply for an IEC Code?",
            answer: "Yes, an individual acting as a Sole Proprietor can perfectly apply for an Import Export Code using their own individual PAN card."
        },
        {
            question: "Does an IEC apply to services exports like software?",
            answer: "Yes, IEC holds equal importance for individuals heavily executing cross-border software services or IT consultancy when dealing with substantial benefits structured under the Foreign Trade Policy."
        },
        {
            question: "How long does it take for the DGFT to issue the certificate?",
            answer: "Typically, if the submitted forms match exact PAN databases flawlessly accompanied by correctly verified addresses via DSC logic, DGFT generates the registration immediately. Manual verifications might take 10-15 working days."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Import Export Code"
                heroTitleSuffix="(IEC) Registration"
                heroSubtitle="Free Expert Consultation for Licenses"
                heroDescription="Get IEC registration online with expert support. Enable fast and hassle-free import-export code registration safely scaling your business beyond borders accessing massive global markets securely."
                whatsIncludedList={[
                    "DGFT Portal Representation",
                    "Customs Documentation Guide",
                    "Lifetime Validity Issuance",
                    "Zero Annual Ad-hoc Filings"
                ]}
                stats={[
                    { count: "10+ Yrs", label: "Trade Exp", icon: <TrendingUp size={20} /> },
                    { count: "100%", label: "Digital", icon: <Anchor size={20} /> },
                    { count: "DGFT", label: "Approved", icon: <ShieldCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<IECOverview />}
                advantages={<IECAdvantages />}
                eligibility={<IECEligibility />}
                documents={<IECDocumentsSection />}
                process={<IECProcessSection />}
                features={<IECFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Delineate complex boundary regulations covering global trade mechanisms."
                faqs={faqs}
            />
        </div>
    );
};

export default IECRegistration;
