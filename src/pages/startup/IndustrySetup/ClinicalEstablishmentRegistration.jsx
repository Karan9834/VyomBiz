import React from "react";
import {
    Stethoscope,
    Briefcase,
    Building2,
    ShieldCheck,
    CheckCircle2,
    ClipboardCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ClinicalEstablishmentOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Regulatory Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Clinical Establishment Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Clinical establishment registration is regulated under the Clinical Establishments (Registration & Regulation) Act, 2010. It is a mandatory process for all public and private healthcare facilities, including hospitals, clinics, dispensaries, and diagnostic centers.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The goal is to create a digital registry at national, state, and district levels while ensuring that healthcare providers enhance their credibility and patient trust by operating within a standardized legal framework.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Objective:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            To establish uniform standards for infrastructure, equipment, and human resources across India, ensuring quality care and transparency for every patient.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
                            alt="Clinical Establishment Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ClinicalEstablishmentAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Enhance your facility's reputation and ensure operational safety.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
                            alt="Clinical Establishment Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Ensures you operate within the legal framework, protecting against penalties." },
                        { title: "Enhanced Credibility", desc: "Builds trust in the community, leading to increased patient volume." },
                        { title: "Access to Resources", desc: "Facilitates access to government support and healthcare data resources." },
                        { title: "Uniform Standards", desc: "Promotes consistency and quality in healthcare services across regions." },
                        { title: "Better Management", desc: "Enables better allocation of resources through government-collected data." },
                        { title: "Prevents Quackery", desc: "Protects patients from unqualified practitioners and harmful treatments." }
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

const ClinicalEstablishmentEligibility = () => {
    const list = [
        { title: "Facility Standards", desc: "Maintain the minimum prescribed facilities and service quality." },
        { title: "Personnel Criteria", desc: "Ensure the presence of qualified staff as per medical guidelines." },
        { title: "Record Keeping", desc: "Maintain and provide electronic medical records (EMR) for every patient." },
        { title: "Treatment Guidelines", desc: "Compliance with Standard Treatment Guidelines issued by the government." },
        { title: "Transparency", desc: "Display the registration certificate and service costs clearly." },
        { title: "Resource Alignment", desc: "Maintain records and reporting requirements as per the Act." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Clinical Establishment Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Core standards to be maintained by the establishment.
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
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const ClinicalEstablishmentDocumentsSection = () => {
    const list = [
        "Trade License Certificate",
        "Pollution Clearance Certificate",
        "Identity and Address Proof of the Owner",
        "Qualification Certificate of the Person-in-Charge",
        "Bio-medical Waste Disposal Agreement",
        "Property Tax Receipt / Rent Agreement",
        "Fire Department NOC",
        "Partnership Deed / Society Registration (if applicable)",
        "Proof of Registration Fee Payment"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Clinical Establishment Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential paperwork for a successful application.
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

const ClinicalEstablishmentProcessSection = () => {
    const steps = [
        { title: "Eligibility Check", desc: "Verifying meeting all relevant state laws and criteria." },
        { title: "Document Gathering", desc: "Collecting ID, property, and qualification documents." },
        { title: "Online Submission", desc: "Filing the application on the State Health Department portal." },
        { title: "Fee Payment", desc: "Paying the applicable fees based on establishment size." },
        { title: "Verification", desc: "Facilitating document verification and physical inspection." },
        { title: "Certification", desc: "Obtaining the final Clinical Establishment Certificate." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Clinical Establishment Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our simplified 6-step approach to compliance.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" alt="Clinical Establishment Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Your Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ClinicalEstablishmentFeaturesSection = () => {
    const features = [
        { title: "Documentation Support", desc: "End-to-end help with complex documents like Pollution and Fire NOCs." },
        { title: "Expert Assistance", desc: "Guidance from professionals with deep regulatory knowledge." },
        { title: "Hassle-Free Filing", desc: "We handle the entire application process on your behalf." },
        { title: "Ongoing Compliance", desc: "Support for renewals and post-registration statutory requirements." },
        { title: "PAN India Service", desc: "Expertise in state-specific regulations across the country." },
        { title: "Fast Response", desc: "Timely updates and quick resolution of queries." },
        { title: "Proven Track Record", desc: "Successfully handled thousands of medical registration projects." },
        { title: "Patient Safety Focus", desc: "Helping you align with standards that prioritize patient care." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner in healthcare compliance.
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

const ClinicalEstablishment = () => {
    const faqs = [
        {
            question: "How to secure clinic establishment act registration online?",
            answer: "The process involves checking eligibility, gathering documents (Trade license, Pollution clearance, ID proof, etc.), submitting an online application to the state health department, paying fees, and undergoing verification and inspection."
        },
        {
            question: "What is the objective of the Clinic Establishment Act Registration?",
            answer: "The primary objectives are to ensure mandatory registration of healthcare facilities, establish uniform standards for infrastructure and human resources, provide transparent information on services and costs, and enhance the accountability of healthcare providers."
        },
        {
            question: "Who needs a Clinical Establishment Certificate?",
            answer: "It is required for government and private hospitals, multi-specialty clinics, nursing homes, imaging centers, blood testing labs, dental clinics, and alternative medicine centers (Ayurvedic/Homoeopathic)."
        },
        {
            question: "What are the common legal liabilities in clinical establishments?",
            answer: "Common liabilities include medical negligence, diagnostic errors, patient dissatisfaction due to service quality, operational challenges like resource shortages, and malpractice claims."
        },
        {
            question: "Is clinical establishment registration mandatory for single-doctor clinics?",
            answer: "Yes, the Clinical Establishments Act applies to all clinical establishments, including those owned and managed by a single doctor."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Clinical Establishment"
                heroTitleSuffix="Registration"
                heroSubtitle="Standardizing Healthcare Excellence"
                heroDescription="Ensure your healthcare facility operates within the legal framework and meets national standards. We provide end-to-end assistance for Clinical Establishment Act registration across India."
                whatsIncludedList={[
                    "Eligibility Verification",
                    "Document Preparation (Pollution, Trade, etc.)",
                    "Online Application Filing",
                    "Health Department Liaison",
                    "Inspection Support",
                    "Certificate Acquisition"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Stethoscope size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ClinicalEstablishmentOverview />}
                advantages={<ClinicalEstablishmentAdvantages />}
                eligibility={<ClinicalEstablishmentEligibility />}
                documents={<ClinicalEstablishmentDocumentsSection />}
                process={<ClinicalEstablishmentProcessSection />}
                features={<ClinicalEstablishmentFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Clinical Establishment Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default ClinicalEstablishment;
