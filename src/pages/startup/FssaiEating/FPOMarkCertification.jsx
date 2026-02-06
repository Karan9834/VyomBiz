import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    CheckCircle,
    Apple
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FPOMarkCertification = () => {
    const faqs = [
        {
            question: "What is FPO Mark Certification?",
            answer: "FPO Mark Certification (Fruit Products Order) is a mandatory quality assurance mark for all processed fruit and vegetable products in India. It ensures that products are manufactured in a hygienic and safe environment."
        },
        {
            question: "Is FPO certification mandatory?",
            answer: "Yes, it is mandatory for businesses involved in the manufacturing of processed fruit items like jams, squashes, pickles, fruit juices, and even certain edible oils and honey-based products."
        },
        {
            question: "What is the timeline for obtaining an FPO certificate?",
            answer: "It typically takes around 30 to 45 days to complete the FPO certification process, including document verification, facility inspection, and lab testing of product samples."
        },
        {
            question: "Which authority issues the FPO certification?",
            answer: "It is regulated by FSSAI and was originally introduced by the MoFPI (Ministry of Food Processing Industries), Government of India."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FPO Mark"
                heroTitleSuffix="Certification"
                heroSubtitle="Benchmark of Quality for Processed Food Products"
                heroDescription="Ensure your fruit and vegetable products meet the highest safety standards with FPO Mark Certification. A mandatory requirement for processed foods, this mark builds consumer trust and is your passport to international export markets."
                whatsIncludedList={[
                    "FSSAI License Alignment",
                    "Hygiene & Safety Audit Prep",
                    "FoSCoS Portal Application Filing",
                    "NABL Lab Product Testing",
                    "Labeling & Packaging Audit",
                    "Export Readiness Consultation"
                ]}
                stats={[
                    { count: "45 Days", label: "Certification Time", icon: <CheckCircle size={20} /> },
                    { count: "Mandatory", label: "For Processed Food", icon: <Apple size={20} /> },
                    { count: "Global", label: "Export Ready", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Quality Mark",
                    title: "FPO Product Order –",
                    highlightTitle: "Hygiene Standard",
                    description: [
                        "The FPO (Fruit Products Order) Mark is a certification mark mandatory on all processed fruit products sold in India. Regulated by FSSAI, it guarantees that the product was manufactured in a hygienic and food-safe environment.",
                        "Since its introduction in 1955, the FPO certification has protected consumer interests by ensuring that processed fruits and vegetables meet specific quality benchmarks. It is a symbol of compliance, trust, and fair trade practices.",
                        <strong>Applicable Products:</strong>,
                        "Mandatory for a wide range of products including jams, squashes, pickles, fruit juices, frozen pulps, dehydrated vegetables, honey, and dairy-based beverages."
                    ],
                    whyIdealTitle: "Certification Benefits",
                    whyIdealList: [
                        { title: "Product Quality", desc: "Ensures strict adherence to hygiene standards during production." },
                        { title: "Export Gateway", desc: "Aligns with global food safety norms, facilitating international trade." },
                        { title: "Consumer Brand Loyalty", desc: "A visible FPO mark on packaging boosts customer confidence and loyalty." }
                    ]
                }}
                advantages={{
                    title: "Advantages of FPO Mark",
                    subtitle: "Why processed food units must prioritize FPO certification.",
                    list: [
                        { title: "Legal Safety", desc: "Fulfills FSSAI regulations, helping you avoid heavy penalties." },
                        { title: "Competitive Edge", desc: "Recognized and trusted by consumers over uncertified products." },
                        { title: "Hygienic Manufacturing", desc: "Encourages best industry practices for worker and plant hygiene." },
                        { title: "Seamless Trade", desc: "Facilitates easier listing on e-commerce platforms and retail chains." },
                        { title: "Improved Labelling", desc: "Ensures your product packaging meets official labelling and safety standards." },
                        { title: "Long-Term Growth", desc: "Supports sustainable growth models by following universally accepted norms." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who must obtain the FPO Mark?",
                    list: [
                        { title: "Fruit Processors", desc: "Manufacturers of jams, squashes, ketchups, and fruit juices." },
                        { title: "Vegetable Processors", desc: "Units involved in pickling, canning, or dehydrating vegetables." },
                        { title: "Beverage Makers", desc: "Producers of fruit-based drinks and non-carbonated beverages." },
                        { title: "Honey Manufacturers", desc: "Entities involved in the processing and packaging of honey and related items." },
                        { title: "Canned Food Units", desc: "Facilities producing canned fruit pulps or vegetable purees." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Key papers for FPO mark acquisition.",
                    list: [
                        "Identity and Address Proof of the Applicant",
                        "Valid FSSAI License Certificate",
                        "Proof of Possession of the Manufacturing Site",
                        "Partnership Deed or Certificate of Incorporation",
                        "List of Products to be certified under FPO",
                        "FSMS Plan or Safety Audit reports",
                        "NABL-accredited Lab Analysis for product samples",
                        "NOC from the local municipal authority"
                    ]
                }}
                process={{
                    title: "Certification Journey",
                    subtitle: "Step-by-step path to obtaining the FPO mark.",
                    steps: [
                        { step: "01", title: "Compliance Audit", desc: "Reviewing existing FSSAI license and manufacturing hygiene." },
                        { step: "02", title: "Online Filing", desc: "Submitting the FPO registration forms on the FSSAI portal." },
                        { step: "03", title: "Site Inspection", desc: "Physical on-site audit by food safety officials to check plant layout." },
                        { step: "04", title: "Product Analysis", desc: "Random product samples are taken and tested in NABL labs." },
                        { step: "05", title: "Mark Grant", desc: "Upon successful testing and audit, the FPO mark is officially authorized." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "Our quality assurance expertise.",
                    list: [
                        { title: "Audit Mock-ups", desc: "We conduct mock inspections to prepare your unit for the official audit." },
                        { title: "Lab Support", desc: "Coordination for complex chemical and microbial testing required for FPO." },
                        { title: "Packaging Guide", desc: "Expert guidance on placing the FPO logo and statutory text on labels." },
                        { title: "Post-Grant Support", desc: "Maintaining the quality standards for periodic surveillance audits." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Maintain your FPO certification quality.",
                    list: [
                        "Displaying the FPO mark prominently on approved packaging",
                        "Keeping records of batch-wise product analysis reports",
                        "Maintenance of high hygiene standards in the production area",
                        "Updating the authority about any new variations in products",
                        "Annual renewal of the primary FSSAI license",
                        "Periodic health check-ups for employees in the facility"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FPOMarkCertification;
