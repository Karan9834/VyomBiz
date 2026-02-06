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
                overview={{
                    badge: "Novel Foods",
                    title: "FSSAI Product Approval –",
                    highlightTitle: "Innovation Guide",
                    description: [
                        "The FSSAI product approval process is mandatory for products not covered under the existing standards set by the FSS Act. It ensures that innovative products are safe for human consumption before they are introduced to the market.",
                        "Many new ingredients and food products are introduced each year by Food Business Operators (FBOs). These products require a thorough safety evaluation by the FSSAI authorities through the Food Product Approval System (FPAS).",
                        <strong>Core Objective:</strong>,
                        "To ensure that only safe, tested, and approved food ingredients and items are sold across the Indian market, particularly those involving novel technologies or dietary claims."
                    ],
                    whyIdealTitle: "Key Benefits",
                    whyIdealList: [
                        { title: "Public Confidence", desc: "Approved products carry a high mark of safety and quality for consumers." },
                        { title: "Legal Permission", desc: "Grants authorization to sell non-standardized food products legally in India." },
                        { title: "Market Access", desc: "Opens doors to the PAN India market and premium retail sectors." }
                    ]
                }}
                advantages={{
                    title: "Strategic Advantages",
                    subtitle: "Why FSSAI product approval is a must for your brand.",
                    list: [
                        { title: "Minimal Reputation Risk", desc: "Standardized inspection ensures your brand isn't tarnished by safety issues." },
                        { title: "Meets Global Standards", desc: "Safety tests meet global norms, gaining confidence from international customers." },
                        { title: "Network Growth", desc: "Better engagement with industry stakeholders and supply chain partners." },
                        { title: "Avoid Severe Penalties", desc: "Stay safe from heavy fines (up to ₹5 Lakhs) for non-standardized sales." },
                        { title: "Competitive Edge", desc: "Authorization to sell unique items that competitors might not have cleared yet." },
                        { title: "Investor Readiness", desc: "Regulatory approval is a major plus for startups seeking food-tech funding." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who needs Product Approval?",
                    list: [
                        { title: "Novel Food Makers", desc: "Creators of food items with no prior history of consumption in India." },
                        { title: "Supplement Brands", desc: "Manufacturers of health supplements and nutraceuticals." },
                        { title: "Novel Technology Users", desc: "Businesses using new processing methods that alter food composition." },
                        { title: "Proprietary Food Importers", desc: "Entities bringing unique international food formulations to India." },
                        { title: "Special Medical Foods", desc: "Products designed for specific dietary management of diseases." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Technical paperwork for Product Approval.",
                    list: [
                        "Technical data sheet of the product",
                        "Complete list of ingredients and additives",
                        "NABL-accredited laboratory test reports",
                        "Brief description of the manufacturing process",
                        "Draft of the product label (FSSAI compliant)",
                        "Safety and Efficacy data for novel ingredients",
                        "Certificate of Analysis (COA) for raw materials",
                        "Existing FSSAI License copy (if any)"
                    ]
                }}
                process={{
                    title: "The Approval Process",
                    subtitle: "Step-by-step path to clearing your innovation.",
                    steps: [
                        { step: "01", title: "Assessment", desc: "Determining if the product is standardized or requires special approval." },
                        { step: "02", title: "Technical Drafting", desc: "Compiling a scientific dossier with safety and toxicology reports." },
                        { step: "03", title: "FPAS Submission", desc: "Online application through the Food Product Approval System." },
                        { step: "04", title: "Scientific Review", desc: "A panel of scientists at FSSAI reviews the product's safety data." },
                        { step: "05", title: "Final Approval", desc: "Grant of a-no objection certificate (NOC) or regular approval." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "Our specialized support for innovators.",
                    list: [
                        { title: "Scientific Advisory", desc: "Liaison with food scientists to validate your product's safety claims." },
                        { title: "Label Rectification", desc: "Ensuring your packaging claims do not mislead and are legally sound." },
                        { title: "Lab Support", desc: "Coordination with NABL labs for necessary microbial and chemical testing." },
                        { title: "Dossier Management", desc: "Professional preparation of the complex technical dossier required by FPAS." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Maintaining your product's market status.",
                    list: [
                        "Ensuring batch-wise testing of the approved product",
                        "Promptly reporting any adverse reactions to FSSAI",
                        "Updating labels if regulations for additives change",
                        "Maintaining records of the approval letter (NOC)",
                        "Periodic renewal of the primary FSSAI license",
                        "Informing the authority about any change in formulation"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiProductApproval;
