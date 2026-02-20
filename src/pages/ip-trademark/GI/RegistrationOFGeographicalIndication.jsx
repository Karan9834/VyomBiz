import { MapPin, Award, Globe, ShieldCheck, FileText, CheckCircle, Scale, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * RegistrationOFGeographicalIndication Page
 */

const RegistrationOFGeographicalIndicationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Regional Protection
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Geographical Indication – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Geographical Indication (GI) is a name or sign used on products that originate from a specific geographical location and possess qualities or a reputation that are due to that origin.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999, registration ensures exclusive rights for authorized users and prevents unauthorized use.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Register a GI?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It ensures the quality and distinctiveness of products and safeguards against misleading trade practices.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80"
                            alt="Geographical Indication Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const RegistrationOFGeographicalIndication = () => {

    const faqs = [
        {
            question: "Who is a producer in relation to a geographical indication?",
            answer: "A producer is any person who deals with production, processing, trading, or dealing of goods."
        },
        {
            question: "What is the validity of a GI registration?",
            answer: "A registered GI is valid for 10 years and can be renewed indefinitely."
        },
        {
            question: "Can an individual apply for GI registration?",
            answer: "An association of persons or producers must apply. It is not for a single individual unless representing collective interest."
        },
        {
            question: "What are some examples of registered GIs in India?",
            answer: "Darjeeling Tea, Basmati Rice, Kanjivaram Sarees, Kolhapuri Chappals, Alphonso Mango."
        },
        {
            question: "What happens if a GI is not renewed?",
            answer: "If not renewed, it will be removed but may be restored within six months."
        }
    ];

    /* ================= STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Regional Empowerment
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of GI Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Empowering local communities while preserving traditional heritage and product authenticity.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&q=80"
                            alt="GI Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">
                    {[
                        { title: "Branding", desc: "Turns a regional product into a global brand." },
                        { title: "Proof of Quality", desc: "Guarantees premium quality backed by origin." },
                        { title: "Authenticity", desc: "Protects from copycats and imitations." },
                        { title: "Cultural Protection", desc: "Preserves traditional methods and culture." },
                        { title: "Boosts Tourism", desc: "Enhances global tourism recognition." },
                        { title: "Economic Boost", desc: "Increases income for producers." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
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

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Geographical Indication"
                heroTitleSuffix="Registration"
                heroSubtitle="Protect Your Region's Unique Heritage"
                heroDescription="Secure the identity of products linked to your geographical origin."
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

            <DetailsLayout
                overview={<RegistrationOFGeographicalIndicationOverview />}
                advantages={advantagesContent}
                eligibility={{
                    title: "Who Can Apply?",
                    subtitle: "Eligibility criteria for filing a GI application.",
                    list: [
                        { title: "Association of Persons", desc: "Group representing interest of producers." },
                        { title: "Producers Organization", desc: "Cooperatives or societies." },
                        { title: "Direct Interest", desc: "Must have production or marketing interest." },
                        { title: "Specific Origin", desc: "Qualities linked to geography." },
                        { title: "Not Prohibited", desc: "Must not contain prohibited content." },
                        { title: "No Deception", desc: "Must not confuse consumers." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documentation for GI Registration.",
                    list: [
                        "Application Form",
                        "Statement of Case",
                        "Product Details",
                        "Evidence of Origin",
                        "Certified Region Map",
                        "Inspection Structure Details",
                        "Applicant Affidavit",
                        "Power of Attorney"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1590059390047-6e42207b9a7c?auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to obtaining your GI Tag.",
                    steps: [
                        { step: "01", title: "Eligibility Check", desc: "Verify criteria." },
                        { step: "02", title: "Application Filing", desc: "Submit required documents." },
                        { step: "03", title: "Scrutiny", desc: "Registry examination." },
                        { step: "04", title: "Objection Handling", desc: "Respond to objections." },
                        { step: "05", title: "Publication", desc: "Published in GI Journal." },
                        { step: "06", title: "Registration", desc: "Certificate granted." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expertise in protecting your regional heritage.",
                    list: [
                        { title: "12+ Years Experience", desc: "Strong track record." },
                        { title: "Comprehensive Services", desc: "All-in-one solution." },
                        { title: "Expert Legal Team", desc: "Ensuring compliance." },
                        { title: "Transparent Pricing", desc: "No hidden charges." },
                        { title: "Client-Centric", desc: "Tailored assistance." },
                        { title: "Error-Free Documentation", desc: "Minimize objections." },
                        { title: "Registry Coordination", desc: "End-to-end liaison." },
                        { title: "24/7 Assistance", desc: "Round-the-clock support." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Clarifications on Geographical Indication Registration"
                faqs={faqs}
            />
        </div>
    );
};

export default RegistrationOFGeographicalIndication;
