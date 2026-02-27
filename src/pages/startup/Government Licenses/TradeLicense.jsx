import React from 'react';
import { ShieldCheck, FileText, Anchor } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const TradeOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Business Legitimacy
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trade License in India – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trade license is a certificate that permits businesses to carry on specific business activities within a fixed or particular jurisdiction. The state municipal corporation issues the trade license to all applicants in India. It ensures that all businesses adhere to certain and specific standards as per rules and guidelines.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The trade license restricts owners to specific activities stated in the license. It also protects residents from harmful health hazards associated with unregulated businesses.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why is Trade License Required?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A municipal corporation grants, governs, administers, and monitors trade licenses through local legal regulations that vary from state to state. A trade license ensures that a business is being carried out with specific safety standards, protecting the community from health hazards or public nuisances.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
                            alt="Trade License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TradeAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Growth Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trade License Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        A trade license registration provides massive benefits such as legal protection, boosting customer trust, unlocking financing, and improving community relations.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                            alt="Trade License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Protection", desc: "Provides vital legal rights that help businesses build customer trust and safeguard against lawsuits by regulating authorities." },
                        { title: "Financial Security", desc: "Helps businesses obtain credits and loans by establishing legal credibility and facilitating access to governmental schemes." },
                        { title: "Business Growth", desc: "Helps entrepreneurs expand seamlessly through loan flexibility, government contracts, and partnership operations." },
                        { title: "Tax Benefits", desc: "Provides various tax benefits like breaks, credits, deductions, and holidays for entities complying on local and state fronts." },
                        { title: "Environmental Protection", desc: "Ensures compliance in sensitive industries (food, healthcare, pharma, etc.) which protects communities from safety risks." },
                        { title: "Overall Stability", desc: "Safeguards smooth continuous business operations without severe legal or operational disruptions." }
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

const TradeEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Different Categories of Trade License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The allotment of different categories of trade licenses helps businesses strictly distinguish operations based on activity risk. Types include:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Commercial Establishments
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Shop License:</span> For small shops like grocery, clothing, and retail.</li>
                        <li><span className="font-semibold text-[#072b47]">Industrial License:</span> For factories and large-scale industrial enterprises.</li>
                        <li><span className="font-semibold text-[#072b47]">Food Establishment License:</span> For hotels, food trucks, and caterers.</li>
                        <li><span className="font-semibold text-[#072b47]">Healthcare License:</span> For hospitals, personal care centers, etc.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Specialized Operations
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Fire Safety Certificate:</span> For buildings vulnerable to fire (theaters/malls).</li>
                        <li><span className="font-semibold text-[#072b47]">Occupation License:</span> For service providers like electricians/plumbers.</li>
                        <li><span className="font-semibold text-[#072b47]">Event Management:</span> For marriage halls and party organizers.</li>
                        <li><span className="font-semibold text-[#072b47]">Pet Shop License:</span> For sale of pets/pet food.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Find My Trade Category
                    </button>
                </div>
            </div>
        </section>
    );
};

const TradeDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Obtaining a Trade License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Given below are the significant documents required for obtaining a trade license from municipal authorities:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Basic Identity</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Aadhaar Card and Applicant ID proof with business address.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Entity Drafts</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Certificate of Incorporation, MOA, and AOA (for companies).</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Financial Details</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">PAN for tax ID and a canceled cheque/bank statement.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Premise Proof</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Property tax receipts or lease agreement paired with an NOC from the premise owner.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Environmental Clearances</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">NOCs from adjacent businesses, Pollution Control Board, and the local Fire Department.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Layout Certification</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Certified setup diagram of the business premise and Khata Certificate.</p>
                </div>
            </div>
        </section>
    );
};

