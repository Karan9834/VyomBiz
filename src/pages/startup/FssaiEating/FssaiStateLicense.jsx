import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    MapPin,
    IndianRupee
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiStateOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            State Level
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI State License – <span className="text-[#005a9c]">Mid-Scale Operations</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI (Food Safety and Standards Authority of India) regulates the mid-sized food sector through State Licensing. It ensures that businesses operating within a specific state adhere to stringent quality and hygiene provisions.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Functioning without a valid state food license registration is a punishable offense under the FSS Act, 2006. The State Authority conducts thorough scrutiny of paperwork and may arrange on-site inspections before granting the license.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="FSSAI State License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateLicenseAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of State License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why mid-sized FBOs must secure this certification.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="FSSAI State License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Business Credibility", desc: "Significantly improves the creditability of your food brand in the state." },
                        { title: "Consumer Attraction", desc: "A valid FSSAI logo on products helps attract safety-conscious customers." },
                        { title: "Safety Best Practices", desc: "Mandates hygiene protocols that improve overall product safety." },
                        { title: "Government Support", desc: "Opens doors for state-level subsidies and MSME incentives." },
                        { title: "Penalty Avoidance", desc: "Stay safe from heavy fines ranging up to ₹5 Lakhs for non-compliance." },
                        { title: "Operational Growth", desc: "Enables hassle-free expansion within the state boundary." }
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

const FssaiStateLicense = () => {
    const faqs = [
        {
            question: "Who is required to obtain an FSSAI State License?",
            answer: "Any Food Business Operator (FBO) with an annual turnover between ₹12 Lakhs and ₹20 Crores is mandatorily required to obtain an FSSAI State License. This also includes mid-sized manufacturers, storage units, and retailers operating within a single state."
        },
        {
            question: "How does a State License differ from a Central License?",
            answer: "FSSAI State Licenses are for businesses operating in only one state with turnover up to ₹20 Crores. Central Licenses are for those operating in multiple states, involved in import/export, or having an annual turnover exceeding ₹20 Crores."
        },
        {
            question: "How long does it take to obtain an FSSAI State License?",
            answer: "The general timeframe for obtaining an FSSAI State License is approximately 30 to 60 days, depending on the completeness of documents and the inspection process."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI State"
                heroTitleSuffix="License"
                heroSubtitle="Regulatory Compliance for Mid-Sized Food Businesses"
                heroDescription="Mid-sized food businesses operating within a single state must secure an FSSAI State License to comply with the FSS Act, 2006. We provide specialized support for documentation and on-site inspection readiness."
                whatsIncludedList={[
                    "State-Wise Eligibility Assessment",
                    "FoSCoS Online Portal Filing",
                    "FSMS Documentation Support",
                    "Machinery & Premises Layout Guidance",
                    "Inspection Readiness & Coordination",
                    "Annual Compliance Maintenance"
                ]}
                stats={[
                    { count: "15K+", label: "State Licenses", icon: <MapPin size={20} /> },
                    { count: "₹2000+", label: "Annual Fee", icon: <IndianRupee size={20} /> },
                    { count: "60 Days", label: "Avg. Timeline", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiStateOverview />}
                advantages={<FssaiStateLicenseAdvantages />}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Check if your business qualifies for a State License.",
                    list: [
                        { title: "Turnover Range", desc: "Annual turnover between ₹12 Lakhs and ₹20 Crores." },
                        { title: "Production Capacity", desc: "Manufacturing units with specific daily output limits." },
                        { title: "Hospitality Units", desc: "Hotels up to 4-star category and moderately sized restaurants." },
                        { title: "Trade Scope", desc: "Business operations restricted within a single state territory." },
                        { title: "Proprietary Units", desc: "Dairies, slaughterhouses, and cold storage with defined capacities." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for State FSSAI Registration.",
                    list: [
                        "List of Directors/Partners with full contact details",
                        "Identity and Address Proof for all stakeholders",
                        "Premises Ownership/Rent Agreement with NOC",
                        "List of all installed machinery and equipment",
                        "Blueprint/Layout plan of the processing facility",
                        "Authenticated Food Safety Management System (FSMS)",
                        "Water Analysis Report from a recognized lab",
                        "NOC from the local Municipality/Civic body"
                    ]
                }}
                process={{
                    title: "The Approval Journey",
                    subtitle: "Step-by-step state license acquisition process.",
                    steps: [
                        { step: "01", title: "Document Arrangement", desc: "Collecting business registration, identity proofs, and facility plans." },
                        { step: "02", title: "FoSCoS Filing", desc: "Online submission of Form B and payment of prescribed annual fees." },
                        { step: "03", title: "Technical Review", desc: "In-depth review of application and documents by FSSAI state officials." },
                        { step: "04", title: "Premises Inspection", desc: "On-site visit by an official to verify compliance with safety norms." },
                        { step: "05", title: "Grant of License", desc: "Final issuance of the license certificate following successful verification." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "What we offer for State Licensing.",
                    list: [
                        { title: "State-Specific Expertise", desc: "Deep understanding of varying state-level FSSAI interpretations." },
                        { title: "Layout Optimization", desc: "Guidance on facility layouts to ensure inspection readiness." },
                        { title: "FSMS Dossier", desc: "Assistance in drafting a robust Food Safety Management System." },
                        { title: "Expedited Processing", desc: "Streamlined filing to ensure the quickest possible license grant." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Maintain your state-level compliance score.",
                    list: [
                        "Submission of Annual Returns (Form D1)",
                        "Maintenance of hygiene and sanitary records",
                        "Regular medical checks for food handlers",
                        "Pest control audits and records maintenance",
                        "Adherence to food labeling and packaging rules",
                        "Renewal application well before the expiry date"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiStateLicense;
