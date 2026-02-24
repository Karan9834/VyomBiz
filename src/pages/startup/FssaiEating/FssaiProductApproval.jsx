import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    FlaskConical,
    Search
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiProductApprovalOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Novel Foods
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI Product Approval – <span className="text-[#005a9c]">Innovation Guide</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The FSSAI product approval process is mandatory for products not covered under the existing standards set by the FSS Act. It ensures that innovative products are safe for human consumption before they are introduced to the market.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Many new ingredients and food products are introduced each year by Food Business Operators (FBOs). These products require a thorough safety evaluation by the FSSAI authorities through the Food Product Approval System (FPAS).
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?auto=format&fit=crop&q=80"
                            alt="FSSAI Product Approval Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Strategic Advantages
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why FSSAI product approval is a must for your brand.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="FSSAI Product Approval Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Minimal Reputation Risk", desc: "Standardized inspection ensures your brand isn't tarnished by safety issues." },
                        { title: "Meets Global Standards", desc: "Safety tests meet global norms, gaining confidence from international customers." },
                        { title: "Network Growth", desc: "Better engagement with industry stakeholders and supply chain partners." },
                        { title: "Avoid Severe Penalties", desc: "Stay safe from heavy fines (up to ₹5 Lakhs) for non-standardized sales." },
                        { title: "Competitive Edge", desc: "Authorization to sell unique items that competitors might not have cleared yet." },
                        { title: "Investor Readiness", desc: "Regulatory approval is a major plus for startups seeking food-tech funding." }
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

const FssaiProductApprovalEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Who needs Product Approval?
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Novel Food Makers – </span>
                            Creators of food items with no prior history of consumption in India.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Supplement Brands – </span>
                            Manufacturers of health supplements and nutraceuticals.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Novel Technology Users – </span>
                            Businesses using new processing methods that alter food composition.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Proprietary Food Importers – </span>
                            Entities bringing unique international food formulations to India.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Special Medical Foods – </span>
                            Products designed for specific dietary management of diseases.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Technical paperwork for Product Approval.
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Technical data sheet of the product</li>
                        <li>Complete list of ingredients and additives</li>
                        <li>NABL-accredited laboratory test reports</li>
                        <li>Brief description of the manufacturing process</li>
                        <li>Draft of the product label (FSSAI compliant)</li>
                        <li>Safety and Efficacy data for novel ingredients</li>
                        <li>Certificate of Analysis (COA) for raw materials</li>
                        <li>Existing FSSAI License copy (if any)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalProcess = () => {
    const steps = [
        { step: "01", title: "Assessment", desc: "Determining if the product is standardized or requires special approval." },
        { step: "02", title: "Technical Drafting", desc: "Compiling a scientific dossier with safety and toxicology reports." },
        { step: "03", title: "FPAS Submission", desc: "Online application through the Food Product Approval System." },
        { step: "04", title: "Scientific Review", desc: "A panel of scientists at FSSAI reviews the product's safety data." },
        { step: "05", title: "Final Approval", desc: "Grant of a-no objection certificate (NOC) or regular approval." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        The Approval Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step path to clearing your innovation.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="The Approval Process"
                            className="w-full rounded-lg shadow-sm"
                        />
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
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalFeatures = () => {
    const features = [
        { title: "Scientific Advisory", desc: "Liaison with food scientists to validate your product's safety claims." },
        { title: "Label Rectification", desc: "Ensuring your packaging claims do not mislead and are legally sound." },
        { title: "Lab Support", desc: "Coordination with NABL labs for necessary microbial and chemical testing." },
        { title: "Dossier Management", desc: "Professional preparation of the complex technical dossier required by FPAS." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Service Features
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our specialized support for innovators.
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
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalCompliance = () => {
    const compliance = [
        "Ensuring batch-wise testing of the approved product",
        "Promptly reporting any adverse reactions to FSSAI",
        "Updating labels if regulations for additives change",
        "Maintaining records of the approval letter (NOC)",
        "Periodic renewal of the primary FSSAI license",
        "Informing the authority about any change in formulation"
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Post Compliance
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Maintaining your product's market status.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApproval = () => {
    const faqs = [
        {
            question: "What are the food products that require product approval from FSSAI?",
            answer: "Product approval is required for non-standardized food items such as health supplements, functional foods, novel foods, food for special medical purposes, and products made with new technologies or ingredients not yet covered by FSSAI regulations."
        },
        {
            question: "Who can apply for FSSAI product approval?",
            answer: "Manufacturers or importers of non-specified food products, Food Business Operators (FBOs), distributors of non-specified ingredients, and even research institutions can apply for FSSAI product approval."
        },
        {
            question: "What is the penalty for selling non-standardized products without approval?",
            answer: "Selling non-standardized food products without FSSAI approval is a serious violation and can lead to heavy penalties and fines, sometimes up to ₹5 Lakhs."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI Product"
                heroTitleSuffix="Approval"
                heroSubtitle="Regulatory Authorization for Innovative Food Products"
                heroDescription="Launching a novel food product or dietary supplement? If your product doesn't fit into existing safety standards, you need official Product Approval from FSSAI. Our experts guide you through the complex technical assessment to ensure a successful market launch."
                whatsIncludedList={[
                    "Novel Ingredient Safety Assessment",
                    "FPAS Online System Filing",
                    "Technical Dossier Preparation",
                    "NABL Lab Report Verification",
                    "Label Compliance Review",
                    "FOSCOS License Integration"
                ]}
                stats={[
                    { count: "Novel Foods", label: "Specialized", icon: <FlaskConical size={20} /> },
                    { count: "₹5L Fine", label: "Non-Compliance", icon: <ShieldCheck size={20} /> },
                    { count: "NABL", label: "Lab Tested", icon: <Search size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiProductApprovalOverview />}
                advantages={<FssaiProductApprovalAdvantages />}
                eligibility={<FssaiProductApprovalEligibility />}
                documents={<FssaiProductApprovalDocuments />}
                process={<FssaiProductApprovalProcess />}
                features={<FssaiProductApprovalFeatures />}
                postCompliance={<FssaiProductApprovalCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiProductApproval;
