import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    TreeDeciduous,
    ShieldCheck,
    Package
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const PaperPackagingIndustry = () => {
    const faqs = [
        {
            question: "Is the Paper Packaging Industry eco-friendly?",
            answer: "Yes, paper-based packaging is biodegradable and highly recyclable, making it the preferred choice for eco-conscious brands moving away from single-use plastics."
        },
        {
            question: "What licenses are mandatory for setting up a paper packaging plant?",
            answer: "Key licenses include Business Registration, Factory License, Pollution NOC (CTE/CTO), and Fire Department NOC. Specific quality certifications like FSC may also be required for better market reach."
        },
        {
            question: "What are the common products in this industry?",
            answer: "Products include corrugated boxes, paper bags, folding cartons, liquid packaging cartons, and sustainable food wraps."
        },
        {
            question: "What is the scope of the paper packaging market in India?",
            answer: "The market is growing rapidly due to the e-commerce boom and strict government bans on plastic packaging, creating massive demand for sustainable paper alternatives."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Paper & Paperboard"
                heroTitleSuffix="Packaging Setup"
                heroSubtitle="Sustainable Packaging for a Greener Future"
                heroDescription="Tap into the booming eco-friendly packaging market. We provide complete setup solutions for paper and paperboard manufacturing units, from machinery sourcing to environmental clearances."
                whatsIncludedList={[
                    "Plant Capacity & Design Analysis",
                    "SPCB Pollution NOC Services",
                    "Regulatory & Factory Licensing",
                    "Machinery & Raw Material Sourcing",
                    "Eco-Certification Advisory",
                    "Customized Project Reporting"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FileText size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Sustainable Industry",
                    title: "Paper Packaging Industry –",
                    highlightTitle: "Business Growth",
                    description: [
                        "The paper and paperboard packaging industry is at the forefront of the global movement towards sustainability. With the e-commerce and retail sectors rapidly growing, the demand for high-quality, recyclable packaging is higher than ever.",
                        "Starting a unit in this industry involves specialized machinery for pulping, molding, and finishing, along with strict adherence to environmental regulations regarding water management and sustainable fiber sourcing.",
                        <strong>Industry Scope:</strong>,
                        "India is witnessing a massive shift towards paper packaging, driven by both consumer preference and strict government bans on single-use plastics."
                    ],
                    whyIdealTitle: "Key Market Drivers",
                    whyIdealList: [
                        { title: "E-Commerce Boom", desc: "Huge demand for corrugated boxes for shipping and logistics." },
                        { title: "Plastic Ban", desc: "Government-led shift towards biodegradable paper alternatives." },
                        { title: "Recyclability", desc: "High consumer preference for eco-friendly and reusable packaging." },
                        { title: "Retail Growth", desc: "Increased demand for premium and luxury paperboard packaging." }
                    ]
                }}
                advantages={{
                    title: "Strategic Benefits",
                    subtitle: "Why invest in paper packaging manufacturing?",
                    list: [
                        { title: "Eco-Friendly Branding", desc: "Align with the global push for environmental sustainability." },
                        { title: "High Scalability", desc: "Can start from small corrugated units to large-scale board mills." },
                        { title: "Govt. Support", desc: "Access to various green industry incentives and MSME schemes." },
                        { title: "Consistent Demand", desc: "Packaging is an essential component across all consumer segments." },
                        { title: "Fiber Flexibility", desc: "Use of recycled fibers or sustainably sourced virgin pulp." },
                        { title: "Market Versatility", desc: "Cater to food, pharmaceuticals, and consumer electronics sectors." }
                    ]
                }}
                eligibility={{
                    title: "Mandatory Approvals",
                    subtitle: "Ensuring legal and environmental compliance.",
                    list: [
                        { title: "Business Incorporation", desc: "Registering as a Pvt Ltd Company or an LLP." },
                        { title: "Pollution Clearance", desc: "CTE/CTO for water and air management standards." },
                        { title: "Factory License", desc: "Certification for workshop and worker safety." },
                        { title: "Fire Safety", desc: "Mandatory NOC from the local Fire Department." },
                        { title: "Quality Standards", desc: "BIS or ISO certifications for packaging durability." },
                        { title: "Labor Registration", desc: "Compliance with health and safety norms for industrial staff." }
                    ]
                }}
                documents={{
                    title: "Essential Paperwork",
                    description: "Documentation required for industrial plant approval.",
                    list: [
                        "Detailed Project Report (DPR)",
                        "Plant Layout and Machinery Details",
                        "Water Source and Effluent Treatment Plan",
                        "Raw Material Sourcing Agreements",
                        "Business Registration Certificates (MOA/AOA)",
                        "Land Possession Documents",
                        "Pollution Control Application Data",
                        "Fire Safety and Safety Management Plan"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Step-by-Step Setup",
                    subtitle: "Guiding you through your packaging venture.",
                    steps: [
                        { step: "01", title: "Market Analysis", desc: "Determining target sectors and product range (Boxes, Bags, etc.)." },
                        { step: "02", title: "Site & Sourcing", desc: "Finalizing location and raw material (waste paper/pulp) supply." },
                        { step: "03", title: "Regulatory Filing", desc: "Applying for Pollution and Factory licenses online." },
                        { step: "04", title: "Installation", desc: "Setting up pulpers, corrugators, and printing machinery." },
                        { step: "05", title: "Certification", desc: "Obtaining quality and eco-label certifications for the market." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your partner in sustainable manufacturing.",
                    list: [
                        { title: "Packaging Specialists", desc: "Deep knowledge of the paper and pulp industry dynamics." },
                        { title: "Compliance Experts", desc: "Fast-tracking your Pollution and Industrial licenses." },
                        { title: "Resource Network", desc: "Connecting you with reliable machinery and raw material suppliers." },
                        { title: "End-to-End Guidance", desc: "Support from the first feasibility study to the final launch." },
                        { title: "MSME Scheme Support", desc: "Helping you leverage specialized government funding for packaging." },
                        { title: "Dedicated Support Team", desc: "Constant assistance for renewals and regulatory audits." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Paper Packaging Industry"
                faqs={faqs}
            />
        </div>
    );
};

export default PaperPackagingIndustry;
