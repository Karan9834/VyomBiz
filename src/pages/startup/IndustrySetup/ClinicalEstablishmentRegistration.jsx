import { Link } from "react-router-dom";
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
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import advantages from "../../../assets/Industry Setup/Clinical Establishment Registration/advantages.png";
import expertise from "../../../assets/Industry Setup/Clinical Establishment Registration/expertise.png";
import overview from "../../../assets/Industry Setup/Clinical Establishment Registration/overview.png"
import process from "../../../assets/Industry Setup/Clinical Establishment Registration/process.png";

const ClinicalEstablishmentOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Regulatory Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is Clinical Establishment Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Clinical Establishment Registration is a mandatory legal requirement for healthcare facilities operating in many states in India under the Clinical Establishments (Registration and Regulation) Act, 2010. The purpose of this law is to regulate and standardize healthcare services across the country.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The registration applies to establishments such as: Hospitals, Clinics, Diagnostic laboratories, Imaging centres, Nursing homes, Physiotherapy centres, and Daycare treatment centres.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This registration ensures that healthcare providers maintain minimum standards of infrastructure, facilities, patient care, and record management.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps healthcare professionals and organizations complete the registration process efficiently while ensuring full legal compliance.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Clinical Establishment Registration is Important
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Operating a healthcare facility without proper registration can lead to legal penalties and operational restrictions. Registration ensures transparency, patient safety, and standardized healthcare practices.
                    </p>
                    <div className="mt-10">
                        <img
                            src={advantages}
                            alt="Clinical Establishment Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        Vyombiz managed by Clink Consultancy Services Private Limited simplifies this process by managing documentation, application filing, and regulatory compliance.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Ensures your healthcare facility operates under government-approved regulations." },
                        { title: "Improved Credibility", desc: "Registered establishments gain higher trust among patients and stakeholders." },
                        { title: "Eligibility for Government Programs", desc: "Many government schemes and healthcare programs require registered establishments." },
                        { title: "Standardized Healthcare Services", desc: "Helps maintain minimum standards for treatment, hygiene, and patient safety." },
                        { title: "Professional Recognition", desc: "Adds legitimacy to your healthcare practice and improves institutional reputation." }
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
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs Clinical Establishment Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Clinical Establishment Registration is required for any entity providing medical diagnosis, treatment, or healthcare services. Even small healthcare setups must obtain registration before starting operations in states where the Act is applicable.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start">
                        <div className="text-yellow-400 mt-1 mr-4"><Building2 size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#072b47] mb-2">Medical Services</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed">Individual doctors running private clinics and multi-speciality hospitals.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start">
                        <div className="text-yellow-400 mt-1 mr-4"><Stethoscope size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#072b47] mb-2">Diagnostic Facilities</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed">Diagnostic and pathology laboratories, and imaging centres (X-ray, MRI, CT scan).</p>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start">
                        <div className="text-yellow-400 mt-1 mr-4"><Briefcase size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#072b47] mb-2">Specialized Care & In-patient Facilities</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed">Dental clinics, physiotherapy and rehabilitation centres, nursing homes, maternity centres, and daycare surgical facilities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ClinicalEstablishmentDocumentsSection = () => {
    const list = [
        "Identity and address proof of the applicant",
        "Qualification certificates of doctors or medical professionals",
        "Registration certificate of the medical practitioner",
        "Address proof of the establishment",
        "Layout plan of the clinic or hospital",
        "Equipment and facility details",
        "Staff details and qualifications",
        "Fire safety certificate (if applicable)",
        "Pollution control certificate (if required)"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Clinical Establishment Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for registration, healthcare facilities must submit specific documents that verify their operational and professional credentials.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><CheckCircle2 size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited assists clients in preparing and organizing all documentation to ensure smooth approval.
                </p>
            </div>
        </section>
    );
};

const ClinicalEstablishmentProcessSection = () => {
    const steps = [
        { title: "Consultation and Eligibility Assessment", desc: "The process begins with reviewing the nature of the healthcare establishment and identifying applicable regulatory requirements." },
        { title: "Document Preparation", desc: "All required documents related to the healthcare facility, professionals, and infrastructure are collected and verified." },
        { title: "Application Filing", desc: "The registration application is submitted to the relevant state authority through the appropriate portal or department." },
        { title: "Inspection (If Required)", desc: "Authorities may conduct an inspection of the facility to verify infrastructure, equipment, and service standards." },
        { title: "Registration Approval", desc: "Once the verification process is complete, the Clinical Establishment Registration certificate is issued." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Clinical Establishment Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The registration process involves verification of the healthcare facility, documentation review, and regulatory approval.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Clinical Establishment Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Vyombiz managed by Clink Consultancy Services Private Limited ensures that every step is handled professionally to minimize delays and compliance issues.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Registration Process
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ClinicalEstablishmentFeaturesSection = () => {
    const complianceItems = [
        "Maintaining proper patient records",
        "Following hygiene and safety protocols",
        "Displaying registration certificate at the facility",
        "Adhering to standard treatment guidelines",
        "Renewing registration as required by state regulations"
    ];

    const features = [
        { title: "Expert Legal Guidance", desc: "Experienced professionals ensure that your application meets regulatory requirements." },
        { title: "Complete Documentation Support", desc: "Assistance with preparing and verifying required documents." },
        { title: "Fast and Efficient Processing", desc: "Streamlined application filing to reduce delays." },
        { title: "Compliance Assurance", desc: "Guidance on maintaining healthcare regulatory standards." },
        { title: "End-to-End Support", desc: "From consultation to certificate issuance, the entire process is handled professionally." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Compliance Requirements After Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Once the registration certificate is obtained, healthcare establishments must maintain regulatory standards. Key compliance obligations include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {complianceItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Failure to maintain compliance may result in penalties or suspension of registration.
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Clinical Establishment Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Healthcare professionals often face regulatory complexities when registering their facilities. Professional assistance helps avoid errors, delays, and compliance risks.
                    </p>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides structured legal support for healthcare facility registration and compliance management.
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
            question: "Is Clinical Establishment Registration mandatory?",
            answer: "Yes, in states where the Clinical Establishments Act is implemented, all healthcare facilities must obtain registration before operating."
        },
        {
            question: "How long does the registration process take?",
            answer: "The timeline may vary depending on the state authority and document verification process, but typically ranges from a few weeks to a couple of months."
        },
        {
            question: "Can a small clinic apply for this registration?",
            answer: "Yes. Even single-doctor clinics and small healthcare facilities must register under the Clinical Establishments Act where applicable."
        },
        {
            question: "Is inspection required before approval?",
            answer: "In some cases, authorities may conduct an inspection to verify infrastructure, equipment, and service standards."
        },
        {
            question: "Does the registration need renewal?",
            answer: "Yes, depending on state regulations, clinical establishments may need to renew their registration periodically."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Clinical Establishment"
                heroTitleSuffix="Registration"
                heroSubtitle="Register Your Clinical Establishment the Right Way"
                heroDescription="Starting or operating a healthcare facility requires more than medical expertise—it requires legal compliance. Clinical Establishment Registration ensures that hospitals, clinics, diagnostic centres, and other healthcare institutions meet the standards defined under the Clinical Establishments (Registration and Regulation) Act. Get your healthcare facility registered smoothly with expert guidance and documentation support. Stay compliant. Build trust. Operate legally."
                whatsIncludedList={[
                    "Expert Legal Guidance",
                    "Complete Documentation Support",
                    "Fast and Efficient Processing",
                    "Compliance Assurance",
                    "End-to-End Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Stethoscope size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

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

