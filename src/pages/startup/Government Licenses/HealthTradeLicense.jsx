import React from 'react';
import { ShieldCheck, Crosshair, HeartPulse } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const HealthOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Public Health & Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Health Trade License – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, to deal with business affairs pertaining to goods and services that impact consumer health, the municipal government has made it strictly compulsory to secure a Health Trade License prior to the commencement of operations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This License acts as a verified work permit for businesses involved with trading consumable goods or hygiene services. Various entities like restaurants, cafes, eating houses, cinemas, laundries, salons, gyms, and general stores must strictly obtain this mandate.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why is it critical?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The fundamental reason behind the grant of the License is to entirely ensure the health safety of the consumers availing various goods and services in the market. It legally guarantees that operations meet minimum hygienic setups protecting the community from systemic infections or structural hazards.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                            alt="Health Trade License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const HealthAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Operational Confidence
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits & Features of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Beyond being a raw legal mandate, securing the Health License dramatically improves business credibility, attracts risk-averse investors, and protects owners from substantial local liabilities.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="Health License Features"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Hygiene Framework", desc: "Provides a strictly laid out framework highlighting sanitation guidelines, creating immense hygiene and physical safety within the workplace." },
                        { title: "Market Competitiveness", desc: "Makes businesses incredibly credible. A registered entity officially certified enjoys more popularity and trust than unregistered ad-hoc sellers." },
                        { title: "Consumer Retention", desc: "Strengthens baseline trust among the targeted consumers, assuring them that handling protocols meet municipal standards." },
                        { title: "Attracting Investment", desc: "It draws the absolute attention of clean buyers and sophisticated investors who inherently reject entities missing basic trade mandates." },
                        { title: "Primary Foundation", desc: "Approved seamlessly by the municipality, this base Trade Certification acts as an underlying prerequisite helping operators apply for heavier commercial licenses later." },
                        { title: "Liability Protection", desc: "Solidly protects the owner from numerous unpredictable legal liabilities regarding immediate public health distress occurrences on the premises." }
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

const HealthEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Important Admissibility Details
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for a health trade municipal license, exact regulatory nuances determine application validity strictly:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        General Criteria
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Minimum Age:</span> Applicants must have attained legal age, strictly registering beyond 18 years.</li>
                        <li><span className="font-semibold text-[#072b47]">Clean Baseline:</span> Applicants ideally must not carry any massive, relevant criminal history associated with structural malice.</li>
                        <li><span className="font-semibold text-[#072b47]">Scope Limitation:</span> Businesses engaged directly involving foods, medical supplies, or lifestyle treatments (salon, gym) are explicitly mandatory fields demanding it.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Municipal Verification
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Separation of Care:</span> Do not confuse the generic Health Trade License (Municipal) with acute clinical Health Care Licenses (Sector Medical operations).</li>
                        <li><span className="font-semibold text-[#072b47]">Closure Risks:</span> Skipping it attracts immense fines, immediate closures, and seizure of properties by civil agents.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const HealthDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Primary Documentation Required
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To satisfy the robust public safety concerns of civil reviewers, a detailed dossier emphasizing location hygiene must be presented effectively:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Identity & Business Info</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Valid PAN/TAN metrics mapped directly to individual promoters or the corporate entity holding the firm.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Architectural Plans</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Official site layout maps detailing internal configurations, utility sections, and formally cleared premise sanction plans.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Health Compliance Metrics</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Medical certificate of the active operators handling wares alongside verified structural 'Water Testing Reports'.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Logistics Verification</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Current utility metrics including recent Electricity Bills, Water Bills, and explicit formal Sewer connection proofs.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Premise Clearances</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Property tax payments clearing previous dues, ownership proofs via lease/sales deed, and crucial NOCs strictly originating from the police/fire services department.</p>
                </div>
            </div>
        </section>
    );
};

const HealthProcessSection = () => {
    const steps = [
        {
            title: "Access Municipal Portal",
            desc: "Visit the centralized online web portal configured by your specified operational state's Municipal Corporation."
        },
        {
            title: "Application Submission",
            desc: "Fill in the exact granular credentials required within the License Form alongside appending the layout lists and sanitized documents."
        },
        {
            title: "Fee Remittance",
            desc: "Execute the transaction to pay the officially demanded municipal registration tier fee depending on enterprise dimensions."
        },
        {
            title: "Site Verification",
            desc: "Relevant municipal inspectors (CMO, structural agents) manually or structurally audit hygiene capabilities matching declared submissions."
        },
        {
            title: "Certificate Allotment",
            desc: "Once inspections succeed matching all protocols strictly without illegal structure deviations—the municipal authority releases the valid document."
        },
        {
            title: "Cyclical Renewals",
            desc: "Post fixed timeline validity, apply carefully for renewals 30 days before statutory expiration via updated submission portals."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Municipal Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard compliance for civil regulations requires traversing municipal workflows meticulously:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                            alt="Health License Process"
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
                                Let Us Process It Remotely
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HealthLicense = () => {
    const faqs = [
        {
            question: "Why is a health trade license intrinsically essential for businesses?",
            answer: "The immediate health of the masses interacting physically is the core reason holding this mandate up. Businesses in goods and services that touch consumers' health intimately must be vetted; it officially underlines multiple strict hygiene and safety conditions."
        },
        {
            question: "Who holds the power to physically grant or reject the application?",
            answer: "The Director of Health Licenses embedded within the area's local Municipal Corporation has the ultimate authority regarding granting this health registration permit."
        },
        {
            question: "Do 'eating houses' and medicine outlets truly require this independently?",
            answer: "Yes, it is entirely legally mandatory. Such ventures without a valid setup permit would face immense municipal penalties immediately applied adhering strictly to the municipal bylaws actively enforced."
        },
        {
            question: "Can an approved active License be abruptly revoked later?",
            answer: "Yes. An active health trade license falls precisely subject to cancellation protocols instantly if inspections locate underlying severe hygiene or structural norms grossly breached against original submissions."
        },
        {
            question: "How deep does structural verification logic reach in Municipalities?",
            answer: "Upon filing, cross-departments (Civil, Estate, Tax arrays) perform scans. Alongside CMO inspections for health variables, departments rigorously ensure zero illicit premise constructions and confirm no active overdue civic taxes reside on the property."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Health Trade License"
                heroTitleSuffix="in India"
                heroSubtitle="Acquire Public Safety Commendations Instantly"
                heroDescription="Ensure uninterrupted public consumer dealings seamlessly. Secure necessary health and sanitary premise permits rapidly from municipal frameworks utilizing corporate expertise covering entire bureaucratic workflows."
                whatsIncludedList={[
                    "Site Document Preparation",
                    "NOC Form Alignments",
                    "Municipal Inspector Handling",
                    "License Issuance Tracking"
                ]}
                stats={[
                    { count: "Municipal", label: "Clearance", icon: <ShieldCheck size={20} /> },
                    { count: "100%", label: "Hygiene Met", icon: <HeartPulse size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Crosshair size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<HealthOverview />}
                advantages={<HealthAdvantages />}
                eligibility={<HealthEligibility />}
                documents={<HealthDocumentsSection />}
                process={<HealthProcessSection />}
                features={<div />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Delineate local municipality operational mandates reliably."
                faqs={faqs}
            />
        </div>
    );
};

export default HealthLicense;
