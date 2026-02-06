import React from "react";
import {
    FlaskConical,
    Briefcase,
    Building2,
    ShieldCheck,
    Dna,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FermentationIndustry = () => {
    const faqs = [
        {
            question: "What is the Fermentation Industry?",
            answer: "The fermentation industry uses microorganisms like bacteria, yeast, or fungi to convert raw materials into valuable products such as antibiotics, enzymes, bio-fuels, amino acids, and specialized food products."
        },
        {
            question: "What are the common sectors within this industry?",
            answer: "It spans several high-impact sectors, including Pharmaceuticals (antibiotics/vaccines), Food & Beverages (alcohol/vinegar), and Biotechnology (enzymes/bio-chemicals)."
        },
        {
            question: "What are the key environmental challenges?",
            answer: "Manageable but critical challenges include handling organic effluents and maintaining sterile conditions to prevent contamination, requiring specialized treatment plants and cleanroom setups."
        },
        {
            question: "What licenses are mandatory for setting up a fermentation plant?",
            answer: "Necessary licenses include FSSAI (for food items), Drug License (for pharma), Pollution NOC, Factory License, and potentially AYUSH or GMP certifications depending on the end product."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Fermentation"
                heroTitleSuffix="Industry Setup"
                heroSubtitle="Harnessing Biotechnology for Progress"
                heroDescription="Pioneer the future of bio-manufacturing. We provide comprehensive setup and regulatory consulting for fermentation-based units in pharmaceuticals, food, and high-tech biotechnology."
                whatsIncludedList={[
                    "Bioprocess & Plant Design Advisory",
                    "Drug & Food Licensing (FSSAI/Drug License)",
                    "GMP & Quality Certification Support",
                    "Environmental Compliance (Pollution NOC)",
                    "Microbial Sourcing & Strain Strategy",
                    "Project Feasibility Reports"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FlaskConical size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Biotechnology",
                    title: "Fermentation Industry –",
                    highlightTitle: "Technological Overview",
                    description: [
                        "Fermentation is one of the most versatile industrial processes, forming the backbone of the biotechnology and pharmaceutical sectors. It involves precisely controlled biological synthesis to create everything from life-saving medicines to organic food additives.",
                        "Successful industry setup requires high-precision bioreactors (fermenters), specialized cooling systems, and rigorous downstream processing lines to ensure purity and high yield.",
                        <strong>Industry Significance:</strong>,
                        "The fermentation sector is crucial for India's self-reliance in 'Active Pharmaceutical Ingredients' (APIs) and high-value biotechnology products."
                    ],
                    whyIdealTitle: "High-Potential Segments",
                    whyIdealList: [
                        { title: "Pharma Bioprocessing", desc: "Production of antibiotics, insulin, and specialized vaccines." },
                        { title: "Industrial Enzymes", desc: "Biocatalysts for the textile, leather, and food processing industries." },
                        { title: "Organic Chemicals", desc: "Bio-based acids and solvents for sustainable manufacturing." },
                        { title: "Specialized Food", desc: "Production of probiotics, additives, and high-protein supplements." }
                    ]
                }}
                advantages={{
                    title: "Strategic Benefits",
                    subtitle: "Why invest in bio-fermentation?",
                    list: [
                        { title: "High Value Addition", desc: "Transforming low-cost raw materials into high-value bioactive products." },
                        { title: "Sector Resilience", desc: "Critical role in healthcare and essential food industries." },
                        { title: "Govt. Incentives", desc: "Access to 'PLI' schemes and specialized biotech parks." },
                        { title: "Export Competitiveness", desc: "Major global demand for bio-pharmaceuticals from India." },
                        { title: "Sustainable Tech", desc: "Using biological processes instead of harsh chemical synthesis." },
                        { title: "Scalable Operations", desc: "Capability to start from pilot scales to massive industrial vats." }
                    ]
                }}
                eligibility={{
                    title: "Mandatory Authorizations",
                    subtitle: "Adhering to strict medical and industrial norms.",
                    list: [
                        { title: "GMP Certification", desc: "Good Manufacturing Practices mandatory for pharma and food units." },
                        { title: "Pollution NOC", desc: "Special emphasis on organic waste and water management." },
                        { title: "Drug / Food License", desc: "Permission from CDSCO or FSSAI based on the product type." },
                        { title: "Factory Registration", desc: "Ensuring workspace safety for technical and lab staff." },
                        { title: "Safety Approvals", desc: "Fire department NOC and industrial chemical safety certifications." },
                        { title: "R&D Approvals", desc: "Registration with the DSIR for potential tax benefits." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documentation for biotech and pharma plant setup.",
                    list: [
                        "Detailed Bioprocess Flowchart and Project Report",
                        "Fermenter and Equipment Technical Specifications",
                        "Blueprint and Plant Layout (Certified)",
                        "Pollution Monitoring and Control Plan",
                        "Business Incorporation and MOA/AOA",
                        "Land Possession Documents",
                        "GMP / Quality Manual Drafts",
                        "Staff Qualification Certificates (for technical roles)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Setup Roadmap",
                    subtitle: "Our systematic approach to bio-manufacturing.",
                    steps: [
                        { step: "01", title: "Strain Selection", desc: "Finalizing the microbial host and raw material (substrate) strategy." },
                        { step: "02", title: "Design", desc: "Engineering the fermentation hall and downstream processing suites." },
                        { step: "03", title: "Compliance", desc: "Filing for Drug, Food, and Environmental licenses simultaneously." },
                        { step: "04", title: "Installation", desc: "Setting up fermenters, centrifuges, and filtration systems." },
                        { step: "05", title: "Scale-up", desc: "Pilot runs followed by full commercial scale production." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Experts in biotech and regulatory complexity.",
                    list: [
                        { title: "Biotech Specialists", desc: "Deep understanding of bioprocessing and medical manufacturing." },
                        { title: "Liaison with Authorities", desc: "Expertise in CDSCO, FSSAI, and SPCB regulatory processes." },
                        { title: "Project Design Support", desc: "Assisting in building compliant, high-yield plant structures." },
                        { title: "End-to-End Guidance", desc: "Support from lab-scale concept to industrial commissioning." },
                        { title: "Quality Guarantee", desc: "Focusing on standards that ensure you meet GMP benchmarks." },
                        { title: "Global Perspective", desc: "Preparing your unit for both local compliance and international exports." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Fermentation Industry"
                faqs={faqs}
            />
        </div>
    );
};

export default FermentationIndustry;