const TradeProcessSection = () => {
    const steps = [
        {
            title: "Sign Up on Municipal Portal",
            desc: "Create an account on the relevant municipal corporation's official website using basic details (Name, Email, Phone)."
        },
        {
            title: "Form Submission",
            desc: "Submit the license form with exact business owner details, business type, layout, and employee strength."
        },
        {
            title: "Upload Documents",
            desc: "Upload all necessary documents like Aadhaar, NOCs, Lease agreements, and PAN in the prescribed digital format."
        },
        {
            title: "Obtain Application Number",
            desc: "Following initial verification, municipal officials assign a unique application tracking number to your case."
        },
        {
            title: "Fee Payment",
            desc: "Process the official state-determined license fee securely on the municipal corporation platform."
        },
        {
            title: "Issuance of License",
            desc: "After final confirmation and a potential physical site inspection by field officials, the Trade License is formally issued."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Trade License Online Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        While individual state portals might look varied, the core trade license acquisition stages follow these foundational steps:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Trade License Process"
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Let Experts Manage Your Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TradeFeaturesSection = () => {
    const features = [
        {
            title: "Regulation Checks",
            desc: "A trade license regularly oversees business activities to ensure the licensee is not causing annoyances locally."
        },
        {
            title: "Anti-Monopoly Checks",
            desc: "It protects the wider business community by monitoring operators preventing unfair monopolistic advantages."
        },
        {
            title: "Compliance Checks",
            desc: "Ensures that operators are fully complying with necessary governmental and statutory rules."
        },
        {
            title: "Health Hazard Mapping",
            desc: "Stops uncontrolled hazardous waste dumping entirely; protects the societal ecosystem from chemical ruin."
        }
    ];

    return (
        <section className="w-full py-14 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Objectives Behind Trade Licenses
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Why does the government mandate this registration specifically? The key driving factors are grounded in social administration:
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
                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mx-auto max-w-4xl text-center">
                    <h4 className="text-[#072b47] font-semibold text-lg mb-1">State Independence</h4>
                    <p className="text-sm text-slate-700">Remember, while the core objectives stay uniform nationwide – exact processes and necessary physical inspections are heavily tailored by the individual state municipality laws.</p>
                </div>
            </div>
        </section>
    );
};

const TradeLicense = () => {
    const faqs = [
        {
            question: "What businesses require a trade license?",
            answer: "Retail stores, wholesale markets, restaurant chains, small and medium enterprises (SMEs), real estate developers, repair workshops, and pharmaceutical outlets prominently require trade licenses from the municipal corporation to officially function."
        },
        {
            question: "How do I renew my trade license after expiration?",
            answer: "You typically log into the relevant Municipal Corporation Website, navigate to the Trade License/Renewal section, fill out the renewal submission, and pay the updated license fee to have your credentials re-assessed and renewed."
        },
        {
            question: "What documents do I need involving the business premise?",
            answer: "You need either strong property tax receipts (if owned) or a registered lease agreement. This must be invariably accompanied by a No Objection Certificate (NOC) granted by the landowner of the establishment."
        },
        {
            question: "Is there an offline process to apply?",
            answer: "Yes. You can optionally visit the relevant Municipal Corporation Office directly, collect the physical Trade License Form, submit the analog documents, receive an application tracker slip, and manually pay the fee to the treasury."
        },
        {
            question: "Can adjacent business owners object to my trade license application?",
            answer: "Yes, to an extent. As a part of the document compliance checklist, often a No Objection Certificate (NOC) is requested from adjacent business/property owners to certify that your business activity will not construct a localized nuisance."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trade License"
                heroTitleSuffix="in India"
                heroSubtitle="Ensure Ultimate Business Legitimacy"
                heroDescription="Get your trade license approved conveniently through Corporate Experts. Navigate municipal applications rapidly with zero roadblocks and perfect documentation."
                whatsIncludedList={[
                    "Form Preparation and Filing",
                    "NOC Clearances Tracking",
                    "Municipal Follow-Ups",
                    "License Certificate Procurement"
                ]}
                stats={[
                    { count: "Pan India", label: "Municipal Support", icon: <Anchor size={20} /> },
                    { count: "100%", label: "Legitimacy", icon: <ShieldCheck size={20} /> },
                    { count: "Zero", label: "Office Visits", icon: <FileText size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<TradeOverview />}
                advantages={<TradeAdvantages />}
                eligibility={<TradeEligibility />}
                documents={<TradeDocumentsSection />}
                process={<TradeProcessSection />}
                features={<TradeFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on Trade License Online"
                subtitle="Clear your doubts regarding state-sponsored municipal regulation laws."
                faqs={faqs}
            />
        </div>
    );
};

export default TradeLicense;
