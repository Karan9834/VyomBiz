import React from "react";
import {
    Flame,
    Briefcase,
    Building2,
    ShieldCheck,
    AlertCircle,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FireEquipmentPlantSetup = () => {
    const faqs = [
        {
            question: "Is BIS Certification mandatory for fire equipment?",
            answer: "Yes, almost all fire-fighting equipment, including extinguishers, hoses, and alarms, must carry the ISI mark (BIS certification) to be legally sold in the Indian market."
        },
        {
            question: "What licenses are required for setup?",
            answer: "Key licenses include Factory License, Pollution NOC, PESO Authorization (for specific high-pressure cylinders), Fire Department NOC, and Business Incorporation."
        },
        {
            question: "What are the common products manufactured?",
            answer: "The portfolio includes Fire Extinguishers (various types), Fire Hydrant Systems, Smoke Detectors, Fire Sprinklers, and Specialized Fire-Retardant Clothing."
        },
        {
            question: "Can I export fire equipment from India?",
            answer: "Yes, India is a growing exporter of fire safety goods. You will need to comply with international standards like CE or UL depending on your target export market."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Fire Equipment"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Manufacturing for Safety & Compliance"
                heroDescription="Lead the safety revolution with your own fire equipment manufacturing unit. We guide you through the rigorous BIS certification process and industrial licensing for a compliant startup."
                whatsIncludedList={[
                    "BIS/ISI Certification Advisory",
                    "PESO License Support (for cylinders)",
                    "Factory Act & Safety Audit Compliance",
                    "SPCB Pollution NOC Services",
                    "Plant Machinery & Lab Setup",
                    "Standard Operating Procedure (SOP) Design"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Flame size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Safety Industry",
                    title: "Fire Equipment Plant –",
                    highlightTitle: "Manufacturing Excellence",
                    description: [
                        "The fire equipment industry is a critical sector driven by mandatory safety regulations across residential, commercial, and industrial spaces. With urbanization and industrial growth, the demand for certified, high-quality fire safety products is at an all-time high.",
                        "Setting up a manufacturing unit requires specialized testing laboratories, precision machining, and absolute adherence to Bureau of Indian Standards (BIS) norms to ensure equipment functionality during emergencies.",
                        <strong>Industry Core:</strong>,
                        "In this sector, product reliability is non-negotiable. Every unit produced is a life-saving device, making quality control the most important operational pillar."
                    ],
                    whyIdealTitle: "Key Business Advantages",
                    whyIdealList: [
                        { title: "High Demand", desc: "Mandatory fire safety norms across all infrastructure sectors." },
                        { title: "Government Priority", desc: "Strong focus on safety standards in Smart Cities and new SEZs." },
                        { title: "Brand Loyalty", desc: "Certified, reliable brands command high trust and stable margins." },
                        { title: "Diverse Portfolio", desc: "Opportunity to produce varied items from extinguishers to smart sensors." }
                    ]
                }}
                advantages={{
                    title: "Strategic Benefits",
                    subtitle: "Why invest in fire safety manufacturing?",
                    list: [
                        { title: "Compliance Driven", desc: "Market is fueled by mandatory statutory requirements." },
                        { title: "Public Trust", desc: "Building a brand associated with safety and life protection." },
                        { title: "Export Potential", desc: "High demand in the Middle East, Africa, and Southeast Asia." },
                        { title: "Modern Technology", desc: "Transitioning to AI-integrated fire detection systems." },
                        { title: "Multiple Verticals", desc: "Servicing retail, industrial, and government sectors." },
                        { title: "Consistent ROI", desc: "Stable recurring business through refills and system maintenance." }
                    ]
                }}
                eligibility={{
                    title: "Mandatory Authorizations",
                    subtitle: "Navigating the safety regulatory framework.",
                    list: [
                        { title: "BIS/ISI Mark", desc: "Crucial certification for product legality and trust." },
                        { title: "PESO License", desc: "Required for high-pressure fire extinguisher cylinder manufacturing." },
                        { title: "Factory License", desc: "Registration for workspace and machinery operations." },
                        { title: "Pollution NOC", desc: "Consent from SPCB for manufacturing activities." },
                        { title: "Fire Safety Audit", desc: "Internal safety clearances for the production facility." },
                        { title: "Trademark", desc: "Protecting your safety brand in a competitive market." }
                    ]
                }}
                documents={{
                    title: "Essential Documentation",
                    description: "Required paperwork for industrial safety plant setup.",
                    list: [
                        "Detailed Project Report (DPR) with Laboratory setup",
                        "Plant Layout and Infrastructure Blueprint",
                        "Technical Specifications of Raw Materials (Steel, Chemicals)",
                        "Pollution Monitoring and Control Plan",
                        "Business Registration Certificates",
                        "Land Possession/Lease Documents",
                        "Testing Equipment List and Calibration Certificates",
                        "Safety and Hazard Management Protocol"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1516591101565-5903b44e69b0?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Setup Roadmap",
                    subtitle: "Our systematic approach to safety manufacturing.",
                    steps: [
                        { step: "01", title: "Product Selection", desc: "Deciding the range of fire safety equipment to manufacture." },
                        { step: "02", title: "Compliance Audit", desc: "Pre-assessing BIS norms and lab requirements for the site." },
                        { step: "03", title: "Licensing", desc: "Obtaining Factory, Pollution, and PESO authorizations." },
                        { step: "04", title: "Installation", desc: "Setting up production lines and the mandatory testing lab." },
                        { step: "05", title: "BIS Certification", desc: "Final inspection by authorities for the ISI mark grant." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Experts in industrial safety consulting.",
                    list: [
                        { title: "BIS Specialists", desc: "Extensive experience in securing ISI marks for diverse products." },
                        { title: "PESO Coordination", desc: "Liaisoning for high-pressure equipment manufacturing licenses." },
                        { title: "Complete Industrial Setup", desc: "From lab design to machinery selection and procurement." },
                        { title: "Regulatory Mastery", desc: "Navigating SPCB and Factory Act requirements efficiently." },
                        { title: "Post-Setup Support", desc: "Assisting in annual returns, audits, and certification renewals." },
                        { title: "Quality Consultants", desc: "Helping you build a manufacturing unit that meets global standards." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Fire Equipment Plant Setup"
                faqs={faqs}
            />
        </div>
    );
};

export default FireEquipmentPlantSetup;
