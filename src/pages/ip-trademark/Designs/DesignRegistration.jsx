import { PenTool, Layers, CheckCircle, FileText, Globe, Shield, UserCheck, Star } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * DesignRegistration Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/design-registration
 */

const DesignRegistration = () => {

    const faqs = [
        {
            question: "What is a Design Mark?",
            answer: "A design mark protects the aesthetic aspect of a product's design, including its shape, pattern, configuration, or composition of lines/colors. It covers the visual appearance rather than the function."
        },
        {
            question: "What is the validity of Design Registration?",
            answer: "A registered design is valid for an initial period of 10 years, which can be extended for a further period of 5 years upon renewal."
        },
        {
            question: "What is excluded from Design Registration?",
            answer: "Excluded items include books, calendars, stamps, national flags/emblems, functional designs, industrial plans/layouts, and designs that are not new or original."
        },
        {
            question: "When can a design registration be cancelled?",
            answer: "Registration can be cancelled if the design is not new/original, has been published prior to registration, is a replica of an existing design, or does not comply with the Designs Act, 2000."
        },
        {
            question: "What are the types of Design Applications?",
            answer: "The two main types are: 1) Ordinary Application (for novel designs not claiming priority) and 2) Reciprocity Application (claiming priority from a convention country filing)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Design Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Unique Aesthetic Creations"
                heroDescription="Secure exclusive rights to your product's visual design. Design registration protects the shape, pattern, and configuration of your articles, enhancing commercial value and market credibility."
                whatsIncludedList={[
                    "Design Search & Verification",
                    "Application Filing Support",
                    "Response to Objections",
                    "Certificate Issuance"
                ]}
                stats={[
                    { count: "5000+", label: "Designs Registered", icon: <PenTool size={20} /> },
                    { count: "10 Years", label: "Initial Protection", icon: <Shield size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Aesthetic Protection",
                    title: "Design Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Design registration is a legal process that provides intellectual property rights protection to the aesthetic aspect of a product’s design. It ensures exclusivity within the market for the visual appearance of articles.",
                        "Governed by the Designs Act, 2000, it protects new and original features such as shape, configuration, surface pattern, ornaments, and composition of lines or colors applied to finished articles.",
                        <strong>What is a Design Mark?</strong>,
                        "A design mark includes the shape, pattern, configuration, or ornament of lines/colors applied to a 2D or 3D article. It distinguishes products in the marketplace based on visual appeal. Unlike trademarks or copyrights, it specifically targets the ornamental aspect rather than the brand name or artistic work itself."
                    ],
                    whyIdealTitle: "Types of Applications",
                    whyIdealList: [
                        { title: "Ordinary Application", desc: "For novel designs not yet registered in any other convention country, claiming originality without priority." },
                        { title: "Reciprocity Application", desc: "Claims priority date of a design application previously filed in a convention country (must be filed within 6 months)." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Design Registration",
                    subtitle: "Strategic advantages for businesses and creators.",
                    list: [
                        { title: "Exclusive Rights", desc: "Provides exclusive rights to use the design and prevents others from copying or selling similar products." },
                        { title: "Commercial Value", desc: "Increases product value, boosting sales and attracting investors through exclusivity." },
                        { title: "Promotes Innovation", desc: "Encourages the creation of original, eye-catching products, fostering healthy competition." },
                        { title: "Enhances Credibility", desc: "Makes products more appealing to investors and offers broader protection in international markets." },
                        { title: "Legal Protection", desc: "Offers robust legal protection against copying, reproduction, or distribution of imitation products." },
                        { title: "Extended Protection", desc: "Offers initial protection of 10 years, extendable by another 5 years, ensuring long-term profitability." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Register?",
                    subtitle: "Eligibility checklist for Design Registration.",
                    list: [
                        { title: "Author of Design", desc: "The creator or author of the original design." },
                        { title: "Proprietor", desc: "The owner or proprietor of the design rights." },
                        { title: "Assignee", desc: "An exclusive assignee of the proprietor." },
                        { title: "Legal Representative", desc: "Agent or legal representative of an NRI proprietor." },
                        { title: "Entities", desc: "Firms, partnerships, or body corporates can also apply." },
                        { title: "Originality Requirement", desc: "Design must be new, original, and not previously published." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documents needed to file your Design Registration application.",
                    list: [
                        "Form 1 (Application Form)",
                        "Representations (Drawings/Photos of Design)",
                        "Power of Authority (Form-21)",
                        "Statement of Novelty",
                        "Priority Documents (if applicable)",
                        "MSME Certificate (for fee concession)",
                        "Affidavit by Applicant",
                        "Assignment Deed (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "A systematic approach to protecting your design.",
                    steps: [
                        { step: "01", title: "Design Search", desc: "Conducting a search to ensure novelty and avoid conflicts." },
                        { step: "02", title: "Filing Application", desc: "Submitting application with representations and required forms." },
                        { step: "03", title: "Examination", desc: "Controller of Designs examines the application for compliance." },
                        { step: "04", title: "Report Consideration", desc: "Addressing any objections raised in the examination report." },
                        { step: "05", title: "Publication", desc: "Registered design is published in the Patent Office Journal." },
                        { step: "06", title: "Certificate Issue", desc: "Issuance of Design Registration Certificate if no opposition." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert guidance for securing your design rights.",
                    list: [
                        { title: "5000+ Designs Registered", desc: "Proven track record of helping creators secure exclusive rights." },
                        { title: "Expert Consultation", desc: "24/7 expert advice throughout the registration process." },
                        { title: "Documentation Support", desc: "Assistance in preparing accurate and complete documentation." },
                        { title: "Liaison with Authorities", desc: "Smooth communication with government authorities for hassle-free submission." },
                        { title: "Customized Solutions", desc: "Streamlined processes tailored to your specific business needs." },
                        { title: "Cost-Effective", desc: "Transparent packages including consultation and fee estimation." },
                        { title: "Legal Support", desc: "Representation to defend your application against opposition." },
                        { title: "PAN India Service", desc: "Assisting clients across 100+ cities with design searches and filing." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Design Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default DesignRegistration;
