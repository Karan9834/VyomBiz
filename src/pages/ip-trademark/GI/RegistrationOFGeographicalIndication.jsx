import { MapPin, Award, Globe, ShieldCheck, FileText, CheckCircle, Scale, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * RegistrationOFGeographicalIndication Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/registration-of-geographical-indication-gi
 */

const RegistrationOFGeographicalIndication = () => {

    const faqs = [
        {
            question: "Who is a producer in relation to a geographical indication?",
            answer: "A producer is any person who deals with the production, processing, trading, or dealing of agricultural goods, natural goods, handicrafts, or industrial goods."
        },
        {
            question: "What is the validity of a GI registration?",
            answer: "A registered GI is valid for an initial period of 10 years and can be renewed indefinitely for successive periods of 10 years upon payment of renewal fees."
        },
        {
            question: "Can an individual apply for GI registration?",
            answer: "Typically, an association of persons, producers, or an organization representing the interests of the producers must apply. It is not for a single individual unless they represent the collective interest."
        },
        {
            question: "What are some examples of registered GIs in India?",
            answer: "Famous Indian GIs include Darjeeling Tea, Basmati Rice, Kanjivaram Sarees, Kolhapuri Chappals, Alphonso Mango, and Agra Petha."
        },
        {
            question: "What happens if a GI is not renewed?",
            answer: "If the GI registration is not renewed, it will be removed from the register. However, it can be restored within a grace period of six months."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Geographical Indication"
                heroTitleSuffix="Registration"
                heroSubtitle="Protect Your Region's Unique Heritage"
                heroDescription="Secure the identity of products linked to your geographical origin. GI registration protects unique qualities, boosts exports, and preserves traditional knowledge."
                whatsIncludedList={[
                    "Comprehensive Eligibility Check",
                    "Application Filing & Documentation",
                    "Liaison with GI Registry",
                    "Objection Handling Support"
                ]}
                stats={[
                    { count: "600+", label: "GIs Registered", icon: <MapPin size={20} /> },
                    { count: "10 Years", label: "Validity", icon: <ShieldCheck size={20} /> },
                    { count: "12+", label: "Years Experience", icon: <Award size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Regional Protection",
                    title: "Geographical Indication –",
                    highlightTitle: "An Overview",
                    description: [
                        "A Geographical Indication (GI) is a name or sign used on products that originate from a specific geographical location and possess qualities or a reputation that are due to that origin.",
                        "Governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999, registration ensures exclusive rights for authorized users and prevents unauthorized use.",
                        <strong>Why Register a GI?</strong>,
                        "It ensures the quality and distinctiveness of products like Darjeeling Tea. It strikes a balance between trademark and GI protection, safeguarding against counterfeiting and misleading trade practices."
                    ],
                    whyIdealTitle: "Famous Indian GIs",
                    whyIdealList: [
                        { title: "Darjeeling Tea", desc: "The first GI registered in India (2004), famous worldwide." },
                        { title: "Basmati Rice", desc: "Known for its unique aroma and flavor across the globe." },
                        { title: "Kanjivaram Sarees", desc: "Renowned for their silk and craftsmanship." },
                        { title: "Kolhapuri Chappals", desc: "Traditional handcrafted footwear from Maharashtra." },
                        { title: "Agra Petha", desc: "Famous sweet from Agra with distinct quality." }
                    ]
                }}
                advantages={{
                    title: "Benefits of GI Registration",
                    subtitle: "Empowering local communities and preserving heritage.",
                    list: [
                        { title: "Branding", desc: "Turns a regional product into a global brand, eliminating intermediaries." },
                        { title: "Proof of Quality", desc: "Guarantees premium quality backed by historical origin and government recognition." },
                        { title: "Authenticity", desc: "Safeguards genuine products from potential copycats and imitations." },
                        { title: "Cultural Protection", desc: "Preserves traditional production methods and local culture." },
                        { title: "Boosts Tourism", desc: "Increases global tourism due to the reputation of region-specific products." },
                        { title: "Economic Boost", desc: "Increases demand and income for producers due to premium value." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Apply?",
                    subtitle: "Eligibility criteria for filing a GI application.",
                    list: [
                        { title: "Association of Persons", desc: "Any group or body representing the interest of the producers." },
                        { title: "Producers Organization", desc: "Cooperatives, societies, or authorities established by law." },
                        { title: "Direct Interest", desc: "Must have a direct interest in the production, marketing, or sale." },
                        { title: "Specific Origin", desc: "Product must possess qualities attributable to its geographical origin." },
                        { title: "Not Prohibited", desc: "Must not contain scandalous content or generic terms." },
                        { title: "No Deception", desc: "Must not deceive or confuse consumers in the market." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documentation for GI Registration.",
                    list: [
                        "Application in Prescribed Form",
                        "Statement of Case",
                        "Details of Product & Unique Features",
                        "Evidence of Origin Link (Maps, Historical Records)",
                        "Three Certified Copies of Region Map",
                        "Details of Inspection Structure",
                        "Applicant Information & Affidavit",
                        "Power of Attorney (if filed by agent)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1590059390047-6e42207b9a7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to obtaining your GI Tag.",
                    steps: [
                        { step: "01", title: "Eligibility Check", desc: "Ensure criteria under Section 2(1)(e) of the GI Act are met." },
                        { step: "02", title: "Filing Application", desc: "Submit application with statement of case and affidavit." },
                        { step: "03", title: "Scrutiny", desc: "Registry evaluates for deficiencies; corrections aimed within 1 month." },
                        { step: "04", title: "Show Cause", desc: "Respond to objections (if any) or attend hearing." },
                        { step: "05", title: "Publication", desc: "Accepted application published in GI Journal for public opposition (3 months)." },
                        { step: "06", title: "Registration", desc: "Certificate granted if no opposition is filed or upheld." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expertise in protecting your regional heritage.",
                    list: [
                        { title: "12+ Years Experience", desc: "Strong track record of successful GI registrations." },
                        { title: "Comprehensive Services", desc: "All-in-one solution for GI registration and IP protection." },
                        { title: "Expert Legal Team", desc: "Seasoned professionals ensuring compliance with GI regulations." },
                        { title: "Transparent Pricing", desc: "Clear, budget-friendly pricing with no hidden charges." },
                        { title: "Client-Centric", desc: "Tailored assistance valuing the unique nature of your product." },
                        { title: "Error-Free Documentation", desc: "Meticulous preparation to minimize objections." },
                        { title: "Registry Coordination", desc: "End-to-end liaison with the GI Registry." },
                        { title: "24/7 Assistance", desc: "Round-the-clock support for all your queries." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Clarifications on Geographical Indication Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default RegistrationOFGeographicalIndication;
