import { Globe, ShieldCheck, Flag, FileText, CheckCircle, Scale, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * InternationalTrademarkRegistration Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/international-trademark-registration
 */

const InternationalTrademarkRegistration = () => {

    const faqs = [
        {
            question: "How do you register trademarks internationally?",
            answer: "The process involves: 1) Conducting a Trademark Search, 2) Filing an International Trademark Application (Madrid Protocol), 3) Examination by WIPO, 4) Examination by National Officers of designated countries, 5) Dealing with any Oppositions, and 6) Grant of International Trademark Registration."
        },
        {
            question: "What are the benefits of registering trademarks internationally?",
            answer: "It offers legal protection against infringement globally, provides opportunities to expand into international markets, establishes a unique brand identity, protects e-commerce operations, and increases overall brand value."
        },
        {
            question: "What is the Madrid Protocol?",
            answer: "The Madrid Protocol is an international treaty administered by WIPO that allows businesses to apply for trademark protection in over 120 member countries with a single application, simplifying the global registration process."
        },
        {
            question: "How long is an international trademark valid?",
            answer: "An international trademark registration is valid for 10 years from the date of registration and can be renewed indefinitely every 10 years upon payment of the required fees."
        },
        {
            question: "Who can file an international trademark application from India?",
            answer: "Indian nationals, businesses domiciled in India, or those with a real and effective industrial or commercial establishment in India can apply if they already have a national trademark application or registration with the Indian Trademark Office."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="International Trademark"
                heroTitleSuffix="Registration"
                heroSubtitle="Secure Your Brand Globally"
                heroDescription="Expand your business horizons and protect your brand identity across 120+ countries with a single application under the Madrid Protocol. Simplify global trademark protection with our expert assistance."
                whatsIncludedList={[
                    "Madrid Protocol Application Filing",
                    "Global Trademark Search",
                    "WIPO Liaison & Support",
                    "Response to International Objections"
                ]}
                stats={[
                    { count: "120+", label: "Countries Covered", icon: <Globe size={20} /> },
                    { count: "10 Years", label: "Validity", icon: <Clock size={20} /> },
                    { count: "500+", label: "IP Experts", icon: <Users size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Protection",
                    title: "International Trademark Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "International trademark registration under the Madrid Agreement is a streamlined process that simplifies the registration of trademarks across multiple jurisdictions. It provides legal protection for your brand and enhances brand value globally.",
                        "It grants exclusive rights to use the registered mark within member countries, preventing others from exploiting your brand and establishing trust with international customers.",
                        <strong>The Madrid Protocol</strong>,
                        "Administered by WIPO, the Madrid Protocol allows businesses to apply for trademark protection in more than 120 countries with a single application. Key features include centralized management, one application for all member countries, and coverage in major markets like the US, EU, China, and India."
                    ],
                    whyIdealTitle: "Types of Applications",
                    whyIdealList: [
                        { title: "Convention Application", desc: "Claims priority from a prior application filed in a convention country." },
                        { title: "Single-Class Application", desc: "Filed for goods or services falling under a single class (Form TM-1)." },
                        { title: "Multi-Class Application", desc: "Filed for goods or services falling under multiple classes (Form TM-51)." },
                        { title: "Priority Application", desc: "Claims priority from more than one basic application or part of a basic application." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Global Registration",
                    subtitle: "Expand your business with confidence and legal security.",
                    list: [
                        { title: "Legal Protection", desc: "Offers protection against infringement by third parties globally, lowering the risk of disputes." },
                        { title: "Business Opportunity", desc: "Opens opportunities to earn and expand in international markets, including licensing agreements." },
                        { title: "Unique Identity", desc: "Establishes and protects your brand’s uniqueness globally, securing exclusive rights." },
                        { title: "E-commerce Growth", desc: "Crucial for online operators, allowing cross-border protection for international customers." },
                        { title: "Export/Import Protection", desc: "Protects products from misuse or counterfeits during import or export activities." },
                        { title: "Increased Brand Value", desc: "Enhances overall brand value, making it attractive for investors and potential revenue streams." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Who can apply for International Trademark Registration?",
                    list: [
                        { title: "Indian Applicants", desc: "Must be Indian nationals or businesses domiciled in India with a real establishment." },
                        { title: "Basic Mark Requirement", desc: "Must hold a national trademark application or registration in India (Basic Mark)." },
                        { title: "US Applications", desc: "Must file a national application or hold a registered trademark with USER." },
                        { title: "EU Applications", desc: "Must be an EU resident or business with an EU trademark." },
                        { title: "Madrid Members", desc: "Eligibility extends to trademark owners in any Madrid Protocol member country." },
                        { title: "Global Businesses", desc: "Ideal for exporters, manufacturers, and software developers seeking global reach." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents for filing your International Trademark application.",
                    list: [
                        "Identity & Address Proof of Applicant",
                        "Certificate of Incorporation / Business Registration",
                        "Copy of National Trademark Registration (Basic Mark)",
                        "List of Goods and Services (Vienna Classification)",
                        "List of Designated Member Countries",
                        "International Application Form MM2",
                        "Power of Attorney (if applicable)",
                        "MSME Certificate (for fee benefits)",
                        "Priority Documents (if claiming priority)",
                        "Digital Signature Certificate (DSC)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to securing your international trademark.",
                    steps: [
                        { step: "01", title: "Trademark Search", desc: "Conduct a comprehensive search to ensure uniqueness in target countries." },
                        { step: "02", title: "File Application", desc: "Submit the international application through the office of origin (India)." },
                        { step: "03", title: "WIPO Examination", desc: "WIPO reviews for formalities and publishes in the International Gazette." },
                        { step: "04", title: "National Exam", desc: "Designated countries examine the application under their local laws." },
                        { step: "05", title: "Opposition Period", desc: "Third parties in designated countries may oppose the mark." },
                        { step: "06", title: "Grant of Registration", desc: "If no refusals, the trademark is registered in designated countries." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for global intellectual property management.",
                    list: [
                        { title: "500+ IP Experts", desc: "Expert advice and consultation from dedicated trademark attorneys." },
                        { title: "Timely Completion", desc: "Efficient processing from search to filing confirmation." },
                        { title: "Multilingual Support", desc: "Documentation support in 10+ languages for global requirements." },
                        { title: "24/7 Support", desc: "Round-the-clock assistance at every stage of your application." },
                        { title: "Customized Solutions", desc: "Streamlined processes tailored to your specific business needs." },
                        { title: "Cost-Effective", desc: "Transparent pricing with expert consultation included." },
                        { title: "Legal Representation", desc: "Support in defending against objections or oppositions." },
                        { title: "Post-Registration", desc: "Ongoing support for renewals and enforcement." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about International Trademark Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default InternationalTrademarkRegistration;
