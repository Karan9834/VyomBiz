import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Utensils,
    ClipboardCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiLicense = () => {
    const faqs = [
        {
            question: "Which are the three types of FSSAI licenses?",
            answer: "The three types of FSSAI licenses are: 1. FSSAI Basic Registration (Turnover < ₹12 Lakhs), 2. FSSAI State License (Turnover ₹12 Lakhs to ₹20 Crores), and 3. FSSAI Central License (Turnover > ₹20 Crores)."
        },
        {
            question: "How can I apply for FSSAI License for Restaurants?",
            answer: "Restaurants can apply for an FSSAI license through the FoSCoS portal. Depending on their turnover and location, they may need a State or Central license. The process involves filing Form B, submitting documents like floor plans and water test reports, and undergoing an inspection."
        },
        {
            question: "Who are Petty Food Business Operators?",
            answer: "Petty Food Business Operators are small-scale food handlers like hawkers, vendors, temporary stall holders, or small grocery stores with an annual turnover of less than ₹12 Lakhs and a daily production capacity of up to 100 kg/litres."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI License"
                heroTitleSuffix="& Registration"
                heroSubtitle="Ensure Food Safety and Legal Compliance"
                heroDescription="A Food Safety and Standards Authority of India (FSSAI) license is mandatory for all food business operators. We help you obtain your license quickly and efficiently, ensuring your business meets all regulatory standards."
                whatsIncludedList={[
                    "Eligibility Criteria Assessment",
                    "FoSCoS Portal Application Filing",
                    "Complete Document Management",
                    "Food Safety Management Plan (FSMS)",
                    "On-Site Inspection Guidance",
                    "Regular Compliance Updates"
                ]}
                stats={[
                    { count: "50K+", label: "FBOs Served", icon: <Utensils size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Legal Mandate",
                    title: "FSSAI License in India –",
                    highlightTitle: "Compliance Guide",
                    description: [
                        "A Food Safety and Standards Authority of India (FSSAI) license is mandatory for operating a food business in India. Any person or entity engaged in manufacturing, processing, distribution, and sale of food products must obtain FSSAI license registration.",
                        "The FSSAI food license ensures that business owners and operators follow safety and quality compliances, which helps keep public health under check and promotes consumer confidence in the products sold.",
                        <strong>Who needs it?</strong>,
                        "Food Business Operators (FBOs) including manufacturers, importers, storage units, transporters, retailers, and even home kitchens or online food platforms must secure the appropriate license based on their turnover and business type."
                    ],
                    whyIdealTitle: "Key FSSAI Categories",
                    whyIdealList: [
                        { title: "FSSAI Registration", desc: "For petty food businesses with an annual turnover under ₹12 Lakhs." },
                        { title: "State License", desc: "For FBOs with turnover between ₹12 Lakhs and ₹20 Crores per annum." },
                        { title: "Central License", desc: "For FBOs with turnover above ₹20 Crores or those in import/export." }
                    ]
                }}
                advantages={{
                    title: "Benefits of FSSAI License",
                    subtitle: "Why obtaining FSSAI certification is vital for your business.",
                    list: [
                        { title: "Legal Compliance", desc: "Avoid heavy penalties and legal actions by following mandatory food safety laws." },
                        { title: "Consumer Trust", desc: "Build brand loyalty by showcasing your commitment to high safety standards." },
                        { title: "Market Expansion", desc: "FSSAI license is a gateway to retail outlets, malls, and online delivery platforms." },
                        { title: "Business Credibility", desc: "Enhance your reputation with investors, partners, and customers." },
                        { title: "Improved Hygiene", desc: "Adherence to FSSAI norms helps maintain better hygiene and product quality." },
                        { title: "Govt. Support", desc: "Become eligible for various government schemes, subsidies, and financial initiatives." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who can apply for FSSAI registration?",
                    list: [
                        { title: "Petty Retailers", desc: "Small shops, hawkers, and temporary stalls with turnover below ₹12 Lakhs." },
                        { title: "Manufacturing Units", desc: "Large or small scale food production units based on their daily capacity." },
                        { title: "Storage & Warehouse", desc: "Entities storing food products for distribution or retail sale." },
                        { title: "Importers & Exporters", desc: "Businesses involved in the international trade of food items." },
                        { title: "Food Transporters", desc: "Vehicles and logistics companies specialized in food transport." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Keep these documents ready for a smooth application process.",
                    list: [
                        "Identity Proof (Aadhaar/PAN)",
                        "Business Address Proof",
                        "Passport size photographs",
                        "List of Food Categories",
                        "Layout Plan of the premises",
                        "MOA/AOA or Partnership Deed",
                        "NOC from local municipality",
                        "Water Test Report (for manufacturing)"
                    ]
                }}
                process={{
                    title: "The Licensing Process",
                    subtitle: "Step-by-step path to your FSSAI certification.",
                    steps: [
                        { step: "01", title: "Type Selection", desc: "Determine if you need Basic, State, or Central license based on turnover." },
                        { step: "02", title: "Form Submission", desc: "Fill Form A or Form B on FoSCoS portal with all required documents." },
                        { step: "03", title: "Verification", desc: "FSSAI officials will verify your documents and may call for additional info." },
                        { step: "04", title: "Inspection", desc: "A pre-license inspection of the premises may be conducted if necessary." },
                        { step: "05", title: "Approval", desc: "Once satisfied, the authority issues the FSSAI license with a 14-digit number." }
                    ]
                }}
                features={{
                    title: "Key Features",
                    subtitle: "What makes the FSSAI license unique?",
                    list: [
                        { title: "14-Digit Number", desc: "A unique identifier that must be displayed on all food packages and premises." },
                        { title: "Legal Validity", desc: "Licenses are typically valid for 1 to 5 years, depending on the application." },
                        { title: "Global Recognition", desc: "Aligns Indian food safety standards with international benchmarks like Codex." },
                        { title: "Brand Identity", desc: "The FSSAI logo is a mark of quality and safety recognized across India." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Keep your license active and avoid penalties.",
                    list: [
                        "Display of FSSAI License Number at premises",
                        "Maintaining daily production and raw material records",
                        "Annual Return filing (Form D1) by 31st May",
                        "Periodic food safety audits and inspections",
                        "Product testing at recognized laboratories",
                        "Prompt renewal application (30 days before expiry)"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiLicense;
